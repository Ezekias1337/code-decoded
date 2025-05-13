/*
  Warnings:

  - You are about to drop the column `browser` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `device` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `os` on the `Analytics` table. All the data in the column will be lost.
  - Added the required column `baseUrl` to the `Analytics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAgentInfo` to the `Analytics` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Analytics_userIdentifier_key";

-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "browser",
DROP COLUMN "device",
DROP COLUMN "os",
ADD COLUMN     "baseUrl" TEXT NOT NULL,
ADD COLUMN     "userAgentInfo" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "PageVisit" (
    "id" TEXT NOT NULL,
    "analyticsId" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageVisit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PageVisit" ADD CONSTRAINT "PageVisit_analyticsId_fkey" FOREIGN KEY ("analyticsId") REFERENCES "Analytics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
