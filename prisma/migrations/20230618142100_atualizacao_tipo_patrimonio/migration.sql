/*
  Warnings:

  - The primary key for the `tipopatrimonio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id_tipo` to the `TipoPatrimonio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tipopatrimonio` DROP PRIMARY KEY,
    ADD COLUMN `id_tipo` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_tipo`);
