<template>
<v-app>
    <toolbar  :title="title" :show="true"></toolbar>
    <v-container fluid>
        <h1><strong>{{ con }}</strong></h1>
       <v-layout row wrap align-center hidden-sm-and-down>
        <div v-for="(item,i) in month" :key="i">
   <div data-aos="flip-left">
      <v-card width="350px" class="my-3 mx-2">
        <v-img
          :src="item.img"
          height="200px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ item.ename }}</div>
            <span class="grey--text">{{ item.date }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
    <v-expansion-panel focusable popout>
    <v-expansion-panel-content >
      <template v-slot:header>
          <h3>About Event</h3>
      </template>
      <v-card>
        <v-card-text> {{ item.details }} </v-card-text>
        <v-card-actions> <v-btn flat color="blue"><v-icon class="pr-2">share</v-icon>Share</v-btn>
         <v-btn @click="$router.push('/event_page')" flat color="blue"><v-icon class="pr-2">launch</v-icon>More</v-btn>
          </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
        </v-card-actions>
      </v-card>
   </div>
     </div>
       </v-layout>

       
<div class="hidden-md-and-up">
  <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 mx-3 md4>
                  <div v-for="(item,i) in month" :key="i">
                  <div data-aos="zoom-in">
                   <v-card class="my-3">
  <v-img
          :src="item.img"
          height="200px"
        ></v-img>
        <v-card-title primary-title>
        <div>
            <div class="headline">{{ item.ename }}</div>
            <span class="grey--text">{{ item.date }}</span>
          </div>
        </v-card-title>
              <v-card-actions>
                <v-expansion-panel focusable popout>
                <v-expansion-panel-content >
                <template v-slot:header>
                    <h3>About Event</h3>
                </template>
                <v-card>
                    <v-card-text> {{ item.details }} </v-card-text>
                    <v-card-actions> <v-btn flat color="blue"><v-icon class="pr-2">share</v-icon>Share</v-btn>
                     <v-btn flat @click="$router.push('/event_page')" color="blue"><v-icon class="pr-2 ">launch</v-icon>More</v-btn> 
                      </v-card-actions>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-card-actions>
      </v-card>
    </div>
    </div>
</v-flex>
</v-layout>
  </v-container>
</div>
    </v-container>
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
    toolbar,fv,footnav  },
    data(){
        return{
          title: 'CSE DEPARTMENT',
            con: "JULY- 2018",
            month:[
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"avantta", date:"14-feb-2000",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"avantta", date:"14-feb-2000",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"avantta", date:"14-feb-2000",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"avantta", date:"14-feb-2000",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"avantta", date:"14-feb-2000",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"avantta", date:"14-feb-2000",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"avantta", date:"14-feb-2000",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
             ]
        }
    }

}
</script>

<style>

</style>
