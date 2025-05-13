/*
  Warnings:

  - The primary key for the `Analytics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Analytics` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PageVisit" DROP CONSTRAINT "PageVisit_analyticsId_fkey";

-- AlterTable
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Analytics_pkey" PRIMARY KEY ("userIdentifier");

-- AddForeignKey
ALTER TABLE "PageVisit" ADD CONSTRAINT "PageVisit_analyticsId_fkey" FOREIGN KEY ("analyticsId") REFERENCES "Analytics"("userIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;
