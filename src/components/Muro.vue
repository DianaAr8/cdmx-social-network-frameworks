<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Social Network</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Usuario</em>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#" v-on:click="signOut">Cerrar Sesión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <b-form-textarea class="mt-4" id="textarea2" v-model="publication" placeholder="Escribe tu publicación" :rows="4">
      </b-form-textarea>
      <button class="btn btn-danger" id="btn-publication" @click='addPublication'>Publicar</button>

      <ul>
        <li v-for='(publicationName,key) in publications' :key="key">
          <div class="post">
            <p>{{publicationName.name}} </p>
          </div>
          <b-button variant="primary" @click='like(key)'><span>{{like}}</span><i class="far fa-thumbs-up"></i></b-button>
          <b-button variant="danger" @click='deletePublication(key)'><i class="fas fa-trash-alt"></i></b-button>
          <button class="btn btn-info" @click="editPublication(key)"><i class="fas fa-edit"></i></button>
          <div class="edit" v-show="mostrar">
            <b-form-textarea class="mt-4" type="text" v-model="editForm[key]"> </b-form-textarea>
            <b-button variant="success" @click='editPublication(key)'><i class="far fa-save"></i></b-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";

export default {
  name: "Muro",
  data() {
    return {
      mostrar: true,
      like: 1,
      publication: null,
      publications: [],
      editForm: []
    };
  },
  methods: {
    addPublication() {
      firebase
        .database()
        .ref("publications")
        .push({ name: this.publication })

        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    editPublication(key) {
      this.mostrar = !this.mostrar;
      firebase
        .database()
        .ref("publications/" + key)
        .set({ name: this.editForm[key] });
      this.editForm = [];
    },
    deletePublication(key) {
      firebase
        .database()
        .ref("publications/" + key)
        .remove();
    },
    like() {
      this.like.push({ nombre });
    },
    dislike() {
      this.nogusta = !this.nogusta;
      this.nogusta--;
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(user => {
          this.$router.replace("login");
        })
        .catch(error => {
          console.log("Error al cerrar sesión", error);
        });
    }
  },
  created() {
    firebase
      .database()
      .ref("publications")
      .on("value", snapshot => {
        this.publications = snapshot.val();
      });
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
#btn-publication {
  width: 80px;
  height: 40px;
}
.btn-danger,
.btn-info,
.btn-success,
.btn-primary {
  width: 40px;
  height: 40px;
}

.btn-dark {
  width: 120px;
}
.post {
}
</style>
