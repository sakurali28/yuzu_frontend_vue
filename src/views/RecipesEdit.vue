<template>
  <div>
    <div>
      <h2>Edit Page</h2>
      <div>
        Title: <input type="text" v-model="recipe.title"><br>
        Image: <input type="text" v-model="recipe.image"><br>
        Cooktime: <input type="text" v-model="recipe.cooktime"><br>
        Ingredient: <input type="text" v-model="recipe.ingredient"><br>
        Direction: <input type="text" v-model="recipe.direction"><br>
      </div>
      <button v-on:click="updateRecipe(recipe)">update</button>
      <button v-on:click="destroyRecipe(recipe)">delete</button>
    </div>
    <router-link v-bind:to="`/recipes/${recipe.id}`">
      <button>cancel</button>
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
      recipe: {},
      title: "",
      image: "",
      cooktime: "",
      ingredient: "",
      direction: ""
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

  methods: {
    updateRecipe: function(recipe) {
      var params = {
        title: this.recipe.title,
        image: this.recipe.image,
        cooktime: this.recipe.cooktime,
        ingredient: this.recipe.ingredient,
        direction: this.recipe.direction,
      };
      axios
        .patch("/api/recipes/" + this.recipe.id, params)
        .then(response => {
          console.log("updated!", response.data);
          this.$router.push(`/recipes/${recipe.id}`);
        });
    },

    destroyRecipe: function(recipe) {
      axios
        .delete("/api/recipes/" + this.$route.params.id)
        .then(response => {
          console.log("deleted!", response.data);
          var index = this.recipes.indexOf(recipe);
          this.recipes.splice(index, 1);
        });
          this.$router.push("/recipes");
    },
  }
};
</script>