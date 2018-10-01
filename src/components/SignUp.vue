<template>
<div class="sign-up">
   <form @submit.prevent="signUp"> 
     <h1>Registrate</h1>
        <input type="email" v-model="email" placeholder="e-mail">
        <input type="password" v-model="password" placeholder="contraseña">
        <button class="btn btn-info">Registrarme</button>

    </form>
</div>
</template>


<script>
import firebase from 'firebase'
export default {
  name: 'signUp',
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(user => this.$router.replace('Login'), {

       }).catch ((error) => {
         alert('Ooops' + error.message)
            });
        }
    }
}
</script>


<style  scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
