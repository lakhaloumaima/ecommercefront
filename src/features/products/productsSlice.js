import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create, DeletePro, GetAll, Update, UpdateImage } from "./productsAPI";

const initialState = {
  products: [],
  filtredproducts: [],
  addstatus: "",
  deletestatus: "",
};

//craete product
export const createproduct = createAsyncThunk(
  "products/create",
  async (data) => {
    console.log(data);
    const response = await Create(data);
    return response.data;
  }
);

//get all  products
export const getproducts = createAsyncThunk("products/findall", async () => {
  const response = await GetAll();
  return response.data;
});

//update product by id
export const updateproduct = createAsyncThunk("products/update/id", async (data) => {
  const response = await Update(data);
  return response.data;
});

//update product by id
export const updateproductimage = createAsyncThunk("products/image/id", async (data) => {
  const response = await UpdateImage(data);
  return response.data;
});

//delete product by id
export const deleteproduct = createAsyncThunk(
  "products/delete/id",
  async (id) => {
    const response = await DeletePro(id);
    return response.data;
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filtrecategory: (state, action) => {
      if (action.payload.id === "all") {
        state.filtredproducts = state.products;
      } else {
        let arr = [...state.products];
        console.log(action.payload.id);
        let data = arr.filter((p) => p.category._id === action.payload.id);

        state.filtredproducts = data;
      }
    },
    filtername : (state,action) => {
      if (action.payload.text === '') {
        state.filtredproducts = state.products;
      } else {
        let arr = [...state.products];
        
        let data = arr.filter((p) => p.name.includes(action.payload.text));

        state.filtredproducts = data;
      }
    },
    filterprice : (state,action) => {

      const price = Number(action.payload.price)

      if (action.payload.price === "") {
        state.filtredproducts = state.products;
      } else {
        let arr = [...state.products];

        let data = arr.filter((p) => p.price <= price);

        state.filtredproducts = data;
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(createproduct.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(createproduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";
    });

    builder.addCase(getproducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload.data;
      state.filtredproducts = action.payload.data;
    });

    builder.addCase(updateproduct.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(updateproduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";

    });

    builder.addCase(updateproductimage.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(updateproductimage.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";
    });

    builder.addCase(deleteproduct.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(deleteproduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";

    });
  },
});

export const { filtrecategory, filtername, filterprice } = productsSlice.actions;

export const selectproducts = (state) => state.products.filtredproducts;
export const selectaddstatus = (state) => state.products.addstatus;
export const selectdeletestatus = (state) => state.products.deletestatus;

export default productsSlice.reducer;
