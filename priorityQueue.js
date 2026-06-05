const CATEGORY_PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function generatePriority(notificationItem) {
  const categoryRank =
    CATEGORY_PRIORITY[notificationItem.Type] ?? 0;

  const notificationTime = Date.parse(
    notificationItem.Timestamp
  );

  return categoryRank * 1e13 + notificationTime;
}

function fetchTopNotifications(
  notificationList,
  limit = 10
) {
  const sortedNotifications = notificationList.sort(
    (a, b) =>
      generatePriority(b) - generatePriority(a)
  );

  return sortedNotifications.slice(0, limit);
}

module.exports = fetchTopNotifications; 