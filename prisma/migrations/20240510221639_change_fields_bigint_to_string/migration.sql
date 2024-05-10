-- AlterTable
ALTER TABLE `Cliente` MODIFY `cep` VARCHAR(191) NOT NULL,
    MODIFY `telefone_celular` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Fornecedor` MODIFY `cep` VARCHAR(191) NOT NULL,
    MODIFY `telefone_celular` VARCHAR(191) NOT NULL;
