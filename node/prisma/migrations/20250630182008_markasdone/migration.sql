-- AlterTable
ALTER TABLE `LobbyParticipant` ADD COLUMN `clientCompleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `workerCompleted` BOOLEAN NOT NULL DEFAULT false;
