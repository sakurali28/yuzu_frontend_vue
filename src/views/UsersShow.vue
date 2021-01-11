<template>
  <div>
    <div class="mx-auto center" style="padding-top: 50px;">
      <h1 style="padding-bottom: 50px;">Account Info</h1>
      <h4>{{user.name}}</h4>
      <h4 style="padding-bottom: 50px;">{{user.email}}</h4>
      <router-link v-bind:to="`/users/edit`">
        <button class="button button-circle button-border" >edit</button>
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