<template>
<div>
  <div data-aos="fade-in">
  <v-footer
    height="auto"
    class="mb-5 hidden-md-and-up"
    color="indigo accent-4"
  >
      <v-layout
      justify-center
      row
      wrap
    >
        <v-flex
        pb-2 pt-4 px-5
        text-xs-center
        white--text
        xs12
      >
<<<<<<< HEAD
           <h2>HEAD OF THE DEPARTMENT</h2>    
            {{ hod_name }},<br />
            HOD - {{ hod_dept }},<br />
=======
           <h1>HEAD OF THE DEPARTMENT<br /></h1>    
            {{ nme }},<br />
            HOD - {{ dep }},<br />
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
            Sri Krishna College Of Technology,<br />
            Kovaipudur,<br />
            Coimbatore-42.<br />
            <br />
<<<<<<< HEAD
          EMAIL: {{ hod_email }} <a :href="email">  <v-icon class="red--text mx-1">email</v-icon></a> <br />
            PHONE: {{ hod_no }}<a :href="no"><v-icon class=" mx-1 red--text">phone</v-icon></a>  <br />
=======
            EMAIL: {{ email }}<br />
            PHONE: {{no}} <br />
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
        </v-flex>  
        <v-flex>
        <v-divider></v-divider>  
        </v-flex>   
      <v-flex
       indigo accent-4
        py-3
        text-xs-center
        white--text
        xs12
      >
      <v-divider></v-divider>
        <strong>Copyright © 2019 SKCT</strong>
      </v-flex>
      </v-layout>
  </v-footer>
  </div>

  <!-- computer -->
   <v-footer
    height="auto"
    class="hidden-sm-and-down"
    color="indigo accent-4"
  >
      <v-layout
      justify-center
      row
      wrap
    >
        <v-flex
        pb-2 pt-4 px-5
        text-xs-center
        white--text
        xs12
      >
<<<<<<< HEAD
          <h2>HEAD OF THE DEPARTMENT</h2>    
            {{ hod_name }},<br />
            HOD - {{ hod_dept }},<br />
=======
          <h1>HEAD OF THE DEPARTMENT<br /></h1>    
            {{ nme }},<br />
            HOD - {{ dep }},<br />
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
            Sri Krishna College Of Technology,<br />
            Kovaipudur,<br />
            Coimbatore-42.<br />
            <br />
<<<<<<< HEAD
            EMAIL: {{ hod_email }}<a v-bind:href='email'>  <v-icon class="red--text mx-1">email</v-icon></a> <br />
            PHONE: {{ hod_no }}<a :href="no">  <v-icon class="red--text mx-1">phone</v-icon></a> <br />
=======
            EMAIL: {{ email }}<br />
            PHONE: {{no}} <br />
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
        </v-flex>  
        <v-flex>
        <v-divider></v-divider>  
        </v-flex>   
      <v-flex
        indigo accent-4
        py-3
        text-xs-center
        white--text
        xs12
      >
      <v-divider></v-divider>
        <strong>Copyright © 2019 SKCT</strong>
      </v-flex>
      </v-layout>
  </v-footer>
  </div>
</template>

<script>
export default{
<<<<<<< HEAD
  props:[ 'hod_name', 'hod_dept', 'hod_email', 'hod_no'],
  data(){
    return{
         email: "mailto:"+ this.hod_email ,
         no:"tel:" + this.hod_no,
    }
  }
=======
  props:['nme', 'dep', 'email', 'no']
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
}
</script>

<style>

</style>
