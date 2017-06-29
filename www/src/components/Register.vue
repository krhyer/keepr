<template>
    <div class="Register">
        <div class="container-fluid">
            <h1 class="dungeon">Create Your Account</h1>
            
                <div class="well">
                    <form @submit.prevent="register">
                        <div class="input-group">
                            <span class="input-group-addon fa fa-user-circle"></span>
                            <div class="col-10">
                                <input type="text" class="form-control" v-model="user.name" required placeholder="first name">
                            </div>
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon fa fa-envelope-open"></span>
                            <div class="col-10">
                                <input type="email" class="form-control" v-model="user.email" required placeholder="email">
                            </div>
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon fa fa-star"></span>
                            <div class="col-10">
                                <input type="password" class="form-control" v-model="user.password" required placeholder="password">
                            </div>
                        </div>
                        <div class="form group row">
                            <div class="col-10">
                                <button class="btn btn-default" type="submit">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                
            </div>
            <h2 class="dungeon">Already have an account... LOGIN
                <router-link to='/login'>here</router-link>!</h2>
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

</style>