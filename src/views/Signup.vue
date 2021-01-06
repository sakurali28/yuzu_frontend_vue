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
			<div class="content-wrap bg-light">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-7 col-md-10">
							<div class="card my-5 shadow-sm">
								<div class="card-body p-5">
									<h4 class="ls4 center">SIGNUP FORM</h4>
									<div class="divider divider-sm divider-center text-dark"><i class="icon-heart21"></i></div>
									<div class="form-widget" data-alert-type="false">
										<form v-on:submit.prevent="submit()">
											<div class="row">
												<div class="col-12 center mb-5">
													<h2 class="font-secondary font-italic h1">Let's Get Started</h2>
													<h6 class="font-body text-uppercase ls3">Shall We?</h6>
												</div>

												<div class="col-12">
													<div class="row">
														<div class="col-md-6 bottommargin-sm">
															<label>Name<small class="text-danger">*</small></label>
															<input type="text" class="form-control" placeholder="Enter your Name" v-model="name">
														</div>

														<div class="col-md-6 bottommargin-sm">
															<label>Email<small class="text-danger">*</small></label>
															<input type="email" class="form-control" placeholder="Enter your Email" v-model="email">
														</div>

														<div class="col-md-6 bottommargin-sm">
															<label>Password<small class="text-danger">*</small></label>
															<input type="password" class="form-control" placeholder="Enter your Password" v-model="password">
														</div>

														<div class="col-md-6 bottommargin-sm">
															<label>Password Confirmation<small class="text-danger">*</small></label>
															<input type="password" class="form-control" placeholder="Enter your Password again" v-model="passwordConfirmation">
														</div>
													</div>
												</div>

												<div class="col-12">
													<button type="submit" class="btn btn-secondary btn-block btn-lg">Create an Account</button>
												</div>
											</div>
                        <router-link v-bind:to="`/`">
                        <button class="btn btn-outline-dark">cancel</button>
                      </router-link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section><!-- #content end -->
  
  </div>

</template>

	<style>
		.file-caption.icon-visible .file-caption-name {
			font-family: 'Lato', sans-serif;
			color: #666;
		}
		.form-process {
			position: absolute;
			-webkit-transition: all .3s ease;
			-o-transition: all .3s ease;
			transition: all .3s ease;
			background-image: none;
		}

		.form-process > div { background-color: #999;  }

		.form-process,
		#template-wedding-submitted,
		.template-wedding-complete .form-process {
			display: none;
			opacity: 0;
			background-color: rgba(255,255,255,0.7);
		}

		.template-wedding-processing .form-process {
			display: block;
			opacity: 1;
		}

		.divider.divider-center.divider-sm:before,
		.divider.divider-center.divider-sm:after { border-color: #CCC; }

		.btn-group label.error {
			display: block !important;
			text-transform: none;
			position: absolute;
      bottom: -34px;
      left: 0;
      margin-bottom: 10px;
		}

		.btn-group input.valid ~ label.error,
		.btn-group input[type="text"] ~ label.error,
		.btn-group input[type="email"] ~ label.error,
		.btn-group input[type="number"] ~ label.error,
		.btn-group select ~ label.error { display: none !important; }

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