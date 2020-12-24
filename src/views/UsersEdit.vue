<template>
  <div class="users-edit">
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