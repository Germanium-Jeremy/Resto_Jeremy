import React, { createContext, useState } from 'react'

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [emailContext, setEmailContext] = useState(null);
     return (
          <UserContext.Provider value={{ user, setUser, emailContext, setEmailContext }}>
               {children}
          </UserContext.Provider>
     )
}
