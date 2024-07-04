-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" SERIAL PRIMARY KEY,
    "nome" VARCHAR(191) NOT NULL,
    "cep" INTEGER NOT NULL,
    "rua" VARCHAR(191) NOT NULL,
    "bairro" VARCHAR(191) NOT NULL,
    "cidade" VARCHAR(191) NOT NULL,
    "estado" VARCHAR(191) NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "telefone_celular" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "Compra" (
    "id_compra" SERIAL PRIMARY KEY,
    "id_fornecedor" INTEGER NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,
    FOREIGN KEY ("id_fornecedor") REFERENCES "Fornecedor"("id_fornecedor") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemCompra" (
    "id_item_compra" SERIAL PRIMARY KEY,
    "id_produto" INTEGER NOT NULL,
    "id_compra" INTEGER NOT NULL,
    "valor_unitario" DOUBLE PRECISION NOT NULL,
    "quantidade" INTEGER NOT NULL,
    FOREIGN KEY ("id_produto") REFERENCES "Produto"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY ("id_compra") REFERENCES "Compra"("id_compra") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Venda" (
    "id_venda" SERIAL PRIMARY KEY,
    "id_cliente" INTEGER NOT NULL,
    "data_venda" TIMESTAMP(3) NOT NULL,
    FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemVenda" (
    "id_item_venda" SERIAL PRIMARY KEY,
    "id_produto" INTEGER NOT NULL,
    "id_venda" INTEGER NOT NULL,
    "valor_unitario" DOUBLE PRECISION NOT NULL,
    "quantidade" INTEGER NOT NULL,
    FOREIGN KEY ("id_produto") REFERENCES "Produto"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY ("id_venda") REFERENCES "Venda"("id_venda") ON DELETE RESTRICT ON UPDATE CASCADE
);
