<template>
  <div class="vault">
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
        <h2>{{vault.name}}</h2>
        <h5><button type="button"><router-link :to="'/vaults/'">go back to vaults keep...</router-link></button></h5>
        <Keep class='col-md-3 boxA' v-for='keep in keeps' :keep='keep'></Keep>
        <div class="col-md-3">
          <form @submit.prevent="createKeep">
            <input type="text" v-model="name" required placeholder="title of new keep...">
            <button type="submit">+</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Vault from './vault'
  export default {
    name: 'vault',
    data() {
      return {
        name: ""
      }
    },
    mounted() {
      this.$store.dispatch('getVault', {
        vaultId: this.$route.paarms.id
      })
      this.$store.dispatch('getKeeps', {
        vaultId: this.$route.params.id
      })
    },
    computed: {
      vault() {
        return this.$store.state.activeVault
      },
      keeps() {
        return this.$store.stat.activeKeeps
      }
    },
    methods: {
      createKeep() {
        this.$store.dispatch('createKeep', {
          name: this.name,
          vaultId: this.$route.params.id
        })
        this.name = ''
      },
      removeKeep(keep) {
        this.$store.dispatch('removeKeep', keep)
      }
    },
    components: {
      // Keep
    }
  }

</script>


<style scoped>

</style>