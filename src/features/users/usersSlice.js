import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, GetUsers, DeletetUser, GetMe, UploadAvatar, UpdateUser } from "./usersAPI";

const initialState = {
  user: null,
  isauth: false,
  autherror: {
    iserror: false,
    message: "",
  },
  authstatus: "",
  users: [],
  deletestatus: "",
  addstatus: "",
};

//register action
/*
export const register = createAsyncThunk("clients/register", async (data) => {
  const response = await Register(data);
  return response;
});
*/

//login user
export const login = createAsyncThunk("users/login", async (data) => {
  const response = await Login(data);
  return response.data;
});

//get all users
export const getusers = createAsyncThunk("users/find", async () => {
  const response = await GetUsers();
  return response.data;
});

//delete user by id
export const deleteuser = createAsyncThunk("users/delete/id", async (id) => {
  const response = await DeletetUser(id);
  return response.data;
});

//get me
export const getme = createAsyncThunk("users/me", async () => {
  const response = await GetMe();
  return response.data;
});

//upload avatar 
export const uploadavatar = createAsyncThunk("users/image/id", async (data) => {
  const response = await UploadAvatar(data);
  return response.data;
});

//update user  by id
export const updateuser = createAsyncThunk("users/update", async (data) => {
  const response = await UpdateUser(data);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout : (state,action) => {
      state.user = null
      state.isauth = false
      state.authstatus = ""
      localStorage.clear()
      window.location.href = '/'    
    }
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getusers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = action.payload.data;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      // Add user to the state array
      if (action.payload) {
        localStorage.setItem("token", action.payload.token);
        state.isauth = true;
        state.user = action.payload.user
        state.autherror.iserror = false;
        state.autherror.message = "";
        state.authstatus = "success";
      } else {
        state.autherror.iserror = true;
        state.autherror.message = 'invalid credantials';
      }
    
    });

    builder.addCase(deleteuser.pending, (state, action) => {
      state.deletestatus = "loading";
    });

    builder.addCase(deleteuser.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.status === 200) {
        state.deletestatus = "success";
      } else {
        state.deletestatus = "failure";
      }
    });

///////////////////////////getme
    builder.addCase(getme.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data
    });

///////////////upload avatar
    builder.addCase(uploadavatar.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data;
    });

    /////////updateuser
    builder.addCase(updateuser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data;

    });
  },
  /* [register.pending]: (state, action) => {
      state.authstatus = "loading";
    },
    [register.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.authstatus = "success";
    },
    [register.rejected]: (state, action) => {
      state.authstatus = "faiFlure";
    },

    // login
    [login.pending]: (state, action) => {
      state.authstatus = "loading";
    },
    [login.fulfilled]: (state, action) => {
      console.log(action.payload);

      
    },
    [login.rejected]: (state, action) => {
      state.authstatus = "faiFlure";
    },
    // get all users
    [getusers.pending]: (state, action) => {
    
    },
    [getusers.fulfilled]: (state, action) => {
      console.log(action.payload);

      state.users = action.payload.data
    },
    [getusers.rejected]: (state, action) => {
      
    }, */
});

export const { logout } = usersSlice.actions;

export const selectautheduser = (state) => state.users.user;
export const selectusers = (state) => state.users.users;
export const selectauthstatus = (state) => state.users.authstatus;
export const selectautherror = (state) => state.users.autherror;
export const selectisauth = (state) => state.users.isauth;
export const selectseletestatus = (state) => state.users.deletestatus;

export const selectaddstatus = (state) => state.products.addstatus;
export default usersSlice.reducer;
