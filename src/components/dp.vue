<template>
<v-app>
  <!-- <toolbar :title="title" :show="true"></toolbar> -->
       <section>
        <v-img :src="bgimage" id="fp"  class="sk">
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

<!-- events -->
<template>
  <v-card
    elevation="24"
     width="500px"
    class="mx-auto"
  >
    <v-carousel
      :continuous="false"
       cycle
      :show-arrows="false"
      hide-delimiter-background="true"
      delimiter-icon="minimize"
      height="300"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-layout
            align-center
            fill-height
            justify-center
          >
            <div class="display-3">{{ slide }} Slide</div>
          </v-layout>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
           <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
          <v-list-item-subtitle>Author</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<!-- <event end -->
    
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
              {{about_desc}}</p>
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
                      <p style="font-size:17px;text-align:justify">{{vision_desc}}
            </p>
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
                          {{mission_desc}}
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
                  <v-img :src="alumni_image"></v-img>
                </div>
                </div>
                </v-flex>
              </v-layout>
             <div data-aos="fade-right">
               <v-flex text-xs-center >
              <h2 class="white--text">{{alumni_quote}}<br /></h2>
             <div class="subheading">-{{alumni_name}}}</div>
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
                v-for="(item,i) in items"
                :key="i"
                :src="item"
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
                v-for="(item,i) in items"
                :key="i"
                :src="item"
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


            <fv :nme="hod_name" :dep="hod_dept" :email="hod_email" :no="hod_no"></fv>

<footnav></footnav>
 </v-app>
</template>

<script>
// import toolbar from './toolbar.vue'
import fv from './fv'
import footnav from './footnav.vue'
import axios from 'axios'

export default {
    components: {
     footnav,fv
  },

   data(){
       return{
         bgimage: '',
         about_desc: '',
         vision_desc: '',
         mission_desc : '',
         alumni_image:'',
         alumni_quote: '',
         alumni_name: '',
         hod_name:'',
         hod_dept:'',
         hod_email:'',
         hod_no:'',
        //bgimage: 'https://petapixel.com/assets/uploads/2019/02/mooncompositemain-800x800.jpg',
 //bgimage:'172.20.10.4:8000/media/image/ambulance_Bk8gYnG.jpg/',
        title: '- CSE DEPARTMENT',
        colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      items:[
'https://petapixel.com/assets/uploads/2019/02/mooncompositemain-800x800.jpg',
      ],
      cycle: false,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],

         ex:[
           { title : "Achievements",sub:['Department','Faculty','Student']},
           { title: "Placement Statitcs",sub:['2014-2015','2015-2016','2016-2017','2017-2018','2018-2019','2019-2020']}
           ],
      

        value:0,
        value1: 0,
        interval1:{},
        interval:{},
        show: true,

}
},

mounted(){

  console.log("mounted!");
  axios.get("http://172.20.10.4:8000/cse/home/")
  .then(res => {
    console.log(res);
    this.bgimage = "http://172.20.10.4:8000"+res.data.alumni_image+'/'
    
    //console.log(this.bgimage);
    this.about_desc = res.data.about;
    //console.log(this.about_desc);
    this.vision_desc = res.data.vision;
    this.mission_desc = res.data.mission;
    this.alumni_quote = res.data.alumni_quote;
    this.alumni_name = res.data.alumni_name;
    this.alumni_image = "http://172.20.10.4:8000"+res.data.bg_img+'/';
    this.items = res.data.gallery

    for(let i = 0; i < this.items.length; i++){

      this.items[i] = "http://172.20.10.4:8000"+this.items[i]+'/';

}
    this.items.forEach((e)=>{
      console.log(e);
    });

    this.hod_name=''
    this.hod_dept=''
    this.hod_email=''
    this.hod_no=''

  })
  .catch(e => {
    console.log(e);
  });
  },
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
