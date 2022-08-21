import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create, GetClientOrders, GetOrders, UpdateOrder , DeleteOrder} from "./ordersAPI";

const initialState = {
  addorderstatus: "",
  orders: [],
  clientorders: [],
  datachangedd: "",
};

//create order redux action
export const createorder = createAsyncThunk("orders/create", async (data) => {
  console.log(data);
  const response = await Create(data);
  return response.data;
});

//get client  orders redux action
export const getclientorders = createAsyncThunk(
  "orders/client/id",
  async () => {
    const response = await GetClientOrders();
    return response.data;
  }
);

export const getallorders = createAsyncThunk("orders/getall", async () => {
  const response = await GetOrders();
  console.log(response.data);
  return response.data;
});

export const updateorder = createAsyncThunk(
  "orders/update/id",
  async (data) => {
    const response = await UpdateOrder(data);
    return response.data;
  }
);

//delete order by id
export const deleteorder = createAsyncThunk(
  "orders/delete/id",
  async (id) => {
    const response = await DeleteOrder(id);
    return response.data;
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createorder.pending, (state, action) => {
      console.log(action.payload);
      state.addorderstatus = "loading";
    });

    builder.addCase(createorder.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addorderstatus = "success";
    });

    builder.addCase(getclientorders.pending, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(getclientorders.fulfilled, (state, action) => {
      console.log(action.payload);
      state.clientorders = action.payload.data;
    });

    builder.addCase(getallorders.pending, (state, action) => {
      console.log(action.payload);
      //state.orders = action.payload.data;
    });

    builder.addCase(getallorders.fulfilled, (state, action) => {
      console.log(action.payload);
      state.orders = action.payload.data;
    });

    builder.addCase(updateorder.pending, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(updateorder.fulfilled, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(deleteorder.pending, (state, action) => {
      console.log(action.payload);
      state.datachangedd = "loading";
    });

    builder.addCase(deleteorder.fulfilled, (state, action) => {
      console.log(action.payload);
      state.datachangedd = "success";
    });
  },
});

export const {} = ordersSlice.actions;

export const selectaddorderstatus = (state) => state.orders.addorderstatus;
export const selectclientorders = (state) => state.orders.clientorders;
export const selectallorders = (state) => state.orders.orders;

export const selectdatachangedd = (state) => state.orders.datachangedd;

export default ordersSlice.reducer;
