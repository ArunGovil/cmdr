import React, { useState, createContext, useMemo } from "react";

export const Notification = createContext(null);

const NotificationContext = ({ children }: any) => {
  const [notification, setNotification] = useState(false);

  const handleNotification = () => {
    const reset = () => {
      setNotification(false);
    };

    setNotification(true);
    setTimeout(reset, 2000);
  };

  const NotificationState = useMemo(
    () => ({
      notification,
      handleNotification,
    }),
    [notification]
  );

  return (
    <Notification.Provider value={NotificationState}>
      {children}
    </Notification.Provider>
  );
};

export default NotificationContext;
