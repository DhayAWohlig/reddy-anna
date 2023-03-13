import service from '../services/apiService'

export const state = () => ({
  loading: false,
  value: undefined,
  impressionData: {},
  blockIpData: {},
})

export const mutations = {
  set(state, data) {
    state.value = data
  },
  set_saveImpression(state, data) {
    state.impressionData = data
  },
  set_blockUserIp(state, data) {
    state.blockIpData = data
  },
}

export const actions = {
  async get({ commit }) {
    try {
      const ip = await this.$axios.$get(process.env.GET_IP_URL)
      commit('set', ip.ip)
    } catch (error) {
      commit('set', '')
    }
  },

  async saveImpression({ commit }, data) {
    const param = {
      path: data,
    }
    try {
      if (state.impressionData) {
        return
      }
      const res = await service.apiCallWithUserManagementWithoutData(
        '/v2/saveImpression',
        param
      )
      commit('set_saveImpression', res.data)
    } catch (err) {
      commit('set_saveImpression', '')
    }
  },
  async blockUserIp({ commit }) {
    try {
      if (state.blockIpData) {
        return
      }
      const res = await service.apiCallWithHeaderUsingGet('/v2/IP/ipcheck')
      commit('set_blockUserIp', res)
      return res
    } catch (err) {
      commit('set_blockUserIp', '')
      return err
    }
  },
}
