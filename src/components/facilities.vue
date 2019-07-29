<template>
    <v-app>
      <!-- <v-parallax src="http://skasc.ac.in/Images/slide3.gif">
        
      </v-parallax> -->
      <toolbar :tool_name="title"></toolbar>
     
          <!-- laptop -->
          <div class=" mx-2 hidden-sm-and-down">
      <div data-aos="fade-left">
        <v-card class="elevation-0 pt-2 ">
        <v-layout>
            <v-flex xs6 md9 text-xs-center px-4>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >24x7 Connected Classrooms</u></h2>
                <p style="font-size:15px"><b>“SMART CLASSES AND SMART PEOPLE , THE FUSION OF NOVELTY”</b></p>
                <p class="pt-3" style="font-size:15px">The internet , the most powerful tool in the 21st century acts as a hub for learning 24*7 ! Our institution stands out from the crowd because of all the creative ideas which has been imposed on learning. We achieve so much more , at unmatched scale with software and interactive learning. Smart classes are nothing but Smart Boards ,the evolution of interactive learning , that operates as part of a system that which enables effective and intellectual insight .
                        The smart board technology ensures accessible learning along with give-and-take intelligence. The lectures given are chronicled and sent via mail to students instantly to replenish the knowldge about that particular subject.  </p>
            </v-flex>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/scl/24x7.jpg"></v-img>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

      <div data-aos="fade-left">
        <v-card class="elevation-0 py-4 ">
        <v-layout>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/lib.jpg"></v-img>
            </v-flex>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Library</u></h2>
                <p style="font-size:15px"><b>"To build up a library is to create a life. It’s never just a random collection of books"</b></p>
                <p class="pt-3" style="font-size:15px">The fully computerized library is well equipped with modern facilities and access to resources like books, printed and electronic journals, CD-ROMs and on-line database. The Open Access System followed in the digital library provides information services and access to print and e-resources, audio video cassettes, project reports etc. and journals. </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

       <div data-aos="fade-left">
        <v-card class="elevation-0 ">
        <v-layout>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Hall of Residence </u></h2>
                <p class="pt-3" style="font-size:15px">The students’ hostel with two distinct sections for boys and girls students can accommodate more than students. Hostels are provided with rooms on a bi /triple sharing basis. Hygienic dining, washrooms, lobby, terrace, etc. are provided separately for men and women’s hostels.  </p>
            </v-flex>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/hostel.jpg"></v-img>
            </v-flex>
        </v-layout>
        </v-card>
      </div>


     <div data-aos="fade-left">
        <v-card class="elevation-0 py-4 ">
        <v-layout>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/VANKATRAM%20HALL.jpg"></v-img>
            </v-flex>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Auditorium and Seminar Halls</u></h2>
                <p class="pt-3" style="font-size:15px">Vankataram Hall is a world class air-conditioned auditorium with a seating capacity of 3500. The hall mark of this structure is its interior design and an excellent stage to showcase the talents of the students. </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

       <div data-aos="fade-left">
        <v-card class="elevation-0 ">
        <v-layout>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Fitness Center</u></h2>
                <p class="pt-3" style="font-size:15px">A world-class extravagant Gymnasium, separately for men / women is designed scientifically to encourage the Fitness seekers with the sophisticated equipment to incite relaxation par excellence for campus residents.  </p>
            </v-flex>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/FITNESS%20CENTRE%20-%201.jpg"></v-img>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

      
     <div data-aos="fade-left">
        <v-card class="elevation-0 py-4 ">
        <v-layout>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/transport.jpg"></v-img>
            </v-flex>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >TRANSPORT</u></h2>
                <p class="pt-3" style="font-size:15px">We are providing college bus service from various prominent locations. 21 Busses with a seating capacity of 60 are available for the Satff and Students. 12 buses ply in and around Coimbatore by covering macimum areas including Pollachi, Metupalayam and Tirupur.  </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

       <div data-aos="fade-left">
        <v-card class="elevation-0 ">
        <v-layout>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Food and Amenity Mall</u></h2>
                <p style="font-size:15px"><b>"love food"</b></p>
                <p class="pt-3" style="font-size:15px">College Cafeteria takes a meticulous care in providing hygienic and nutritive food. It helps the students to continue their academic discussions, career plans in the cafeteria setting themselves free from fatigue.  </p>
            </v-flex>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/AROMA%202.jpg"></v-img>
            </v-flex>
        </v-layout>
        </v-card>
      </div>


           <div data-aos="fade-left">
        <v-card class="elevation-0 py-4 ">
        <v-layout>
                <v-flex mt-3 xs6 md3>
                <v-img class="img1" src="http://skct.edu.in/img/scl/8.jpg"></v-img>
            </v-flex>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Yoga Centre</u></h2>
                <p class="pt-3" style="font-size:15px"> The original context of yoga was spiritual development practices to train the body and mind to self observe and become aware of their own nature. The purposes of yoga were to cultivate discernment, awareness, self-regulation and higher consciousness in the individual. As the split occurring between those seeking physical development versus those seeking spiritual development has widened, the lack of awareness and attention to inner experience has disconnected the practitioner from his body. </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>
          </div>


          <!-- mobile -->

                    <div class=" mx-2 hidden-md-and-up">
      <div data-aos="fade-left">
        <v-card class="elevation-0 pt-2 ">
        <v-layout column>
             <v-img class="img" src="http://skct.edu.in/img/scl/24x7.jpg"></v-img>
            <v-flex text-xs-center px-4>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >24x7 Connected Classrooms</u></h2>
                <p style="font-size:15px"><b>“SMART CLASSES AND SMART PEOPLE , THE FUSION OF NOVELTY”</b></p>
                <p class="pt-3" style="font-size:15px">The internet , the most powerful tool in the 21st century acts as a hub for learning 24*7 ! Our institution stands out from the crowd because of all the creative ideas which has been imposed on learning. We achieve so much more , at unmatched scale with software and interactive learning. Smart classes are nothing but Smart Boards ,the evolution of interactive learning , that operates as part of a system that which enables effective and intellectual insight .
                        The smart board technology ensures accessible learning along with give-and-take intelligence. The lectures given are chronicled and sent via mail to students instantly to replenish the knowldge about that particular subject.  </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>
        <div data-aos="fade-left">
        <v-card class="elevation-0 py-4 ">
        <v-layout column>
                <v-img class="img" src="http://skct.edu.in/img/lib.jpg"></v-img>
            <v-flex xs6 md9 text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
                              border-bottom: 3px solid orange;width:100px" >Library</u></h2>
                <p style="font-size:15px"><b>"To build up a library is to create a life. It’s never just a random collection of books"</b></p>
                <p class="pt-3" style="font-size:15px">The fully computerized library is well equipped with modern facilities and access to resources like books, printed and electronic journals, CD-ROMs and on-line database. The Open Access System followed in the digital library provides information services and access to print and e-resources, audio video cassettes, project reports etc. and journals. </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

       <div data-aos="fade-left">
        <v-card class="elevation-0 ">
        <v-layout column>
               <v-img class="img" src="http://skct.edu.in/img/hostel.jpg"></v-img>
               <v-flex text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
                  border-bottom: 3px solid orange;width:100px" >Hall of Residence </u></h2>
                <p class="pt-3" style="font-size:15px">The students’ hostel with two distinct sections for boys and girls students can accommodate more than students. Hostels are provided with rooms on a bi /triple sharing basis. Hygienic dining, washrooms, lobby, terrace, etc. are provided separately for men and women’s hostels.  </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>


     <div data-aos="fade-left">
        <v-card class="elevation-0 py-4 ">
        <v-layout column>
                
                <v-img class="img" src="http://skct.edu.in/img/VANKATRAM%20HALL.jpg"></v-img>
     
            <v-flex  text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Auditorium and Seminar Halls</u></h2>
                <p class="pt-3" style="font-size:15px">Vankataram Hall is a world class air-conditioned auditorium with a seating capacity of 3500. The hall mark of this structure is its interior design and an excellent stage to showcase the talents of the students. </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

      <div data-aos="fade-left">
        <v-card class="elevation-0 ">
        <v-layout column> 
            <v-img class="img" src="http://skct.edu.in/img/FITNESS%20CENTRE%20-%201.jpg"></v-img>
            <v-flex text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Fitness Center</u></h2>
                <p class="pt-3" style="font-size:15px">A world-class extravagant Gymnasium, separately for men / women is designed scientifically to encourage the Fitness seekers with the sophisticated equipment to incite relaxation par excellence for campus residents.  </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

      
     <div data-aos="fade-left">
        <v-card class="elevation-0 py-4 ">
        <v-layout column>
                <v-img class="img" src="http://skct.edu.in/img/transport.jpg"></v-img>
            <v-flex text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >TRANSPORT</u></h2>
                <p class="pt-3" style="font-size:15px">We are providing college bus service from various prominent locations. 21 Busses with a seating capacity of 60 are available for the Satff and Students. 12 buses ply in and around Coimbatore by covering macimum areas including Pollachi, Metupalayam and Tirupur.  </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>

      <div data-aos="fade-left">
        <v-card class="elevation-0 ">
        <v-layout column>
                <v-img src="http://skct.edu.in/img/AROMA%202.jpg" class="img"></v-img>
            <v-flex text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Food and Amenity Mall</u></h2>
                <p style="font-size:15px"><b>"love food"</b></p>
                <p class="pt-3" style="font-size:15px">College Cafeteria takes a meticulous care in providing hygienic and nutritive food. It helps the students to continue their academic discussions, career plans in the cafeteria setting themselves free from fatigue.  </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>
           <div data-aos="fade-left">
        <v-card class="elevation-0 pt-4 ">
        <v-layout column>
                <v-img src="http://skct.edu.in/img/scl/8.jpg" class="img"></v-img>
            <v-flex text-xs-center px-3>
                <h2 class="my-3" style="font-size:25px"><u style="text-decoration:none;
        border-bottom: 3px solid orange;width:100px" >Yoga Centre</u></h2>
                <p class="pt-3" style="font-size:15px"> The original context of yoga was spiritual development practices to train the body and mind to self observe and become aware of their own nature. The purposes of yoga were to cultivate discernment, awareness, self-regulation and higher consciousness in the individual. As the split occurring between those seeking physical development versus those seeking spiritual development has widened, the lack of awareness and attention to inner experience has disconnected the practitioner from his body. </p>
            </v-flex>
        </v-layout>
        </v-card>
      </div>
          </div>
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
            title:"- FACILITIES",
        }}

}
</script>

<style scoped>
 .img{
     height: 215px;
 }
 .img1{
     height: 240px;
 }
</style>
