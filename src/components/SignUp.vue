<template>
<div class="sign-up">
   <form> 
        <input type="text" v-model="email" placeholder="e-mail">
        <input type="password" v-model="password" placeholder="contraseña">
        <button type="button" class="btn btn-info">Sign Up</button>

    </form>
</div>
</template>


<script>
import firebase from 'firebase'
export default {
  name: "signUp",
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        alert('Se ha creado tu cuenta exitosamente!')
       }).catch ((error) => {
         alert('Ooops' + error.message)
            });
        }
    }
}
</script>


<style  scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin:s ;
}
</style>
