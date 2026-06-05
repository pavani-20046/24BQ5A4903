const retrieveNotifications = require("./notificationService");
const getTopNotifications = require("./priorityQueue");

async function displayNotifications() {
  try {
    const notifications = await retrieveNotifications();

    const highestPriorityItems = getTopNotifications(
      notifications,
      10
    );

    console.log("\n=== Highest Priority Notifications ===\n");

    highestPriorityItems.forEach((notification, position) => {
      console.log(
        `${position + 1}. Category: ${notification.Type}`
      );
      console.log(`   Message: ${notification.Message}`);
      console.log(`   Time: ${notification.Timestamp}`);
      console.log("-----------------------------------");
    });
  } catch (error) {
    console.error(
      "Failed to process notifications:",
      error.message
    );
  }
}

displayNotifications();