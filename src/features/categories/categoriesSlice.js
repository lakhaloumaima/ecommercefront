import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create, DeleteCat, GetAll, Update, UpdateImage } from "./categoriesAPI";

const initialState = {
  categories: [],
  datachanged: "",
  addstatus:"",
};

//create product
export const createcategory = createAsyncThunk(
  "categories/create",
  async (data) => {
    console.log(data);
    const response = await Create(data);
    return response.data;
  }
);

//get all  categories
export const getcategories = createAsyncThunk(
  "categories/findall",
  async () => {
    console.log();
    const response = await GetAll();
    return response.data;
  }
);

//delete category by id
export const deletecategory = createAsyncThunk(
  "categories/delete",
  async (id) => {
    const response = await DeleteCat(id);
    return response.data;
  }
);

//update category by id
export const updatecategory = createAsyncThunk("categories/update/id", async (data) => {
  const response = await Update(data);
  return response.data;
});

//update category icon by id
export const updatecategoryimage = createAsyncThunk("categories/image/id", async (data) => {
  const response = await UpdateImage(data);
  return response.data;
});

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createcategory.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(createcategory.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";
    });

    builder.addCase(getcategories.pending, (state, action) => {
      console.log(action.payload);
     // state.datachanged = "loading";
    });

    builder.addCase(getcategories.fulfilled, (state, action) => {
      console.log(action.payload);
      state.categories = action.payload.data;
      //state.datachanged = "success";
    });

    builder.addCase(deletecategory.pending, (state, action) => {
      console.log(action.payload);
      state.datachanged = "loading";
    });

    builder.addCase(deletecategory.fulfilled, (state, action) => {
      console.log(action.payload);
      state.datachanged = "success";
    });

    builder.addCase(updatecategory.pending, (state, action) => {
      console.log(action.payload);
      state.datachanged = "loading";
      
    });

    builder.addCase(updatecategory.fulfilled, (state, action) => {
      console.log(action.payload);
      state.datachanged = "success";
      
    });
    builder.addCase(updatecategoryimage.pending, (state, action) => {
      console.log(action.payload);
      state.datachanged = "loading";
    });

    builder.addCase(updatecategoryimage.fulfilled, (state, action) => {
      console.log(action.payload);
      state.datachanged = "success";
    });

  },
});

export const {} = categoriesSlice.actions;

export const selectcategories = (state) => state.categories.categories;
export const selectdatachanged = (state) => state.categories.datachanged;
export const selectaddstatus = (state) => state.categories.addstatus;

export default categoriesSlice.reducer;
