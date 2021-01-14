<template>
  <div id="wrapper" class="clearfix">

    <!-- Content============================================= -->
    <section id="content" class="bg-light">

      <div id="section-about" class="container-fluid page-section clearfix">
        <div id="section-contact" >
          <h3>create a new bookmark.</h3>

          <div class="form-widget">
            <form v-on:submit.prevent="submit()" class="row mb-0">
              <div class="col-md-6 form-group">
                <input type="text" v-model="name" class="required sm-form-control border-form-control" placeholder="name" />
              </div>

              <div class="clear"></div>

              <div class="col-12 form-group">
                <input type="text" v-model="url" class="required sm-form-control border-form-control" placeholder="url" />
              </div>

              <input type="submit" class="button button-circle button-border" value="create bookmark">
              <router-link v-bind:to="`/bookmarks`">
                <button class="button button-circle button-border">back</button>
              </router-link>
            </form>
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
      name: "",
      url: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {  
        name: this.name,
        url: this.url,
      };
      axios
        .post("/api/bookmarks", params)
        .then(response => {
          this.$router.push("/bookmarks");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>