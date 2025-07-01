/*
  Warnings:

  - You are about to drop the `ServiceRequestLocation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `latitude` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ServiceRequestLocation` DROP FOREIGN KEY `ServiceRequestLocation_serviceRequestId_fkey`;

-- AlterTable
ALTER TABLE `ServiceRequest` ADD COLUMN `latitude` DOUBLE NOT NULL,
    ADD COLUMN `longitude` DOUBLE NOT NULL;

-- DropTable
DROP TABLE `ServiceRequestLocation`;
