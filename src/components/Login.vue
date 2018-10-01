<template>
<div class='login'>
    <h1>Login</h1>
    <form @submit.prevent='login'> 
        <input type="text" placeholder="e-mail" v-model="email"><br>
        <input type="password" placeholder="contraseña" v-model="password"><br>
        <button class="btn btn-info">Ingresar</button><br>
        <button class="btn btn-danger" @click="google"> <img src="src/assets/google.png" alt="Google" class="btn-google">Google</button>
        <p>¿Aún no tienes una cuenta?  <router-link to="/signup" >Crea una...</router-link></p>
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
          user => this.$router.replace("muro"),
          error => alert("Error" + error.message)
        );
    },

    google() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
  .auth()
                    .signInWithPopup(provider)
                    .then((result)=>{
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const token = result.credential.accessToken;
                        // The signed-in user info.
                        const user = result.user;
                        console.log(user);
                        this.$router.replace('muro')
                        // ...
                    }).catch(function(error) {
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
            }
        }
    };
</script>


<style lang="scss">
.login {
  margin-top: 40px;
}
input {
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

.btn-google {

width: 20px
}
</style>

