<template>
<v-app>
    <toolbar  :title="title" :show="false"></toolbar>
    
        <v-tabs
      centered
      color
      v-model="active"
      slider-color="blue"
      icons-and-text
  >
          <v-tab
          >
         
             STAFF
              <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             FORMS
              <v-icon>note</v-icon>
          </v-tab>
            <v-tab
          >
             STUDENT ZONE
              <v-icon>record_voice_over</v-icon>
          </v-tab>
          <v-tab-item class="mt-3 mb-5">
              <v-flex text-xs-center>
                  <h1 style="color:blue;"><strong> Staff Profile</strong></h1><br>
   
          <strong>  1)Chief Controller of Examinations<br /></strong>
            -Dr.A.Balamurugan,M.E.,Ph.D., - Principal<br /><br/>

           <strong> 2)Controller of The Examinations<br /></strong>
            -Dr.R.Ramesh Kumar,M.E.,Ph.D.,<br /><br/>

         <strong>   Deputy Controller of The Examinations<br /></strong>
            -Mr.J.S.Sujin,Assistant Professor-ECE<br />
            -Ms.R.Sujatha,Assistant Professor-CSE<br />
            -Mr.P.Arun Karthik,Assistant Professor-Mech<br />
  
               
              </v-flex>
          </v-tab-item>
          <v-tab-item class="mt-3 mb-5">
           <v-flex text-xs-center>
               <h1 style="color:blue;"><strong> FORMS </strong></h1><br>
                <v-container>
               <v-list>
                   <div v-for="item in items" :key="item">
                       <v-list-tile-content >
                           <p><v-icon class="px-2">cloud_download</v-icon>
                           {{ item }}</p>
                       </v-list-tile-content>
                   </div>
               </v-list>
                </v-container>
              </v-flex>   
          </v-tab-item>
          <v-tab-item class="mt-3 mb-5">
          <v-flex text-xs-center>
               <h1 style="color:blue;"><strong> STUDENTS ZONE </strong></h1><br>
                <v-container>
               <v-list>
                   <div>
                       <v-list-tile-content >
                          any info update dynamically 
                       </v-list-tile-content>
                   </div>
               </v-list>
                </v-container>
              </v-flex>  
          </v-tab-item>
        </v-tabs>
      <allfooter></allfooter>
</v-app>
</template>


<script>
import toolbar from './toolbar.vue'
import allfooter from './allfooter'
export default {
  components:{
    toolbar,allfooter
  },
  data(){
      return{
          title: 'COE',
          
          items:[
              "Course Work Registration Form and Hall Ticket","Application for Issue of New / Duplicate Certificate",
              "Application for Name Change","  Application for Transcripts","Application for Withdrawal from End Semester Examination"
              ,"Application for Temporary Break of Study"," Application for Payment of Condonation Fee","No Dues Application"
              ," Blueprint of Question Paper"


          ]
           
      }},

    methods: {
     
    }
  }
</script>