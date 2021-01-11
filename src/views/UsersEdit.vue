<template>
  <!-- <div class="users-edit">
    <h1>Edit Account</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <p>
        Name: <input type="text" v-model="user.name" />
      </p>
      <p>
        Email: <input type="text" v-model="user.email" />
      </p>
      <p>
        Password: <input type="password" v-model="user.password" />
      </p>
      <p>
        Confirm Password: <input type="password" v-model="user.password_confirmation" />
      </p>
      <div>
        <input type="submit" value="update" />
      </div>
    </form>

    <button v-on:click="destroyUser(user)">delete</button>

    <router-link to="/users">
      <button>cancel</button>
    </router-link>

  </div> -->

  <div id="wrapper" class="clearfix">

    <!-- Content============================================= -->
    <section id="content">

      <div id="section-about" class="container-fluid page-section clearfix">
        <div id="section-contact" >
          <h3>edit profile.</h3>

          <div class="form-widget">

            <form v-on:submit.prevent="updateUser(user)" class="row mb-0">

              <div class="col-md-6 form-group">
                <input type="text" v-model="user.name" class="required sm-form-control border-form-control" placeholder="name" />
              </div>

              <div class="clear"></div>

              <div class="col-md-6 form-group">
                <input type="email" v-model="user.email" class="required sm-form-control border-form-control" placeholder="email address" />
              </div>

              <div class="clear"></div>

              <div class="col-12 form-group">
                <input type="password" v-model="user.password" class="required sm-form-control border-form-control" placeholder="password" />
              </div>

              <div class="col-12 form-group">
                <input type="password" v-model="user.password_confirmation" class="required sm-form-control border-form-control" placeholder="password confirmation" />
              </div>

              <button class="button button-circle button-border" v-on:click="destroyUser(user)">delete</button>

              <input type="submit" class="button button-circle button-border" value="update profile">

              <div class="clear"></div>

              <router-link v-bind:to="`/users`">
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
      user: {},
    };
  },
  created: function() {
    axios
      .get("/api/users")
      .then(response => {
        console.log("users show", response);
        this.user = response.data;
      });
  },
  methods: {
    updateUser: function(user) {
      var params = {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      };
      axios
        .patch("/api/users", params)
        .then(response => {
          console.log("users update", response);
          this.$router.push("/users");
        });
    },

    destroyUser: function(user) {
      axios
        .delete("/api/users")
        .then(response => {
          console.log("user deleted", response);
          localStorage.removeItem("jwt");
          this.$router.push("/");
        });
    },
  },
};
</script>