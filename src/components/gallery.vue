<template>
    <v-app>
        <toolbar  :tool_name="title" :show="true"></toolbar>
         <v-btn color="blue" @click="$router.push('/')" outline>Back to main page</v-btn>
             <v-layout row wrap justify-center align-center mx-1 mt-2>
                  <div v-for="i in 9" :key="i" class="px-3" style="overflow:hidden;">
                   <v-img :src="img_src" height="200px" width="340px" ></v-img>
                   <p style="font-size:20px">{{ img_name }}</p>
                  </div>  
             </v-layout>
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
                    title: '- CSE DEPARTMENT',
                    img_name: 'inarguation function',
                    img_src: "http://skct.edu.in/images/portfolio/3.jpg"
                    }
 },
 }
</script>
