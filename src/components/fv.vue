<template>
<div>
  <div data-aos="fade-in">
  <v-footer
    height="auto"
    class="mb-5 hidden-md-and-up"
    color="indigo lighten"
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
           <h1>HEAD OF THE DEPARTMENT<br /></h1>    
            {{ nme }},<br />
            HOD - {{ dep }},<br />
            Sri Krishna College Of Technology,<br />
            Kovaipudur,<br />
            Coimbatore-42.<br />
            <br />
            EMAIL: {{ email }}<br />
            PHONE: {{no}} <br />
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
      
        <strong>Copyright © 2019 SKCT</strong>
      </v-flex>
      </v-layout>
  </v-footer>
  </div>

  <!-- computer -->
   <v-footer
    height="auto"
    class="hidden-sm-and-down"
    color="indigo accent-3"
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
          <h1>HEAD OF THE DEPARTMENT<br /></h1>    
            {{ nme }},<br />
            HOD - {{ dep }},<br />
            Sri Krishna College Of Technology,<br />
            Kovaipudur,<br />
            Coimbatore-42.<br />
            <br />
            EMAIL: {{ email }}<br />
            PHONE: {{no}} <br />
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
      
        <strong>Copyright © 2019 SKCT</strong>
      </v-flex>
      </v-layout>
  </v-footer>
  </div>
</template>

<script>
export default{
  props:['nme', 'dep', 'email', 'no']
}
</script>

<style>

</style>
