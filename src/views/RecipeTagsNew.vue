<template>
  <div id="wrapper" class="clearfix">

    <!-- Content============================================= -->
    <section id="content" class="bg-light">

      <div id="section-about" class="container-fluid page-section clearfix">
        <div id="section-contact" >
          <div class="mx-auto center">
            <h3 style="padding-top: 50px;">add tags</h3>

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

        </div>
      </div>
    </section>
  
  </div>
</template>

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
  }
};
</script>