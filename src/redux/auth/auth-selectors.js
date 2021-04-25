/* eslint-disable import/no-anonymous-default-export */
const getName = state => state.auth.user.name;
const getIsAuth = state => state.auth.isAuth;
const getToken = state => state.auth.token;

export default { getName, getIsAuth, getToken };
