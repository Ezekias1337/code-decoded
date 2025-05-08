-- CreateTable
CREATE TABLE "PendingChange" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "emailAddress" TEXT,
    "phoneNumber" TEXT,
    "role" "Role",
    "profilePicture" BYTEA,
    "profilePictureType" TEXT,
    "verificationCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PendingChange_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PendingChange" ADD CONSTRAINT "PendingChange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
