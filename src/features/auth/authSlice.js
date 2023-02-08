import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
  isLoading: false,
  email: "",
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
  const googleProvider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, googleProvider);
  return data.user.email;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.email = "";
    },
    setUser: (state, action) => {
      state.email = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.email = "";
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.email = "";
        state.error = error.message;
      })
      .addCase(signInUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.email = "";
        state.error = "";
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload;
        state.error = "";
      })
      .addCase(signInUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.email = "";
        state.error = error.message;
      })
      .addCase(googleSignIn.pending, (state, { payload }) => {
        state.isLoading = true;
        state.email = "";
        state.error = "";
      })
      .addCase(googleSignIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload;
        state.error = "";
      })
      .addCase(googleSignIn.rejected, (state, { error }) => {
        state.isLoading = false;
        state.email = "";
        state.error = error.message;
      });
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
