
import http from "../http-common.js";

class MyuService {

  getAllExp() {
    return http.get("/exp/getAll"); 
  }

  getAllStateInfo() {
    return http.get("/stateinfo/getAll"); 
  }

  getUserInfo(email) {

    return http.get(`/find?email=${email}`); 
  }

  getHAInfo(link) {
    return http.get(`/findUrl?encoded=${link}`);
  }

  findAllUrl() {
    return http.get(`/findAllUrl`);
  }

  findAna(rates) {
    return http.get(`/findAnalytics?rates=${rates}`);
  }

  createNewsletter(newsletter) {
    return http.post("/newsletter/create", newsletter); 
  }

  createExp(experience) {
    return http.post("/exp/create", experience); 
  }

  createStateinfo(stateinfo) {
    return http.post("/stateinfo/create", stateinfo);
  }

  createUser(user) {
    return http.post("/save", user); 
  }

  createUrl(url) {
     return http.post("/saveUrl", url);
  }

  createHA(ha) {
    return http.post("/saveAnalytics", ha);
  }

  updateUser(email, pass) {
    return http.get(`/update?email=${email}&password=${pass}`);
  }

  updateStateinfo(name, stateinfo) {
    return http.put(`/stateinfo/updaye/${name}`, stateinfo);
  }
}

export default new MyuService();