// actions.js
export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_CONNECTION = "GET_CONNECTION";
export const CHANGE_DASHBOARD = "CHANGE_DASHBOARD";
export const SHOW_LANDING = "SHOW_LANDING";

export const changeMode = (payload) => {
  return { type: CHANGE_MODE, payload };
};

export const changeConnection = () => {
  return { type: CHANGE_CONNECTION };
};

export const changeDashboard = () => {
  return { type: CHANGE_DASHBOARD };
};

export const showLanding = () => {
  return { type: SHOW_LANDING };
};