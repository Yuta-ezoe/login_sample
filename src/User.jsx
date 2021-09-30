
import React, { useState, useEffect } from 'react';
//import { useCookies } from "react-cookie";
import axios from 'axios';
import { useCookies } from "react-cookie";


function User() {

  //const [cookies, setCookie] = useCookies(["cookie-token"]);

   const isLoggedIn = () => get('isLoggedIn') === 'true';

   const set = (key, value) => localStorage.setItem(key, value);

   const get = key => getLocalStorage(key);

   const getLocalStorage = key => {
  const ret = localStorage.getItem(key);
  if (ret) {
    return ret;
  }
  return null;
};


 const login = async (email, password) => {
  // ログイン処理
  // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
  // 例外を出しして呼び出し元でcatchしてもいいかと思います。

  //const data = { email : {email}};

 // let cookie = cookies.get('cookie-token')
 // if(cookie === undefined){

       // axios.post('http://localhost:3000/login',data).then(response => {
      //    if(response.status == 200){
 //           setCookie('cookie-token', response.token, {path:'/'})
 //setCookie('cookie-token', 'abc', {path:'/'})
    //      }
    //    })
    //  }


  set('isLoggedIn', true);

  return true;
};

 const logout = async () => {
  if (isLoggedIn()) {
    set('isLoggedIn', false);

    // ログアウト処理
    //　他に必要な処理があるのならこちら
  }
};


return {
  isLoggedIn,
  login,
  logout
 

};

}

export default User();

