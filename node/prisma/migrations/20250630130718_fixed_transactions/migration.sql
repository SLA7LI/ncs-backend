-- CreateTable
CREATE TABLE `escrows` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `job_id` BIGINT UNSIGNED NOT NULL,
    `client_id` BIGINT UNSIGNED NOT NULL,
    `worker_id` BIGINT UNSIGNED NOT NULL,
    `amount` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `escrow_id` BIGINT UNSIGNED NOT NULL,
    `type` ENUM('in', 'out') NOT NULL,
    `amount` DOUBLE NOT NULL,
    `status` ENUM('pending', 'success', 'failed') NULL DEFAULT 'pending',
    `created_at` DATETIME(3) NULL,
    `types` ENUM('payment', 'assurence') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
