<template>
  <!-- <div class="recipes-edit">
    <div id="recipe-edit">
      <h2>Edit Recipe</h2>
      <div>
        Name: <input type="text" v-model="recipe.name"><br>
        Image: <input type="text" v-model="recipe.image"><br>
        Servings: <input type="text" v-model="recipe.servings"><br>
        Cooktime(minutes): <input type="text" v-model="recipe.cooktime"><br>
        Ingredients: <input type="text" v-model="recipe.ingredients"><br>
        Directions: <input type="text" v-model="recipe.directions"><br>
        Notes: <input type="text" v-model="recipe.notes"><br>
      </div>
      <button v-on:click="updateRecipe(recipe)">update</button>
      <button v-on:click="destroyRecipe(recipe)">delete</button>
    </div>

    <div class="tag-edit">
      <h2>Edit Tags: </h2>
      <div v-for="tag in recipeTag">
        <router-link v-bind:to="`/tags/${tag.id}`">
          <p>{{ tag.name }}</p>
        </router-link>
        <button v-on:click="destroyRecipeTag(tag)">delete tag</button>
      </div>

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
  </div> -->

  <div id="wrapper" class="clearfix">

    <!-- Content============================================= -->
    <section id="content" class="bg-light">

      <div id="section-about" class="container-fluid page-section clearfix">
        <div id="section-contact">
          <h2 class="mx-auto center">edit recipe</h2>

          <div class="form-widget">
            <form v-on:submit.prevent="updateRecipe(recipe)" class="row mb-0">
              <div class="col-md-12 form-group">
                <input type="text" v-model="recipe.name" class="required sm-form-control border-form-control" placeholder="name" />
              </div>

              <div class="clear"></div>

              <div class="col-md-6 form-group">
                servings:<input type="text" v-model="recipe.servings" class="required sm-form-control border-form-control" placeholder="servings" />
              </div>

              <div class="col-6 form-group">
                cooktime:<input type="text" v-model="recipe.cooktime" class="required sm-form-control border-form-control" placeholder="cooktime" />
              </div>

              <div class="clear"></div>

              <div class="col-12 form-group">
                ingredients:<textarea v-model="recipe.ingredients" class="required sm-form-control border-form-control" rows="7" cols="30" placeholder="ingredients"></textarea>
              </div>

              <div class="col-12 form-group">
                directions:<textarea v-model="recipe.directions" class="required sm-form-control border-form-control" rows="7" cols="30" placeholder="directions"></textarea>
              </div>

              <div class="col-12 form-group">
                image:<textarea v-model="recipe.image" class="required sm-form-control border-form-control" rows="7" cols="30" placeholder="image"></textarea>
              </div>

              <div class="col-12 form-group">
                notes:<textarea v-model="recipe.notes" class="required sm-form-control border-form-control" rows="7" cols="30" placeholder="notes"></textarea>
              </div>

              <div class="mx-auto center">
                <input type="submit" class="button button-circle button-border" value="update recipe">
                <button class="button button-circle button-border button-small" v-on:click="destroyRecipe(recipe)">delete recipe</button>
              </div>

              <div class="clear"></div>
            </form>
          </div>

          <div class="mx-auto center">
            <h3 style="padding-top: 50px;">edit tags</h3>
            <!-- display current tags & delete action -->
            <div v-for="tag in recipeTag">
              <!-- <router-link v-bind:to="`/tags/${tag.id}`"> -->
              <p>{{ tag.name }}<button class="button button-circle button-border button-small" v-on:click="destroyRecipeTag(tag)">x</button></p>
              <!-- </router-link> -->
            </div>

            <!-- select from existing tags -->
            <div>
              <button class="button button-circle button-border" v-on:click="showTagEdit()" v-if="tagEditAppear !== true">+ Tag</button>
              <form v-if="tagEditAppear === true" v-on:submit.prevent="createRecipeTag(recipe)">
                <div>
                  <select v-model="option">
                    <option disabled value="">select a tag:</option>
                    <option v-bind:value="`${tag.id}`" v-for="tag in tags">{{ tag.name }}</option>
                  </select>
                </div>

                <div>
                  <input class="button button-circle button-border button-small" type="submit" value="add tag" />
                </div>
                <button class="button button-circle button-border button-small" v-on:click="showTagEdit()">cancel</button>
              </form>
            </div>

          </div>

          <router-link v-bind:to="`/recipes/${recipe.id}`">
            <button class="button button-circle button-border icon-line-arrow-left"></button>
          </router-link>
          
        </div>
      </div>
    </section>
  
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
      directions: "",
      notes: "",
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
        notes: this.recipe.notes,
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