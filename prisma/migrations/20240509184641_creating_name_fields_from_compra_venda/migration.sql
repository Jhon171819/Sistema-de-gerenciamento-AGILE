-- AlterTable
ALTER TABLE "Compra" ADD COLUMN "nome_compra" VARCHAR(191);

-- Atualizar as linhas existentes com um valor padrão antes de definir a coluna como NOT NULL
UPDATE "Compra" SET "nome_compra" = 'default_nome_compra' WHERE "nome_compra" IS NULL;

-- Alterar a coluna para NOT NULL
ALTER TABLE "Compra" ALTER COLUMN "nome_compra" SET NOT NULL;

-- AlterTable
ALTER TABLE "Venda" ADD COLUMN "nome_venda" VARCHAR(191);

-- Atualizar as linhas existentes com um valor padrão antes de definir a coluna como NOT NULL
UPDATE "Venda" SET "nome_venda" = 'default_nome_venda' WHERE "nome_venda" IS NULL;

-- Alterar a coluna para NOT NULL
ALTER TABLE "Venda" ALTER COLUMN "nome_venda" SET NOT NULL;
