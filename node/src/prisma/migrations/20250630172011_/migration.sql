-- AlterTable
ALTER TABLE `LobbyParticipant` MODIFY `status` ENUM('pending', 'bidding', 'accepted', 'rejected') NOT NULL DEFAULT 'pending';
