import cron from "node-cron";
import deleteExpiredPendingChanges from "./deletePendingChanges";

cron.schedule("*/15 * * * *", async () => {
    console.log("Running cron job: clean expired pending changes");
    await deleteExpiredPendingChanges();
});
