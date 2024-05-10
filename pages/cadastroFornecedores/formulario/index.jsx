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
        },
        {
            label: "Bairro do fornecedor",
            type: "text",
            control: "bairro",
        },
        {
            label: "Cidade do fornecedor",
            type: "text",
            control: "cidade",
        },
        {
            label: "Estado do fornecedor",
            type: "text",
            control: "estado",
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
        let entityToSave = entity
        entityToSave.cep = parseInt(entityToSave.cep)
        entityToSave.telefone_celular = parseInt(entityToSave.telefone_celular);
        entityToSave.id_fornecedor = parseInt(entityToSave.id_fornecedor);
        return entityToSave;
        
    }

    return (
        <div >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {" "}
                <h1 style={{color:"#FBFBFE"}}>Cadastro de fornecedor</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"fornecedores"}
                idControl="id_fornecedor"
                formatSaveEntity={formatToSave}
                ignoreList={ignoreList}
                customAutofill
            />
        </div>
    );
}
