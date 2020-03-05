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

const fts = parameters => {
  const urlencoded = qs.stringify(parameters);
  return api.get("api/vacancies?" + urlencoded).json();
};

const getHidden = parameters => {
  const urlencoded = qs.stringify(parameters);
  return api.get("api/vacancies/hidden?" + urlencoded).json();
};

const getPinned = parameters => {
  const urlencoded = qs.stringify(parameters);
  return api.get("api/vacancies/pinned?" + urlencoded).json();
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
  fts,
  getHidden,
  getPinned,
  hide,
  unhide,
  pin,
  unpin
};
