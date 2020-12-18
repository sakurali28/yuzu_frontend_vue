<template>
  <div class="hashtags">
    <h2>Hashtags Index</h2>
    <div v-for="hashtag in hashtags">
      <router-link v-bind:to="`/hashtags/${hashtag.id}`">
        <p>{{ hashtag.tag }}</p>
      </router-link>
    </div>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
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
      errors: [],
    };
  },

  created: function() {
    this.indexHashtags();
  },

  methods: {
    indexHashtags: function () {
      axios
        .get("/api/hashtags")
        .then(response => {
          this.hashtags = response.data;
          console.log("All Hashtags", this.hashtags);
        });
    },

  },
};
</script>