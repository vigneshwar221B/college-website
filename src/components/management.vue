<template>
<div class="body2">
<toolbar  :tool_name="title" :show="true"></toolbar>
<div >
    <v-tabs
        centered
        class="hidden-sm-and-down"
        color
        v-model="active"
        slider-color="blue"
        icons-and-text
        >
          <v-tab
          >
             ChairPerson And Managing Trustee
              <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             Trustee
               <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             Advicor
             <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             Chief Excutive Officer (CEO)
              <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             Principal
               <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             
             Govering Body 
              <v-icon>person</v-icon>
          </v-tab>
          <v-tab-item >
              <v-layout row wrap align-center justify-center>
                  <v-container>
                  <v-layout align-center  justify-start row fill-height>
                  <img src="http://skct.edu.in/v1/images/p2/1.jpg" height="240" width="270" />
                     <v-flex text-xs-center pa-2 align-center justify-center><h2 style="color:#304FFE"><strong>Smt. S. Malarvizhi, Chairperson</strong></h2>
                     <h4 class="pa-4">Smt. S. Malarvizhi, Chairperson and Managing Trustee, being an eminent educationalist by herself, brings in her rich experience. She leads and guides the college towards excellence in all spheres of academic and administrative activities. The institution grows with her vision.
                    <br/><br/><i  style="color:#304FFE">"Our Honorable Chairperson and Managing Trustee has been Nominated as the Syndicate Member of Anna University Chennai"</i>
                </h4></v-flex>
                  </v-layout>  
                  </v-container>
              </v-layout>              
          </v-tab-item>
          <v-tab-item >
              <v-layout row wrap align-center justify-center>
                  <v-container>
                  <v-layout align-center  justify-start row fill-height>
                  <img  src="http://skct.edu.in/v1/images/p2/trustee.gif" height="240" width="270" />
                     <v-flex text-xs-center pa-2 align-center justify-center><h2  style="color:#304FFE"><strong>Mr.C.R.Swaminathan, Trustee</strong></h2>
                    <h4 class="pa-4">
                        <b> Mr.C.R.Swaminathan</b>, has more than four decades of experience in educational administration. He has to his credit an MBA degree and he plays an active role in various industrial and social organizations. He had held coveted positions as President SIEMA, CII and Indian Machine Tool Manufacturers'Association. Presently he is the Chairman in National Council-India institute of Foundrymen, President in COINDIA, RAAC and Cyber Society of India, Coimbatore chapter. He is
                          a member of our Governing Council since inception and contributes richly through his wise counsel to the development of the college</h4></v-flex>
                  </v-layout>  
                  </v-container>
              </v-layout>              
          </v-tab-item>
          <v-tab-item >
              <v-layout row wrap align-center justify-center>
                  <v-container>
                  <v-layout align-center  justify-start row fill-height>
                  <img src="http://skct.edu.in/v1/images/p2/advisor.gif" height="240" width="270" />
                     <v-flex text-xs-center pa-2 align-center justify-center><h2  style="color:#304FFE"><strong>Dr.S.Subramanyan, Advisor</strong></h2>
                     <h4 class="pa-4">
                         <b>Dr.S.Subramanyan</b>, Former Vice-Chancellor, Bharathiar University, has an enormous experience in academics and administration. He has obtained his PG degree in Technology from Manchester, U.K. and PhD from the University of Madras. He was the registrar of Bharathiar University and Principal of PSG College of Technology. He has authored text books in Heat & Mass Transfer Data and CAD/CAM areas. He is also a Fellow of the institution of Engineers. 
                         His valuable and timely guidance are the undisputed reasons for the faster growth of the institution. </h4></v-flex>
                  </v-layout>  
                  </v-container>
              </v-layout>              
          </v-tab-item>          
           <v-tab-item >
              <v-layout row wrap align-center justify-center>
                  <v-container>
                  <v-layout align-center  justify-start row fill-height>
                  <img src="http://skct.edu.in/v1/images/p2/2.jpg" height="240" width="270" />
                     <v-flex text-xs-center pa-2 align-center justify-center><h2  style="color:#304FFE"><strong>Dr. K .Sundararaman M.Com, M.Phil., Ph.D. ;CEO</strong></h2>
                     <h4 class="pa-4">
                         <b>Dr. K .Sundararaman</b> M.Com, M.Phil., Ph.D. has 40 years of teaching experience as the Head of the Department of Commerce and also has 17 years of dynamic administrative experience in managing all the courses under
                          self –financing stream in a reputed autonomous College in Coimbatore. He joined the college as Principal in the year 2005. He has published five books.His area of specialization is Quality Assurance in Higher Education.</h4></v-flex>
                  </v-layout>  
                  </v-container>
              </v-layout>              
          </v-tab-item>
           <v-tab-item >
              <v-layout row wrap align-center justify-center>
                  <v-container>
                  <v-layout align-center  justify-start row fill-height>
                  <img src="http://skct.edu.in/v1/images/p2/principal.jpg" height="240" width="270" />
                     <v-flex text-xs-center pa-2 align-center justify-center><h2  style="color:#304FFE"><strong>Dr. Srinivasan Alavandar, Principal</strong></h2>
                     <h4 class="pa-4">
                         Dr. Srinivasan Alavandar B.E, M.E, PhD (IIT)has been working more than 13 years in leading engineering institutions as Professor and Head, Dean R&D i/c, 
                         Programme Leader and Dean Academics including Institutions like Caledonian College of Engineering Oman, affiliated to GCU, UK.<br>
                         <a href="../assets/leaveform.pdf"> <v-btn round outline small class="mt-2 blue">Read more </v-btn></a>
                        <div class="mt-2"> <b>EMAIL:</b><a href="mailto:principal@skct.edu.in" style="text-decoration:none;color:#304FFE">principal@skct.edu.in</a><br/><b>Phone No:</b><a href="tel:+919994051191" style="text-decoration:none;color:#304FFE">+91-9994051191</a></div>
                </h4></v-flex>
                  </v-layout>  
                  </v-container>
              </v-layout>              
          </v-tab-item>
        </v-tabs>

        <!-- mobile -->

        <allfooter></allfooter>
</div>
</div>
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
           title: "- MANAGEMENT"
       }
   }
}
</script>

<style>
/* .body2{
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEWfbkunfvCB2oZMSNYT99azLGv-fS10ZsP-G2P5HN3qLjj_n');
  background-repeat: no-repeat;
} */

</style>
