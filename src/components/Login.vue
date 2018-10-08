<template>
<div class='login' >
    <h1>Login</h1>
    <form @submit.prevent='login'> 
  <div class="form-group">
    <input type="email" v-model="email" class="mb-2 mr-sm-2 mb-sm -0" id="exampleInputEmail1" v-validate="email" data-vv-rules="required|email" placeholder="Ingresa tu email">
  </div>
  <div class="form-group">
    <input type="password" v-model="password" class="mb-2 mr-sm-2 mb-sm -0" id="exampleInputPassword1" placeholder="Ingresa tu password">
  </div>  
  <b-button @click="login" variant="primary" >Acceder</b-button>
  <div>
  <b-button variant="outline-danger" @click="google"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="btn-google">Google</b-button>
  <b-button variant="outline-primary" @click="facebook"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" class="btn-facebook">Facebook</b-button>
        <p>¿Aún no tienes una cuenta?  <router-link to="/signup" >Crea una...</router-link></p>
        </div>
</form>


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
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => this.$router.replace('muro'),
          error => alert("Error" + error.message)
        );
    },

    google() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          this.$router.replace("muro");
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
          // ...
          console.log(errorMessage);
        });
    },
    facebook() {
      const provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          this.$router.replace("muro");
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
          // ...
        });
    }
  }
};
</script>


<style lang="scss">
.login {
  margin-top: 40px;
  text-align: center;
}
input {
  border-radius: 10px;
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}

.btn-google,
.btn-facebook {
  width: 20px;
}
</style>

