import qs from "qs";
import ky from "ky";

const api = ky.create();

const login = (email, password) => {
  return api.post("api/login", { json: { email, password } }).json();
};

const logout = () => {
  return api.post("api/logout");
};

const signup = (email, password) => {
  return api.post("api/signup", { json: { email, password } });
};

const me = () => {
  return api.get("api/me").json();
};

const search = parameters => {
  const urlencoded = qs.stringify({ terms: parameters.terms });
  return api.get("api/vacancies?" + urlencoded).json();
};

const getHidden = () => {
  return api.get("api/vacancies/hidden").json();
};

export default { login, logout, signup, me, search, getHidden };