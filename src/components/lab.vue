<template>
    <div>
        <toolbar  :tool_name="title" :show="true"></toolbar>
        <div data-aos="fade-in" data-aos-duration="3000">
        <v-flex mt-3>
          <h2><strong>Department Labs</strong></h2>
        </v-flex>
        </div>
        <v-container fluid hidden-sm-and-down>
          <div v-for="i in 5" :key="i">
          <div data-aos="fade-left">
            <v-card class="crd my-3 elevation-3" style="overflow:hidden;">
            <v-layout align-center justify-start row fill-height>
                <v-flex md3>
                   <v-img :src="require('@/assets/clg2.png')" aspect-ratio="1.8"></v-img>
                </v-flex>
                <v-flex md9 text-xs-center px-3>
                    <h3 class="my-2">{{ dept_name }}</h3>
                    <v-divider inset></v-divider>
                    <p class="pt-3">{{ dept_description }}</p>
                </v-flex>
            </v-layout>
            </v-card>
          </div>
        </div>
        </v-container>
        
        <!-- mobile -->
        <div class="hidden-md-and-up">
            <v-container fluid>
              <v-layout row wrap align-center justify-center>
                  <div data-aos="fade-left" v-for="i in 5" :key="i">
                     <v-card class="crd my-2 mx-2 elevation-5 " style="overflow:hidden">
                         <v-layout column="">
                             <v-img :src="require('@/assets/clg2.png')" aspect-ratio="1.9"></v-img>
                              <v-flex  text-xs-center >
                                <h3 class="my-2">{{ dept_name }}</h3>
                                 <v-divider></v-divider>
                                  <p class="py-3 px-3" style="text-align:justify;">{{ dept_description }}</p>
                                  </v-flex>
                                   </v-layout>
                                   </v-card>
                                    </div>
                                    </v-layout>
                                    </v-container>
                                    </div>

<footnav></footnav>
    </div>
</template>

<script>
import toolbar from './toolbar.vue'
import fv from './fv'
import footnav from './footnav.vue'
export default {
  components:{
    toolbar,fv,footnav
  },
  data(){
    return{
      title: 'CSE DEPARTMENT',
      dept_name: "digital lab",
      dept_description: "CASE Tools and RDBMS6th Gen Processor with 8 GB RAM,CASE Tools and RDBMS Lab is wellth 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM,CASE Tools and RDBMS Lab is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM,CASE Tools and RDBMS Lab is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM,CASE Tools and RDBMS Lab is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM,CASE Tools and RDBMS Lab is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM, is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM,"
    }}
}
</script>

<style scoped>
.crd{
    border-radius: 5px;
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

</style>
