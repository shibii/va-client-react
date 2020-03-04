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

const getPinned = () => {
  return api.get("api/vacancies/pinned").json();
};

const hide = vacancyId => {
  return api.post(`api/vacancies/${vacancyId}/hide`);
};

const unhide = vacancyId => {
  return api.post(`api/vacancies/${vacancyId}/unhide`);
};

const pin = vacancyId => {
  return api.post(`api/vacancies/${vacancyId}/pin`);
};

const unpin = vacancyId => {
  return api.post(`api/vacancies/${vacancyId}/unpin`);
};

export default {
  login,
  logout,
  signup,
  me,
  search,
  getHidden,
  getPinned,
  hide,
  unhide,
  pin,
  unpin
};
