<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email: </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="email">
      </div>
      <div class="form-group">
        <label>Password: </label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <input type="submit" class="btn btn-outline-dark" value="log in">
      <router-link v-bind:to="`/`">
        <button class="btn btn-outline-dark">cancel</button>
      </router-link>
    </form>
  </div>
</template>

<style>
  .login {
    padding: 100px;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/recipes");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>