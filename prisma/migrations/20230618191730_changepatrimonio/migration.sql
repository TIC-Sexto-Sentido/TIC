/*
  Warnings:

  - You are about to alter the column `tipo_patrimonio` on the `patrimonio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(300)` to `Int`.

*/
-- AlterTable
ALTER TABLE `patrimonio` MODIFY `tipo_patrimonio` INTEGER NOT NULL;
