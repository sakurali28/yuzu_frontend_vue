<template>
  <div class="show">
    <h2>{{ recipe.title }}</h2>
    <img v-bind:src="recipe.image">
    <p>{{ recipe.cooktime }} minutes</p>
    <p>Ingredients:<br>{{ recipe.ingredient }}</p>
    <p>Directions:<br>{{ recipe.direction }}</p>

   <!-- <dialog id="recipe-details">
      <form method="dialog">
        <p>Title: <input type="text" v-model="recipe.title"></p>
        <p>Image: <input type="text" v-model="recipe.image"></p>
        <p>Cooktime: <input type="text" v-model="recipe.cooktime"></p>
        <p>Ingredient: <input type="text" v-model="recipe.ingredient"></p>
        <p>Direction: <input type="text" v-model="recipe.ingredient"></p>
        <button v-on:click="updateRecipe(recipe)">update</button>
        <button v-on:click="destroyRecipe(recipe)">delete</button>
        <button>close</button>
      </form>
    </dialog> -->

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