/*
  Warnings:

  - Added the required column `nome_compra` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_venda` to the `Venda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Compra` ADD COLUMN `nome_compra` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Venda` ADD COLUMN `nome_venda` VARCHAR(191) NOT NULL;
