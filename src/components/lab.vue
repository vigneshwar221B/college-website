<template>
    <v-app>
        <toolbar  :title="title" :show="true"></toolbar>
           <!-- <div data-aos="fade-in" data-aos-duration="3000"><div class="text-xs-center mt-2"><p style="color:#F57C00;font-size:30px;font-family:cursive;"><u style="text-decoration:none;
           border-bottom: 3px solid black;">Department Labs</u></p></div></div> -->
        <v-container fluid hidden-sm-and-down>
            
            <div v-for="i in 5" :key="i">
        <v-flex xs12 md12>
<div data-aos="fade-up">
            <v-card class="crd my-5 elevation-12 ">
            <v-layout>
                <v-flex xs6 md3>
                   <v-img :src="require('@/assets/clg2.png')"></v-img>
                </v-flex>
                <v-flex xs6 md9 text-xs-center px-3>
                    <h2 class="my-2">DIGITAL LABORATORY</h2>
                    <v-divider inset></v-divider>
                    <p class="pt-3">CASE Tools and RDBMS Lab is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM, 500/1TB HDD and 12 PCs with Core i3 3 GHz processor, 4GB RAM, 500 GB HDD. CASE tools are installed which enable the students to design , develop and test projects following lifecycle models .Systems are loaded with Oracle RDBMS facilitating students to design and query databases . The lab also has 6 printers and scanners along with 25 webcams that cater to the requirements of both the staff as well as the students. This lab is centrally air conditioned and has 4 wireless 54Mbps access points. </p>
                </v-flex>
            </v-layout>
            </v-card>
</div>
        </v-flex>
        <v-flex xs12 md12>
<div data-aos="fade-down">
            <v-card class="crd my elevation-12 ">
            <v-layout>
                <v-flex xs6 md9 text-xs-center px-3>
                    <h2 class="my-3">DIGITAL LABORATORY</h2>
                    <v-divider inset></v-divider>
                    <p class="pt-3">CASE Tools and RDBMS Lab is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM, 500/1TB HDD and 12 PCs with Core i3 3 GHz processor, 4GB RAM, 500 GB HDD. CASE tools are installed which enable the students to design , develop and test projects following lifecycle models .Systems are loaded with Oracle RDBMS facilitating students to design and query databases . The lab also has 6 printers and scanners along with 25 webcams that cater to the requirements of both the staff as well as the students. This lab is centrally air conditioned and has 4 wireless 54Mbps access points. </p>
                </v-flex>
                 <v-flex xs6 md3>
                   <v-img :src="require('@/assets/clg2.png')"></v-img>
                </v-flex>
            </v-layout>
            </v-card>
</div>
        </v-flex>
        </div>

        </v-container>
        
        

        <div class="hidden-md-and-up">
  <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 mx-3 md4 >
                  <div data-aos="zoom-in" v-for="i in 5" :key="i">
     <v-card class="crd my-3 elevation-12 " style="overflow:hidden">
            <v-layout column="">
              <v-img :src="require('@/assets/clg2.png')"></v-img>
                <v-flex  text-xs-center px-3>
                    <h2 class="my-2">DIGITAL LABORATORY</h2>
                    <v-divider inset></v-divider>
                    <p class="pt-3 px-3" style="text-align:justify;">CASE Tools and RDBMS Lab is well equipped with 60 PCs with Lenovo Core i3 6th Gen Processor with 8 GB RAM, 500/1TB HDD and 12 PCs with Core i3 3 GHz processor, 4GB RAM, 500 GB HDD. CASE tools are installed which enable the students to design , develop and test projects following lifecycle models .Systems are loaded with Oracle RDBMS facilitating students to design and query databases . The lab also has 6 printers and scanners along with 25 webcams that cater to the requirements of both the staff as well as the students. This lab is centrally air conditioned and has 4 wireless 54Mbps access points. </p>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</v-flex>
</v-layout>
  </v-container>
</div>
<fv></fv>
<footnav></footnav>
    </v-app>
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
    }}
}
</script>

<style>
.crd{
    border-radius: 5px;
}
</style>
