-- AlterTable
ALTER TABLE "Cliente"
    ALTER COLUMN "cep" TYPE VARCHAR(191) USING "cep"::VARCHAR(191),
    ALTER COLUMN "telefone_celular" TYPE VARCHAR(191) USING "telefone_celular"::VARCHAR(191);

-- AlterTable
ALTER TABLE "Fornecedor"
    ALTER COLUMN "cep" TYPE VARCHAR(191) USING "cep"::VARCHAR(191),
    ALTER COLUMN "telefone_celular" TYPE VARCHAR(191) USING "telefone_celular"::VARCHAR(191);
