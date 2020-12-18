<template>
  <div class="show-tag">
    <h2>{{ hashtag.tag }}</h2>
    <router-link v-bind:to="`/hashtags/${hashtag.id}/edit`">
      <button>edit</button>
    </router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      hashtag: {}
    };
  },

  created: function() {
    axios
      .get("/api/hashtags/" + this.$route.params.id)
      .then(response => {
        this.hashtag = response.data;
        console.log("show hashtag", this.hashtag);
      });
  },

  // methods: function() {

  // }
};
</script>