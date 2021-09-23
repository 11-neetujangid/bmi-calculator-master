export const USER_DATA = "USER_DATA";
export const USER = "USER";
export const SET_FORM_VALUES = "SET_FORM_VALUES";

export const userData = (payload) => ({  type: USER_DATA, payload: payload})
export const user = (payload) => ({ type: USER, payload: payload });
export const setFormValues = (payload) => (console.log(payload), { type: SET_FORM_VALUES, payload: payload });
