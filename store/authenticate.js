// import moment from 'moment'
import service from '../services/apiService'

export const state = () => ({
  isAuthenticated: false,
  user: {},
  error: null,
  valueChanged: false,
  allUser: ' ',
})

export const mutations = {
  set_user(state, value) {
    state.allUser = value
  },
  set(state, user) {
    state.user = user
  },
  set_error(state, value) {
    state.error = value
  },
  vmodel_data(state, data) {
    state.form[data.vModel] = data.value
    state.valueChanged = true
  },
}

export const actions = {
  // async load({ commit }) {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser()
  //     commit('set', user)
  //     return user
  //   } catch (error) {
  //     commit('set', null)
  //   }
  // },
  async getProfile({ commit }, formData) {
    try {
      const res = await service.apiCallWithData(
        '/Affiliate/getOneAffiliate',
        formData
      )
      commit('set', res.data)
    } catch (err) {
      commit('set_error', { message: 'Something went wrong' })
    }
  },
  async findUser({ commit }, searchObj) {
    try {
      const res = await service.apiCallWithHeader('/User/findUser', searchObj)
      if (
        res &&
        (res.data === 'Email already registered' ||
          res.data === 'Mobile no. already registered')
      ) {
        commit('set_error', {
          message: res.data,
        })
        // { message: res.data }
      }
    } catch (err) {
      commit('set_error', { message: 'Something went wrong' })
    }
  },
  async register(
    { commit },
    {
      name,
      userName,
      mobileNo,
      password,
      dob,
      referalCode,
      countryCode,
      affiliateCode,
      gender,
      whereYouLearnAbout,
      captcha,
    }
  ) {
    try {
      countryCode = '+' + countryCode
      const userObj = {
        name,
        mobileNo,
        email: userName,
        password,
        dob,
        referalCode,
        countryCode,
        affiliateCode,
        gender,
        whereYouLearnAbout,
        captcha,
      }

      const registerObj = await service.apiCallWithUserManagement(
        '/v2/user/signup',
        userObj
      )
      return registerObj
    } catch (err) {
      commit('set_error', {
        message:
          err.message || 'No Internet connection while signup, try again',
      })
    }
  },
  async confirmRegistration({ commit }, { mobileNo, code }) {
    try {
      const confirmRegister = await service.apiCallWithUserManagement(
        '/User/verifyMobile',
        { mobileNo, code }
      )
      if (!confirmRegister.data.value) {
        commit('set_error', { message: confirmRegister.data.data })
        return confirmRegister
      } else {
        return confirmRegister
      }
    } catch (err) {
      commit('set_error', { message: 'Failed to send OTP !!!' })
    }
  },
  async login({ commit }, { userName, password, countryCode }) {
    try {
      const userObj = { userName, password, countryCode: '+' + countryCode }
      const user = await service.apiCallWithUserManagement(
        '/v2/user/login',
        userObj
      )
      return user
    } catch (err) {
      commit('set_error', {
        message: err.message || 'No Internet connection while login, try again',
      })
    }
  },
  async resendOtpmobileForSignup({ commit }, { mobileNo, userName }) {
    const userObj = {
      mobileNo,
      // email: userName
    }
    try {
      const valueChanged = await service.apiCallWithUserManagement(
        '/v2/user/resendotp',
        userObj
      )
      return valueChanged
    } catch (err) {
      commit('set_error', { message: err.message })
    }
  },
}
