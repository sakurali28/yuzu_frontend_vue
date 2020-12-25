<template>
  <div class="recipes-edit">
    <div>
      <h2>Edit Page</h2>
      <div>
        Name: <input type="text" v-model="recipe.name"><br>
        Image: <input type="text" v-model="recipe.image"><br>
        Servings: <input type="text" v-model="recipe.servings"><br>
        Cooktime(minutes): <input type="text" v-model="recipe.cooktime"><br>
        Ingredients: <input type="text" v-model="recipe.ingredients"><br>
        Directions: <input type="text" v-model="recipe.directions"><br>
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
      name: "",
      image: "",
      servings: "",
      cooktime: "",
      ingredients: "",
      directions: ""
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
        name: this.recipe.name,
        image: this.recipe.image,
        servings: this.recipe.servings,
        cooktime: this.recipe.cooktime,
        ingredients: this.recipe.ingredients,
        directions: this.recipe.directions,
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