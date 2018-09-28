<template>
    <div>
     <input type="text" v-model="publication"  class="form-control" @keyup.enter='addMovie'>
     <ul>
         <li v-for="publicationId in publications" :key='publicationId'>
            {{publicationId}} 
         </li>
     </ul>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    data() {
        return {
            publication: null,
            publications: ['12345678']
        }
    },
    methods: {
        addMovie() {
            firebase.database().ref('publications').push({name:this.publication})
        .then((data) => { console.log(data)})
        .catch((error) => {console.log(error);
        })
        }
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

</style>
