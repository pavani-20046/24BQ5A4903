const axios = require("axios");

const NOTIFICATION_ENDPOINT =
  "http://4.224.186.213/evaluation-service/notifications";

const getNotifications = async () => {
  try {
    const { data } = await axios.get(NOTIFICATION_ENDPOINT);

    if (!data || !data.notifications) {
      return [];
    }

    return data.notifications;
  } catch (err) {
    console.log(
      `Unable to retrieve notifications: ${err.message}`
    );
    return [];
  }
};

module.exports = getNotifications;