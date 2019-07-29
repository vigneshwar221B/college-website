<template>
<v-app>
<<<<<<< HEAD
  <toolbar :tool_name="title" :show="true"></toolbar>
       <div style="z-index:0;postion:fixed;">
        <v-img :src="require('@/assets/clg.png')" id="fp" class="sk">
=======
  <!-- <toolbar :title="title" :show="true"></toolbar> -->
       <section>
        <v-img :src="bgimage" id="fp"  class="sk">
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
          <v-layout
            column
            align-center
            justify-center
            class="white--text pt-4"
          >
          <div data-aos="zoom-out" data-aos-duration="5000">
            <img src="@/assets/cn2.png"  height="200">
          </div>
          <div data-aos="zoom-out" data-aos-duration="5000">
            <h1 class="white--text mb-2 display-1 text-xs-center">{{ dpt_name }}</h1>
            <div class="subheading mb-3 text-xs-center">{{ dpt_certificate }}</div>
          </div>
          </v-layout>
        </v-img>
       </div>
     
      <v-flex text-xs-center my-4 font-cursive>
         <div data-aos="fade-left" data-aos-duration="5000"><h2><strong
         > UPCOMING EVENT</strong></h2></div>
      </v-flex>
<!-- events -->
      <md-card class="container-fluid">    
<md-card-media class="swiper-inner">
      <!-- swiper -->
      <div style="padding-top:20px;"><swiper :options="swiperOption">
        <div class="card swiper-slide c-ach" v-for="i in 5" :key="i" style="width:250px !important;" >
  <img src="http://skct.edu.in/img/news/CHALLENGE_IOT.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="font-family:'Spectral', serif">Cloud Literacy-Learnathon</h5>
    <p class="card-text text-muted" style="font-family:'Alegreya',serif;">23rd October 2018</p>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div>
        <div class="card swiper-slide c-ach"  style="width:250px !important;" >
  <img src="http://skct.edu.in/img/news/newstitle.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" styel="font-family:'Spectral', serif;">SKCT @ MEDIA</h5>
    <p class="card-text" style="font-family:'Alegreya', serif">Blosooms at SKCT</p>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div>
<div class="card swiper-slide c-ach" style="width:250px !important;" >
  <img src="http://skct.edu.in/img/news/newstitle.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="font-family:'Spectral', serif">SKCT @ MEDIA</h5>
    <p class="card-text" style="font-family:'Alegreya', serif;">Blosooms at SKCT</p>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div>
      </swiper></div>
    </md-card-media>
  </md-card>
            




<!-- <event end -->
    
     <section>
        <v-layout
          column
          wrap
          align-center
        >
          <v-flex xs12 sm4 text-xs-center my-3 >
             <div  data-aos="fade-left" > <h2><strong>ABOUT DEPARTMENT</strong></h2></div>
          </v-flex>
          <v-container>
          <v-flex text-xs-center>
<div data-aos="zoom-in">
<<<<<<< HEAD
          <p style="font-size:17px;text-align:justify">
            {{ about_dpt }} 
              </p>
=======
          <p style="font-size:17px;text-align:justify"> 
              {{about_desc}}</p>
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
</div>
          </v-flex>
          </v-container>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
<div data-aos="zoom-in"
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
<<<<<<< HEAD
                      <p style="font-size:17px;text-align:justify">
                        {{ dpt_vision }}</p>
=======
                      <p style="font-size:17px;text-align:justify">{{vision_desc}}
            </p>
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
                      </v-layout>
                    </v-card-text>
                  </v-card>
</div>
                </v-flex>
                <v-flex xs12 md4>
<div data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="5000">
                  <v-card class="elevation-0 transparent" style="overflow:hidden;">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">ondemand_video</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline"><strong>video</strong></div>
                    </v-card-title>
                    <v-card-text>
                      <v-flex text-xs-center>
                              <iframe width="320px" height="170px" src="https://www.youtube.com/embed/1Qzr8jDWRVM" 
                              frameborder="0" allow="accelerometer;encrypted-media; gyroscope;" 
                              allowfullscreen></iframe>
                      </v-flex>
                    </v-card-text>
                  </v-card>
</div>
                </v-flex>
                <v-flex xs12 md4>
<div data-aos="zoom-in"
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
<<<<<<< HEAD
                          {{ dpt_mission }}
                      <!-- <strong>1.</strong> provide quality academic environment that would help the students to acquire knowledge in computer science concepts.<br />
                      <strong>2.</strong> motivate faculty to disseminate knowledge to different levels.<br />
                      <strong>3.</strong> produce competent graduates who can develop algorithms and systems to the target groups. -->
                        </p> 
=======
                          {{mission_desc}}
                     </p> 
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
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
        <v-parallax src="http://skct.edu.in/SKCT-CSE/images/body/hod_bg.png" height="300"> 
    <section class="hide-overflow">
    <v-layout align-center>
        <v-flex
        text-xs-center
        mt-4
        >
        <div data-aos="fade-left">
          <p style="font-size:25px">
              {{ dpt_thought }}<br />
          </p>
          <v-flex ml-5>
          <p>{{ dpt_thought_name }}</p>
          </v-flex>
        </div>
        </v-flex>
         <v-flex ml-3>
      <div data-aos="fade-right">
      <div class="pro ">
         <img src="http://skct.edu.in/SKCT-CSE/images/staffs/balamurugan.gif" alt="Vuetify.js" height="200">
      </div>
      </div>
      </v-flex>
    </v-layout>
        </section>   
        </v-parallax>
      </section>
</div>

<div class="hidden-md-and-up">
        <v-parallax src="http://skct.edu.in/SKCT-CSE/images/body/hod_bg.png" height="560" style="overflow:hidden;"> 
            <v-container>
              <v-layout row wrap >
                <v-flex mb-3 >
                  <center>
                <div data-aos="fade-left">
<<<<<<< HEAD
                <div class="promob" style="height:200px;width:200px" >
                  <v-img src="http://skct.edu.in/SKCT-CSE/images/staffs/balamurugan.gif" alt="Vuetify.js"></v-img>
=======
                <div class="promob" >
                  <v-img :src="alumni_image"></v-img>
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
                </div>
                </div>
                  </center>
                </v-flex>
              
             <div data-aos="fade-right">
               <v-flex text-xs-center >
<<<<<<< HEAD
              <div class="white--text" style="align:justify;font-size:20px">{{ dpt_thought }}<br /></div>
             <br /><div class="subheading">{{ dpt_thought_name }}</div>
=======
              <h2 class="white--text">{{alumni_quote}}<br /></h2>
             <div class="subheading">-{{alumni_name}}}</div>
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
            </v-flex>
             </div>
             </v-layout>
            </v-container>
        </v-parallax>
    </div>

         <v-layout mt-3>
           <v-flex>
              <div   data-aos="fade-left"><h2 class="heading mb-2" align="center"><strong>PROGRAMME OUTCOMES</strong></h2></div>
            <v-container>
            <ol>
                <li class="po"><b>Engineering knowledge:</b>Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                <li class="po"><b>Problem analysis:</b>  Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                <li class="po"><b>Design/development of solutions:</b>  Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
                <li class="po"><b>Conduct investigations of complex problems:</b>  Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
                <li class="po"><b>Modern tool usage:</b>  Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.  </li>
                <li class="po"><b>The engineer and society:</b> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice  </li>
                <li class="po"><b>Environment and sustainability:</b> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
                <li class="po"><b>Ethics:</b>Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
                <li class="po"><b>Individual and team work:</b>  Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
                <li class="po"><b>Communication:</b> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
                <li class="po"><b>Project management and finance:</b> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one?s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
                <li class="po"><b>Life-long learning:</b>Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
            </ol>
            </v-container>
           </v-flex>
         </v-layout>



   <v-flex text-xs-center my-4 font-cursive>
          <div   data-aos="fade-left" ><h2><strong
         > FACILITIES</strong></h2></div>
      </v-flex>
<div class="pro_cool hidden-md-and-up">
<div id="counter" style="display:block;padding-top:30px;padding-bottom:30px;height:100%;margin-left:10px;margin-right:10px;">
  <div class="text-xs-center">
    <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:rgb(70,196,222);font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e1"
      :options="o1"
      @ready="onReady"
    /></span><br><span><p data-aos="zoom-out" style="color:white;font-family:'Spectral', serif;">Faculty</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:rgb(70,196,222);font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e2"
      :options="o2"
      @ready="onReady"
    /></span><br><span><p data-aos="zoom-out" style="color:white;font-family:'Spectral', serif;">Student</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:rgb(70, 196, 222);font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e3"
      :options="o3"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="color:white;font-family:'Spectral', serif;">Laboratory</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:rgb(70, 196, 222);font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e4"
      :options="o4"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="color:white;font-family:'Spectral', serif;">ClassRooms</p></span>
  </div></span>
  </div></div>
</div>

    <div class="hidden-sm-and-down"> 
    <section class="cool_facts_area clearfix">
        <div class="container">
            <div class="row">
                <!-- Single Cool Fact-->
                <div class="col-12 col-md-3 col-lg-3">
                    <div class="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                        <div class="counter-area">
                            <h3 data-aos="zoom-in"><span class="counter">  <ICountUp
                                                :delay="1000"
                                                :endVal="e1"
                                                :options="o1"
                                                @ready="onReady"
                                              />
                                           </span></h3>
                        </div>
                        <div class="cool-facts-content">
                            <i class="ion-arrow-down-a"></i>
                            <p data-aos="flip-right" >Faculty</p>
                        </div>
                    </div>
                </div>
                <!-- Single Cool Fact-->
                <div class="col-12 col-md-3 col-lg-3">
                    <div class="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                        <div class="counter-area">
                            <h3 data-aos="zoom-in"><span class="counter">
                               <ICountUp
                                                :delay="1000"
                                                :endVal="e2"
                                                :options="o2"
                                                @ready="onReady"
                                              />
                                              </span></h3>
                        </div>
                        <div class="cool-facts-content">
                            <i class="ion-happy-outline"></i>
                            <p data-aos="flip-left">Students</p>
                        </div>
                    </div>
                </div>
                <!-- Single Cool Fact-->
                <div class="col-12 col-md-3 col-lg-3">
                    <div class="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.6s">
                        <div class="counter-area">
                            <h3 data-aos="zoom-in"><span class="counter"> <ICountUp
                                                :delay="1000"
                                                :endVal="e3"
                                                :options="o3"
                                                @ready="onReady"
                                              /></span></h3>
                        </div>
                        <div class="cool-facts-content">
                            <i class="ion-person"></i>
                            <p data-aos="flip-right">Laboratory</p>
                        </div>
                    </div>
                </div>
                <!-- Single Cool Fact-->
                <div class="col-12 col-md-3 col-lg-3">
                    <div class="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.8s">
                        <div class="counter-area">
                            <h3 data-aos="zoom-in"><span class="counter"> <ICountUp
                                                :delay="1000"
                                                :endVal="e4"
                                                :options="o4"
                                                @ready="onReady"
                                              /> </span></h3>
                        </div>
                        <div class="cool-facts-content">
                            <i class="ion-ios-star-outline"></i>
                            <p data-aos="flip-left">ClassRooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- <loader> -->

   <div class="container fluid row">
        <div class="col l6 m6">
             <div   data-aos="fade-left"><h2 class="heading my-3" align="center"><strong>PROGRAM EDUCATIONAL OUTCOMES</strong></h2></div>
           <div data-aos="fade-in"
     data-aos-duration="8000"> <ol>
                <li class="po"><b>PEO1.</b> To provide students with a solid foundation in mathematical, scientific and engineering fundamentals required to solve computer science and engineering problems.  </li>
                <li class="po"><b>PEO2.</b> To provide the students scope to improve programming skills ,apply computing techniques to design and maintain hardware and software with social relevance.</li>
                <li class="po"><b>PEO3.</b> To  provide the students, the ability to adapt, contribute and innovate new technologies in the key domains of Computer Science and Engineering and to productively extend their interest by pursuing higher studies and research.</li>
                <li class="po"><b>PEO4.</b> To inculcate in students professional and ethical attitude, entrepreneurship skills, effective communication skills and team work skills to work in multi disciplinary teams.</li>
            </ol>
           </div>
        </div>
        <div class="col l6 m6">
          <div   data-aos="fade-left"> <h2 class="heading my-3" align="center"><strong>PROGRAM SPECIFIC OUTCOMES</strong></h2></div>
          <div data-aos="fade-in"
     data-aos-duration="8000">  <ol>
                <li class="po"><b>Professional Skills :</b>Deep understanding of the basic concepts in Computer Science domain.</li>
                <li class="po"><b>Problem Solving Skills:</b>Ability to develop programming skills and solve problems.</li>
                <li class="po"><b>Successful career and entrepreneurship:</b>Help the student to develop algorithms and computer systems of high standards and become entrepreneurs.</li>
            </ol></div>
        </div>
    </div>

<v-container hidden-sm-and-down grid-list-xl>
  <v-layout row wrap align-center>
    <v-flex xs12 md8>
	<div class="row">
		<div class="col-sm-12">
       <div   data-aos="fade-left">
			<h2 id="h2">What <b>our Alumini</b> are saying</h2></div>
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Carousel indicators -->
			
				<!-- Wrapper for carousel items -->
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="img-box"><img src="data:image/jpeg;base64,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" alt=""></div>
						<p class="testimonial">Any institutions' alumni are key to its growth. We are focused on giving a global experience to our students.</p>
						
					</div>
					<div class="item carousel-item">
						<div class="img-box"><img  src="http://skct.edu.in/SKCT-CSE/images/alumini/1.jpg" alt=""></div>
						<p class="testimonial">{{ alumini_thought }}</p>
						<p class="overview"><b> {{ alumini_name }}</b><br/>Alumini of {{ title }}</p>
					</div>
				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
	
	</div>
      </v-flex>
       <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
               <div   data-aos="fade-left"><div class="headline"><h2><strong>Records</strong></h2></div></div>
            </v-card-title>
            <v-card-text>
                <v-flex PY-2 text-xs-center>
                  <div data-aos="fade-in"
     data-aos-duration="5000">
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
            </div>
          </v-flex>
          </v-card-text>
          </v-card> 
        </v-flex>
      </v-layout>
    </v-container>

    
     <div class=" hidden-md-and-up">
<div class="text-xs-center mx-2 mb-0"><div  data-aos="fade-left"><h2 id="h2">What <b>our Alumini</b> are saying</h2></div></div>
 <md-card class="mx-1 mt-0">    
<md-card-media class="swiper-inner">
      <!-- swiper -->
      <div style="padding-top:20px;"><swiper :options="swiperOption">
        <div class="swiper-slide c-ach" v-for="i in 5" :key="i">
          <v-card  class="elevation-0" style="border-radius:50px;height:200px;overflow:hidden">
  <v-img src="http://skct.edu.in/SKCT-CSE/images/alumini/1.jpg"  class="card-img-top" alt="..."></v-img>
          </v-card>
  <div class="text-xs-center mx-3 my-2">
    <p>{{ alumini_thought }}</p>
    <p class="overview"><b>{{ alumini_name }}</b><br/>Alumini of {{ title }}</p>
  </div>
</div>
      </swiper></div>
    </md-card-media>
  </md-card>
           </div>
            

    <section class="hidden-md-and-up">
          <v-flex xs12 >
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline" data-aos="fade-left"><h2><strong>Records</strong></h2></div>
                    </v-card-title>
                    <v-card-text>
                        <v-flex PY-2 text-xs-center>
                          <div data-aos="zoom-in"
     data-aos-duration="5000">
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
                          </div>
                  </v-flex>
                  </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
      </section>



<div class="indigo accent-4">
  <v-flex text-xs-center my-4><h2 id="hh" style="color:white;"><strong>BEST PRACTICES</strong></h2></v-flex>
 <div   class="container fluid row">
        <div class="col l6 m6">
        <h2 id="hh"  class="heading my-3" align="center" style="color:white;"><strong>Teaching Learning Practices & Career Advancement</strong></h2>
             <ol data-aos="flip-left"  >
            <li class="bp" style="list-style-type: square;">Industry driven / aligned curriculum</li>
            <li class="bp" style="list-style-type: square;">Outcome based education with Choice Based Credit System</li>
            <li class="bp" style="list-style-type: square;">Technology enabled 24*7 Learning environment</li>
            <li class="bp" style="list-style-type: square;">Industry equipped laboratories</li>
            <li class="bp" style="list-style-type: square;">Customized assessment methodologies</li>
            <li class="bp" style="list-style-type: square;">Interactive Teaching Learning with innovative research oriented activities</li>
            <li class="bp" style="list-style-type: square;">Adopted advanced Teaching Learning tools : Google Classroom and Coding Portals</li>
            <li class="bp" style="list-style-type: square;">Curriculum driven Mini project modules for product development exposure</li>
            <li class="bp" style="list-style-type: square;">Flipped classes for improving self learning capability </li>
            <li class="bp" style="list-style-type: square;">360 Degree Student Feedback on Teaching & Learning</li>
            <li class="bp" style="list-style-type: square;">Alumni involved support & assistance for career placement</li>
            <li class="bp" style="list-style-type: square;">Technical Webinars & Interactive Sessions with Experts</li>
            <li class="bp" style="list-style-type: square;">Internship Opportunities & Guidance</li>
            <li class="bp" style="list-style-type: square;">Tutor-Ward system for parental care & support</li>
            <li class="bp" style="list-style-type: square;">Industry involved Value Added Courses & MOOC Certifications</li>
            <li class="bp" style="list-style-type: square;">Snap Talks and Theatre Clubs for communication enhancement</li>
        </ol>
        </div>
        <div class="col l6 m6">
		<h2 id="hh" class="heading my-3" align="center" style="color:white;"><strong>Research & Product Development</strong></h2>
             <ol data-aos="flip-left"  >
            <li class="bp" style="list-style-type: square;">Guidance for Students in research article writing & publishing</li>
            <li class="bp" style="list-style-type: square;">Technical knowledge up-gradation through conduct of skill development programmes</li>
            <li class="bp" style="list-style-type: square;">Support & Guidance for Technical contests participation</li>
            <li class="bp" style="list-style-type: square;">Opportunities for involving in Inter-departmental research activities</li>
            <li class="bp" style="list-style-type: square;">Special Laboratories for pursuing research interests.</li>
            <li class="bp" style="list-style-type: square;">Weekly Technical Club activities for peers to pursue special interests</li>
            <li class="bp" style="list-style-type: square;">Mentorships for start-ups</li>
            <li class="bp" style="list-style-type: square;">Opportunities for students to work with Funded projects</li>
            <li class="bp" style="list-style-type: square;">Industrial visits & Field Trips for understanding the societal needs to be addressed </li>
        </ol>
        </div>
    </div>
</div>


       <v-flex text-xs-center mt-3 mx-1>
             <div data-aos="fade-left" data-aos-duration="5000">
            <h2><strong>GALLARY OF {{ title }}</strong></h2>
             </div>
        </v-flex>
               <!-- mobile -->
            <v-flex pb-3 pt-5 px-4 hidden-md-and-up>
                  <div data-aos="fade-right" data-aos-duration="5000">
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
                  <div data-aos="fade-left" data-aos-duration="5000">
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
<<<<<<< HEAD
            </v-flex> 
            <fv :hod_name="fv_name" :hod_email="fv_email" :hod_no="fv_no" :hod_dept="fv_dept" ></fv>
=======
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

>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
<footnav></footnav>
       
 </v-app>
</template>

<script>
// import toolbar from './toolbar.vue'
import fv from './fv'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import footnav from './footnav.vue'
<<<<<<< HEAD
import countTo from 'vue-count-to'
import ICountUp from 'vue-countup-v2'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import pdf from 'vue-pdf'

export default {
    components: {
     toolbar,footnav,fv,ICountUp,countTo,swiper,swiperSlide,pdf
=======
import axios from 'axios'

export default {
    components: {
     footnav,fv
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6
  },

   data(){
       return{
<<<<<<< HEAD
         title: '- CSE DEPARTMENT',
         fv_name: "a.balamurugan",
         fv_email: "sethu1471@gmail.com",
         fv_no: "9025548919",
         fv_dept: "cse department",
         dpt_name: "gge",
         dpt_certificate: "tyh",
         about_dpt: "jnh",
         dpt_mission: "rgt",
         dpt_vision: "rtgjhg",
         dpt_thought: "gvhne",
         dpt_thought_name: "rguh",
         alumini_thought: "bgfh",
         alumini_name: "eufbgtn",
         swiperOption:{
           grapCursor:true,
           centeredSlides: true,
           slidesPerView: 'auto',
           loop: true,
           autoplay: {
             delay: 2000,
             disableOnInteraction: false,
           } 
         },
     
           

    e1:9,

    e2:32,

    e3:84,

    e4:400,

    delay: 20000,

    currentNumber: 0,

    timer: null,

    o1: {

          useEasing: true,

          useGrouping: true,

          separator: ',',

          decimal: '.',

          prefix: '',

          suffix: '+',

       

        },

    o2: {

          useEasing: true,

          useGrouping: true,

          separator: ',',

          decimal: '.',
=======
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
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6

          prefix: '',

          suffix:'+',

       

        },

    o3: {

          useEasing: true,

          useGrouping: true,

          separator: ',',

          decimal: '.',

          prefix: '',

          suffix:'+',

       

        },

    o4: {

          useEasing: true,

          useGrouping: true,

          separator: ',',

          decimal: '.',

          prefix: '',

          suffix:'+',
        },
         ex:[
           { title : "Achievements",sub:['Department','Faculty','Student']},
           { title: "Placement Statitcs",sub:['2014-2015','2015-2016','2016-2017','2017-2018','2018-2019','2019-2020']}
           ],
      

        value:0,
        show: true,

}
},
<<<<<<< HEAD
   }
  
=======

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
>>>>>>> b1d63829f551a509ba318d00a65bd90520948ef6

</script>

<style scoped>
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
.promob{
  overflow: hidden;
  height: 30%;
  border-radius: 50%;
}
.rdi{
  border-radius: 8px;
}
.rd{
  border-radius: 5px;
}

#hh{
  color: #000;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 0 0 0;
}
#hh::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 4px;
	border-radius: 1px;
	background: hsl(27, 93%, 44%);
	left: 0;
	right: 0;
  padding-bottom: 0;
	bottom: -10px;
}

h2 {
	color: #000;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 0 0 0;
}
h2::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 4px;
	border-radius: 1px;
	background: #1c47e3;
	left: 0;
	right: 0;
  padding-bottom: 0;
	bottom: -10px;
}

.po{
  font-size: 20px;
  padding-top: 8px;

}

.bp{
  font-size: 20px;
  color: white;
  padding-top: 8px;

}

#h2 {
	color: #000;
	font-size: 26px;
	font-weight: 300;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 30px 0 70px;
}
#h2::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 4px;
	border-radius: 1px;
	background: #1c47e3;
	left: 0;
	right: 0;
	bottom: -10px;
}
.carousel {
	margin: 50px auto;
	padding: 0 70px;
}
.carousel .item {
	color: #999;
	overflow: hidden;
    min-height: 120px;
	font-size: 13px;
}
.carousel .media img {
	width: 80px;
	height: 80px;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 0 15px 0 60px ;
	position: relative;
}
.carousel .testimonial::before {
	content: '\93';
	color: #e2e2e2;
	font-weight: bold;
	font-size: 68px;
	line-height: 54px;
	position: absolute;
	left: 15px;
	top: 0;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #1c47e3;
}

.col-center {
	margin: 0 auto;
	float: none !important;
}
.carousel {
	margin: 50px auto;
	padding: 0 70px;
}
.carousel .item {
	color: #999;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
    min-height: 290px;
}
.carousel .item .img-box {
	width: 135px;
	height: 135px;
	margin: 0 auto;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 30px 0 10px;
}
.carousel .overview {	
	font-style: italic;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #7AA641;
}
.carousel .carousel-control {
	width: 40px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
	background: none;
}
.carousel-control i {
    font-size: 68px;
	line-height: 42px;
    position: absolute;
    display: inline-block;
	color: rgba(0, 0, 0, 0.8);
    text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
	bottom: -40px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	margin: 1px 3px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #999;
	border-color: transparent;
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.carousel-indicators li.active {	
	background: #555;		
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.cool_facts_area {
    position: relative;
    z-index: auto;
	background: url('https://png.pngtree.com/thumb_back/fh260/back_pic/00/01/54/555604115c64ab3.jpg');
    padding: 25px 0 25px 0;
}
.pro_cool{
  	background: url('https://png.pngtree.com/thumb_back/fh260/back_pic/00/01/54/555604115c64ab3.jpg');

}
.cool_facts_area:after {
    position: absolute;
    bottom: -100px;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    content: ''
}

.cool-facts-content > i {
    color: #ffffff;
    font-size: 36px;
}

.counter-area {
    min-width: 100px;
    -ms-flex-item-align: end;
    align-self: flex-end;
}

.counter-area > h3 {
    color: #ffffff;
    font-size: 60px;
    margin-bottom: 0;
    line-height: 1;
}

.cool-facts-content > p {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 0;
}

.c-ach{
  
  margin: 10px;

}

.swiper-slide{
  width: 18rem;
}




</style>
