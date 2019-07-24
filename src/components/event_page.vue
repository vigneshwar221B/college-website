<template>
    <v-app>
        <toolbar  :title="title" :show="true"></toolbar>
        <v-container>
            <v-btn color="blue" large outline round @click="$router.push('/events')"><v-icon class="pr-1">replay</v-icon> Back To Event Page </v-btn>
        </v-container>
        <fv></fv>
        <footnav></footnav>
    </v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import footnav from './footnav.vue'
import fv from './fv'
export default {
    components:{
        toolbar,fv,footnav
    },
    data(){
        return{
            title: 'CSE DEPARTMENT',
        }}

}
</script>


<style>

.container {
    position: relative;
    overflow: hidden;
}
.container .slider {
	position: absolute;
	top: 0;
	left: 0;
	width: 500%;
	height: 100%;
	animation: animate 30s linear infinite;
}
.container .slider .slide {
	position: relative;
	width: 20%;
	height: 100%;
	float: left;
}


@keyframes animate {
	0% {
		left: 0;
	}
	20% {
		left: 0;
	}
	25% {
		left: -100%;
	}
	45% {
		left: -100%;
	}
	50% {
		left: -200%;
	}
	70% {
		left: -200%;
	}
	75% {
		left: -300%;
	}
	95% {
		left: -300%;
	}
	100% {
		left: -400%;
	}
}



@media screen and (max-width: 768px) {
	.container .slider .slide .caption { 
		bottom: 20px;
		right: 20px;
		left: 20px;
		padding: 20px;
	}
	.container .slider .slide .caption h2 { 
		margin: 0 0 10px;
		font-size: 30px;
	}
	.container .slider .slide .caption p { 
		font-size: 16px;
	}
}
</style>
