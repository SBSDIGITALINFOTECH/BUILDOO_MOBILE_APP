import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { generateGuestId } from '../config/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { toast } from 'react-hot-toast';

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [guestID,setGuestID] = useState('');
  const [token, setToken] = useState('');

  const onLoad =async()=>{
    const tokenn = await AsyncStorage.getItem('token');
    if(tokenn){
      setToken(tokenn);
    }
    const CguestID = await AsyncStorage.getItem('guestId')
    if(CguestID === null || CguestID === ''){
      generateGuestId(null).then(async(res)=>{
        if(res.data.success){
         await AsyncStorage.setItem('guestId',res.data.guestId);
        }
      })
    }else{
      setGuestID(CguestID);
    }
  }

  useEffect(() => {
    onLoad();
  }, [])
  

  const addToken = async(newToken) => {
    setToken(newToken);
    await AsyncStorage.setItem('token',newToken);
  };

  const removeToken = async() => {
    setToken('');
    await AsyncStorage.removeItem('token');
    generateGuestId(null).then(async(res)=>{
      if(res.data.success){
        await AsyncStorage.setItem('guestId',res.data.guestId);
        setGuestID(res.data.guestId);
      }
    })
  };

  return (
    <TokenContext.Provider value={{ token, addToken, removeToken,guestID,setGuestID }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
