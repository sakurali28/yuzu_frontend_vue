<template>
  <div class="new-hashtag">
    <form v-on:submit.prevent="submit()">
      <h1>Create a New Hashtag</h1>
      <h2>Ooh Exiting!</h2>

      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div class="form-group">
        <label>Tag: </label> 
        <input type="text" class="form-control" v-model="tag">
      </div>

      <input type="submit" class="btn btn-primary" value="submit">

    </form>
    <router-link v-bind:to="'/hashtags'">
      <button>back</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tag: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {  
        tag: this.tag,
      };
      axios
        .post("/api/hashtags", params)
        .then(response => {
          this.$router.push("/hashtags");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>