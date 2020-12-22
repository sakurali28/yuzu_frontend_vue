<template>
  <div class="tag-show">
    <h2>{{ hashtag.tag }}</h2>
    
    <div v-for="recipe in hashtag.recipes">
      <router-link v-bind:to="`/recipes/${recipe.id}`">
        <h3>{{ recipe.title }}</h3>
      </router-link>
    </div>

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
      hashtag: {},
      recipe: {},
      recipes: [],
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