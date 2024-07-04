-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "cep" TYPE BIGINT USING "cep"::BIGINT;

-- AlterTable
ALTER TABLE "Fornecedor" ALTER COLUMN "cep" TYPE BIGINT USING "cep"::BIGINT;
