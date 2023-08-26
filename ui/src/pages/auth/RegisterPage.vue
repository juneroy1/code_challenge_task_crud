<template>
  <div>
    <b-container class="w-50">
      <b-form @submit="register">
        <b-container class="p-2">
          <label class="w-100 text-start" for="title">Name</label>
          <b-form-input
            type="text"
            required
            v-model="registerDetails.name"
            placeholder="email here"
          ></b-form-input>
        </b-container>
        <b-container class="p-2">
          <label class="w-100 text-start" for="title">Email</label>
          <b-form-input
            type="email"
            required
            v-model="registerDetails.email"
            placeholder="email here"
          ></b-form-input>
        </b-container>
        <b-container class="p-2">
          <label class="w-100 text-start" for="title">Password</label>
          <b-form-input
            type="password"
            required
            v-model="registerDetails.password"
            placeholder="password here"
          ></b-form-input>
        </b-container>
        <b-container class="p-2">
          <label class="w-100 text-start" for="title">Retype Password</label>
          <b-form-input
            type="password"
            required
            v-model="registerDetails.c_password"
            placeholder="re-password here"
          ></b-form-input>
        </b-container>
        <b-container class="p-2 d-flex align-items-center justify-content-end">
          <router-link
            class="text-end justify-content-end mx-2 w-100 d-flex"
            to="/"
            >Cancel</router-link
          >
          <b-button type="submit" class="text-end" variant="primary"
            >Register</b-button
          >
        </b-container>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { RegisterMixin } from "../../utils/index.js";
export default {
  name: "RegisterPage",
  mixins: [RegisterMixin()],
};
</script>
