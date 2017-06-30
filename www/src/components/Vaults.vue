<template>
  <div class="vaults">
    <nav class="navbar navbar-default navbar-fixed-top custom">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="navbar-header">
              <a class="navbar-brand" href="/"><img class="size" alt="Brand" src="../assets/logo.jpg"></a>
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a @click="logout(this.user)">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="row">
            <form class="col-md-12" @submit.prevent="createVault">
              <input type="text" v-model="name" required placeholder="Vault Name">
              <input type="text" v-model="description" required placeholder="Description of Vault">
            </form>
              <button @click="createVault">Add Vault</button>
          </div>
          <div class="row">
            <form class="col-md-12" @submit.prevent="createKeep">
              <input type="text" v-model="title" required placeholder="Keep Title">
              <input type="text" v-model="body" required placeholder="Body of Keep">
              <input type="text" v-model="imgUrl" required placeholder="Image URL">
            </form>
              <button @click="createKeep">Add Keep</button>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <h1>Vaults</h1>
            <div class="col-md-4" v-for="vault in vaults">
              <div class="well">
                <router-link :to="'/vaults/'+vault._id">
                  <h3>{{vault.name}}</h3>
                  <p>{{vault.description}}</p>
                </router-link>
                <a class="glyphicon glyphicon-trash" @click="removeVault(vault)"></a>
              </div>
            </div>
          </div>
          <div class="row">
            <h1>MyKeeps</h1>
            <div class="col-md-4" v-for="keep in keeps">
              <div class="well">
                <h3>{{keep.title}}</h3>
                <img class="fit" :src="keep.imgUrl">
                <p>{{keep.body}}</p>
                <p>Keeps: {{keep.keepCount}}</p>
                <p>Shares: {{keep.shareCount}}</p>
                <p>Views: {{keep.viewCount}}</p>
                <a class="glyphicon glyphicon-trash" @click="removeKeep(keep)"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'vaults',
    data() {
      return {
        name: "",
        description: "",
        title: "",
        body: "",
        imgUrl: ""
      }
    },
    created() {
      this.$store.dispatch('getVaults')
      this.$store.dispatch('getKeeps')
    },
    computed: {
      vaults() {
        return this.$store.state.vaults
      },
      user() {
        return this.$store.state.vaults
      },
      keeps() {
        return this.$store.state.keeps
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout', this.user)
      },
      createKeep() {
        this.$store.dispatch('createKeep', {
          title: this.title,
          body: this.body,
          imgUrl: this.imgUrl
        })
        this.title = '',
        this.body = '',
        this.imgUrl = ''
      },
      createVault() {
        this.$store.dispatch('createVault', {
          name: this.name,
          description: this.description
        })
        this.name = '',
        this.description = ''
      },
      removeKeep(keep) {
        this.$store.dispatch('removeKeep', keep)
      },
      removeVault(vault) {
        this.$store.dispatch('removeVault', vault)
      }
    },
    components: {}
  }

</script>


<style scoped>
  .size {
    height: 50px;
  }

  .custom {
    background-color: #121210;
    /*border-color: #121210;*/
  }
  .fit {
    max-width: 100%;
    max-height: auto;
  }
</style>