/*
  Warnings:

  - The primary key for the `cart_table` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cart_id` on the `cart_table` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `cart_table` table. All the data in the column will be lost.
  - You are about to drop the column `items` on the `cart_table` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `cart_table` table. All the data in the column will be lost.
  - Added the required column `floor` to the `cart_table` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `cart_table` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `location` to the `cart_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `cart_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `space_id` to the `cart_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `cart_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacancy` to the `cart_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart_table" DROP CONSTRAINT "cart_table_pkey",
DROP COLUMN "cart_id",
DROP COLUMN "created_at",
DROP COLUMN "items",
DROP COLUMN "total",
ADD COLUMN     "floor" INTEGER NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "space_id" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "vacancy" BOOLEAN NOT NULL,
ADD CONSTRAINT "cart_table_pkey" PRIMARY KEY ("id");
