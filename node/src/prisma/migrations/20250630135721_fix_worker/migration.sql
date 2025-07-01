-- DropForeignKey
ALTER TABLE `LobbyParticipant` DROP FOREIGN KEY `LobbyParticipant_workerId_fkey`;

-- AddForeignKey
ALTER TABLE `LobbyParticipant` ADD CONSTRAINT `LobbyParticipant_workerId_fkey` FOREIGN KEY (`workerId`) REFERENCES `Worker`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
