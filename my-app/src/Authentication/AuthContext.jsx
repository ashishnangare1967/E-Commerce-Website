import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setauth] = useState(false);
  const [gender,setGender] = useState('kids')
  let [cartItems, setCart] = useState([]);
  // const [val, setVal]= useState(0)
  const [total, setTotal] = useState(0)
  
  // console.log(gender)
  // function add(){
  //   setVal(p=>p+1)
  //   setTotal(p=>p+1)
  // }
  // function min(){
  //   setVal(p=>p-1)
  //   setTotal(p=>p-1)
  // }

  return (
    <AuthContext.Provider value={{ auth, setauth, cartItems, setCart, gender, setGender, setTotal, total }}>
      {children}
    </AuthContext.Provider>
  );
}
