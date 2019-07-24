<template>
<v-app>
    <toolbar  :title="title" :show="true"></toolbar>
    <v-container>
      <v-flex>
        <v-flex my-3 text-xs-center display-1 orange--text>MESSAGE US !!</v-flex>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Personal Details</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Message</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Thank You</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class=" elevation-0"
          height="300px"
        > 
           <v-flex text-xs-center pt-1 orange--text><h2>Personal Details</h2></v-flex>
           <v-form v-model="valid">
           <v-text-field
          v-model="name"
          class="mx-3 mt-4"
          label="NAME"
          :rules="namerules"
          box
          outline
          required
          flat
          clearable
          prepend-inner-icon="person"
          background-color="blue"
        ></v-text-field>
         <v-text-field
          v-model="gmail"
           class="mx-3"
          :rules="emailRules"
          label="E-mail"
          box
          outline
          required
          flat
          clearable
          prepend-inner-icon="email"
          background-color="blue"
        ></v-text-field>
        <v-flex text-xs-center>
        <v-btn
          color="primary"
          @click="e1 = 2"
          round 
          large
          outline
          :disabled="!valid"
        >
          Continue
        </v-btn>
        </v-flex>
        </v-form>
    </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class=" elevation-0"
          height="300px"
        >
    <v-form v-model="valid1">
         <v-flex text-xs-center pb-3 pt-2 orange--text><h2>Message</h2></v-flex>
           <v-textarea
      v-model="message"
      background-color="blue"
      label="Message"
      outline
      :rules="namerules"
      clearable=""
      counter=""
      prepend-inner-icon="message"
      box=""
      aria-required=""
    >
    </v-textarea>
        <v-btn
          color="primary"
          round
          outline
          large
          @click="e1 = 3"
          :disabled="!valid1"
          type="submit"
        >
          Submit
        </v-btn>
        <v-btn 
        color="red darken-1"
          round
          outline
          large
           @click="e1 = 1" flat>Back</v-btn>
    </v-form>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="elevation-0"
          height="300px"
        > <v-flex text-xs-center pt-5 orange--text><h2>Thanks For Your Feedback !!</h2>

        <v-btn
          color="primary"
          @click="e1 = 1"
          outline
          round
          large
          class="mt-5"
        >
          Welcome
        </v-btn>
        </v-flex>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
      </v-flex>
    </v-container>
      


    <fv></fv>
</v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import fv from './fv'
export default {
  components:{
    toolbar,fv
  },
  data(){
      return{
          title: 'CSE DEPARTMENT',
          valid1: false,
          valid: false,
          gmail: null,
          message: null,
          name: null,
          e1:0,
          namerules: [
                v => !!v || 'Name is required',
                ], 
         emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@skct.edu.in/.test(v) || /.+@gmail.com/.test(v) || 'E-mail must be valid'
        ], 
      }},
}
</script>

<style>

</style>
