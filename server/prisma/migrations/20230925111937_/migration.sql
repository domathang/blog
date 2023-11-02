/*
  Warnings:

  - Added the required column `kind` to the `Clothes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Clothes` ADD COLUMN `kind` VARCHAR(191) NOT NULL;
