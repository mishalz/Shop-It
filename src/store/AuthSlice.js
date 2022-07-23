import { createSlice } from "@reduxjs/toolkit";

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjustedExpirationTime - currentTime;
  return remainingTime;
};

const logoutHelper = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }
  return { token: null, isLoggedIn: false };
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const expirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(expirationTime);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    duration: expirationTime,
  };
};

let logoutTimer;
let tokenData = retrieveStoredToken();

let initialToken = "";
if (tokenData) {
  initialToken = tokenData.token;
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: initialToken,
    isLoggedIn: !!initialToken,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = !!state.token;
      localStorage.setItem("token", state.token);
      localStorage.setItem("expirationTime", action.payload.expirationTime);

      const remainingTime = calculateRemainingTime(
        action.payload.expirationTime
      );

      logoutTimer = setTimeout(logoutHelper, remainingTime);
    },
    logout: () => {
      return logoutHelper();
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
