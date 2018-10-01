<template>
    <div>
        <button class="btn btn-dark" v-on:click="signgOut">Cerrar sesión</button>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signgOut()
        .then(user => {
          this.$router.replace('login');
        })
        .catch(error => {
          console.log("Error al cerrar sesión", error);
        });
    }
  }
};
</script>

<style scoped>
</style>

