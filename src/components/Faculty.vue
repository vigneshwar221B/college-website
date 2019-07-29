<template>
<div>
<toolbar  :tool_name="title" :show="true"></toolbar>
<div data-aos="fade-in" data-aos-duration="3000">
        <v-flex mt-3>
          <h2><strong>Department Faculties</strong></h2>
        </v-flex>
        </div>
<v-flex display-1 text-xs-center><v-container style="color:black;text-align:center">The department of CSE currently has an active and energetic team of near 38 faculty members with diverse educational backgrounds and academic experiences. They are embarking on a journey of building a future world.</v-container></v-flex>

<v-container fluid>
    <v-layout row wrap align-center justify-center>
            <div v-for="i in 40" :key="i" data-aos="fade-left">
             <div class="card hovercard mx-3" >
                <div class="cardheader" style="background:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxbHEhWTlHbmRRHf4l3kznFarxYWO8GP9Zhs59K9Xl3p7wehL') no-repeat">
                </div>
                <div class="avatar">
                    <a href=""><img alt="" src="http://skct.edu.in/SKCT-CSE/images/staffs/balamurugan.gif"></a>
                </div>
                <div class="in">
                    <div class="title my-2">
                        <a target="_blank" href="">{{ name }}</a>
                    </div>
                    <div class="desc m">{{ proffesion }}</div>
                    <div class="desc mb-3">{{ department }}</div>
                </div>
                <div class="bottom">
                   <a :href="no" style="text-decoration:none;"> <v-btn flat small fab><v-icon class="blue--text">phone</v-icon></v-btn></a>
                   <a :href="email" style="text-decoration:none;"> <v-btn flat small fab><v-icon class="red--text ">email</v-icon></v-btn></a>
                </div>
            </div>
            </div>
            </v-layout>
            
       </v-container>
       
 <footnav></footnav>
</div>
</template>


<script>

import toolbar from './toolbar.vue'
import fv from './fv'
import footnav from './footnav.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
export default {
  components:{
    toolbar,fv,footnav
  },
     data () {
      return {
        title: '- CSE DEPARTMENT',
        name : 'a.balamurugan',
        proffesion: 'hod',
        department: "Department Of " + 'cse',
        no: 'tel:'+ "45678",
        email: 'mailto:' + "rfhb",
        card_bck: ''

      }},
}
</script>

<style scoped>
h2 {
	color: #000;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
	/* text-transform: uppercase; */
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

.card {
    padding-top: 20px;
    margin: 10px 0 20px 0;
    background-color: rgba(214, 224, 226, 0.2);
    border-top-width: 0;
    border-bottom-width: 2px;
    width:250px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    transition: transform .2s;
}
.card:hover{
    transform: scale(1.1);
}

.card .card-heading {
    padding: 0 20px;
    margin: 0;
}

.card .card-heading.simple {
    font-size: 20px;
    font-weight: 300;
    color: #777;
    border-bottom: 1px solid #e5e5e5;
}

.card .card-heading.image img {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 15px;
    vertical-align: top;
    border: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

.card .card-heading.image .card-heading-header {
    display: inline-block;
    vertical-align: top;
}

.card .card-heading.image .card-heading-header h3 {
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    color: #262626;
}

.card .card-heading.image .card-heading-header span {
    font-size: 12px;
    color: #999999;
}

.card .card-body {
    padding: 0 20px;
    margin-top: 20px;
}

.card .card-media {
    padding: 0 20px;
    margin: 0 -14px;
}

.card .card-media img {
    max-width: 100%;
    max-height: 100%;
}

.card .card-actions {
    min-height: 30px;
    padding: 0 20px 20px 20px;
    margin: 20px 0 0 0;
}

.card .card-comments {
    padding: 20px;
    margin: 0;
    background-color: #f8f8f8;
}

.card .card-comments .comments-collapse-toggle {
    padding: 0;
    margin: 0 20px 12px 20px;
}

.card .card-comments .comments-collapse-toggle a,
.card .card-comments .comments-collapse-toggle span {
    padding-right: 5px;
    overflow: hidden;
    font-size: 12px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.card-comments .media-heading {
    font-size: 13px;
    font-weight: bold;
}

.card.people {
    position: relative;
    display: inline-block;
    width: 170px;
    height: 300px;
    padding-top: 0;
    margin-left: 20px;
    overflow: hidden;
    vertical-align: top;
}

.card.people:first-child {
    margin-left: 0;
}

.card.people .card-top {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 170px;
    height: 150px;
    background-color: #ffffff;
}

.card.people .card-top.green {
    background-color: #53a93f;
}

.card.people .card-top.blue {
    background-color: #427fed;
}

.card.people .card-info {
    position: absolute;
    top: 150px;
    display: inline-block;
    width: 100%;
    height: 101px;
    overflow: hidden;
    background: #ffffff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.card.people .card-info .title {
    display: block;
    margin: 80px 14px 0 14px;
    overflow: hidden;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    color: #404040;
}

.card.people .card-info .desc {
    display: block;
    margin: 8px 14px 0 14px;
    overflow: hidden;
    font-size: 12px;
    line-height: 16px;
    color: #737373;
    text-overflow: ellipsis;
}

.card.people .card-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    padding: 10px 20px;
    line-height: 29px;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.card.hovercard {
    position: relative;
    padding-top: 0;
    overflow: hidden;
    text-align: center;
    background-color: rgba(214, 224, 226, 0.2);
}

.card.hovercard .cardheader {
    background-size: cover;
    height: 135px;
}

.card.hovercard .avatar {
    position: relative;
    top: -50px;
    margin-bottom: -50px;
}

.card.hovercard .avatar img {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255,255,255,0.5);
}

.card.hovercard .info {
    padding: 4px 8px 10px;
}

.card.hovercard .info .title {
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 1;
    color: #262626;
    vertical-align: middle;
}

.card.hovercard .info .desc {
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    color: #737373;
    text-overflow: ellipsis;
}

.card.hovercard .bottom {
    padding: 0 20px;
    margin-bottom: 17px;
}


</style>
