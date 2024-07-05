/*
  Warnings:

  - Changed the type of `cep` on the `Cliente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cep` on the `Fornecedor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "cep",
ADD COLUMN     "cep" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Fornecedor" DROP COLUMN "cep",
ADD COLUMN     "cep" BIGINT NOT NULL;
