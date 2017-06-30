import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  vaults: [],
  keeps: [],
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store({
  // ALL DATA LIVES IN THE STATE
  state,

  mutations:{
    setUser(state, user) {
      state.user = user
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
    }
  },
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          console.log(user)
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
          router.push('/vaults')
        })
        .catch(handleError)
    },
    register({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit("setUser", res.data.data)
          router.push('/vaults')
        })
        .catch(handleError)
    },
    getAuth() {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            return router.push('/login')
          }
          state.user = res.data.data
          router.push('/vaults')
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/')
        }).catch(handleError)
    },
    getVaults({ commit, dispatch }) {
      api('uservaults')
        .then(res => {
          console.log(res.data.data)
          commit('setVaults', res.data.data)
        })
        .catch(handleError)
    },
    createVault({ commit, dispatch }, vault) {
      api.post('/vaults/', vault)
        .then(res => {
          dispatch('getVaults')
        })
        .catch(handleError)
    },
    removeVault({ commit, dispatch }, vault) {
      api.delete('/vaults/' + vault._id)
        .then(res => {
          dispatch('getVaults')
        })
        .catch(handleError)
    },
    removeKeep({ commit, dispatch }, keep) {
      api.delete('/keeps/' + keep._id)
        .then(res => {
          dispatch('getKeeps')
        })
        .catch(handleError)
    },
    getKeeps({ commit, dispatch }) {
      api('userkeeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
    },
    createKeep({ commit, dispatch }, keep) {
      api.post('/keeps/', keep)
        .then(res => {
          dispatch('getKeeps')
        })
        .catch(handleError)
    },
    getAllKeeps({ commit, dispatch }) {
      api('keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
    }
  }

})

