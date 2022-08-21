import axios from "axios";
import {clientsapi} from "../config/requests";

export function Register(data) {
  return axios
    .post(clientsapi, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

