// Library Imports
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteExpiredPendingChanges = async () => {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const deleted = await prisma.pendingChange.deleteMany({
        where: {
            createdAt: {
                lt: oneHourAgo,
            },
        },
    });

    console.log(`Deleted ${deleted.count} expired pending changes.`);
    await prisma.$disconnect();
}

deleteExpiredPendingChanges().catch((err) => {
    console.error("Error cleaning up pending changes:", err);
    prisma.$disconnect();
    process.exit(1);
});

export default deleteExpiredPendingChanges;