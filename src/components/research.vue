<template>
<v-app>
    <toolbar  :title="title" :show="true"></toolbar>
      <div data-aos="fade-in" data-aos-duration="5000"><div class="text-xs-center mt-5"><p style="color:#F57C00;font-size:30px;font-family:cursive;"><u style="text-decoration:none;
           border-bottom: 3px solid black;">Research</u></p>
           <v-container style="color:black;font-size:30px;text-align:center">Our skilled, qualified faculty is encouraged by the Management to initiate research; we also extend the use of selected research facilities to scholars from other institutions and organize national and international conferences to facilitate a healthy exchange of ideas benefiting the larger academic community. We also encourage our faculty to seek external funding for research. </v-container></div></div>
            <v-container fluid mt-3 hidden-sm-and-down>
          <v-flex class="layout row wrap mt-0">
          <div  v-for="(item, i) in items" :key="i">
               <div data-aos="flip-left">
            <v-card
              class="elevation-12 ro mx-2  my-3"
              :color="item.color"
              width="227"
              height="221"
            >
                <div  style="text-align:center;"><v-icon class="white--text mt-4" style="font-size: 100px;">{{ item.icon }}</v-icon></div>
                <v-divider dark class="mt-5"></v-divider>
                <div style="text-align:center;"><p class="mt-1 white--text" style="font-size:20px;"><strong>{{ item.title}}</strong></p></div>
            </v-card>
               </div>
            </div>
          </v-flex>
        </v-container>
          <v-container hidden-md-and-up>
         <v-layout row wrap>
          <div  v-for="(item, i) in items" :key="i">
              <div data-aos="flip-left">
            <v-card
              class="elevation-12 ro mx-5 my-3"
              color="grey lighten-4"
              width="229"
              height="221"
            ><v-jumbotron :color="item.color" height="221px">
                <div  style="text-align:center;"><v-icon class="white--text mt-4" style="font-size: 100px;">{{ item.icon }}</v-icon></div>
                <v-divider dark class="mt-5"></v-divider>
                <div style="text-align:center;"><p class="mt-1 white--text" style="font-size:20px;"><strong>{{ item.title}}</strong></p></div>
            </v-jumbotron>
            </v-card>
              </div>
            </div>
         </v-layout>
        </v-container>
     <fv></fv>
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

<style>
.ro{
    transition: .6s;
    transform: rotateX(50deg) translateY(-150px) translateZ(-80px);
}
.ro:hover{
    transform: rotateX(0deg)
    
}
</style>
