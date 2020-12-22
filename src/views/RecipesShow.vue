<template>
  <div class="show">
    <h2>{{ recipe.title }}</h2>
    <img v-bind:src="recipe.image">
    <p>{{ recipe.cooktime }} minutes</p>

    <h3>Ingredients: </h3>
    <ul v-for="ingredient in ingredients">
      <li>{{ ingredient }}</li>
    </ul>

    <h3>Directions: </h3>
    <ul v-for="direction in directions">
      <li>{{ direction }}</li>
    </ul>

    <h3>Tags:</h3>
    <div v-for="hashtag in hashtags">
      <router-link v-bind:to="`/hashtags/${hashtag.id}`">
        <p>{{ hashtag.tag }}</p>
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
      hashtags: [],
    };
  },

  created: function() {
    axios
      .get("/api/recipes/" + this.$route.params.id)
      .then(response => {
        this.recipe = response.data;
        this.ingredients = response.data.ingredient.split(", ");
        this.directions = response.data.direction.split(", ");
        this.hashtags = response.data.tag;
        console.log("show recipe", this.recipe);
        console.log("show ingredients", this.ingredients);
        console.log("show directions", this.directions);
        console.log("show hashtags", this.hashtags);
      });
  },

  // methods: function() {}
};
</script>