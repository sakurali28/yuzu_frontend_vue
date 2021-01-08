<template>
  <!-- <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name: </label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Email: </label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password: </label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <label>Password confirmation: </label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <input type="submit" class="btn btn-outline-dark" value="sign up">
      <router-link v-bind:to="`/`">
        <button class="btn btn-outline-dark">cancel</button>
      </router-link>
    </form>
  </div> -->

  <div id="wrapper" class="clearfix">

    <!-- Content============================================= -->
    <section id="content">
      <div class="content-wrap">
        <div id="section-about" class="container-fluid page-section clearfix">
          <div id="section-contact" >
            <h3>let's get you started.</h3>

            <div class="form-widget">

              <form v-on:submit.prevent="submit()" class="row mb-0">

                <div class="col-md-6 form-group">
                  <input type="text" v-model="name" class="required sm-form-control border-form-control" placeholder="name" />
                </div>

                <div class="col-md-6 form-group">
                  <input type="email" v-model="email" class="required sm-form-control border-form-control" placeholder="email address" />
                </div>

                <div class="clear"></div>

                <div class="col-12 form-group">
                  <input type="password" v-model="password" class="required sm-form-control border-form-control" placeholder="password" />
                </div>

                <div class="col-12 form-group">
                  <input type="password" v-model="passwordConfirmation" class="required sm-form-control border-form-control" placeholder="password confirmation" />
                </div>

                <!-- <div class="col-12 form-group">
                  <textarea class="required sm-form-control border-form-control" id="template-contactform-message" name="template-contactform-message" rows="7" cols="30" placeholder="Your Message"></textarea>
                </div> -->

                <input type="submit" class="button button-circle button-border" value="sign up">
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
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {  
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>