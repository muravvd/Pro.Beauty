export const isTokenValid = (): boolean => {
  const token = localStorage.getItem("token");
  const token_lifetime = localStorage.getItem("token/lifetime");
  if (!token) {
    return false;
  }
  if (!token_lifetime) {
    return false;
  }

  const date_now = new Date();

  console.log(new Date(token_lifetime), date_now);

  return new Date(token_lifetime) > date_now;
};
