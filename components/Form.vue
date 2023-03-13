<template>
  <div class="d-flex fill-height">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="12">
        <v-card :class="!$vuetify.breakpoint.smAndDown ? 'dform' : 'mform'">
          <div :class="!$vuetify.breakpoint.smAndDown ? 'scroll-bar' : ''">
            <b-form
              v-if="step == 'register'"
              align="center"
              autocomplete="off"
              @submit.stop.prevent="onSubmit"
            >
              <!-- <div class="text-h6 main-heading">
                {{ title }}
              </div> -->

              <!-- <v-sheet style="background: transparent" class="my-2">
                <div class="ipl-ques">
                  {{ title4 }}
                </div>
                <b-form-group
                  id="example-input-group-6"
                  label-for="example-input-6"
                >
                  <b-form-select
                    id="example-input-6"
                    v-model="$v.form.iplteam1.$model"
                    class="form-select gender form-select-sm mb-2"
                    name="example-input-6"
                    :options="iplteams"
                    :state="validateState('iplteam1')"
                    aria-describedby="input-6-live-feedback"
                  ></b-form-select>

                  <b-form-invalid-feedback
                    id="input-6-live-feedback"
                    class="validating"
                    >Answer is required</b-form-invalid-feedback
                  >
                </b-form-group>
                <div class="ipl-ques">
                  {{ title5 }}
                </div>
                <b-form-group
                  id="example-input-group-6"
                  label-for="example-input-6"
                >
                  <b-form-select
                    id="example-input-6"
                    v-model="$v.form.iplteam2.$model"
                    class="form-select gender form-select-sm mb-2"
                    name="example-input-6"
                    :options="iplteams"
                    :state="validateState('iplteam2')"
                    aria-describedby="input-6-live-feedback"
                  ></b-form-select>

                  <b-form-invalid-feedback
                    id="input-6-live-feedback"
                    class="validating"
                    >Answer is required</b-form-invalid-feedback
                  >
                </b-form-group>
              </v-sheet> -->

              <v-sheet style="background: transparent">
                <div class="main-title-text border-radius-5 my-5">
                  <div class="in-t-text">
                    {{ title3 }}
                  </div>
                </div>
                <div class="information">
                  <b-form-group
                    id="example-input-group-1"
                    label-for="example-input-1"
                    class="fontstyle"
                  >
                    <b-form-input
                      id="example-input-1"
                      v-model="$v.form.name.$model"
                      class="mb-2"
                      type="text"
                      name="name"
                      placeholder="Name"
                      :state="validateState('name')"
                      aria-describedby="input-1-live-feedback"
                    ></b-form-input>
                    <i class="fa fa-user fa-lg"></i>

                    <b-form-invalid-feedback
                      v-if="!$v.form.name.required"
                      id="input-1-live-feedback"
                      class="validating"
                      >Name is required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="!$v.form.name.minLength || !$v.form.name.maxLength"
                      id="input-1-live-feedback"
                      class="validating"
                      >Name should not be less than 3 characters and above 100
                      characters*
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <div class="d-flex align-center">
                    <country-code
                      v-model="form.countryCode"
                      class="mr-2 flex-grow-0 country-code"
                    />
                    <b-form-group
                      id="example-input-group-3"
                      label-for="example-input-3"
                      class="fontuser our-form"
                    >
                      <b-form-input
                        id="example-input-3"
                        v-model="$v.form.mobileNo.$model"
                        type="text"
                        pattern="\d*"
                        maxlength="10"
                        class="mb-2"
                        min="0"
                        onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                        name="mobileNo"
                        oninput="validity.valid||(value='');"
                        placeholder="Phone No"
                        :state="validateState('mobileNo')"
                        aria-describedby="input-3-live-feedback"
                      ></b-form-input>
                      <i class="fas fa-phone"></i>

                      <b-form-invalid-feedback
                        v-if="!$v.form.mobileNo.required"
                        id="input-3-live-feedback"
                        class="validating"
                        >Mobile Number is required*
                      </b-form-invalid-feedback>
                      <b-form-invalid-feedback
                        v-if="!$v.form.mobileNo.maxLength"
                        id="input-3-live-feedback"
                        class="validating"
                        >Invalid Mobile Number*
                      </b-form-invalid-feedback>
                      <b-form-invalid-feedback
                        v-if="!$v.form.mobileNo.minLength"
                        id="input-4-live-feedback"
                        class="validating"
                        >Mobile Number is not valid*
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>

                  <b-form-group
                    id="example-input-group-2"
                    label-for="example-input-2"
                    class="fontuser"
                  >
                    <b-form-input
                      id="example-input-2"
                      v-model="$v.form.userName.$model"
                      class="mb-2"
                      type="email"
                      name="userName"
                      placeholder="Email"
                      :state="validateState('userName')"
                      aria-describedby="input-2-live-feedback"
                    ></b-form-input>
                    <i class="fas fa-envelope"></i>

                    <b-form-invalid-feedback
                      v-if="!$v.form.userName.required"
                      id="input-2-live-feedback"
                      class="validating"
                      >Email is required*
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="!$v.form.userName.email"
                      id="input-2-live-feedback"
                      class="validating"
                      >Email is invalid*
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="!$v.form.userName.maxLength"
                      id="input-2-live-feedback"
                      class="validating"
                      >Email must be less than 45 characters*
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="example-input-group-4"
                    label-for="example-input-4"
                    class="fontuser"
                  >
                    <b-form-input
                      id="example-input-4"
                      v-model="$v.form.password.$model"
                      type="password"
                      min="6"
                      maxlength="10"
                      class="mb-2"
                      name="password"
                      placeholder="Password"
                      :state="validateState('password')"
                      aria-describedby="input-4-live-feedback"
                      @input="isPasswordStrong()"
                    ></b-form-input>
                    <i class="fas fa-lock"></i>

                    <b-form-invalid-feedback
                      v-if="!$v.form.password.required"
                      id="input-4-live-feedback"
                      class="validating"
                      >Password is required*
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="
                        !$v.form.password.minLength ||
                        !$v.form.password.maxLength
                      "
                      id="input-4-live-feedback"
                      class="validating"
                    >
                      <ul>
                        <li>
                          Password must be min of 6 and max of 10 characters*
                        </li>
                        <li>
                          Password must contain An upper case, lower case and
                          Number*
                        </li>
                      </ul>
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="!isPasswordStrongFlag"
                      class="validating"
                    >
                      <div>
                        Oops, this is one of the easy passwords to get hacked!
                        Please use a combination of numbers, alphabets and
                        signs.
                      </div>
                    </b-form-invalid-feedback>
                  </b-form-group>
                </div>
              </v-sheet>
              <recaptcha
                v-if="captchaOn"
                @error="onError"
                @success="onSuccess"
                @expired="onExpired"
              />

              <v-btn
                type="submit"
                :loading="loading"
                color="primary"
                class="mt-2 mb-2 rounded-lg px-5 join_now_btn btn btn-primary"
                small
                :disabled="$v.form.$invalid"
              >
                JOIN NOW
              </v-btn>
            </b-form>
            <b-form
              v-else
              align="center"
              :class="!$vuetify.breakpoint.smAndDown ? 'dform' : 'mform'"
              @submit.stop.prevent="onConfirm"
            >
              <div class="main-title-text">
                <div class="in-t-text">
                  {{ title2 }}
                </div>
              </div>
              <div class="information">
                <b-form-group
                  id="example-input-group-code"
                  label-for="example-input-code"
                  class="fontuser"
                >
                  <b-form-input
                    id="example-input-code"
                    v-model="$v.confirmForm.code.$model"
                    class="mb-2"
                    type="number"
                    name="code"
                    placeholder="OTP"
                    :state="validateOtpState('code')"
                    aria-describedby="input-code-live-feedback"
                  ></b-form-input
                  ><i class="fa fa-key" aria-hidden="true"></i>
                  <!-- :state="validateState('otp')" -->
                  <b-form-invalid-feedback
                    id="input-code-live-feedback"
                    class="validating"
                    >Please check your mobile number for OTP
                  </b-form-invalid-feedback>
                </b-form-group>
              </div>
              <recaptcha
                v-if="captchaOn"
                @error="onError"
                @success="onSuccess"
                @expired="onExpired"
              />
              <v-btn
                type="submit"
                :loading="loading"
                color="primary"
                class="mt-4 rounded-lg"
              >
                Confirm
              </v-btn>
              <div class="mt-2">
                <v-btn color="primary" text @click="resendCode()"
                  >Resend Code</v-btn
                >
              </div>
            </b-form>
          </div>
        </v-card>
      </v-col>
      <!-- <v-col cols="12" style="padding-top: 2px">
        <div class="text-uppercase text-center f-25 fw-bold my-2">
          click below & get your id now
        </div>
        <div class="main-title-text border-radius-5 my-5 py-1">
          <div class="in-t-text avail-bonus">
            <span>
              <img
                src="/Background/WhatsApp_icon.png"
                alt="/WhatsApp_icon"
                class="ml-4"
                height="22"
                width="22"
              />
            </span>
            <span class="avail-your-bonus">
              {{ title5 }}
            </span>
            <span>
              <img
                src="/Background/download_icon.png"
                alt="/download_icon"
                class="mr-4"
                height="20"
                width="20"
              />
            </span>
          </div>
        </div>
      </v-col> -->
      <!-- <recaptcha
        v-if="captchaOn"
        @error="onError"
        @success="onSuccess"
        @expired="onExpired"
      /> -->
    </v-row>
  </div>
</template>

<script>
/*eslint-disable*/
import { validationMixin, helpers } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import _ from 'lodash'
import service from '../services/apiService'
import CountryCode from '@/components/countryCode'
import maxLength from 'vuelidate/lib/validators/maxLength'
import recaptcha from '../recaptcha.vue'
export default {
  mixins: [validationMixin],
  components: {
    CountryCode,
  },
  data() {
    return {
      captchaOn: true,
      // captcha: '',
      isPasswordStrongFlag: true,
      // affiliateCodeInputDisable: false,
      // valid: true,
      url: process.env.fairplayUrl,
      // title: 'FILL DETAILS TO GET BONUS',
      title2: 'ENTER OTP',
      loading: false,
      step: 'register',
      title3: 'FILL DETAILS TO GET BONUS',
      title5: 'AVAIL YOUR BONUS',
      datetype: false,
      // title4: "Which team's player will get the orange cap this T20 season?",
      // title5: 'Who will win the title this T20 season?',
      confirmForm: { userName: '', mobileNo: '', code: '', captcha: '' },
      genders: [
        { value: '', text: 'Select Gender', disabled: true },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
        { value: 'I prefer not to say', text: 'I prefer not to say' },
      ],
      // iplteams: [
      //   { value: '', text: 'Select team', disabled: true },
      //   { value: 'Team Mumbai', text: 'Team Mumbai' },
      //   { value: 'Team Chennai', text: 'Team Chennai' },
      //   { value: 'Team Delhi', text: 'Team Delhi' },
      //   {
      //     value: 'Team Bangalore',
      //     text: 'Team Bangalore',
      //   },
      //   { value: 'Team Kolkata', text: 'Team Kolkata' },
      //   { value: 'Team Punjab', text: 'Team Punjab' },
      //   { value: 'Team Rajasthan', text: 'Team Rajasthan' },
      //   { value: 'Team Hyderabad', text: 'Team Hyderabad' },
      // ],
      form: {
        captcha: '',
        name: '',
        userName: '',
        gender: '',
        mobileNo: '',
        password: '',
        // dob: '',
        countryCode: '91',
        // affiliateCode: '',

        // iplteam1: '',
        // iplteam2: '',
      },
      selected: null,
    }
  },
  validations: {
    form: {
      // gender: {
      //   required,
      // },
      userName: {
        required,
        email,
        maxLength: maxLength(45),
      },
      mobileNo: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(10),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(10),
        valid: function (value) {
          const containsUppercase = /[A-Z]/.test(value)
          const containsLowercase = /[a-z]/.test(value)
          const containsNumber = /[0-9]/.test(value)
          return containsUppercase && containsLowercase && containsNumber
        },
        // containsPasswordRequirement: helpers.withMessage(
        //   () =>
        //     `The password requires an uppercase, lowercase, number`,
        //   (value) =>
        //     /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)
        // ),
      },
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(100),
      },
      // dob: {
      //   required,
      // },
      // iplteam1: {
      //   required,
      // },
      // iplteam2: {
      //   required,
      // },
    },
    confirmForm: {
      code: {
        required,
      },
      captcha: {
        required,
      },
    },
  },
  computed: {
    ipBlock() {
      return this.$store.state.ip.blockIpData
    },
    error() {
      return this.$store.state.authenticate.error
    },
  },
  async mounted() {
    this.blockUserIp()
    if (this.$route && this.$route.query && this.$route.query.btag) {
      localStorage.setItem('fairplay_affilates', this.$route.query.btag)
    } else {
      localStorage.setItem('fairplay_affilates', 'fairplayaff')
    }
    // if (
    //   this.$route &&
    //   this.$route.query &&
    //   this.$route.query.btag &&
    //   this.$route.query.clickid
    // ) {
    //   if (this.$route && this.$route.query && this.$route.query.btag) {
    //     localStorage.setItem('fairplay_affilates', this.$route.query.btag)
    //   }
    //   if (localStorage.getItem('fairplay_affilates')) {
    //     const code2 = localStorage.getItem('fairplay_affilates')
    //     if (code2) {
    //       this.affiliateCodeInputDisable = true
    //       // this.referalCodeInputDisable = true
    //       this.form.affiliateCode = code2
    //     }
    //   }
    //   localStorage.removeItem('fairplay_clickid')
    //   if (this.$route && this.$route.query && this.$route.query.clickid) {
    //     localStorage.setItem('fairplay_clickid', this.$route.query.clickid)
    //   }
    // } else {
    //   this.form.affiliateCode = 'DigiMaze'
    // }
  },
  methods: {
    onError(error) {
      // console.log('Error happened:', error)
    },
    onSuccess(token) {
      // console.log('Succeeded:', token)
    },
    onExpired() {
      window.location.reload()
    },
    isPasswordStrong() {
      // console.log('cgech', this.form.password)
      let strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
      if (
        this.form.password.length >= 6 &&
        !strongPasswordPattern.test(this.form.password)
      ) {
        this.isPasswordStrongFlag = false
      } else {
        this.isPasswordStrongFlag = true
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    validateOtpState(name) {
      const { $dirty, $error } = this.$v.confirmForm[name]
      return $dirty ? !$error : null
    },
    onFocus() {
      this.datetype = true
      setTimeout((x) => {
        this.$refs.inputdate.$el.focus() // just watch out with going too fast !!!
      }, 500)
    },
    // resetForm() {
    //   this.form = {
    //     name: null,
    //     gender: null,
    //     userName: null,
    //     mobileNo: null,
    //     password: null,
    //     dob: null,
    //   }
    //   this.$nextTick(() => {
    //     this.$v.$reset()
    //   })
    // },
    onSubmit() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        return
      }
      this.register()
    },
    showSnackbar({ content, color }) {
      this.$store.commit('snackbar/set_open', {
        text: content,
        color,
      })
    },
    async blockUserIp() {
      await this.$store.dispatch('ip/blockUserIp')
    },
    async register() {
      try {
        if (
          this.ipBlock &&
          this.ipBlock.data &&
          this.ipBlock.data.data &&
          this.ipBlock.data.status &&
          this.ipBlock.data.status !== 200
        ) {
          this.showSnackbar({
            content:
              this.ipBlock.data.message ||
              'Error code 507, Please contact admin',
            color: 'error',
          })
          return
        }
        // if (!this.$store.state.ip.value) {
        //   await this.$store.dispatch('ip/get')
        // }
        this.form.userName = this.form.userName.toLowerCase()
        this.form.userName = this.form.userName.trim()
        this.form.affiliateCode = localStorage.getItem('fairplay_affilates')
        this.form.dob = '1990-01-01'
        this.form.gender = 'I prefer not to say'
        this.form.whereYouLearnAbout = 'Banner'
        let recaptchaToken = 'null'
        if (this.captchaOn) {
          recaptchaToken = await this.$recaptcha.getResponse()
          await this.$recaptcha.reset()
        }
        this.loading = true
        this.form.captcha = recaptchaToken
        var registerObj = await this.$store.dispatch(
          'authenticate/register',
          this.form
        )
        this.loading = false
        if (!registerObj) {
          this.showSnackbar({ content: 'Please try again', color: 'error' })
          this.$store.commit('authenticate/set_error', null)
        } else if (
          registerObj.data &&
          registerObj.data.status &&
          registerObj.data.status === 200
        ) {
          this.step = 'confirmRegistration'
          this.confirmForm.code = ''
          this.confirmForm.userName = this.form.userName
          this.confirmForm.mobileNo =
            '+' + this.form.countryCode + this.form.mobileNo
          // console.log("console 3>>");
          this.showSnackbar({
            content: registerObj.data.data
              ? registerObj.data.data
              : `Code sent to ${this.confirmForm.mobileNo}`,
            color: 'success',
          })
        } else if (registerObj.data && registerObj.data.error) {
          console.log(registerObj.data.error, 'register')
          for (const x in registerObj.data.error) {
            // console.log("console 2>>", registerObj.data.error);
            this.showSnackbar({
              content: registerObj.data.error[x] || 'Please try again',
              color: 'error',
            })
            this.$store.commit('authenticate/set_error', null)
          }
        } else {
          this.showSnackbar({ content: 'Please try again', color: 'error' })
          this.$store.commit('authenticate/set_error', null)
        }
      } catch (err) {
        console.log(err)
      }
    },
    onConfirm() {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      this.confirmRegristration()
      // alert('Form submitted!')
    },

    async confirmRegristration() {
      try {
        this.loading = true
        const result = await this.$store.dispatch(
          'authenticate/confirmRegistration',
          this.confirmForm
        )
        if (result && result.status && result.status === 200) {
          // if (this.form.affiliateCode.trim().length > 0) {
          //   localStorage.setItem('fairplay_affilates', this.form.affiliateCode)
          // }
          this.resultData = {
            name: this.form.name,
            email: _.toLower(this.form.userName),
            mobileNo: this.form.countryCode + this.form.mobileNo,
            accessToken: result.data.data.accessToken,
            dob: '01-01-1990',
            referredBy: this.form.referalCode,
            affiliateCode: this.form.affiliateCode,
            gender: 'I prefer not to say',
            whereYouLearnAbout: this.form.whereYouLearnAbout,
          }
        }
        this.loading = false
        if (this.error && this.error.message) {
          this.showSnackbar({ content: this.error.message, color: 'error' })
          this.$store.commit('authenticate/set_error', null)
          return
        }
        const encryptedPassword = window.btoa(this.form.password)
        const encryptedEmail = window.btoa(this.form.userName)
        window.location.replace(
          `https://fairplay.club/login/?username=${encryptedEmail}&password=${encryptedPassword}&login=autologin`
        )

        // this.$router.push('https://fairplay.club')
        // window.location.replace('https://fairplay.club')
      } catch (err) {
        console.log(err)
      }
    },
    async resendCode() {
      const resentOtp = await this.$store.dispatch(
        'authenticate/resendOtpmobileForSignup',
        this.confirmForm
      )
      if (!resentOtp) {
        this.showSnackbar({ content: 'Please try again', color: 'error' })
        this.$store.commit('authenticate/set_error', null)
        return
      } else if (
        resentOtp.data &&
        resentOtp.data.status &&
        resentOtp.data.status === 200
      ) {
        // this.step = 'confirmRegistrationForm'
        this.confirmForm.mobileNo = resentOtp.data.user.mobileNo
        this.showSnackbar({
          content: resentOtp.data.data
            ? resentOtp.data.data
            : `Code sent to ${this.confirmForm.mobileNo} `,
          color: 'success',
        })
        return
      } else if (resentOtp.data && resentOtp.data.error) {
        for (const x in resentOtp.data.error) {
          this.showSnackbar({
            content: resentOtp.data.error[x] || 'Please try again',
            color: 'error',
          })
          this.$store.commit('authenticate/set_error', null)
        }
        return
      } else {
        this.showSnackbar({ content: 'Please try again', color: 'error' })
        this.$store.commit('authenticate/set_error', null)
        return
      }
    },
    async login() {
      let recaptchaToken = 'null'
      if (this.captchaOn) {
        try {
          recaptchaToken = await this.$recaptcha.getResponse()
          await this.$recaptcha.reset()
        } catch (error) {
          console.log('Error with recaptcha : ', error)
        }
      }
      try {
        const loginObj = {
          userName: this.form.userName,
          password: this.form.password,
          countryCode: this.form.countryCode,
          captcha: recaptchaToken,
        }
        this.loading = true
        const user = await this.$store.dispatch('authenticate/login', loginObj)
        this.loading = false
        if (this.error && this.error.message) {
          this.showSnackbar({ content: this.error.message, color: 'error' })
          this.$store.commit('authenticate/set_error', null)
          return
        }
        localStorage.setItem('accessToken', user.data.data.accessToken)
        this.loading = true
        this.resultData.affiliate = localStorage.getItem('fairplay_affilates')
        this.resultData.isPromoted = true
        const tokenData = {
          accessToken: user.data.data.accessToken,
        }
        await service.apiCallWithData('/User/saveUserAmplify', {
          data: this.resultData,
          tokenData,
        })
        const bharatarmyJson = {
          whoWillWinFairPlayAward: this.form.iplteam1,
          whoWillWinThisIpl: this.form.iplteam2,
        }
        await service.apiCallWithHeader('/v2/bharatarmy', bharatarmyJson)
        // this.form.ip = this.$store.state.ip.value
        // const playSignupResponse = await this.$store.dispatch(
        //   'playExch/playExchSignup',
        //   this.form
        // )
        // if (
        //  !playSignupResponse ||
        // !playSignupResponse.data ||
        //  !playSignupResponse.data.value
        // ) {
        //  this.showSnackbar({
        //  content: 'Failed to signup.',
        //  color: 'error'
        // })
        this.showSnackbar({
          content: 'Signed-Up Successfully.',
          color: 'success',
        })
        this.loading = false
        localStorage.removeItem('fairplay_affilates')
        // const cryptoPassword = encryptor.encrypt(this.form.password)
        // const cryptPassword = cryptr.encrypt(this.form.password)
        // var encodeCryptoPassword = encodeURIComponent(cryptoPassword)
        const encodeCryptoPassword = window.btoa(this.form.password)
        window.location.replace(
          `${this.url}/promote/${this.form.userName}/${encodeCryptoPassword}/${this.form.countryCode}`
        )
      } catch (err) {
        console.log(err)
      }
    },
    async playLogin(userData) {
      if (!this.$store.state.ip.value) {
        await this.$store.dispatch('ip/get')
      }
      const playExchLoginData = {
        username: userData.email,
        password: userData.playExchPwd,
        clientIP: this.$store.state.ip.value,
        deviceId: '',
        siteOrigin: process.env.SITE_ORIGIN,
      }
      try {
        await this.$auth.loginWith('customLocal', {
          baseURL: process.env.USERS_API_URL,
          data: playExchLoginData,
        })
        await Promise.all([this.$store.dispatch('settings/getUserConfig')])
        this.showSnackbar({
          content: 'Signed-Up Successfully.',
          color: 'success',
        })
        let redirectUrl
        if (this.$route.query && this.$route.query.redirectUrl) {
          redirectUrl = this.$route.query.redirectUrl
        } else {
          redirectUrl = '/'
        }
        this.loading = false
        this.$router.push(redirectUrl)
      } catch (error) {
        this.loading = false
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          this.$store.commit('snackbar/open', {
            text: error.response.data.error,
            color: 'error',
          })
        } else {
          this.$store.commit('snackbar/open', {
            text: 'Invalid credentials, please try again!',
            color: 'error',
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ipl-ques {
  font-size: 14px;
  text-align: left;
  color: #1d1a1a;
  margin-left: 3px;
}
.main-title-text {
  // border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(225, 91, 39);
  border-color: rgb(225, 91, 39);
  // border-radius: 5px;
  width: 100%;
  text-align: center;
  margin: auto;
  letter-spacing: 1px;
  .in-t-text {
    color: #ffffff;
    padding: 2px;
  }
}
.main-heading {
  color: #e15b27;
  font-size: 26px !important;
  font-weight: 900 !important;
}
.terms-conditions {
  color: #000000;
  font-size: 12px;
}
.dform {
  border-radius: 10px;
  // margin: 20% 50px;
  // padding: 20px 35px;
  // background-image: url('/Background/1.jpg');
  position: relative;
  background-image: linear-gradient(#f4f1f1, #d0cfcf);
}
.mform {
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px 25px;
  // background-image: url('/Background/1.jpg');
  position: relative;
  background-image: linear-gradient(#f4f1f1, #d0cfcf);
}
.dform:before,
.dterms:before,
.dterms:after,
.dform:after {
  z-index: -1;
  position: absolute;
  content: '';
  bottom: 6px;
  left: 3px;
  width: 50%;
  top: 80%;
  max-width: 300px;
  background: #777;
  -webkit-box-shadow: 0 16px 16px 0px #1d1c1ca6;
  -moz-box-shadow: 0 16px 16px 0px #1d1c1ca6;
  box-shadow: 0 16px 16px 0px #1d1c1ca6;
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
  -ms-transform: rotate(-3deg);
  transform: rotate(-3deg);
}
.dform:after,
.dterms:after {
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  transform: rotate(3deg);
  right: 4px;
  left: auto;
}
input[type='date']::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
.scroll-bar {
  padding: 22px 38px;
  max-height: 625px;
  overflow-y: auto;
}
.scroll-bar::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
.scroll-bar::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #dad8d9;
}
.form-select {
  width: 100%;
  height: auto;
  // height: 36px;
  border-radius: 8px;
  margin-bottom: 5px;
  background-color: white;
  outline: none;
  // box-shadow: inset 0 0 5px #c8c2bc;
  box-shadow: inset 4px 4px 5px 0px #ececec;
}
.form-control {
  font-size: 13px;
  border-radius: 8px !important;
  box-shadow: inset 4px 4px 5px 0px #ececec;
  // padding: 0.9rem 2rem 1rem 1rem !important;
}
.information {
  display: block;
  margin-top: 20px;
}
body {
  padding: 1rem;
}
.validating {
  text-align: left;
  font-size: 12px;
  margin: 0;
}
option {
  padding: 0;
  color: orangered;
}
.v-btn .v-btn__content {
  font-size: 14px !important;
}
.v-btn.font-14 {
  font-size: 14px !important;
}
input::placeholder {
  color: #8b8786;
  font-size: 13px;
  font-weight: bold;
  // padding-left: 1rem;
}
.fontstyle {
  position: relative;
}
.fontstyle i {
  position: absolute;
  left: 0;
  margin: 11px;
  top: 0;
  color: gray;
  font-size: 13px;
  vertical-align: top;
}
#example-input-1,
#example-input-2,
#example-input-3,
#example-input-4,
#example-input-code {
  padding-left: 35px;
}
.fontuser {
  position: relative;
}
.fontuser i {
  position: absolute;
  left: 0;
  margin: 10px;
  top: 0;
  color: gray;
  font-size: 13px;
  vertical-align: top;
}
@media only screen and (max-width: 600px) {
  .main-heading {
    font-size: 22px !important;
  }
  .main-title-text {
    font-size: 10px !important;
  }
}
.our-form {
  width: 100%;
}
.dterms {
  border-radius: 10px;
  padding: 10px 35px;
  position: relative;
  background-image: linear-gradient(#f0eeed, #bfbdbe);
  box-shadow: 2px 3px 11px 2px rgb(0 0 0 / 20%) !important;
}
.join_now_btn {
  font-weight: 900;
  font-size: medium;
}
// .avail-bonus {
//   display: flex;
//   place-content: center;
//   justify-content: space-between;
// }

.border-radius-5 {
  border-radius: 5px !important;
}
// .avail-your-bonus {
//   font-size: larger;
//   font-weight: 900;
// }
.join-disable {
  background-color: grey !important;
  color: #fff !important;
  cursor: not-allowed;
  pointer-events: none;
}
.btn.btn-primary[disabled] {
  background-color: grey !important;
  color: #fff !important;
  border: none;
}
// .btn_color {
//   background-color: #f36f21;
// }
// button:disabled,
// button[disabled]{
//   border: 1px solid #999999 !important;
//   background-color: grey !important;
//   color: #fff !important;
// }

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>