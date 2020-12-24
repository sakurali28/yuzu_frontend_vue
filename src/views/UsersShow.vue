<template>
  <div>
    <div class="users-show">
      <h1>Account Info</h1>
      <h3>Name: {{user.name}}</h3>
      <h3>Email: {{user.email}}</h3>
    </div>
    <div>
      <router-link v-bind:to="`/users/edit`">
        <button>edit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {
    axios
      .get("/api/users")
      .then(response => {
        console.log("users show", response);
        this.user = response.data;
      });
  },
  methods: {},
};
</script>