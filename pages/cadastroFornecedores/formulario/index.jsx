import { getCep } from '../../../utils/utils';
import GenericForm from '../../components/form'

export default function FormularioFornecedores() {
    const ignoreList = ["rua", "bairro", "cidade", "estado"]
    const fields = [
        {
            label: "Nome do fornecedor",
            type: "text",
            control: "nome_fornecedor",
        },
        {
            label: "Rua do fornecedor",
            type: "text",
            control: "rua",
            disabled: true,
        },
        {
            label: "Bairro do fornecedor",
            type: "text",
            control: "bairro",
            disabled: true,
        },
        {
            label: "Cidade do fornecedor",
            type: "text",
            control: "cidade",
            disabled: true,
        },
        {
            label: "Estado do fornecedor",
            type: "text",
            control: "estado",
            disabled: true,
        },
        {
            label: "CEP do fornecedor",
            type: "text",
            control: "cep",
            mask: "99999-999"
        },
        {
            label: "E-mail do fornecedor",
            type: "email",
            control: "email",
        },
        {
            label: "Telefone celular do fornecedor",
            type: "tel",
            size: 6,
            control: "telefone_celular",
        },
    ];
    function formatToSave(entity) {
        console.log(entity)
        entity.cep = parseInt(entity.cep);
        getCep(entity.cep).then((response) => {
            entity.bairro = response.bairro
            entity.cidade = response.localidade
            entity.rua = response.logradouro
            entity.estado = response.uf
        })
        entity.telefone_celular = parseInt(entity.telefone_celular);
        entity.id_fornecedor = parseInt(entity.id_fornecedor);
        if (!entity.id_fornecedor) {
            alert("sem selecione um fornecedor");
            return null;
        } else return entity;
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {" "}
                <h1>Cadastro de fornecedor</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"fornecedores"}
                idControl="id_fornecedor"
                formatSaveEntity={formatToSave}
                ignoreList={ignoreList}
            />
        </>
    );
}
