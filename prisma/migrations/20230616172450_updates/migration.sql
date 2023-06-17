/*
  Warnings:

  - The primary key for the `localizacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `localizacao` table. All the data in the column will be lost.
  - You are about to drop the column `local` on the `localizacao` table. All the data in the column will be lost.
  - Added the required column `id_localizacao` to the `Localizacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prateleira` to the `Localizacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sala` to the `Localizacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `localizacao` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `local`,
    ADD COLUMN `id_localizacao` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `prateleira` VARCHAR(300) NOT NULL,
    ADD COLUMN `sala` VARCHAR(300) NOT NULL,
    ADD PRIMARY KEY (`id_localizacao`);

-- CreateTable
CREATE TABLE `ArquivoAnexado` (
    `id_arquivo` INTEGER NOT NULL AUTO_INCREMENT,
    `cod_patrimonio` INTEGER NOT NULL,
    `caminho` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id_arquivo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manutencao` (
    `cod_manutencao` INTEGER NOT NULL AUTO_INCREMENT,
    `cod_patrimonio` INTEGER NOT NULL,
    `data_manutencao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`cod_manutencao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patrimonio` (
    `cod_patrimonio` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_patrimonio` VARCHAR(300) NOT NULL,
    `nome_patrimonio` VARCHAR(300) NOT NULL,
    `qtde` INTEGER NOT NULL,
    `localizacao` INTEGER NOT NULL,
    `ativo` BOOLEAN NOT NULL,

    PRIMARY KEY (`cod_patrimonio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoPatrimonio` (
    `nome` VARCHAR(300) NOT NULL,
    `categoria` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
