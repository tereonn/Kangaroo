-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL,

    UNIQUE INDEX `User_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desc` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `removed` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Season` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seasonId` INTEGER NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `events_blocked` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParticipationRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL,
    `userId` INTEGER NOT NULL,
    `carId` INTEGER NULL,
    `stageId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Race` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stageId` INTEGER NOT NULL,
    `phase` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RaceGrid` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `points` INTEGER NULL,
    `result` ENUM('WIN', 'LOOSE', 'DRAW') NULL,
    `raceId` INTEGER NOT NULL,
    `participationRequestId` INTEGER NOT NULL,
    `carId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stage` ADD CONSTRAINT `Stage_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParticipationRequest` ADD CONSTRAINT `ParticipationRequest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParticipationRequest` ADD CONSTRAINT `ParticipationRequest_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParticipationRequest` ADD CONSTRAINT `ParticipationRequest_stageId_fkey` FOREIGN KEY (`stageId`) REFERENCES `Stage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Race` ADD CONSTRAINT `Race_stageId_fkey` FOREIGN KEY (`stageId`) REFERENCES `Stage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RaceGrid` ADD CONSTRAINT `RaceGrid_raceId_fkey` FOREIGN KEY (`raceId`) REFERENCES `Race`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RaceGrid` ADD CONSTRAINT `RaceGrid_participationRequestId_fkey` FOREIGN KEY (`participationRequestId`) REFERENCES `ParticipationRequest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RaceGrid` ADD CONSTRAINT `RaceGrid_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
