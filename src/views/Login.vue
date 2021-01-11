<template>
  <!-- <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="email" v-model="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="password" v-model="password">
      </div>
      <input type="submit" class="button button-circle button-border" value="log in">
      <router-link v-bind:to="`/`">
        <button class="button button-circle button-border">cancel</button>
      </router-link>
    </form>
  </div> -->

  <!-- Document Wrapper============================================= -->
  <div id="wrapper" class="clearfix">
    
    <!-- Content============================================= -->
    <section id="content">
      <div class="content-wrap">
        <div id="section-about" class="container-fluid page-section clearfix">
          <div id="section-contact" >
            <h3>welcome back.</h3>
            <div class="form-widget">

              <form v-on:submit.prevent="submit()" class="row mb-0">

                <div class="col-md-6 form-group">
                  <input type="email" v-model="email" class="required sm-form-control border-form-control" placeholder="email address" />
                </div>

                <div class="col-md-6 form-group">
                  <input type="password" v-model="password" class="required sm-form-control border-form-control" placeholder="password" />
                </div>

                <div class="clear"></div>

                <!-- <div class="col-12 form-group">
                  <input type="text" id="template-contactform-subject" name="subject" value="" class="required sm-form-control border-form-control" placeholder="Subject" />
                </div>

                <div class="col-12 form-group">
                  <textarea class="required sm-form-control border-form-control" rows="7" cols="30" placeholder="Your Message"></textarea>
                </div> -->

                <input type="submit" class="button button-circle button-border" value="log in">
                <router-link v-bind:to="`/`">
                  <button class="button button-circle button-border">cancel</button>
                </router-link>

              </form>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


</template>

<style>
  .container-fluid {
    padding-left: 120px !important;
    padding-right: 120px !important;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/recipes");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>