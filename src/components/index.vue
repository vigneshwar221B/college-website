<template>
<v-app>
    <toolbar></toolbar>
    <div v-el:toppage style="background:url('http://skct.edu.in/SKCT-S&H/images/slider/1.jpg');text-align:center;padding-top:0px;padding-bottom:0px;min-height:calc(100vh - 0px);width:100%;height:100%;margin-bottom:0;position:relative;height:100%;background-attachment:fixed" class="top-murphy">
      <div style="min-height:calc(100vh-0px);height:100%;height:100vh;width:100%;background: rgb(7,19,222);
background: linear-gradient(146deg, rgba(7,19,222,0.8475140397956058) 0%, rgba(50,116,219,0.63246459575) 100%);">
      <div class="container">
        <div class="row height-90 align-items-center justify-content-center" style="min-height:calc(100vh - 250px)">
          <div class="col">
            <div class="banner text-center">
              <center><div style="padding-bottom:20px;"><img data-aos="zoom-in" src="../assets/clg2.png" style="z-index:99;width:200px;" /></div></center>
            <span class="anime" data-aos="zoom-in" style="font-family:'Vollkorn', serif;font-color:black"><pre data-aos="zoom-in" class="anime" style="display:inline-block">Sri</pre> <pre data-aos="zoom-in" class="anime" style="display:inline-block"> Krishna</pre> <pre data-aos="zoom-in" class="anime" style="display:inline-block"> College</pre> <pre data-aos="zoom-in" class="anime" style="display:inline-block"> of</pre> <pre data-aos="zoom-in" class="anime" style="display:inline-block"> Technology</pre></span>
            
            </div>
          </div>
        </div>
      </div>
    </div></div>
    <div class="parallax1" id="gallery" style="background:url('http://skct.edu.in/SKCT-S&H/images/slider/1.jpg');padding-top:0px;padding-bottom:0px;min-height:calc(100vh-0px);height:100%;">
    
    <a href="#"><button type="button" class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark red" id="BTT" style="" data-v-10ea4164="" v-show="visible" @click="goto('toppage')" ><div class="v-btn__content"><i aria-hidden="true" class="v-icon material-icons theme--dark">keyboard_arrow_up</i></div></button></a>
    <div id="pics" style="padding-top:20px;padding-bottom:20px;background: rgb(253,29,29);
background: linear-gradient(90deg, rgba(253,29,29,0.8251050762101716) 0%, rgba(252,176,69,0.82645) 100%);">
      <center><h1 data-aos="zoom-out">Announcements</h1></center>
    </div>
    
   <!-- <div id="carouselExampleIndicators" class="carousel slide"> -->
  <!--<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>-->
  <!-- <div class="carousel-inner" role="listbox" style="height:300px;">
    <div class="carousel-item active">
      <img class="d-block img-fluid" style="height:300px;width:100%;" src="http://skct.edu.in/img/slider/nirf.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" style="height:300px;width:100%;" src="http://skct.edu.in/img/slider/collegeday.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" style="height:300px;width:100%;" src="http://skct.edu.in/img/slider/graduation.jpg" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" style="height:300px;width:100%;" src="http://skct.edu.in/img/slider/It-team-new.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a></div>  -->

      <v-carousel class="hidden-sm-and-down" hide-delimiters>
        <v-carousel-item
      v-for="(pic,i) in pics"
      :key="i"
      :src="pic.src"
      style="background-size:cover"
        ></v-carousel-item>
      </v-carousel>

      
      <v-carousel class="hidden-md-and-up" height="250" hide-delimiters>
        <v-carousel-item
      v-for="(pic,i) in pics"
      :key="i"
      :src="pic.src"
      style="background-size:cover"
        ></v-carousel-item>
      </v-carousel>

   
    
    </div>
    <div class="parallax2" id="upcomming_events" style="background:url('http://skct.edu.in/SKCT-S&H/images/slider/1.jpg');padding-top:0;padding-bottom:30px;background-repeat:no-repeat;background-size:cover;min-height:calc(100vh-0px;);height:100%;">
    <md-card>
    <div style="padding-top:17px;padding-bottom:17px;background: rgb(142,45,226);
background: linear-gradient(90deg, rgba(142,45,226,0.8746849081429446) 0%, rgba(74,0,224,0.7906512946975666) 100%);"><center><h1 data-aos="zoom-out" style="padding-bottom:8px;">Achievements</h1></center></div>
    
    <md-card-media class="swiper-inner">
      <!-- swiper -->
      <div style="padding-top:20px;"><swiper :options="swiperOption">
        <div class="card swiper-slide c-ach" style="width: 18rem;">
  <img src="http://skct.edu.in/img/news/CHALLENGE_IOT.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Cloud Literacy-Learnathon</h5>
    <p class="card-text text-muted">23rd October 2018</p>
    <pre>          
    </pre>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div>
        <div class="card swiper-slide c-ach" style="width: 18rem;">
  <img src="http://skct.edu.in/img/news/newstitle.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">SKCT @ MEDIA</h5>
    <p class="card-text">Blosooms at SKCT</p>
    <pre>          
    </pre>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div>
<div class="card swiper-slide c-ach" style="width: 18rem;">
  <img src="http://skct.edu.in/img/news/newstitle.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">SKCT @ MEDIA</h5>
    <p class="card-text">Blosooms at SKCT</p>
    <pre>          
    </pre>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div>


        
      </swiper></div>
    </md-card-media>
  </md-card></div>
 <!-- <div id="news" style="padding-top:30px;padding-bottom:30px;display:block">
    <div><center><h1></h1></center></div>
    <div><span><div class="card" data-aos="fade-right" style="width: 18rem;display:inline-block;">
  <img src="http://52.233.134.86/wp-content/uploads/2017/01/achievements.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></span>
<span><div class="card" data-aos="fade-left" style="width: 18rem;display:inline-block;">
  <img src="http://52.233.134.86/wp-content/uploads/2017/01/achievements.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></span></div></div>-->
<div style="height:100%;background:url('http://skct.edu.in/SKCT-S&H/images/slider/1.jpg');position:relative;width:100%;background-attachment:fixed;">
  <div style="background: rgb(0,90,167);
background: linear-gradient(90deg, rgba(0,90,167,1) 0%, rgba(255,253,228,1) 100%);"><center><h1 data-aos="zoom-out" style="padding-top:20px;padding-bottom:20px;">Explore Our Campus</h1></center></div>
<div id="video" style="padding-top:30px;height:0px;position:relative;padding-bottom:30px;display:block;height:100%;background-color:rgba(255,255,255,0.7)">
  <center><iframe src="https://www.youtube.com/embed/vzZTiLQjyBg" data-aos="zoom-in" gesture="media" allow="encrypted-media" allowfullscreeenwidth="560" height="315" frameborder="0"></iframe></center>
</div></div>

 
  <div style="height:100%;background-image:url('http://upscanthro.com/wp-content/uploads/2015/09/Economics.jpe');background-size:cover;background-attachment:fixed;"><div style="background: rgb(183,248,219);
background: linear-gradient(90deg, rgba(183,248,219,1) 0%, rgba(80,167,194,1) 100%);"><center><h1 data-aos="zoom-out" style="padding-top:20px;padding-bottom:20px;">SKCT @ Glance</h1></center></div>
<div id="counter" style="display:block;padding-top:30px;padding-bottom:30px;height:100%;margin-left:10px;margin-right:10px;">
  <div class="text-xs-center">
    
    <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e1"
      :options="o1"
      @ready="onReady"
    /></span><br><span><p data-aos="zoom-out" style="font-family: 'Literata', serif;color:white">Departments</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e2"
      :options="o2"
      @ready="onReady"
    /></span><br><span><p data-aos="zoom-out" style="font-family: 'Literata', serif;color:white">yrs of existence</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e3"
      :options="o3"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="font-family: 'Literata', serif;color:white">Smart Classrooms</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e4"
      :options="o4"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="font-family: 'Literata', serif;color:white">Students</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e5"
      :options="o5"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="font-family: 'Literata', serif;color:white">Graduates</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e6"
      :options="o6"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="font-family: 'Literata', serif;color:white">Laboratories</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e7"
      :options="o7"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="font-family: 'Literata', serif;color:white">Centres of Excellence</p></span>
  </div></span>
  <span class="counter"><div class="iCountUp" style="display:inline-block;padding:5px;">
    <span style="color:black;font-family: 'Crimson Text', serif;font-size:40px;"><ICountUp
      :delay="1000"
      :endVal="e8"
      :options="o8"
      @ready="onReady"
    /></span><br><span><p data-aos="flip-right" style="font-family: 'Literata', serif;color:white">Research Centers</p></span>
  </div></span>

    

  </div>  
</div></div>
<div id="departments" style="background-image:url('https://cdn-images-1.medium.com/max/1600/0*TtBf28_AjE5nlpvj.jpg');background-size:cover;background-attachment:fixed">
  <div style="height:100%;width:100%;background-color:rgba(255,255,255,0.2);">
  <div style="background: rgb(49,71,85);
background: linear-gradient(90deg, rgba(49,71,85,1) 0%, rgba(38,160,218,1) 100%);margin-bottom:20px;"><center><h1 data-aos="zoom-out" style="padding-top:20px;padding-bottom:20px;">Departments</h1></center></div>
  <div style="margin-left:20px;margin-right:20px;text-align:center;" class="">
<span class="c-dep"><div class="card dep" data-aos="fade-up" style="width: 18rem;display:inline-block;">
  <img src="https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/04/CIVIL-Engineering.jpg" style="height:125px;" class="card-img-top embed-responsive-item c-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Department of Civil Engineering</h5>
    <pre>                            </pre>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div></span>
<span class="c-dep"><div class="card dep" data-aos="fade-up" style="width: 18rem;display:inline-block;">
  <img src="http://blog.nextstepu.com/wp-content/uploads/2014/02/iStock_000024289676Small.jpg" style="height:125px" class="card-img-top embed-responsive-item c-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Department of Electrical and Electronics Engineering</h5>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div></span>
<span class="c-dep"><div class="card dep" data-aos="fade-up" style="width: 18rem;display:inline-block;">
  <img src="https://www.ijecce.org/images/2016/08/31/22.jpg" style="height:125px" class="card-img-top embed-responsive-item c-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Department of Electrical and Communication Engineering</h5>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div></span>
<span class="c-dep"><div class="card dep" data-aos="fade-up" style="width: 18rem;display:inline-block;">
  <img src="http://media.myklassroom.com/mkm_webroot/branch_images/17.jpg" style="height:125px" class="card-img-top embed-responsive-item c-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Department of Instrumental and Electronics Engineering</h5>
    
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div></span>
<span class="c-dep"><div class="card dep" data-aos="fade-up" style="width: 18rem;display:inline-block;">
  <img src="https://inteng-storage.s3.amazonaws.com/img/iea/LBGRn54NG2/sizes/mecheng1_resize_md.jpg" style="height:125px" class="card-img-top embed-responsive-item c-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Department of Mechanical Engineering</h5>
    <pre>                            </pre>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div></span>
<span class="c-dep"><div class="card dep" data-aos="fade-up" style="width: 18rem;display:inline-block;">
  <img src="https://wallpaperplay.com/walls/full/a/b/f/28182.jpg" style="height:125px" class="card-img-top embed-responsive-item c-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Department of Computer Science Engineering</h5>
    <pre>                            </pre>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div></span>
<span class="c-dep"><div class="card dep" data-aos="fade-up" style="width: 18rem;display:inline-block;">
  <img src="https://wallpaperplay.com/walls/full/a/b/f/28182.jpg" style="height:125px" class="card-img-top embed-responsive-item c-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Department of Information Technology</h5>
    <pre>                            </pre>
    <a href="#" class="btn btn-link">more...</a>
  </div>
</div></span></div></div>
</div>
<div id="facilities" style="background-image:url('../assets/fac.jpg');">
  <div style="background: rgb(253,29,29);
background: linear-gradient(90deg, rgba(253,29,29,0.9251050762101716) 0%, rgba(252,176,69,1) 100%);margin-bottom:20px;"><center><h1 data-aos="zoom-out" style="padding-top:20px;padding-bottom:20px;">Facilities</h1></center></div>
<div style="margin-bottom:20px;margin-left:20px;margin-right:20px;text-align:center;height:100%;background-color:rgba(255,255,255,0.9);">
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/scl/smart.jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">24/7 Connected Classrooms</p>
  </div>
</div></span>
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/featured/2.jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">Placements</p>
  </div>
</div></span>
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/scl/1(1).jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">Student Centred Learning</p>
  </div>
</div></span>
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/scl/scl-1.jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">Industry Connect</p>
  </div>
</div></span>
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/scl/sports.jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">Sports</p>
  </div>
</div></span>
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/scl/aroma.jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">Food and Amenity Mall</p>
  </div>
</div></span>
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/scl/bus.jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">Transportation</p>
  </div>
</div></span>
<span style="padding:10px;"><div class="card c-fac" data-aos="zoom-in" style="width: 18rem;display:inline-block;margin-bottom:10px;z-index:1;">
  <img src="http://skct.edu.in/img/scl/hostel.jpg" style="height:160px;border-radius:5px;" class="card-img-top embed-responsive-item c-img1" alt="...">
  <div class="card-img-overlay h-100 d-flex flex-column ">
    <div><pre>




    </pre></div>
    
    <p class="mt-auto" style="font-family: 'Smythe', cursive;font-size:20px;background-color:rgba(255,255,255,0.8);border-radius:3px;border:2px solid rgba(0,0,0,0.7);font-type:bolder">Hall of Residence</p>
  </div>
</div></span>
</div>
</div><!--background: rgb(255,154,158);
background: linear-gradient(90deg, rgba(255,154,158,1) 0%, rgba(254,207,239,1) 100%)-->
<div style="background-image:url('https://previews.123rf.com/images/snapgalleria/snapgalleria1303/snapgalleria130300074/18627748-business-people-standing-on-road.jpg');height:410px;position:relative;width:100%;background-attachment:fixed" id="plac">
  <div style="background-color:rgba(255,255,255,0.9);height:100%">
  <div style="background-color:#e040fb;"><center><h1 data-aos="zoom-out" style="padding-top:20px;padding-bottom:20px;">Placements</h1></center></div>
  <div style="text-align:center;padding-top:40px;">
    <h1 style="">
      <span style="padding:20px;">
        <p style="display:inline-block;font-family: 'Crimson Text', serif;font-size:40px;padding-bottom:20px;">902<sup>2017-2018</sup></p></span><span style="padding:20px;"><p style="margin-bottom:20px;display:inline-block;font-family: 'Crimson Text', serif;font-size:40px;">1051<sup>2016-2017</sup></p></span><span style="padding:20px;"><p style="margin-bottom:20px;display:inline-block;font-family: 'Crimson Text', serif;font-size:40px;">802<sup>2015-2016</sup></p></span><span style="padding:20px;"><p style="margin-bottom:20px;display:inline-block;font-family: 'Crimson Text', serif;font-size:40px">712<sup>2014-2015</sup></p></span></h1></div>
  </div>
</div>


<!-- <div style="display:block">
    <div class="item" data-aos="fade-up">1</div>
<div class="item" data-aos="fade-down">2</div>
<div class="item" data-aos="fade-right">3</div>
<div class="item" data-aos="fade-left">4</div>

<div class="item" data-aos="zoom-in">5</div>
<div class="item" data-aos="zoom-out">6</div>

<div class="item" data-aos="slide-up">7</div>

<div class="item" data-aos="flip-up">8</div>
<div class="item" data-aos="flip-down">9</div>
<div class="item" data-aos="flip-right">10</div>
<div class="item" data-aos="flip-left">11</div>

</div> -->



  
  </v-app>
</template>

<script>
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(brands, solid);
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import 'swiper/dist/css/swiper.css';
import 'swiper/dist/js/swiper.js';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import $ from 'jquery';
import * as easings from 'vuetify/es5/util/easing-patterns';
import countTo from 'vue-count-to';
import ICountUp from 'vue-countup-v2';
//import 'parallaxslider/js/jquery.cslider.js';
// import 'parallaxslider/css/demo.css';
// import 'parallaxslider/css/nojs.css';
// import 'parallaxslider/css/style.css';
// import 'parallaxslider/css/style2.css';
import toolbar from './toolbar.vue'


export default {
    components:{
    toolbar
},
  el: 'image-slider',
  data: () => ({
    drawer:null,
    visible: true,
    interval:{},
    value:0,
    e1:9,
    e2:32,
    e3:84,
    e4:4000,
    e5:15000,
    e6:140,
    e7:9,
    e8:4,
    delay: 20000,
    images: ['http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
    currentNumber: 0,
    timer: null,
    o1: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
        
        },
    o2: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix:'',
        
        },
    o3: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix:'',
        
        },
    o4: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix:'+',
        
        },
    o5: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix:'+',
        
        },
    o6: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix:'+',
        
        },
    o7: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix:'',
        
        },
    o8: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix:'',
        
        },
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
    n:0,
    items: [
      'All','Family','Friends','Coworkers'
    ],
    subs: [
        
            { title: "Civil Engineering"},
            { title: "Computer Science and Engineering"},
            { title: "Electronics and Communication Engineering"},
            { title: "Electrical and Electronics Engineering"},
            { title: "Instrumentation and Control Engineering"},
            { title: "Information Technology"},
            { title: "Mechanical Engineering"},
            { title: "Science and Humanities"},
            { title: "School of Management"},
            { title: "Centre of Excellence"},
            { title: "rules and Regulations"},
      ],
     itemscoe: [
            { title: "News"},
            { title: "Contact"}            
      ],
       itemsalumini: [
            { title: "Event"},
            { title: "Database"},           
      ],
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
    draws: [
          { title: 'Home' },
          { title: 'About' }
        ],
    right: null,
    pics: [
          {
            src: 'http://skct.edu.in/img/slider/nirf.jpg'
          },
          {
            src: 'http://skct.edu.in/img/slider/collegeday.jpg'
          },
          {
            src: 'http://skct.edu.in/img/slider/graduation.jpg'
          },
          {
            src: 'http://skct.edu.in/img/slider/It-team-new.jpg'
          }
        ],
    bottomNav: 'recent',
    mounted:function(){
    document.getElementsByClassName('.swiper-container').addEventListener("load",{
       slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, 
    });
    this.startRotation();
    // $(window).scroll(function(){
    //   var scroll_position = $(window).scrollTop();
    //   $('#plac').css({
    //     'background-position-x' : - scroll_position + 'px',
    //   })
    // })
  },
      
  
    swiperOption: {
         //effect: 'coverflow',
         grabCursor: true,
         centeredSlides: true,
         slidesPerView: 'auto',
         //coverflowEffect: {
         //  rotate: 50,
         //  stretch: 0,
         //  depth: 100,
         //  modifier: 1,
         //  slideShadows : true
         //},
         autoplay:{
           delay:2500,
           disableOnInteraction:false,
         },
         pagination: {
           el: '.swiper-pagination'
         }
       },
    interval: {},
    value: 0,
    swiperOption1:{
     slidesPerView:3,
     spaceBetween:30,
    },

    tests:[
      'About Management','contact'
    ]
          
  }),
  beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
        }, 1000)
    },
  name: 'Home',
  props: {
    msg: String
  },
  components:{
    FontAwesomeIcon,
    swiper,
    swiperSlide,
    countTo,
    ICountUp,
    
  },
  watch:{
    backtt(){
    let y = window.pageYOffset;
    let z = parseInt(this.visibleoffset);
    if (y>z) {
      this.visible=!this.visible;
    }
    }
    
    
  },
  methods: {
  
  goto(toppage) {
      console.log('hahaha');
    	var element = this.$els[toppage];
      var top = element.offsetTop;
      
      window.scrollTo(0, top);
    },
    onReady: function(instance, CountUp) {
        const that = this;
        instance.update(that.e1,e2,e3,e4,e5,e6,e7,e8 + 0);
        
        },
    startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
  },
  computed:{
    currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
  }
  
    
      
        
      }
     
  // mounted(){
  //   var swiper = new Swiper('.swiper-container',{
  //     speed: 600,
  //     parallax: true,
  //     pagination:{
  //       el:'.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation:{
  //       nextEl:'.swiper-button-next',
  //       prevEl:'.swiper-button-prev',
  //     },
  //   });
  //   console.log('hahaha');
  // }

//mounted () {
//    window.smoothscroll = () => {
//      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
//      if (currentScroll > 0) {
//        window.requestAnimationFrame(window.smoothscroll)
//        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
//      }
//    }
//    window.addEventListener('scroll', this.catchScroll)
//  },
//  destroyed () {
//    window.removeEventListener('scroll', this.catchScroll)
//  },
//  methods: {
//    catchScroll () {
//      this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
//    },
//    
//    backToTop () {
//      window.smoothscroll()
//      this.$emit('scrolled');
//    }
//  }
 // }
 
  
  //mounted () {
      //this.interval = setInterval(() => {
        //if (this.value === 100) {
        //return (this.value = 0)
       //}
        //this.value += 10
      //}, 1000)
    //} 
   //
//}

//$('#gallery').scrollIntoView({
//  behavior:'smooth'
//});


//var particles = new this.$animejs('.button');
//particles.disintegrate();


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  v-list>div{
    padding-left:7px;
  }
  .v-navigation-drawer .v-list {
    background: inherit;
    padding-left: 7px;
  }
  *{
    margin:0;
    padding:0;
    border:0;
    overflow:hidden;
  }
  .iCountUp {
    font-size: 2em;
    margin: 0;
    color: #4d63bc;
    display:inline-block;
  }
  .v-expansion-panel__body {
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
    transition: .3s cubic-bezier(.25,.8,.5,1);
    padding-left:30px !important;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
.counter{
  padding:10px;
}
  html{
    scroll-behavior: smooth;
  }
  .v-progress-circular{
    margin: 1rem;
  }
  .anime{
    color:rgb(193, 237, 255);
    font-size:50px;
    animation:rot;
    animation-duration:3s;
    animation-delay:0;
    font-weight:bold;
    font-family:'Vollkorn', serif;
  }
  @keyframes rot{
    0%{
      
      opacity:0;
    }
    50%{
      
    }
    100%{
      
      opacity:1;
    }
  }
  .item {
  width: 200px;
  height: 200px;
  margin-left:10px;
  margin-right:10px;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
}
.header-link{
  display:inline-block;
  position:absolute;
  
  background:rgb(214, 57, 57);
  border-radius:30px;
  transition: all 2s ease;
  animation: fromBottom;
  animation-duration:4s;
  animation-iteration-count: infinite;
}
.c-fac{
  border-radius:5px;
  overflow:hidden;
  position:relative;
  transition:all 2s ease;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.c-fac:hover{
  transform: scale(1.2);
  opacity: 0.5;
}
.c-img1{
  transition: all 2s ease;
}
.c-img1:hover{
  transform: scale(1.2);
  opacity: 0.5;
}
.header-link:hover{
  color:yellowgreen;
}
@keyframes fromBottom{
  0%{
    transform: translateY(-10px);
  }
  50%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(-10px);
  }
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
.c-ach{
  height:20rem;
  margin:10px;
}
.c-dep{
  height:20rem;
  margin:5px;
  padding-left:20px;
}
.c-img{
  
  transition: all 2s ease;
}
.c-img:hover{
  transform: scale(1.2);
  opacity: 0.5;
}
.dep{
  z-index:1;
  transition:3s;
  margin-bottom:10px;
  border-radius:3px;
  overflow:hidden;
  position:relative;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.dep:hover{
  z-index:0;
  box-shadow:none;
  overflow:hidden;
  border-radius:3px;
  margin-bottom:10x;
}
.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.goTop {
  border-radius: 5px;
  background-color: rgb(1,14,27);
  background-color: rgba(1, 14, 27, .7);
  position: fixed;
  width: 45px;
  height: 45px;
  display: block;
  right: 15px;
  bottom: 15px;
  border: none;
  opacity: 0;
  z-index: -1;}
  .fa {
    color: white;
    font-size: 22px;
  }
  

.isVisible {
  opacity: .8;
  z-index: 4;
  transition: all .4s ease-in;
}
.back-to-top-fade-enter-active, .back-to-top-fade-leave-active {
  transition: opacity .7s;
}
.back-to-top-fade-enter, .back-to-top-fade-leave-to{
  opacity: 0;
}

.vue-back-to-top{
  position: fixed;
  z-index: 1000;
  cursor:pointer;
}

.vue-back-to-top .default {
  width: 160px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  background-color: #f5c85c;
  border-radius: 3px;
}

.vue-back-to-top .default span{
  color:#ffffff;
}
.material-scrolltop {
    display: block;
    position: fixed;
    width: 0;
    height: 0;
    bottom: 23px;
    right: 23px;
    padding: 0;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 2px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    cursor: hand;
    border-radius: 50%;
    background: #4caf50;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.25, 0, 1);
    -ms-transition: all 0.3s cubic-bezier(0.25, 0.25, 0, 1);
    -moz-transition: all 0.3s cubic-bezier(0.25, 0.25, 0, 1);
    -o-transition: all 0.3s cubic-bezier(0.25, 0.25, 0, 1);
    transition: all 0.3s cubic-bezier(0.25, 0.25, 0, 1);
}

.material-scrolltop:hover {
    background-color: #4caf50;
    text-decoration: none;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5), 0 3px 15px rgba(0, 0, 0, 0.5);
}

.material-scrolltop::before {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    content: "";
    width: 0;
    border-radius: 100%;
    background: #66bb6a;
}

.material-scrolltop:active::before {
    width: 120%;
    padding-top: 120%;
    -webkit-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}

.material-scrolltop.reveal {
    width: 56px;
    height: 56px;
}

.material-scrolltop span {
    display: block;
    font-size: 25px;
    color: #fff;
}




</style>
