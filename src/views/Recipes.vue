<template>
  <div class="recipes">
    <h1>Welcome Back!</h1>

    <h2>Create New Recipe</h2>
    <div>
      Title: <input type="text" v-model="newRecipeTitle">
      Image: <input type="text" v-model="newRecipeImage">
      Cooktime: <input type="text" v-model="newRecipeCooktime">
      Ingredient: <input type="text" v-model="newRecipeIngredient">
      Direction: <input type="text" v-model="newRecipeDirection">
    </div>
      <button v-on:click="createRecipe()">create!</button>

    <h2>Recipes Index</h2>
    <div v-for="recipe in recipes">
      <h2>{{ recipe.title }}</h2>
      <img v-bind:src="recipe.image">
      <p>{{ recipe.cooktime }} minutes</p>
      <p>{{ recipe.ingredient }}</p>
      <p>{{ recipe.direction }}</p>
      <br><br>
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
      newRecipeTitle: "",
      newRecipeImage: "",
      newRecipeCooktime: "",
      newRecipeIngredient: "",
      newRecipeDirection: "",
      currentRecipe: {},
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
    },

    createRecipe: function() {
      var params = {
        title: this.newRecipeTitle,
        image: this.newRecipeImage,
        cooktime: this.newRecipeCooktime,
        ingredient: this.newRecipeIngredient,
        direction: this.newRecipeDirection,
      }

      axios
        .post("/api/recipes", params)
        .then(response => {
          console.log("successfully created!", response.data);
          this.recipes.push(response.data);
        });
    },


  },
};
</script>