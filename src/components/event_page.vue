<template>
    <v-app>
        <toolbar  :tool_name="title" :show="true"></toolbar>
        
            <v-btn color="blue" outline round @click="$router.push('/events')"><v-icon class="pr-1">replay</v-icon> Back To Event Page </v-btn>
        <v-container>
            <v-img src="http://knowafest.com/files/uploads/Avantaa-2018030906.png"  aspect-ratio="1.8"></v-img>
            <h2>{{ event_name }}</h2>
            <p>{{ event_details }}</p>
        </v-container>

    </v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import footnav from './footnav.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import fv from './fv'
import pdf from 'vue-pdf'




export default {
    components:{
        toolbar,fv,footnav,pdf
    },
    data(){
        return{
            title: '- CSE DEPARTMENT',
            event_name: "avantaa",
            event_details: "I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."
        }}

}
</script>


<style scoped>






</style>
