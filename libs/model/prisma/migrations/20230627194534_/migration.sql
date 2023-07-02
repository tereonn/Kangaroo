/*
  Warnings:

  - You are about to drop the column `desc` on the `Season` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the column `events_blocked` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the column `pass` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParticipationRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Race` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RaceGrid` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Season` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Season` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Stage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Stage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Car` DROP FOREIGN KEY `Car_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ParticipationRequest` DROP FOREIGN KEY `ParticipationRequest_carId_fkey`;

-- DropForeignKey
ALTER TABLE `ParticipationRequest` DROP FOREIGN KEY `ParticipationRequest_stageId_fkey`;

-- DropForeignKey
ALTER TABLE `ParticipationRequest` DROP FOREIGN KEY `ParticipationRequest_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Race` DROP FOREIGN KEY `Race_stageId_fkey`;

-- DropForeignKey
ALTER TABLE `RaceGrid` DROP FOREIGN KEY `RaceGrid_carId_fkey`;

-- DropForeignKey
ALTER TABLE `RaceGrid` DROP FOREIGN KEY `RaceGrid_participationRequestId_fkey`;

-- DropForeignKey
ALTER TABLE `RaceGrid` DROP FOREIGN KEY `RaceGrid_raceId_fkey`;

-- DropIndex
DROP INDEX `User_login_key` ON `User`;

-- AlterTable
ALTER TABLE `Season` DROP COLUMN `desc`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Stage` DROP COLUMN `desc`,
    DROP COLUMN `events_blocked`,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `pass`,
    DROP COLUMN `role`,
    ADD COLUMN `bio` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('APPROVED', 'DECLINED', 'PENDING') NOT NULL DEFAULT 'PENDING';

-- DropTable
DROP TABLE `Car`;

-- DropTable
DROP TABLE `ParticipationRequest`;

-- DropTable
DROP TABLE `Race`;

-- DropTable
DROP TABLE `RaceGrid`;
