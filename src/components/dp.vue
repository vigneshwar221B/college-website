<template>
<v-app>
  <toolbar :title="title" :show="true"></toolbar>
       <section>
        <v-img :src="require('@/assets/clg.png')" id="fp"  class="sk">
          <v-layout
            column
            align-center
            justify-center
            class="white--text pt-4"
          >
          <div data-aos="zoom-out" data-aos-duration="5000">
            <img src="../assets/cn2.png"  height="200">
          </div>
          <div data-aos="zoom-out" data-aos-duration="5000">
            <h1 class="white--text mb-2 display-1 text-xs-center">COMPUTER SCIENCE AND ENGINEERING</h1>
            <div class="subheading mb-3 text-xs-center">(Accredited by NBA,New Delhi)</div>
          </div>
          </v-layout>
        </v-img>
      </section>
      <v-flex text-xs-center my-4 font-cursive>
         <div data-aos="zoom-in" data-aos-duration="5000"><h2><u style="text-decoration:none;
           border-bottom: 2px solid black;"><strong
         > UPCOMING EVENT</strong></u></h2></div>
      </v-flex>


<v-card class="py-5 elevation-0"> 
    <v-card-media class="swiper-inner">
        <swiper :options="swiperOption">
          
           <v-card class="px-2 mx-4 rd elevation-3 swiper-slide" style="width: 18rem;">
              <v-card-media class="px-2 py-3">
                <img src="http://skct.edu.in/img/news/CHALLENGE_IOT.jpg"  style="height:160px;" alt="...">
              </v-card-media>
                <v-card-text>

                  <h5 class="card-title">Cloud Literacy-Learnathon</h5>

                  <p class="card-text">Cloud Literacy Event on 23rd October 2018</p>

                  <v-btn outline round color="blue" small @click="$router.push('/event_page')">more..</v-btn>
                </v-card-text>
          </v-card> 
            <v-card class="px-2 mx-4 rd elevation-3 swiper-slide" style="width: 18rem;">
              <v-card-media class="px-2 py-3">
                <img src="http://skct.edu.in/img/news/CHALLENGE_IOT.jpg"  style="height:160px;" alt="...">
              </v-card-media>
                <v-card-text>

                  <h5 class="card-title">Cloud Literacy-Learnathon</h5>

                  <p class="card-text">Cloud Literacy Event on 23rd October 2018</p>
                  <v-btn outline round color="blue" small @click="$router.push('/event_page')">more..</v-btn>
                </v-card-text>
          </v-card> 
            <v-card class="px-2 mx-4 rd elevation-3 swiper-slide" style="width: 18rem;">
              <v-card-media class="px-2 py-3">
                <img src="http://skct.edu.in/img/news/CHALLENGE_IOT.jpg"  style="height:160px;" alt="...">
              </v-card-media>
                <v-card-text>

                  <h5 class="card-title">Cloud Literacy-Learnathon</h5>

                  <p class="card-text">Cloud Literacy Event on 23rd October 2018</p>

                  <v-btn outline round color="blue" small @click="$router.push('/event_page')">more..</v-btn>
                </v-card-text>
          </v-card> 
            <v-card class="px-2 mx-4 rd elevation-3 swiper-slide" style="width: 18rem;">
              <v-card-media class="px-2 py-3">
                <img src="http://skct.edu.in/img/news/CHALLENGE_IOT.jpg"  style="height:160px;" alt="...">
              </v-card-media>
                <v-card-text>

                  <h5 class="card-title">Cloud Literacy-Learnathon</h5>

                  <p class="card-text">Cloud Literacy Event on 23rd October 2018</p>

                  <v-btn outline color="blue" round small @click="$router.push('/event_page')">more..</v-btn>
                </v-card-text>
          </v-card>
      </swiper>
    </v-card-media>
  </v-card>


<v-layout hidden-md-and-up>
 <v-flex xs12 mx-3 md4>
                  <div data-aos="zoom-in">
                   <v-card >
                  <v-img
                    src="http://skct.edu.in/img/news/CHALLENGE_IOT.jpg"
                  ></v-img>
            <v-card-text>

                  <h5 class="card-title">Cloud Literacy-Learnathon</h5>

                  <p class="card-text">Cloud Literacy Event on 23rd October 2018</p>

                  <v-btn outline color="blue" round small @click="$router.push('/event_page')">more..</v-btn>
                </v-card-text>
      </v-card>
    </div>
</v-flex>
</v-layout>





    
     <section>
        <v-layout
          column
          wrap
          align-center
        >
          <v-flex xs12 sm4 text-xs-center my-3 >
             <div data-aos="zoom-in" data-aos-duration="1100"> <h2><strong>ABOUT DEPARTMENT</strong></h2></div>
              <v-divider></v-divider>
          </v-flex>
          <v-container>
          <v-flex text-xs-center>
<div data-aos="zoom-in">
          <p style="font-size:17px;text-align:justify"> 
              The Department of Computer Science and Engineering was established in the year 1998. The predominant goal of the department is to offer world class learning and research environment to the students
              with high ethical values, for grooming them as highly competent engineers for the society. Dr. A. Balamurugan, Head Of the Department, with his rich academic & administrative experience leads the department
              along with a team of highly qualified and Industry trained Faculty. The students are expanding their intellectual horizons through effective career guidance and support.  
          </p>
</div>
          </v-flex>
          </v-container>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="5000">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">touch_app</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><strong> VISION</strong></div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                      <p style="font-size:17px;text-align:justify">The department of CSE fosters a conducive
                      ambience to meet the global standards by equipping the students with modern techniques
                      in the area of Computer Science and relevant research to address the societal needs.</p>
                      </v-layout>
                    </v-card-text>
                  </v-card>
</div>
                </v-flex>
                <v-flex xs12 md4>
<div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="5000">
                  <v-card class="elevation-0 transparent" style="overflow:hidden;">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">ondemand_video</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline"><strong>video</strong></div>
                    </v-card-title>
                    <v-card-text class="">
                              <iframe width="320px" height="170px" src="https://www.youtube.com/embed/1Qzr8jDWRVM" 
                              frameborder="0" allow="accelerometer;encrypted-media; gyroscope;" 
                              allowfullscreen></iframe>
                    </v-card-text>
                  </v-card>
</div>
                </v-flex>
                <v-flex xs12 md4>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="5000">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><strong> MISSION</strong></div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                        <p style="font-size:17px;text-align:justify">
                      <strong>1.</strong> provide quality academic environment that would help the students to acquire knowledge in computer science concepts.<br />
                      <strong>2.</strong> motivate faculty to disseminate knowledge to different levels.<br />
                      <strong>3.</strong> produce competent graduates who can develop algorithms and systems to the target groups.
                        </p> 
                      </v-layout>
                    </v-card-text>
                  </v-card>
                    </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


          
<div class="hidden-sm-and-down">
              <section>
        <v-parallax src="http://skct.edu.in/SKCT-CSE/images/body/hod_bg.png" height="280"> 
    <section class="hide-overflow">
    <v-layout align-center>
        <v-flex
        text-xs-center
        mt-4
        >
        <div data-aos="fade-right">
          <p style="font-size:25px">
              The world of computers is not just the algorithms, bits and bytes of code, It is as essential as the stone <br />bricks, for building solid foundation of every technical mind to address the real<br />
               needs of the society through technology.<br /><pre>                             -name</pre>
          </p>
        </div>
        </v-flex>
         <v-flex ml-3>
      <div data-aos="fade-left">
      <div class="pro ">
         <img src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t1.0-9/46507537_2275197499426403_6590984279033905152_n.jpg?_nc_cat=110&_nc_oc=AQkrf4T07YUopehv0Kq0rXMVXwjiRUlEXgYAFFfvno9-XpPzAIMI9_ZDUWAFVYoqsSVMJQY3jKsVxfjVtmjU2aSU&_nc_ht=scontent.fmaa2-2.fna&oh=1df0db5b6b61d7455c90a3c720877a3a&oe=5DC54A4F" alt="Vuetify.js" height="200">
      </div>
      </div>
      </v-flex>
    </v-layout>
        </section>   
        </v-parallax>
      </section>
</div>

<div class="hidden-md-and-up">
        <v-parallax src="http://skct.edu.in/SKCT-CSE/images/body/hod_bg.png" height="580"> 
            <v-flex>
            <v-container>
              <v-layout row wrap justify-center="" align-content-center="">
                <v-flex  mx-5 mb-4 >
                <div data-aos="fade-left">
                <div class="promob" >
                  <img src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t1.0-9/46507537_2275197499426403_6590984279033905152_n.jpg?_nc_cat=110&_nc_oc=AQkrf4T07YUopehv0Kq0rXMVXwjiRUlEXgYAFFfvno9-XpPzAIMI9_ZDUWAFVYoqsSVMJQY3jKsVxfjVtmjU2aSU&_nc_ht=scontent.fmaa2-2.fna&oh=1df0db5b6b61d7455c90a3c720877a3a&oe=5DC54A4F" alt="Vuetify.js" height="200">
                </div>
                </div>
                </v-flex>
              </v-layout>
             <div data-aos="fade-right">
               <v-flex text-xs-center >
              <h2 class="white--text">The world of computers is not just the algorithms, bits and bytes of code, It is as essential as the stone bricks, for building solid foundation of every technical mind to address the real needs of the society through technology.<br /></h2>
             <div class="subheading">-Name</div>
            </v-flex>
             </div>
            </v-container>
            </v-flex> 
        </v-parallax>
    </div>


<v-container hidden-sm-and-down grid-list-xl>
  <v-layout row wrap align-center>
    <v-flex xs12 md4>
<div data-aos="fade-in"
     data-aos-duration="5000">
   <v-card class="rdi">
        <v-img
           src="http://skct.edu.in/SKCT-CSE/images/alumini/1.jpg"
           height="220px" 
        ></v-img>
         <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Alumini</h3>
            <div style="text-align:justify">I don't want to compare my institution with the world class of the masses, but it certainly is above them all. I am what I am today because of this great institution
              <pre>                         -name</pre></div>
          </div>
        </v-card-title>
      </v-card>
</div>
      </v-flex>
      <v-flex xs12 md4>
<div data-aos="fade-in"
     data-aos-duration="5000">
                 <v-card class="mx-4 elevation-0 transparent">
                     <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><strong>Strength</strong></div>
                    </v-card-title>
                  <v-card-text>
                    <v-layout row>
                          <v-card class="elevation-0 transparent mx-4">
                            
                         <h1 style="color:black"> Faculty</h1>
                        <v-progress-circular
                                :rotate="-90"
                                :size="100"
                                :width="14"
                                :value="value1"
                                color="primary"
                                >
                                <h2 style="color:black;">{{ value1 }} </h2>
                                </v-progress-circular>
                          </v-card>
                          <v-card class="elevation-0 transparent mx-3">
                         <h1 style="color:black;"> Student</h1>
                          <v-progress-circular
                                :rotate="-90"
                                :size="100"
                                :width="14"
                                :value="value"
                                color="primary"
                                >
                                <h2 style="color:black;">{{ value }} </h2>
                                </v-progress-circular>
                          </v-card>
                    </v-layout>
                    </v-card-text>
                  </v-card>
</div>
                </v-flex>
                <v-flex xs12 md4>
<div data-aos="fade-in"
     data-aos-duration="5000">
                     <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline"><strong>Records</strong></div>
                    </v-card-title>
                    <v-card-text>
                        <v-flex PY-2 text-xs-center>
                        <template>
                      <v-expansion-panel>
                        <v-expansion-panel-content
                          v-for="(item,i) in ex"
                          :key="i"
                        >
                          <template v-slot:header>
                            <div>{{ item.title }}</div>
                          </template>
                            <v-card>
                              <v-card-text v-for="(itam,j) in item.sub" :key='j'> {{ itam }}</v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </template>
                  </v-flex>
                  </v-card-text>
                  </v-card>
                    </div>
                </v-flex>
              </v-layout>
           </v-container>


<div class="hidden-md-and-up">
  <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 mx-3 md4>
                  <div data-aos="zoom-in">
                   <v-card >
        <v-img
           src=http://skct.edu.in/SKCT-CSE/images/alumini/1.jpg
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Alumini</h3>
            <div>I don't want to compare my institution with the world class of the masses, but it certainly is above them all. I am what I am today because of this great institution
              <pre>                         -name</pre></div>
          </div>
        </v-card-title>
      </v-card>
    </div>
</v-flex>
</v-layout>
  </v-container>
</div>


    <section class="hidden-md-and-up">
          <v-flex xs12 >
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
<div data-aos="zoom-in"
     data-aos-duration="5000">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><strong> STRNGTH</strong></div>
                    </v-card-title>
                  <v-card-text>
                        <v-flex text-xs-center>
                         <h1 style="color:black"> Faculty</h1>
                        <v-progress-circular
                                :rotate="-90"
                                :size="100"
                                :width="14"
                                :value="value1"
                                color="primary"
                                >
                                <h2 style="color:black;">{{ value1 }} </h2>
                                </v-progress-circular>
                         <h1 class="mt-3" style="color:black;"> Student</h1>
                          <v-progress-circular
                                :rotate="-90"
                                :size="100"
                                :width="15"
                                :value="value"
                                color="primary"
                                >
                                <h2 style="color:black;">{{ value }} </h2>
                                </v-progress-circular>
                        </v-flex>
                    </v-card-text>
                  </v-card>
</div>
                </v-flex>
                <v-flex xs12 md4>
<div data-aos="zoom-in"
     data-aos-duration="5000">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline"><strong>Records</strong></div>
                    </v-card-title>
                    <v-card-text>
                        <v-flex PY-2 text-xs-center>
                        <template>
                      <v-expansion-panel>
                     <v-expansion-panel-content
                          v-for="(item,i) in ex"
                          :key="i"
                        >
                          <template v-slot:header>
                            <div>{{ item.title }}</div>
                          </template>
                            <v-card>
                              <v-card-text v-for="(itam,j) in item.sub" :key='j'> {{ itam }}</v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </template>
                  </v-flex>
                  </v-card-text>
                  </v-card>
</div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
      </section>


       <v-flex text-xs-center mt-3>
             <div data-aos="zoom-out" data-aos-duration="5000">
    <strong><h2>GALLARY</h2></strong>
             </div>
     </v-flex>
               <!-- mobile -->
            <v-flex py-3 px-4 hidden-md-and-up>
                  <div data-aos="zoom-in" data-aos-duration="5000">
            <v-carousel height="200px" hide-delimiters>
                <v-carousel-item
                v-for="(item,i) in items3"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-flex text-xs-center>
            <v-btn outline round="" color="blue" class="my-2 " @click="$router.push('/gallery')"> more</v-btn>
            </v-flex>
                  </div>
            </v-flex>
                <!-- computer -->
            <v-flex py-3 px-5 hidden-sm-and-down>
              <v-container>
                  <div data-aos="zoom-in" data-aos-duration="5000">
            <v-carousel height="400px" hide-delimiters>
                <v-carousel-item
                v-for="(item,i) in items3"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
             <v-flex text-xs-center>
            <v-btn outline round="" color="blue" class="my-2 " @click="$router.push('/gallery')"> more</v-btn>
            </v-flex>
                  </div>
              </v-container>
            </v-flex>

            <!-- <v-btn
              color="blue"
              dark
              fixed=""
              class="mb-5"
              bottom
              right
              fab
            >
              <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>  -->


            <fv></fv>

<footnav></footnav>
 </v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import fv from './fv'
import footnav from './footnav.vue'
import 'swiper/dist/css/swiper.css';

import 'swiper/dist/js/swiper.js';

import { swiper, swiperSlide } from 'vue-awesome-swiper';


export default {
    components: {
     toolbar,
       swiper,
footnav,
    swiperSlide,
    fv
  },
   data(){
       return{
         title: 'CSE DEPARTMENT',
         swiperOption: {

          grabCursor: true,

          centeredSlides: true,

          slidesPerView: 'auto',

         
          autoplay:{

            delay:2500,

            disableOnInteraction:false,

          }
        },
         ex:[
           { title : "Achievements",sub:['Department','Faculty','Student']},
           { title: "Placement Statitcs",sub:['2014-2015','2015-2016','2016-2017','2017-2018','2018-2019','2019-2020']}
           ],
      items3: [
          {
            src: 'http://skct.edu.in/SKCT-CSE/images/slider/3.jpg'
          },
          {
            src: 'http://skct.edu.in/SKCT-CSE/images/slider/4.jpg'
          },
          {
            src: 'http://skct.edu.in/SKCT-CSE/images/slider/5.jpg'
          },
          {
            src: 'http://skct.edu.in/SKCT-CSE/images/slider/4.jpg'
          }
        ],
        value:0,
        value1: 0,
        interval1:{},
        interval:{},
        show: true,

}

},

mounted () {
      this.interval = setInterval(() => {
        if (this.value === 714) {
           isPaused;
        }
        this.value += 2
      }, 60),
       this.interval1 = setInterval(() => {
        if (this.value1 === 37) {
           isPaused;
        }
        this.value1 += 1
      }, 70)
      } ,
     computed(){
      
     } 
   }

</script>

<style>
html{
    scroll-behavior: smooth;
}
.br{
  border-radius: 5px;

}

.pro img {
  display: block;
  width:100%;
  height: 100%;
}
.pro{
  align-self: center;
  justify-self: center;
  display: block;
  overflow: hidden;
  max-width: 210px;
  max-height: 210px;
  border-radius: 50%;
}

.promob img {
  display: block;
  width:100%;
  height: 100%;
}
.promob{
  align-self: center;
  justify-self: center;
  display: block;
  overflow: hidden;
  max-width: 210px;
  max-height: 210px;
  border-radius: 50%;
}
.rdi{
  border-radius: 8px;
}
.rd{
  border-radius: 5px;
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

</style>
