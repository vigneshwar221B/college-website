<template>
<div>
    <v-flex >
    <v-content>
    <v-toolbar fixed height="57" flat="" dark app class="indigo accent-4 hidden-sm-and-down">
      <v-toolbar-side-icon @click="$router.push('/index')"><img class="image" width="40px" src="../assets/cn2.png" ></v-toolbar-side-icon>
      <v-toolbar-title>SKCT  {{ tool_name }}</v-toolbar-title>
       <v-divider
            class="mx-3"
            inset
            vertical
            ></v-divider>
      <v-toolbar-items>  
            <v-btn flat>ADMISSION</v-btn>
            <v-btn flat @click="$router.push('/facilities')">FACILITIES</v-btn>
            <v-btn @click="$router.push('/coe')"  flat>COE</v-btn>
            <v-btn flat>Skct @ Glance</v-btn>
               <v-menu class="py-5" open-on-hover bottom  offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                v-on="on"
                >
                ALUMINI
                </v-btn>
            </template>
            <v-list>
                <v-list-tile
                v-for="(item) in itemsalumini"
                 router :to="item.route"
                :key="item"
                >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
              <!-- hover to enlarge -->
            <v-menu class="py-5" open-on-hover bottom  offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                v-on="on"
                >
                ACADEMICS
                </v-btn>
            </template>
            <v-list>
                <v-list-tile
                v-for="(item1) in items"
                 router :to="item1.route"
                :key="item1"
                >
                <v-list-tile-title>{{ item1.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
           <v-menu class="py-5" open-on-hover bottom  offset-y offset-overflow>
               <template v-slot:activator="{ on }">
                  <v-btn
                flat=""
                v-on="on"
                >
                ABOUT US
                </v-btn>
            </template>
            <v-list>
                <v-list-tile
                v-for="item2 in itemsus"
                 router :to="item2.route"
                :key="item2"
                >
                <v-list-tile-title>{{ item2.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
          <!-- end -->
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
           <v-menu class="py-5" open-on-hover bottom  offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                color="white"
                flat=""
                v-show="show"
                v-on="on"
                >
                DEPARTMENT FACILITIES
                </v-btn>
            </template>
            <v-list>
                <v-list-tile
                v-for="item3 in items1"
                :key="item3"
                 router :to="item3.route"
                >
                <v-list-tile-title>{{ item3.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    </v-content>
    </v-flex>

    <!-- mobile -->
    <v-flex hidden-md-and-up>
    <v-toolbar dark class="indigo accent-3" fixed flat>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"  ><img src="../assets/cn2.png"  width="40px" alt=""></v-toolbar-side-icon>
        <v-toolbar-title ><strong>SKCT {{ tool_name }}</strong></v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="300"
      style="position:fixed; overflow-y:scroll;"
    >
    <v-flex py-2 text-xs-center>
      <img width="60px" class="icn"  src="../assets/cn2.png" > <h3><strong>@SKCT</strong></h3>
    </v-flex>
    <v-list>
        <v-list-tile v-for="item4 in top" :key="item4"  router :to="item4.route">
            <v-list-tile-action>
                    <v-icon color="blue">star</v-icon>
                    </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item4.tit }}</v-list-tile-title>
                </v-list-tile-content>
        </v-list-tile>
    </v-list>
     <v-expansion-panel >
    <v-expansion-panel-content
      v-for="item5 in eg"
      :key="item5"
    >
      <template v-slot:header>
         <v-flex py-2 text-xs-center>
       <h3>{{ item5.title }}</h3>
    </v-flex>
      </template>
      <v-card>
         <v-list-tile
          v-for="item6 in item5.sub "
          :key="item6" router :to="item6.route"
        >
        <v-list-tile-action>
              <v-icon color="blue">{{ item6.icon }}</v-icon>
            </v-list-tile-action>
          <v-list-tile-content wrap>
            <v-list-tile-title>{{ item6.dis }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-card>
    </v-expansion-panel-content>
     <v-expansion-panel-content
      v-for="item7 in dep"
      :key="item7"
      v-show="show"
    >
      <template v-slot:header>
         <v-flex py-2 text-xs-center>
       <h3>{{ item7.title }}</h3>
    </v-flex>
      </template>
      <v-card>
         <v-list-tile
          v-for="item8 in item7.sub "
          :key="item8" router :to="item8.route"
        >
        <v-list-tile-action>
              <v-icon color="blue">{{ item8.icon }}</v-icon>
            </v-list-tile-action>
          <v-list-tile-content wrap>
            <v-list-tile-title>{{ item8.dis }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
    </v-navigation-drawer>
 </v-flex>
</div>
</template>


<script>
export default {
  props:[ 'tool_name','show'],
     data () {
      return {
        drawer: false,
       
        top:[
          { tit:"Home"},
          { tit: "Coe",route:"/coe"},
          { tit: "facilities",route:"/facilities"},
          { tit: "Skct @Glance"},
          { tit: "Admission"}
        ],
        items: [
            { title: "Civil Engineering"},
            { title: "Computer Science and Engineering",route: "/"},
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
     itemsus: [
            { title: "overview",route:'/overview'},
            { title: "management",route:'/management'}            
      ],
       itemsalumini: [
            { title: "Event"},
            { title: "Database"},           
      ],
         items1: [
            { title: "Home", icon: "home",route: "/"},
            { title: "Faculty", icon: "person",route: "/Faculty"},
            { title: "Laboratory", icon: "android",route: "/lab"},
            { title: "Research", icon: "wb_incandescent",route: "/research"},
            { title: "Events", icon: "history",route: "/events"},
            { title: "Contact", icon: "phone",route: "/contact"}            
      ],
      dep:[
            { title:"Department",show:false, sub:[
            { dis:"Home",route: "/",icon: "school"},
            { dis: "Faculty",route: "/Faculty",icon: "school"},
            { dis: "Laboratory",route: "/lab",icon: "school"},
            { dis: "Research",route: "/research",icon: "school"},
            { dis: "Events",route: "/events",icon: "school"},
            { dis: "Contact",route: "/contact",icon: "school"}
        ]}
      ],
       
      eg: [
        { title:"Acadamics", sub:[
            { dis: "Civil Engineering",icon: "star"},
            { dis: "Computer Science and Engineering",icon: "star",route: "/"},
            { dis: "Electronics and Communication Engineering",icon: "star"},
            { dis: "Instrumentation and Control Engineering",icon: "star"},
            { dis: "Information Technology",icon:"star"},
            { dis: "Mechanical Engineering",icon: "star"},
            { dis: "Science and Humanities",icon:"star"},
            { dis: "School of Management",icon:"star"},
            { dis: "Centre of Excellence",icon:"star"},
            { dis: "rules and Regulations",icon:"star"},
        ]},
        { title:"Alumini", sub:[
          { dis: "Event",icon: "person"},
          { dis: "Database",icon: "person"},  
        ]},
        { title: "About Us", sub:[
          { dis: "overview",icon: "360",route:'/overview'},
          { dis : "management",icon: "360",route:'/management'}
        ]},
        
      ],
      }
    },

}
</script>

<style scoped>
.icn:hover{
  transform: scale(1.2)
}
.image{
   transition: transform .2s;
   }
.image:hover{
  transform: scale(1.5);
}

</style>


