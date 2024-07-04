-- CreateTable
CREATE TABLE "Fornecedor" (
    "id_fornecedor" SERIAL PRIMARY KEY,
    "nome_fornecedor" VARCHAR(191) NOT NULL,
    "rua" VARCHAR(191) NOT NULL,
    "bairro" VARCHAR(191) NOT NULL,
    "cidade" VARCHAR(191) NOT NULL,
    "estado" VARCHAR(191) NOT NULL,
    "cep" INTEGER NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "telefone_celular" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" SERIAL PRIMARY KEY,
    "nome_produto" VARCHAR(191) NOT NULL,
    "descricao" VARCHAR(191),
    "qtd_estoque" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "id_fornecedor" INTEGER NOT NULL,
    FOREIGN KEY ("id_fornecedor") REFERENCES "Fornecedor" ("id_fornecedor") ON DELETE RESTRICT ON UPDATE CASCADE
);
