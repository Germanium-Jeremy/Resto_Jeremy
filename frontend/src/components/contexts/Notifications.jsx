import React, { createContext, useState } from 'react'

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
     const [notificationsContext, setNotificationsContext] = useState(null);
     return (
          <NotificationContext.Provider value={{ notificationsContext, setNotificationsContext }}>
               {children}
          </NotificationContext.Provider>
     )
}
