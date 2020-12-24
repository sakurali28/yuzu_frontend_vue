<template>
  <div class="tag-index">
    <h2>Tag Index</h2>
    <div v-for="tag in tags">
      <router-link v-bind:to="`/tags/${tag.id}`">
        <p>{{ tag.name }}</p>
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
      tags: [],
    };
  },

  created: function() {
    axios
      .get("/api/tags")
      .then(response => {
        console.log("tag index", response);
        this.tags = response.data;
      });
},

  methods: {},
};
</script>