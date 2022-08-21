import { axiosInstance } from "../config/axios";
import { categoriesapi } from "../config/requests";

export function Create(data) {
  return axiosInstance
    .post(categoriesapi, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function GetAll() {
  return axiosInstance
    .get(categoriesapi)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function DeleteCat(id) {
  return axiosInstance
    .delete(categoriesapi+'/'+id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function Update(data) {
  return axiosInstance
    .put(categoriesapi+'/' + data.id , data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function UpdateImage(data) {
  return axiosInstance
    .put(categoriesapi + "/image/" + data.id,data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
