<template>
    <v-app>
        <toolbar  :title="title" :show="true"></toolbar>
             <v-flex text-xs-center>

                GALLERY
             
             </v-flex>
        <fv></fv>
        <footnav></footnav>
    </v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import fv from './fv'
import footnav from './footnav.vue'
export default {
  components:{
    toolbar,fv,footnav
  },
  data(){
      return{
          title: 'CSE DEPARTMENT',
      }}
}
</script>
