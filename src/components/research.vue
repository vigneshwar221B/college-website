<template>
<v-app>
    <toolbar  :tool_name="title" :show="true"></toolbar>
    
      <div data-aos="fade-in" data-aos-duration="5000"><div class="text-xs-center mt-3"><p style="color:#F57C00;font-size:30px;font-family:cursive;"><u style="text-decoration:none;
           border-bottom: 3px solid black;">Research</u></p>
           <v-container fluid style="color:black;font-size:30px;text-align:center">Our skilled, qualified faculty is encouraged by the Management to initiate research; we also extend the use of selected research facilities to scholars from other institutions and organize national and international conferences to facilitate a healthy exchange of ideas benefiting the larger academic community. We also encourage our faculty to seek external funding for research. </v-container></div></div>
          <v-layout row wrap align-center justify-center mt-4>
          <div  v-for="(item, i) in items" :key="i">
               <div data-aos="flip-up">
            <v-card
              class="elevation-12 ro mx-2  my-3"
              :color="item.color"
              width="220"
              height="221"
            >
                <div  style="text-align:center;"><v-icon class="white--text mt-4" style="font-size: 100px;">{{ item.icon }}</v-icon></div>
                <v-divider dark class="mt-5"></v-divider>
                <div style="text-align:center;"><p class="mt-1 white--text" style="font-size:20px;"><strong>{{ item.title}}</strong></p></div>
            </v-card>
               </div>
            </div>
        
          </v-layout>
        


     <footnav></footnav>
</v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import footnav from './footnav.vue'
import fv from './fv'
export default {
  components:{
    toolbar,fv,footnav
  },
    data(){ 
        return {
          title: 'CSE DEPARTMENT',
        items:[
            {title:"Publications" , icon:"book", color:"red"},
            {title:"Activities" , icon:"hourglass_empty", color:"green"},
            {title:"Enrichment Program" , icon:"build", color:"orange"},
            {title:"Project Proposals" , icon:"dashboard", color:"blue darken-1"},
            {title:"MOUs" , icon:"aspect_ratio", color:"purple"},
            {title:"Patent" , icon:"bookmark", color:"orange darken-3"}
        ]
    }},

}
</script>

<style scoped>
.ro{
    transition: .6s;
    transform: rotateX(40deg) translateY(-150px) translateZ(-80px);
}
.ro:hover{
    transform: rotateX(0deg)
    
}
</style>
