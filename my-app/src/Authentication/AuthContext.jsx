import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setauth] = useState(false);
  const [gender,setGender] = useState('kids')
  let [cartItems, setCart] = useState([]);

  return (
    <AuthContext.Provider value={{ auth, setauth, cartItems, setCart, gender, setGender }}>
      {children}
    </AuthContext.Provider>
  );
}
