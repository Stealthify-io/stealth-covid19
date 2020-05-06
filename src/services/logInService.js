import axios from "axios";
import * as helper from "./serviceHelper";

const create = payload => {
        const config = {
          method: "POST",
          url: "http://127.0.0.1:8000/api/user/signup/",
          data: payload,
          withCredentials: true,
          crossdomain: true,
          headers: { "Content-Type": "application/json" }
        };
        return axios(config)
          .then(helper.onGlobalSuccess)
          .catch(helper.onGlobalError);
      };
      const signin = payload => {

        const config = {
          method: "POST",
          data: payload,
          url: "http://127.0.0.1:8000/api/user/login",
          withCredentials: true,
          crossdomain: true,
          headers: { "Content-Type": "application/json" }
        };
        return axios(config)
          .then(helper.onGlobalSuccess)
          .catch(helper.onGlobalError);
      };

      const getDistance = payload => {
        var bodyFormData = new FormData();
        bodyFormData.set('lat', payload.lat);
        bodyFormData.set('lng', payload.lng);

        const config = {
          method: "POST",
          data: bodyFormData,
          url: "http://127.0.0.1:8000/api/distance",
          withCredentials: true,
          crossdomain: true,
          headers: { "Content-Type": "application/json" }
        };
        return axios(config)
          .then(helper.onGlobalSuccess)
          .catch(helper.onGlobalError);
      };

      const getPlaces = payload => {
        var bodyFormData = new FormData();
        bodyFormData.set('lat', payload.lat);
        bodyFormData.set('lng', payload.lng);

        const config = {
          method: "POST",
          data: bodyFormData,
          url: "http://127.0.0.1:8000/api/places",
          withCredentials: true,
          crossdomain: true,
          headers: { "Content-Type": "application/json" }
        };
        return axios(config)
          .then(helper.onGlobalSuccess)
          .catch(helper.onGlobalError);
      };
      
  export { create, signin ,getDistance,getPlaces};