<template>
  <div class="hashtag-index">
    <h2>Hashtags Index</h2>
    <div v-for="hashtag in hashtags">
      <router-link v-bind:to="`/hashtags/${hashtag.id}`">
        <p>{{ hashtag.tag }}</p>
      </router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      hashtags: [],
    };
  },

  created: function() {
    axios
      .get("/api/hashtags")
      .then(response => {
        console.log("hashtags index", response);
        this.hashtags = response.data;
      });
},

  // methods: {},
};
</script>