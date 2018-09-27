<template>
<div class='login'>
    <h1>Login</h1>
    <form @submit.prevent='login'> 
        <input type="text" placeholder="e-mail" v-model="email"><br>
        <input type="password" placeholder="contraseña" v-model="password"><br>
         <b-button variant="info">Ingresar</b-button>
        <button type="submit" class="btn btn-info">Ingresar</button>
        <button type="submit" class="btn btn-info"> <img src="src/assets/logo.png" alt="Google">Google</button>
        <p>¿Aún no tienes una cuenta?  <router-link to="/signup" >Crea una...</router-link></p>
    </form>

</div>
</template>


<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    }, 
    methods: { 
        login () {
            firebase
            .auth().signInWithEmailAndPassword(this.email, this.password)
            .then ((user) => {
                alert('Empieza la diversión') 
                    //this.$swal('Correcto', 'OK');
                
            })
            .catch((error) => {
                const errorCode = error.code;

                if(errorCode === 'auth/invalid-email'){
                     alert('Ingresa un correo electrónico válido');
                     } else if (errorCode === 'auth/weak-password') {  
                    alert('Ingresa una contraseña válida, mínimo 6 caracteres');
                    } else if (errorCode === 'auth/email-already-in-use') {
                        alert('Usuario ya registrado, favor de verificar datos');
                        }
            });
        }
    }
}
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
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>

