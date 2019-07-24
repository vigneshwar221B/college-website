<template>
<div>
<!-- <toolbar  :title="title" :show="true"></toolbar> -->
<div class="bk" id="fk1">
<v-flex display-1 text-xs-center><v-container style="color:black;text-align:center">The department of CSE currently has an active and energetic team of near 38 faculty members with diverse educational backgrounds and academic experiences. They are embarking on a journey of building a future world.</v-container></v-flex>
<div>
   <v-container align-center>
  <v-layout row wrap>
  <div v-for="n in 10" :key="n" >
         <div data-aos="flip-left">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="elevation-12 rdi mx-5 my-3"
              color="grey lighten-4"
              width="235"
              height="294px"
            >
              <v-img
                :aspect-ratio="9/9"
                src="https://yt3.ggpht.com/a-/AAuE7mAnddl2oHD8qnzDe7MdwG6LTStfsPI01jZDBw=s900-mo-c-c0xffffffff-rj-k-no"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal pl-2 pb-0"
                    style="height:40%;"
                  >
                  <h2 style="color:orange;">
                    P.SETHUPATHI <br> 
                <span style="font-size:13px">
                    sethu1471@gmail.com
                </span>
                  </h2>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-2"
                style="position: relative;"
              >
                <v-btn
                  absolute
                  color="orange"
                  class="white--text"
                  fab
                  small=""
                  right
                  top
                >
                  <v-icon>phone</v-icon>
                </v-btn>
                <h2 class="orange--text pb-3"><strong>Student</strong></h2>
                <!-- <div class="font-weight-light grey--text title mb-2">student</div> -->
              </v-card-text>
            </v-card>
          </v-hover>
         </div>
   </div>
  </v-layout> 
  </v-container>  
  </div>
</div>
 <fv></fv>
 <footnav></footnav>
</div>
</template>


<script>
import toolbar from './toolbar.vue'
import fv from './fv'
import footnav from './footnav.vue'
export default {
  components:{
    toolbar,fv,footnav
  },
     data () {
      return {
        title: 'CSE DEPARTMENT',
      }
      },

      created(){
        
      }
}
</script>

<style>
  
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 80%;
}
.rdi{
  border-radius: 13px;
   transition: transform .2s;
   }
.rdi:hover{
  transform: scale(1.1);
}

</style>
