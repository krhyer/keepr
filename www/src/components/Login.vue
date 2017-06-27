<template>
    <div class="login">
        <div class="container-fluid">
            <div class="well">
                <form @submit.prevent="login">
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
            <h2>Don't have an account? Register
                <router-link to='/register'>here</router-link>!</h2>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'login',
        data() {
            return {
                user: {}
            }
        },
        computed: {},
        methods: {
            login() {
                this.$store.dispatch('login', this.user)
            }
        },
        components: {}
    }

</script>


<style scoped>

</style>