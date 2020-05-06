import axios from "axios";
import * as helpers from "./serviceHelper";

const add = payload => {

  var bodyFormData = new FormData();
  bodyFormData.set('lat', payload.lat);
  bodyFormData.set('lng', payload.lng);
    const config = {
      method: "POST",
      url: 'http://127.0.0.1:8000/api/places',
      data: bodyFormData,
      crossdomain: true,
      headers: { "Content-Type": 'multipart/form-data'}
    };
    return axios(config)
      .then(helpers.onGlobalSuccess)
      .catch(helpers.onGlobalError);
  };
  const search = (data) => {
    const config = {
      method: "GET",
      url:
        helpers.API_HOST_PREFIX +
        "/api/threads/search?search=" +
        data,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    return axios(config)
      .then(helpers.onGlobalSuccess)
      .catch(helpers.onGlobalError);
  };
  export {add, search};
