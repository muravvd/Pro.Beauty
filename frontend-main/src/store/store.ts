import { createDomain } from "effector";
export const TokenDomain = createDomain("token");
export const $tokenStore = TokenDomain.createStore(
  localStorage.getItem("token") ?? ""
);
export const setToken = TokenDomain.createEvent<string>("update-token");

$tokenStore.on(setToken, (state, payload) => payload);
