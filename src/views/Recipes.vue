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
      <button v-on:click="showRecipe(recipe)">more info!</button>
    </div>

    <dialog id="recipe-details">
      <form method="dialog">
        <p>Title: <input type="text" v-model="currentRecipe.title"></p>
        <p>Image: <input type="text" v-model="currentRecipe.image"></p>
        <p>Cooktime: <input type="text" v-model="currentRecipe.cooktime"></p>
        <p>Ingredient: <input type="text" v-model="currentRecipe.ingredient"></p>
        <p>Direction: <input type="text" v-model="currentRecipe.ingredient"></p>
        <button v-on:click="updateRecipe(currentRecipe)">update</button>
        <button v-on:click="destroyRecipe(currentRecipe)">delete</button>
        <button>close</button>
      </form>
    </dialog>

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
      };
      axios
        .post("/api/recipes", params)
        .then(response => {
          console.log("successfully created!", response.data);
          this.recipes.push(response.data);
        });
    },

    showRecipe: function(recipe) {
      this.currentRecipe = recipe;
      document.querySelector("#recipe-details").showModal();
    },
    
    updateRecipe: function(recipe) {
      var params = {
        title: recipe.title,
        image: recipe.image,
        cooktime: recipe.cooktime,
        ingredient: recipe.ingredient,
        direction: recipe.direction,
      };
      axios
        .patch("/api/recipes/" + recipe.id, params)
        .then(response => {
          console.log("updated!", response.data);
        });
    },

    destroyRecipe: function(recipe) {
      axios
        .delete("/api/recipes/" + recipe.id)
        .then(response => {
          console.log("deleted!", response.data);
          var index = this.recipes.indexOf(recipe);
          this.recipes.splice(index, 1);
        });
    },
  },
};
</script>