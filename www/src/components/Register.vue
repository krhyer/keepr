<template>
  <div class="Register">
    <div class="container-fluid">
      <h1>Create Your Account</h1>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="well well-sm custom-well-small">
            <form @submit.prevent="register">
              <div class="row">
                <div class="col-xs-12">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-user-circle"></i>
                    </span>
                    <input type="text" class="form-control" v-model="user.name" required placeholder="first name">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <input type="email" class="form-control" v-model="user.email" required placeholder="email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-key"></i>
                    </span>
                    <input type="password" class="form-control" v-model="user.password" required placeholder="password">
                  </div>
                </div>
              </div>
              <div class="form group row">
                <button class="btn btn-default" type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
          <h4>Already have an account... LOGIN
            <router-link to='/login'>here</router-link>!</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Register',
    data() {
      return {
        user: {}
      }
    },
    computed: {},
    methods: {
      register() {
        this.$store.dispatch('register', this.user)
      }
    },
    components: {}
  }

</script>


<style scoped>
  .well {
    border-color: #fe0096;
    background: white
  }

  input {
    border-color: #fe0096;
  }

  button {
    border-color: #fe0096;
  }

  span {
    border-color: #fe0096;
  }
</style>