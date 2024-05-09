import { getCep } from '../../../utils/utils';
import GenericForm from '../../components/form'

export default function FormularioFornecedores() {
    const ignoreList = ["rua", "bairro", "cidade", "estado"]
    const fields = [
        {
            label: "Nome do cliente",
            type: "text",
            control: "nome_cliente",
        },
        {
            label: "Rua do cliente",
            type: "text",
            control: "rua",
            disabled: true,
        },
        {
            label: "Bairro do cliente",
            type: "text",
            control: "bairro",
            disabled: true,
        },
        {
            label: "Cidade do cliente",
            type: "text",
            control: "cidade",
            disabled: true,
        },
        {
            label: "Estado do cliente",
            type: "text",
            control: "estado",
            disabled: true,
        },
        {
            label: "CEP do cliente",
            type: "text",
            control: "cep",
            mask: "99999-999"
        },
        {
            label: "E-mail do cliente",
            type: "email",
            control: "email",
        },
        {
            label: "Telefone celular do cliente",
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
        entity.id_cliente = parseInt(entity.id_cliente);
        if (!entity.id_cliente) {
            alert("sem selecione um cliente");
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
                <h1>Cadastro de Clientes</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"cliente"}
                idControl="id_cliente"
                formatSaveEntity={formatToSave}
                ignoreList={ignoreList}
            />
        </>
    );
}
