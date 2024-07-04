-- AlterTable
ALTER TABLE "Compra" ALTER COLUMN "data_compra" TYPE VARCHAR(191) USING "data_compra"::VARCHAR(191);

-- AlterTable
ALTER TABLE "Venda" ALTER COLUMN "data_venda" TYPE VARCHAR(191) USING "data_venda"::VARCHAR(191);
