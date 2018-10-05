<template>
<div class="sign-up">
     <b-col  offset-sm="0" sm = "12"  > 
  <h1>Registrate</h1>
   <form @submit.prevent="signUp"> 
  <div class="form-group">
    <input type="email" v-model="email" class="mb- 2mr-sm-2 mb-sm -0"  aria-describedby="emailHelp" placeholder="Ingresa tu email">
  </div>
  <div class="form-group">
    <input type="password" v-model="password" class="mb-2 mr-sm-2 mb-sm -0" id="exampleInputPassword1" placeholder="Ingresa tu password">
  </div>
   <button  class="btn btn-primary">Acceder</button>
    </form>
     <p>¿Ya tienes cuenta?  <router-link to="/login" >Regresa</router-link></p>
     </b-col > 
  </div>
</template>


<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => this.$router.replace("Login"), {})
        .catch(error => {
          alert("Ooops" + error.message);
        });
    }
  }
};
</script>


<style  scoped>
.sign-up {
  margin-top: 40px;
  text-align: center;
}
input{
  border-radius: 10px;
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
</style>
