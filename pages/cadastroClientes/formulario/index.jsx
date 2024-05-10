import { getCep } from '../../../utils/utils';
import GenericForm from '../../components/form'

export default function FormularioFornecedores() {
    const ignoreList = ["rua", "bairro", "cidade", "estado"]
    const fields = [
        {
            label: "Nome do cliente",
            type: "text",
            control: "nome",
        },
        {
            label: "Rua do cliente",
            type: "text",
            control: "rua",
        },
        {
            label: "Bairro do cliente",
            type: "text",
            control: "bairro",
        },
        {
            label: "Cidade do cliente",
            type: "text",
            control: "cidade",
        },
        {
            label: "Estado do cliente",
            type: "text",
            control: "estado",
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
        let entityToSave = entity
        entityToSave.id_cliente = parseInt(entityToSave.id_cliente);
        return entityToSave;
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
                <h1 style={{color:"#FBFBFE"}}>Cadastro de clientes</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"cliente"}
                idControl="id_cliente"
                formatSaveEntity={formatToSave}
                ignoreList={ignoreList}
                customAutofill
            />
        </>
    );
}
