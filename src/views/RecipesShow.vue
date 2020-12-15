<template>
  <div class="show">
    <h2>{{ recipe.title }}</h2>
    <img v-bind:src="recipe.image">
    <p>{{ recipe.cooktime }} minutes</p>
    <p>Ingredients:<br>{{ recipe.ingredient }}</p>
    <p>Directions:<br>{{ recipe.direction }}</p>
    <router-link v-bind:to="`/recipes/${recipe.id}/edit`">
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
      recipe: {}
    };
  },

  created: function() {
    axios
      .get("/api/recipes/" + this.$route.params.id)
      .then(response => {
        this.recipe = response.data;
        console.log("show recipe", this.recipe);
      });
  },

  methods: function() {

  }
};
</script>