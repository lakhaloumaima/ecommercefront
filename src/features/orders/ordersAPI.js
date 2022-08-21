import { axiosInstance } from "../config/axios";

import { ordersapi } from "../config/requests";

export function Create(data) {
  return axiosInstance
    .post(ordersapi, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function GetClientOrders() {
  return axiosInstance
    .get(ordersapi + "/client")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function GetOrders() {
  return axiosInstance
    .get(ordersapi)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function UpdateOrder(data) {
  return axiosInstance
    .put(ordersapi+'/'+data.id ,data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function DeleteOrder(id) {
  return axiosInstance
    .delete(ordersapi+'/'+id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}