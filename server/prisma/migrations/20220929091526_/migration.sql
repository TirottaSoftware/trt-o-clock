-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('OMEGA', 'CASIO', 'DANIELWELLINGTON', 'SEIKO');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('WHITE', 'BLACK', 'GREEN', 'RED', 'BLUE', 'YELLOW', 'MILITARY', 'DARKGREY', 'BROWN', 'BEIGE', 'GOLD', 'ROSEGOLD', 'SILVER');

-- CreateTable
CREATE TABLE "Watch" (
    "id" SERIAL NOT NULL,
    "brand" "Brand" NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "price" DECIMAL(6,2) NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "color" "Color" NOT NULL,
    "specs" JSON NOT NULL,
    "features" JSON NOT NULL,
    "ATF" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Watch_pkey" PRIMARY KEY ("id")
);
