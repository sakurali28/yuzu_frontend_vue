<template>
  <div class="recipes-edit">
    <div id="recipe-edit">
      <h2>Edit Recipe</h2>
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

    <div class="tag-edit">
      <h2>Edit Tags: </h2>
      <!-- display current tags & delete action -->
      <div v-for="tag in recipeTag">
        <router-link v-bind:to="`/tags/${tag.id}`">
          <p>{{ tag.name }}</p>
        </router-link>
        <button v-on:click="destroyRecipeTag(tag)">delete tag</button>
      </div>

      <!-- select from existing tags or create a new one -->
      <div>
        <button v-on:click="showTagEdit()" v-if="tagEditAppear !== true">add Tag</button>
        <form v-if="tagEditAppear === true" v-on:submit.prevent="createRecipeTag(recipe)">
          <div>
            <select v-model="option">
              <option disabled value="">select a tag:</option>
              <option v-bind:value="`${tag.id}`" v-for="tag in tags">{{ tag.name }}</option>
            </select>
          </div>

          <div>
            <input type="submit" value="add tag" />
          </div>
          <button v-on:click="showTagEdit()">Cancel</button>
        </form>
      </div>
    </div>

    <br>

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
      recipeTag:{},
      tags: [],
      tagEditAppear: false,
      option: "",
      tag: {},

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
        this.recipeTag = response.data.tag;
        console.log("show recipe", this.recipe);
      });
    axios
      .get("/api/tags/")
      .then(response => {
        this.tags = response.data;
        console.log("show tags", this.tags);
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

    showTagEdit: function() {
      this.tagEditAppear = !(this.tagEditAppear);
      this.option = "";
    },

    createRecipeTag: function() {
      this.tag = this.option;
      // tag = tag.id

      var params = {
        recipe_id: parseInt(this.recipe.id),
        tag_id: parseInt(this.tag),
      };
      axios
        .post("/api/recipe_tags", params)
        .then(response => {
          this.recipe = response.data;
          this.option = "";
          this.tagEditAppear = false;
          console.log("recipe_tag created", response.data);
        });
    },
    
    destroyRecipeTag: function(tag) {
      var params = {
        tag_id: tag.id,
        recipe_id: this.recipe.id,
      };
      console.log(params);
      axios
        .delete("/api/recipe_tags", { data: params })
        .then(response => {
          console.log("recipe_tag destroyed", response.data);
        });
    },
  }
};
</script>