<template>
  <div>
    <b-container class="w-50">
      <b-form @submit="login">
        <b-container class="p-2">
          <label class="w-100 text-start" for="title">Email</label>
          <b-form-input
            type="email"
            required
            v-model="loginDetails.email"
            placeholder="email here"
          ></b-form-input>
        </b-container>
        <b-container class="p-2">
          <label class="w-100 text-start" for="title">Password</label>
          <b-form-input
            type="password"
            required
            v-model="loginDetails.password"
            placeholder="password here"
          ></b-form-input>
        </b-container>
        <b-container class="p-2 d-flex align-items-center justify-content-end">
          <router-link
            class="text-end justify-content-end mx-2 w-100 d-flex"
            to="/"
            >Cancel</router-link
          >
          <b-button type="submit" class="text-end" variant="primary">Login</b-button>
        </b-container>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { LoginMixin } from "../../utils/index.js";
export default {
  name: "LoginPage",
  mixins: [LoginMixin()],
};
</script>
