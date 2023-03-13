import axios from 'axios'
// const adminUrl = 'https://api.fairplay.club'
// const fairplayManagementUrl = 'https://apiusermanagemet.fairplay.club'
// const adminUrl = 'https://testapi.fairplay.club'
// const fairplayManagementUrl = 'https://testapiusermanagemet.fairplay.club'

const adminUrl = process.env.fairplayAdminUrl
const fairplayManagementUrl = process.env.fairplayManagementUrl
export default {
  async apiCallWithOutData(url) {
    // if (process.server) {
    //   return
    // }
    return await axios
      .post(adminUrl + url)
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },
  async apiCallWithData(url, data) {
    if (process.server) {
      return
    }
    return await axios
      .post(adminUrl + url, data)
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  async apiCallWithHeader(url, data) {
    if (process.server) {
      return
    }
    return await axios
      .post(adminUrl + url, data, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err.response
      })
  },
  async apiCallWithHeaderUsingGet(url) {
    return await axios
      .get(adminUrl + url, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err.response
      })
  },
  async updateApiCallWithHeader(url) {
    if (process.server) {
      return
    }
    return await axios
      .put(
        adminUrl + url,
        {},
        {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          },
        }
      )
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },
  async apiCallWithUserManagement(url, data) {
    if (process.server) {
      return
    }
    return await axios
      .post(fairplayManagementUrl + url, data)
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err.response
      })
  },
}
