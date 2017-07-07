<template>
  <div class="hello">
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
                <router-link class="customLink" to="/vaults">Dashboard</router-link>
              </li>
              <li>
                <router-link class="customLink" to="/login">Login</router-link>
              </li>
              <li>
                <router-link class="customLink" to="/register">Register</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <h1>Welcome to Keepr</h1>
    <div class="col-md-4" v-for="keep in keeps">
      <div class="well">
        <h3>{{keep.title}}</h3>
        <img class="fit" :src='keep.imgUrl'>
        <p>{{keep.body}}</p>
        <p>Keeps: {{keep.keepCount}}</p>
        <p>Shares: {{keep.shareCount}}</p>
        <i class="glyphicon glyphicon-eye-open"></i><p>{{keep.viewCount}}</p>        
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {

      }
    },
    created() {
      this.$store.dispatch('getAllKeeps')
    },
    computed: {
      keeps() {
        return this.$store.state.keeps
      }
    },
    methods: {

    },
    component: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .size {
    height: 50px;
  }

  .custom {
    background-color: #121210;
    /*border-color: #121210;*/
  }

  .customLink {
    color: #fe0096
  }
  .fit {
    max-width: 100%;
    max-height: auto;
  }
</style>