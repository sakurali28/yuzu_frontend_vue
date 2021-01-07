<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="email" v-model="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="password" v-model="password">
      </div>
      <input type="submit" class="button button-circle button-border" value="log in">
      <router-link v-bind:to="`/`">
        <button class="button button-circle button-border">cancel</button>
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