<template>
    <div>
        <h1>Hola</h1>
        <input type="text" v-model="movie" class="form-control" @keyup.enter="addMovie">

        <ul>
            <li v-for='(movieName,key) in movies' :key="key">
               {{movieName.name}}
               <button class="btn btn-danger" @click='deleteMovie(key)'>Delete</button>
<br>
<br>
               <input type="text" v-model="editForm[key]" class="form-control">   
                <button class="btn btn-info" @click="editMovie(key)">Edit</button>  

            </li>
        </ul>

         <button class="btn btn-dark" v-on:click="signOut">Cerrar sesión</button>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "Muro",
    data() {
        return {
            movie: null,
            movies: [],
            editForm: []
        }
    }, 
    methods: {
        addMovie() {
            firebase.database().ref('movies').push({name:this.movie})
            .then((data) => {console.log(data)})
            .catch((error) => {console.log(error)})
        },
        editMovie(key) {
            firebase.database().ref('movies/' + key).set({name:this.editForm[key]});
            this.editForm = [];
        },
        deleteMovie(key) {
            firebase.database().ref('movies/' + key).remove();
        },
        signOut() {
      firebase.auth().signOut()
        .then(user => {
          this.$router.replace('login');
        })
        .catch(error => {
          console.log("Error al cerrar sesión", error);
        });
    }
    },
    created() {
        firebase.database().ref('movies').on('value',(snapshot) => {
            this.movies = snapshot.val();
        })
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0
}

li {
    display: inline-block;
    margin: 0 10px;
}
 .btn-danger, .btn-info {
     width: 70px;
     height: 40px;
 }

 .btn-dark {
     width: 120px;

 }
</style>
