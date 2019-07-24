<template>
<v-app>
    <toolbar  :title="title" :show="false"></toolbar>
      <template>
        <v-tabs
      centered=""
      color=""
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
      </template> 
       
       <template>
  <v-footer
    height="auto"
    color="indigo accent-3"
  >

    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex pl-4 class="white--text">
          
              <v-card-title><h3><v-icon class="white--text px-2">note</v-icon><strong>Registration</strong></h3></v-card-title>
                
                   <div>
                       <v-list-tile-content >
                           <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           Student leave and onduty form
                           </p>
                            <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           Student outpass form
                           </p>
                            <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           Student Nodue form
                           </p>
                            <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           Student registration form
                           </p>
                       </v-list-tile-content>
                   </div>
      </v-flex>
       <v-flex pl-4 class="white--text">
          
              <v-card-title><h3><v-icon class="white--text px-2">school</v-icon><strong>MY SKCT</strong></h3></v-card-title>
                
                   <div>
                       <v-list-tile-content >
                           <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                          AQAR 2015-16
                           </p>
                            <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                          AQAR 2016-17
                           </p>
                            <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           NIRF Engineering Ranking 2018 
                           </p>
                            <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           UGC Autonomous
                           </p>
                             <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           AICTE Name Change
                           </p>
                             <p><v-icon class="px-2 white--text">cloud_download</v-icon>
                           AICTE Documents
                           </p>
                       </v-list-tile-content>
                   </div>
      </v-flex>
           <v-flex pl-4 class="white--text">
          
              <v-card-title><h3><v-icon class="white--text px-2">school</v-icon><strong>SRI KRISHNA INSTITUTIONS</strong></h3></v-card-title>
                
                   <div>
                       <v-list-tile-content >
                           <p><v-icon class="px-2 white--text">arrow_forward</v-icon>
                           Sri Krishna College of Engineering and Technology 
                           </p>
                             <p><v-icon class="px-2 white--text">arrow_forward</v-icon>
                           Sri Krishna College of Technology
                           </p>
                            <p><v-icon class="px-2 white--text">arrow_forward</v-icon>
                          Sri Krishna Arts and Science College
                           </p>
                            <p><v-icon class="px-2 white--text">arrow_forward</v-icon>
                           Sri Krishna Adithya College of Arts and Science
                           </p>
                            <p><v-icon class="px-2 white--text">arrow_forward</v-icon>
                           Sri Krishna Polytechnic College
                           </p>
                       </v-list-tile-content>
                   </div>
      </v-flex>
             <v-flex pl-4 class="white--text">
          
              <v-card-title><h3><v-icon class="white--text px-2">phone</v-icon><strong>CONTACT US</strong></h3></v-card-title>
                
                   <div>
                       <v-list-tile-content class="px-3 layout justify-left" >
                        
                               <p style="text-align:left">
                         Sri Krishna College Of Technology,<br>
                         Kovaipudur,<br>Coimbatore-641042.<br>
                          Ph.no  :   0422-2984567-68(2 Lines)<br>
                                            0422-2604567-70(4 Lines)<br>
                            Comments & Feedback : info@skct.edu.in 
                               </p>
                       </v-list-tile-content>
                   </div>
      </v-flex>
      <v-divider></v-divider>
       <v-flex
        indigo accent-4
        py-3
        text-xs-center
        white--text
        xs12
      >
      The College undertakes to the regulations of UGC notified from time to time. © All Rights Reserved-2019,SKCT.<br>
      Copyright © 2019,SKCT-Code Alchemist.
      </v-flex>
    </v-layout>
  </v-footer>
</template>

</v-app>
</template>


<script>
import toolbar from './toolbar.vue'
import fv from './fv'
export default {
  components:{
    toolbar,fv,
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