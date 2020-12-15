<template>
  <div>

    <h2>Edit Page</h2>
    <div>
      Title: <input type="text" v-model="recipe.title"><br>
      Image: <input type="text" v-model="recipe.image"><br>
      Cooktime: <input type="text" v-model="recipe.cooktime"><br>
      Ingredient: <input type="text" v-model="recipe.ingredient"><br>
      Direction: <input type="text" v-model="recipe.direction"><br>
    </div>
    <button v-on:click="updateRecipe()">update</button>
    <!-- <button v-on:click="destroyRecipe()">update</button> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipe: {},
      title: "",
      image: "",
      cooktime: "",
      ingredient: "",
      direction: ""
    };
  },

  created: function() {

  },

  methods: {
    updateRecipe: function() {
      var params = {
        title: this.recipe.title,
        image: this.recipe.image,
        cooktime: this.recipe.cooktime,
        ingredient: this.recipe.ingredient,
        direction: this.recipe.direction,
      };
      axios
        .patch("/api/recipes/" + this.$route.params.id, params)
        .then(response => {
          console.log("updated!", response.data);
        });
    },
  }
};
</script>