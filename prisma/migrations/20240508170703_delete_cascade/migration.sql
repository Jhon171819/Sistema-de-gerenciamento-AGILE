-- DropForeignKey
ALTER TABLE `ItemCompra` DROP FOREIGN KEY `ItemCompra_id_compra_fkey`;

-- DropForeignKey
ALTER TABLE `ItemVenda` DROP FOREIGN KEY `ItemVenda_id_venda_fkey`;

-- AddForeignKey
ALTER TABLE `ItemCompra` ADD CONSTRAINT `ItemCompra_id_compra_fkey` FOREIGN KEY (`id_compra`) REFERENCES `Compra`(`id_compra`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemVenda` ADD CONSTRAINT `ItemVenda_id_venda_fkey` FOREIGN KEY (`id_venda`) REFERENCES `Venda`(`id_venda`) ON DELETE CASCADE ON UPDATE CASCADE;
