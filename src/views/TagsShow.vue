<template>
  <div class="tag-show">
    <h2>{{ tag.name }}</h2>
    
    <div v-for="recipe in tag.recipes">
      <router-link v-bind:to="`/recipes/${recipe.id}`">
        <h3>{{ recipe.name }}</h3>
      </router-link>
    </div>

    <router-link v-bind:to="`/tags/${tag.id}/edit`">
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
      tag: {},
      recipe: {},
      recipes: [],
    };
  },

  created: function() {
    axios
      .get("/api/tags/" + this.$route.params.id)
      .then(response => {
        this.tag = response.data;
        console.log("show tag", this.tag);
      });
  },

  methods: {}
};
</script>