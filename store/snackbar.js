export const state = () => ({
  model: false,
  text: '',
  color: '',
  timeout: 3000,
})

export const mutations = {
  set_close(state) {
    state.model = false
  },
  set_open(state, { text, color }) {
    state.model = true
    state.text = text
    state.color = color
  },
  set_model(state, data) {
    state.model = data
  },
}

export const getters = {
  get_model(state) {
    return state.model
  },
}
