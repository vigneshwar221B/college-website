<template>
<v-app>
    <toolbar  :tool_name="title" :show="true"></toolbar>
   
    <v-container fluid>
        <h3><strong>{{ date }}</strong></h3>
       <v-layout row wrap justify-center align-center >
        <div v-for="(item,i) in month" :key="i">
       <div data-aos="fade-up">
      <v-card width="320px" class="my-3 rdi mx-3" style="overflow:hidden">
        <v-img
          :src="item.img"
          height="185px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="blue--text">{{ item.ename }}</h3>
            <span class="grey--text">{{ item.date }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
           <v-btn flat color="blue"><v-icon class="pr-2">share</v-icon>Share</v-btn>
           <v-btn @click="$router.push('/event_page')" flat color="blue"><v-icon class="pr-2">launch</v-icon>More</v-btn>
        </v-card-actions>
      </v-card>
   </div>
     </div>
       </v-layout>
    </v-container>
    
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
          title: '- CSE DEPARTMENT',
            date: "JULY- 2018",
            month:[
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},
                { img:"http://knowafest.com/files/uploads/Avantaa-2018030906.png", ename:"Avantaa", date:"14-feb-2000",details:" I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."},

             ]
        }
    }

}
</script>

<style scoped>
.rdi{
  border-radius: 5px;
  transition: transform .2s;
}
.rdi:hover{
  transform: scale(1.1);
  z-index:1;
  }
</style>
