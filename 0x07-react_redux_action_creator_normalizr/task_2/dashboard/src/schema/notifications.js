import normalizedData from '../../task_1/dashboard/src/schema/notifications';

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const result = normalizedData.result;
  const userNotifications = [];

  for (const id of result) {
    const notification = notifications[id];
    if (notification.author === userId) {
      userNotifications.push(notification);
    }
  }

  return userNotifications;
}

