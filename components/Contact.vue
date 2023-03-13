<template>
  <form
    action="GET"
    align="center"
    :class="!$vuetify.breakpoint.smAndDown ? 'dform' : 'mform'"
    @submit.prevent=""
  >
    <v-btn class="mb-1" x-small depressed dark color="#e15b27">
      {{ title }}
    </v-btn>
    <div class="information">
      <input
        type="text"
        name="Name"
        placeholder="&#xf007;  Name"
        style="font-family: Arial, 'Font Awesome 5 Free'"
      /><br />
      <input
        type="email"
        name="Email"
        placeholder="&#xf0e0;  Email"
        style="font-family: Arial, 'Font Awesome 5 Free'"
      /><br />
      <input
        type="phoneNo"
        name="PhoneNo"
        placeholder="&#xf095;  Phone No"
        style="font-family: Arial, 'Font Awesome 5 Free'"
      /><br />
      <input
        type="password"
        name="Pass"
        placeholder="&#xf023;  Password"
        style="font-family: Arial, 'Font Awesome 5 Free'"
      /><br />
      <div class="item">
        <input id="bdate" type="date" name="bdate" required />
      </div>
      <select
        id="teams"
        name="teams"
        class="form-select gender form-select-sm mb-2"
        required
      >
        <option value="" disabled selected>Select Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
    </div>
    <v-btn class="mb-1" x-small depressed dark color="#e15b27">
      {{ title2 }}
    </v-btn>
    <v-sheet style="background: transparent">
      <div v-for="que in ques" :key="que" class="teams">
        <p>{{ que.title }}</p>
        <select
          id="teams"
          name="teams"
          class="form-select form-select-sm"
          required
        >
          <option value="" disabled selected style="color: grey">
            Select Team
          </option>
          <option value="1">Mumbai Indians</option>
          <option value="2">Chennai Super Kings</option>
          <option value="3">Delhi Capitals</option>
          <option value="4">Royal Challengers Bangalore</option>
          <option value="5">Kolkata Knight Riders</option>
          <option value="6">Punjab Kings</option>
          <option value="7">Rajasthan Royals</option>
          <option value="8">Sunrisers Hyderabad</option>
        </select>
      </div>
    </v-sheet>
    <v-btn type="Submit" class="mt-1" x-small depressed dark color="#e15b27">
      {{ button }}</v-btn
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: 'ENTER YOUR DETAILS',
      title2: 'PARTICIPATE',
      button: 'SUBMIT',
      ques: [
        { title: 'Which team will score the maximum boundries this IPL?' },
        { title: 'Which team will hit the maximum sixes this IPL?' },
        { title: 'Which team will take the maximum wickets this IPL?' },
        // {
        //   title: 'Which teams player will be the Orange cap winner this IPL?',
        // },
        // {
        //   title: 'Which teams playe will be the purple cap winner this IPL?',
        // },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.dform {
  border-radius: 10px;
  margin: 10px 50px;
  padding: 15px;
  background-image: url('/Background/1.jpg');
  position: relative;
}

.mform {
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  background-image: url('/Background/1.jpg');
  position: relative;
}

p {
  color: black;
  text-align: left;
  font-size: 11px;
}

span {
  font-size: 10px;
}

.v-application p {
  margin-bottom: 3px;
}

.information {
  display: block;
}

input,
.form-select {
  width: 100%;
  height: 23px;
  padding-left: 8px;
  border-radius: 20px;
  margin-bottom: 5px;
  background-color: white;
  outline: none;
  /* box-shadow: inset 0 0 5px #c8c2bc; */
}

input::placeholder {
  color: #423f3e;
  font-size: 10px;
}

input,
.form-select {
  color: black;
  font-size: 10px;
}

option {
  padding: 0;
  color: orangered;
}
</style>
