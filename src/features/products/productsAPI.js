import { axiosInstance } from "../config/axios";
import { productsapi } from "../config/requests";

export function Create(data) {
  return axiosInstance
    .post(productsapi, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function GetAll() {
  return axiosInstance
    .get(productsapi )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function Update(data) {
  return axiosInstance
    .put(productsapi+'/'+data.id , data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}


export function UpdateImage(data) {
  return axiosInstance
    .put(productsapi + "/image/" + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function DeletePro(id) {
  return axiosInstance
    .delete(productsapi+'/'+id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}