// login 완료 후 연결될 테스트 페이지

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';


const Login = () => {

    const dispatch = useDispatch
    let code = new URL(window.location.href).searchParams.get("code");


  return (
    <div>Login</div>
  )
}

export default Login