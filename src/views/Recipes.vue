<template>
  <div class="recipes">
    <h1>Welcome Back!</h1>

    <h2>Recipes Index</h2>
    <div v-for="recipe in recipes">
      <h2>{{ recipe.title }}</h2>
      <img v-bind:src="recipe.image">
      <p>{{ recipe.cooktime }} minutes</p>
      <p>{{ recipe.ingredient }}</p>
      <p>{{ recipe.direction }}</p>
      <br><br>
      <!-- <p>{{ recipe.tag}}</p> -->
    </div>

  </div>
</template>

<style>
img {
  width: 300px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipes: [],
    };
  },
  created: function() {
    this.indexRecipes();
  },

  methods: {
    indexRecipes: function () {
      axios
        .get("/api/recipes")
        .then(response => {
          this.recipes = response.data;
          console.log("All Recipes", this.recipes);
        });
    }
  },
};
</script>