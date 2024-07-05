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

INSERT INTO "Fornecedor" ("nome_fornecedor", "rua", "bairro", "cidade", "estado", "cep", "email", "telefone_celular") VALUES
('Fornecedor A', 'Rua Um', 'Bairro A', 'Cidade A', 'Estado A', 12345678, 'contato@fornecedorA.com', 11912345678),
('Fornecedor B', 'Rua Dois', 'Bairro B', 'Cidade B', 'Estado B', 23456789, 'contato@fornecedorB.com', 21912345678),
('Fornecedor C', 'Rua Três', 'Bairro C', 'Cidade C', 'Estado C', 34567890, 'contato@fornecedorC.com', 31912345678),
('Fornecedor D', 'Rua Quatro', 'Bairro D', 'Cidade D', 'Estado D', 45678901, 'contato@fornecedorD.com', 41912345678),
('Fornecedor E', 'Rua Cinco', 'Bairro E', 'Cidade E', 'Estado E', 56789012, 'contato@fornecedorE.com', 51912345678);


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
