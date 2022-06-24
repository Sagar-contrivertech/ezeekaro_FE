import React from "react";
import axios from '../Axios/axios'
import Cookies from 'universal-cookie'

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();
const cookies = new Cookies()

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
    isAuthenticated :!!cookies.get('token')
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

async function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);
  const LOGIN_URl = "/User/LoginUser"


  if (!!login && !!password) {
    let body = {
      Email: login,
      Password: password
    }
    await axios.post(LOGIN_URl, body).then((res) => {
      setTimeout(() => {
        cookies.set('token', res.data.token)
        localStorage.setItem("id_token", res.data.token);
        dispatch({ type: "LOGIN_SUCCESS" });
        setError(null);
        setIsLoading(false);
        history.push("/app/dashboard");
      }, 2000);
    })
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
