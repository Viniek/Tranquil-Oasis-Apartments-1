/*
  Warnings:

  - You are about to drop the `tenants_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tenants_table";

-- CreateTable
CREATE TABLE "spaces_table" (
    "id" TEXT NOT NULL,
    "vacancy" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "floor" INTEGER NOT NULL,

    CONSTRAINT "spaces_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "spaces_table_location_key" ON "spaces_table"("location");
