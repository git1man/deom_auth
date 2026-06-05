<template>
  <div>
    <form @submit.prevent="handleLogin">
      <label>User Name</label>
      <input
        type="text"
        v-model="credentials.username"
        placeholder="Enter your username"
      />

      <label>Password</label>
      <input
        type="password"
        v-model="credentials.password"
        placeholder="Enter your password"
      />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { login } from "../services/services.js";

export default {
  name: "login",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
      error: "",
    };
  },

  methods: {
    async handleLogin() {
      try {
        const response = await login(this.credentials);

        localStorage.setItem("token", response.data.accessToken);

        console.log("Login Success");
        console.log(response.data);

        this.$router.push("/home");
      } catch (error) {
        this.error = "Invalid username or password";
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color:red;
}
</style>
