<template>
  <!-- <div class="show">
    <h2>{{ recipe.name }}</h2>
    <img v-bind:src="recipe.image">

    <h3>Cooktime: </h3>
    <p>{{ recipe.cooktime_conversion }}</p>
    
    <p v-if="recipe.servings">{{ recipe.servings }} servings</p>

    <h3>Ingredients: </h3>
    <ul v-for="ingredient in ingredients">
      <li>{{ ingredient }}</li>
    </ul>

    <h3>Directions: </h3>
    <ul v-for="direction in directions">
      <input type="checkbox">
      <label class="strikethrough">{{ direction }}</label>
    </ul>

    <p v-if="recipe.notes">notes: {{ recipe.notes }}</p>

    <div class="tag">
      <h3>Tags: </h3>
      <div v-for="tag in tags">
        <router-link v-bind:to="`/tags/${tag.id}`">
          <p>{{ tag.name }}</p>
        </router-link>
      </div>
    </div>

    <router-link v-bind:to="`/recipes/${recipe.id}/edit`">
      <button>edit</button>
    </router-link>
  </div> -->
  
  <div id="wrapper" class="clearfix">

		<!-- Content============================================= -->
		<section id="content" class="bg-light">
			<div class="content-wrap pt-0" style="overflow: visible;">
				<div class="container">
					
					<!-- Entry Image
					============================================= -->
					<div class="container clearfix">
						<div class="mx-auto center" style="max-width: 800px; padding-top: 50px;">
							<h3 class="nott font-weight-bold mb-5 display-4">{{ recipe.name }}</h3>
						</div>
					</div>
					<div class="entry-image mt-5">
						<img class="rounded" v-bind:src="`${recipe.image}`" alt="Blog Single">
					</div><!-- .entry-image end -->

					<div class="card border-0 shadow-sm" style="top: -100px;">
						<div class="card-body px-4">
							<div class="row align-items-center justify-content-between py-3">
								<div class="col-12 col-xl">
									<div class="row justify-content-center col-mb-30">

										<div class="col-4 col-md">
                      <router-link v-bind:to="`/recipes/${recipe.id}/edit`">
												<h6 class="text-black-50 text-uppercase font-body font-weight-normal ls1 mb-1"><i class="icon-pencil"></i>Edit Recipe</h6>
                      </router-link>
										</div>

										<div class="col-4 col-md" v-if="recipe.servings">
											<h6 class="text-black-50 text-uppercase font-body font-weight-normal ls1 mb-1"><i class="icon-line-users"></i> Servings</h6>
											<h4 class="mb-0">{{ recipe.servings }}</h4>
										</div>

										<div class="col-4 col-md">
											<h6 class="text-black-50 text-uppercase font-body font-weight-normal ls1 mb-1"><i class="icon-line-clock"></i>Cooktime</h6>
											<h4 class="mb-0">{{ recipe.cooktime_conversion }}</h4>
										</div>

									</div>
								</div>
							</div>

							<div class="line my-4"></div>

							<div class="row justify-content-between mt-5 mb-4 clearfix">
								<div class="col-lg-4">
									<div class="d-flex justify-content-between align-items-center mb-4">
										<h4 class="mb-0">Ingredients</h4>
										<a href="javascript:window.print()" id="print-button" class="social-icon si-small si-colored si-print" title="Print">
											<i class="icon-line-printer"></i>
											<i class="icon-line-printer"></i>
										</a>
									</div>
									<ul class="list-unstyled list-ingredients bg-light p-4" v-for="ingredient in ingredients">
										<label>{{ ingredient }}</label>
									</ul>
                  
									<div class="line line-sm"></div>

									<div class="widget widget_links">

										<div class="widget clearfix">
											<h4>Tags</h4>
											<div class="tagcloud" v-for="tag in tags">
												<router-link v-bind:to="`/tags/${tag.id}`">{{ tag.name }}</router-link>
											</div>
										</div>

										<div class="line line-sm"></div>
										<h4>Share</h4><br>
										<a href="#" class="social-icon si-small si-light si-facebook" title="Facebook">
											<i class="icon-facebook"></i>
											<i class="icon-facebook"></i>
										</a>
										<a href="#" class="social-icon si-small si-light si-twitter" title="Twitter">
											<i class="icon-twitter"></i>
											<i class="icon-twitter"></i>
										</a>
										<a href="#" class="social-icon si-small si-light si-pinterest" title="Pinterest">
											<i class="icon-pinterest"></i>
											<i class="icon-pinterest"></i>
										</a>
										<a href="#" class="social-icon si-small si-light si-instagram" title="Instagram">
											<i class="icon-instagram"></i>
											<i class="icon-instagram"></i>
										</a>
										<a href="#" class="social-icon si-small si-light si-email3" title="Email">
											<i class="icon-email3"></i>
											<i class="icon-email3"></i>
										</a>
									</div>
									</div>

								<div class="col-lg-8 mt-5 mt-lg-0">
									<h4 style="padding-bottom: 15px;">Directions</h4>
									<ul v-for="direction in directions" style="padding-left: 20px;">
										<input class="form-check-input" type="checkbox">
                    <label class="strikethrough form-check-label">{{ direction }}</label>
									</ul>

									<div class="line my-5"></div>

									<div class="widget widget_links">
										<h4 v-if="recipe.notes" class="widget widget_links">note to self</h4>
									</div>
									<label v-if="recipe.notes" class="list-unstyled list-ingredients bg-light p-4">
										{{ recipe.notes }}
									</label>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- #content end -->
	</div><!-- #wrapper end -->
</template>

<style>
  input[type=checkbox]:checked + label.strikethrough {
    text-decoration: line-through;
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