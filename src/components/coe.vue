<template>
<v-app>
    <toolbar  :title="title" :show="false"></toolbar>
    <v-img src="http://skct.edu.in/v1/images/bg6.png" height="600px">
        <div >
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
          <v-tab-item class="mt-3">
              <v-flex pt-5 text-xs-center style="color:black">
                  <h1 style="color:blue;"><strong> Staff Profile</strong></h1><br>
          <strong>  1) Chief Controller of Examinations<br /></strong>
            -Dr.A.Balamurugan,M.E.,Ph.D., - Principal<br /><br/>

           <strong> 2) Controller of The Examinations<br /></strong>
            -Dr.R.Ramesh Kumar,M.E.,Ph.D.,<br /><br/>

         <strong>3) Deputy Controller of The Examinations<br /></strong>
            -Mr.J.S.Sujin,Assistant Professor-ECE<br />
            -Ms.R.Sujatha,Assistant Professor-CSE<br />
            -Mr.P.Arun Karthik,Assistant Professor-Mech<br />
              </v-flex>
          </v-tab-item>

          <v-tab-item class="mt-2">
            <v-container>
           <v-flex text-xs-center>
               <h1 style="color:blue;"><strong> FORMS </strong></h1><br>
                   <div v-for="item in items" :key="item">
                           <p><v-icon class="px-2" style="color:blue">cloud_download</v-icon>
                          <b> {{ item }}</b></p>
                   </div>
               
              </v-flex>
              </v-container>  
          </v-tab-item>


          <v-tab-item class="mt-3">
          <v-flex text-xs-center>
               <h1 style="color:blue;"><strong> STUDENTS ZONE </strong></h1><br>
                <v-container>
               
                 <div class="text-xs-center">
                   <h4 style="color:black;">The journey of miles to different cities across the state has given us mind blowing exposure over the industrial experience!! It has made us surrounded by practical knowledge which help us to build up an industrial based career.</h4>
                 </div>

                </v-container>
              </v-flex>  
          </v-tab-item>
        </v-tabs>
        </div>
    </v-img>
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
          title: '- COE',
          
          items:[
              "Course Work Registration Form and Hall Ticket","Application for Issue of New / Duplicate Certificate",
              "Application for Name Change","Application for Transcripts","Application for Withdrawal from End Semester Examination"
              ,"Application for Temporary Break of Study"," Application for Payment of Condonation Fee","No Dues Application"
              ," Blueprint of Question Paper"


          ]
           
      }},

    methods: {
     
    }
  }
</script>