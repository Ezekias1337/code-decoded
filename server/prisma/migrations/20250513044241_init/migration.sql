-- CreateTable
CREATE TABLE "Analytics" (
    "id" TEXT NOT NULL,
    "userIdentifier" TEXT NOT NULL,
    "browser" TEXT,
    "os" TEXT,
    "device" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsiteOrApp" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "productTier" TEXT NOT NULL,
    "describeYourDreamWebsiteOrApp" TEXT NOT NULL,
    "websiteStatus" TEXT NOT NULL,

    CONSTRAINT "WebsiteOrApp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Analytics_userIdentifier_key" ON "Analytics"("userIdentifier");
