<template>
  <div class="show">
    <h2>{{ recipe.name }}</h2>
    <img v-bind:src="recipe.image">
    <p>{{ recipe.cooktime }} minutes</p>
    <p>{{ recipe.servings }} servings</p>

    <h3>Ingredients: </h3>
    <ul v-for="ingredient in ingredients">
      <li>{{ ingredient }}</li>
    </ul>

    <h3>Directions: </h3>
    <ul v-for="direction in directions">
      <input type="checkbox">
      {{ direction }}
    </ul>

    <h3>Tags: </h3>
    <div v-for="tag in tags">
      <router-link v-bind:to="`/tags/${tag.id}`">
        <p>{{ tag.name }}</p>
      </router-link>
    </div>

    <router-link v-bind:to="`/recipes/${recipe.id}/edit`">
      <button>edit</button>
    </router-link>
  </div>
</template>

<style>
  img {
    height: 300px;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipe: {},
      ingredients: [],
      directions: [],
      tags: [],
    };
  },

  created: function() {
    axios
      .get("/api/recipes/" + this.$route.params.id)
      .then(response => {
        this.recipe = response.data;
        this.ingredients = response.data.ingredients.split(", ");
        this.directions = response.data.directions.split(", ");
        this.tags = response.data.tag;
        console.log("show recipe", this.recipe);
        console.log("show ingredients", this.ingredients);
        console.log("show directions", this.directions);
        console.log("show tags", this.tags);
      });
  },

  methods: {}
};
</script>