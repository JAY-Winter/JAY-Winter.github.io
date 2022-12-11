(function(){var t={4266:function(){},2447:function(t,e,s){"use strict";var n,r,i=s(7195),o=s(1001),a=s(4266),l=s.n(a),c={},u=(0,o.Z)(c,n,r,!1,null,null,null);"function"===typeof l()&&l()(u);var d=u.exports,p=s(2241),_=function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._m(1),t._m(2),e("ADProjectListVue"),e("hr"),e("ADPeopleListVue"),e("hr"),e("EventListVue")],1)},v=[function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"main-image",attrs:{src:"https://s3-alpha-sig.figma.com/img/d702/38a0/f510bbf1aea91cc9913ebf98ef1b41da?Expires=1671408000&Signature=HFldC2b689eXB2MRgdIDAptQaps1IHoN4p~tyjXOJmPTzS4~P0Xyd9-PUNnUxSPt-ZUBKPJAtQlNgpgz~hALS2vDxOBpDrggXNBaiCkaYb6jluG1KtcWXpxmXD8h6m3Qd4BrA~c~rjBJlKLzoyj0lxo6wtMCe6A5AGnJwBd6Kan4cJC~MVh1qE54ACCLrWVSZJeljxjRFQl5x2C76M2emhxHyK-XKYfbmeYjckGjwo8yX8mscoAGWbgyRXJztuVHHQcDvWbnwo-zAfsGfUyWMWj4WsnQRgHCOSYM13N2xl~NuBwK-ltBxecGVxbzEy~41X~1qLHd~7EBrkKpKbXfDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",alt:"Responsive image"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-end mx-5"},[e("button",{staticClass:"btn btn-primary"},[t._v("Sort by")]),e("button",{staticClass:"btn btn-primary"},[t._v("Filter")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group d-flex justify-content-center container-sm my-5"},[e("input",{staticClass:"form-control rounded mx-3",attrs:{type:"search",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"}}),e("button",{staticClass:"btn btn-outline-primary rounded",attrs:{type:"button"}},[t._v("search")])])}],f=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Work With Us")]),e("div",{staticClass:"project-container d-flex flex-row justify-content-around flex-wrap container-sm my-5"},t._l(this.ADProjects,(function(s){return e("div",{key:s.id,staticClass:"col-md-4 border border-light rounded"},[e("router-link",{attrs:{to:{name:"project",params:{projectId:s.id}}}},[e("div",{staticClass:"container"},[e("div",{staticClass:"card-header"},[t._v("Project "+t._s(s.title))]),e("div",{staticClass:"b-flex card-body"},[e("p",[t._v(t._s(s.onoffline.title))]),s.location.length<=3?e("div",t._l(s.location,(function(s){return e("span",{key:s.id},[e("span",[t._v(t._s(s.city))]),t._v(" | ")])})),0):e("div",[t._v(" Anywhere ")]),e("div",[t._v("Needed Skills "),t._l(s.need_skill,(function(s){return e("span",{key:s.id},[e("span",[t._v(t._s(s.title))]),t._v(" | ")])}))],2),e("p",[t._v("Duration "+t._s(s.start_date.substr(0,10))+" - "+t._s(s.end_date.substr(0,10)))])])])])],1)})),0)])},h=[],m=s(19),y={data(){return{ADProjects:[]}},methods:{getADProjects(){(0,m.Z)({method:"get",url:`${this.$store.state.API_URL}/projects/adprojects`}).then((t=>{this.ADProjects=t.data})).catch((t=>console.log(t)))}},created(){this.getADProjects()}},b=y,j=(0,o.Z)(b,f,h,!1,null,null,null),g=j.exports,P=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Hire Me")]),e("div",{staticClass:"project-container d-flex flex-row justify-content-around flex-wrap container-sm my-5"},t._l(this.ADPeoples,(function(s){return e("div",{key:s.id,staticClass:"col-md-4 border border-light rounded"},[e("router-link",{attrs:{to:{name:"people",params:{username:s.username}}}},[e("div",[t._v(t._s(s.username))]),t._l(s.availability,(function(s){return e("span",{key:s.id},[t._v(t._s(s.day)+" | ")])})),e("div",[3===s.onoffline.id?e("span",[t._v(t._s(s.onoffline.title))]):e("span",[t._v(t._s(s.onoffline.title)+" Only")])]),t._l(s.skill,(function(s){return e("span",{key:s.title},[t._v(t._s(s.title)+" | ")])})),e("div",[e("svg",{staticClass:"bi bi-geo-alt",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}}),e("path",{attrs:{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v(" "+t._s(s.location[0].city)+" ")])],2)],1)})),0)])},C=[],x={data(){return{ADPeoples:[]}},methods:{getADPeoples(){(0,m.Z)({method:"get",url:`${this.$store.state.API_URL}/accounts/adpeoples`}).then((t=>{this.ADPeoples=t.data})).catch((t=>console.log(t)))}},created(){this.getADPeoples()}},k=x,w=(0,o.Z)(k,P,C,!1,null,null,null),A=w.exports,S=function(){var t=this;t._self._c;return t._m(0)},$=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Events")]),e("div",{staticClass:"events-container container-sm my-5"})])}],L={},O=L,Z=(0,o.Z)(O,S,$,!1,null,null,null),I=Z.exports,D={components:{ADProjectListVue:g,ADPeopleListVue:A,EventListVue:I}},E=D,V=(0,o.Z)(E,_,v,!1,null,null,null),U=V.exports,R=function(){var t=this,e=t._self._c;return e("div",[e("ProjectItemVue")],1)},T=[],M=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v(t._s(this.$store.state.project.title))]),e("div",{staticClass:"project-container d-flex"},[e("div",{staticClass:"project-item-container container-lg"},[e("div",[t._v(t._s(this.$store.state.project.content))]),e("h3",[t._v("Who is in a team")]),t._l(this.$store.state.project.participant,(function(s){return e("div",{key:s.id},[t._v(" "+t._s(s.username)+" ")])})),e("div",[t._v(" Location"),t._l(this.$store.state.project.location,(function(s){return e("span",{key:s.id},[t._v(" "+t._s(s.city)+" |")])}))],2),e("div",[t._v(" Needed Skills"),t._l(this.$store.state.project.need_skill,(function(s){return e("div",{key:s.id},[t._v(" "+t._s(s.title))])}))],2),e("div",[t._v(" Duration Of Project "+t._s(this.$store.state.project.start_date.substr(0,10))+" - "+t._s(this.$store.state.project.end_date.substr(0,10))+" ")]),e("button",{staticClass:"btn btn-primary"},[t._v(" Apply Now ")])],2),e("div",{staticClass:"project-user-container container-sm"},[e("router-link",{attrs:{to:{name:"people",params:{username:this.$store.state.project.founder.username}}}},[e("div",[t._v(t._s(this.$store.state.project.founder.username))]),e("div",[t._v("Uni: "+t._s(this.$store.state.project.founder.university.name))]),e("div",[t._v("Skills: "),t._l(this.$store.state.project.founder.skill,(function(s){return e("span",{key:s.id},[t._v(t._s(s.title))])}))],2),e("button",{staticClass:"btn btn-primary"},[t._v("Contact User "),e("b",[t._v(t._s(this.$store.state.project.founder.username))])])])],1)])])},z=[],G={name:"ProjectItem",created(){this.$store.dispatch("getProject",this.$route.params.projectId)}},X=G,B=(0,o.Z)(X,M,z,!1,null,null,null),N=B.exports,J={name:"ProjectItemView",components:{ProjectItemVue:N},data(){return{project:Object}}},K=J,W=(0,o.Z)(K,R,T,!1,null,null,null),H=W.exports,Q=function(){var t=this,e=t._self._c;return e("div",[e("ProjectListVue")],1)},F=[],Y=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"project-container d-flex flex-row flex-wrap"},t._l(this.$store.state.projects,(function(s){return e("div",{key:s.id,staticClass:"col-md-4 border border-light rounded"},[e("router-link",{attrs:{to:{name:"project",params:{projectId:s.id}}}},[e("div",{staticClass:"container"},[e("div",{staticClass:"card-header"},[t._v("Project "+t._s(s.title))]),e("div",{staticClass:"b-flex card-body"},[e("p",[t._v(t._s(s.onoffline.title))]),s.location.length<=3?e("div",t._l(s.location,(function(s){return e("span",{key:s.id},[e("span",[t._v(t._s(s.city))]),t._v(" | ")])})),0):e("div",[t._v(" Anywhere ")]),e("div",[t._v("Needed Skills "),t._l(s.need_skill,(function(s){return e("span",{key:s.id},[e("span",[t._v(t._s(s.title))]),t._v(" | ")])}))],2),e("p",[t._v("Duration "+t._s(s.start_date.substr(0,10))+" - "+t._s(s.end_date.substr(0,10)))])])])])],1)})),0)])},q=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group d-flex justify-content-center container-sm my-5"},[e("input",{staticClass:"form-control rounded mx-3",attrs:{type:"search",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"}}),e("button",{staticClass:"btn btn-outline-primary rounded",attrs:{type:"button"}},[t._v("search")])])}],tt={name:"ProjectList",created(){this.$store.dispatch("getProjects")}},et=tt,st=(0,o.Z)(et,Y,q,!1,null,null,null),nt=st.exports,rt={components:{ProjectListVue:nt}},it=rt,ot=(0,o.Z)(it,Q,F,!1,null,null,null),at=ot.exports,lt=function(){var t=this,e=t._self._c;return e("div",[e("PeopleListVue")],1)},ct=[],ut=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"people-container d-flex flex-row flex-wrap"},t._l(this.$store.state.people,(function(s){return e("div",{key:s.id,staticClass:"col-md-4 border border-light rounded"},[e("router-link",{attrs:{to:{name:"people",params:{username:s.username}}}},[e("p",{attrs:{clas:"card-title"}},[t._v(t._s(s.username))]),e("div",[e("div",[t._v(" Availability "),t._l(s.availability,(function(s){return e("span",{key:s.id},[t._v(" "+t._s(s.day)+" ")])}))],2),3!==s.onoffline.id?e("div",[t._v(" "+t._s(s.onoffline.title)+" Only ")]):e("div",[t._v(" "+t._s(s.onoffline.title)+" ")]),e("div",[t._v(" Skills "),t._l(s.skill,(function(s){return e("span",{key:s.id},[e("span",[t._v(t._s(s.title))]),t._v(" | ")])}))],2),e("p",[t._v("Location "+t._s(s.location[0].city)+" ")])])])],1)})),0)])},dt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group d-flex justify-content-center container-sm my-5"},[e("input",{staticClass:"form-control rounded mx-3",attrs:{type:"search",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"}}),e("button",{staticClass:"btn btn-outline-primary rounded",attrs:{type:"button"}},[t._v("search")])])}],pt={name:"peopleList",created(){this.$store.dispatch("getPeople")}},_t=pt,vt=(0,o.Z)(_t,ut,dt,!1,null,null,null),ft=vt.exports,ht={components:{PeopleListVue:ft}},mt=ht,yt=(0,o.Z)(mt,lt,ct,!1,null,null,null),bt=yt.exports,jt=function(){var t=this,e=t._self._c;return e("div",[e("PeopleItem")],1)},gt=[],Pt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"user-profile-container d-flex flex-row justify-content-around"},[e("div",{staticClass:"user-profile-image-container"},[e("div",[t._v(t._s(this.people.username))]),e("div",[t._v("Uni: "+t._s(this.people.university.name))]),e("div",[t._v(" Speciality: "),t._l(this.people.skill,(function(s){return e("span",{key:s.id},[t._v(t._s(s.title)+" | ")])}))],2)]),e("div",{staticClass:"user-introduce-container"},[e("div",{staticClass:"profile-introduce my-5"},[t._v(t._s(this.people.introduce))]),t._v(" Availability :"),t._l(this.people.availability,(function(s){return e("span",{key:s.id},[t._v(t._s(s.day)+" | ")])})),3===this.people.onoffline.id?e("div",{staticClass:"my-3"},[t._v(t._s(this.people.onoffline.title))]):e("div",{staticClass:"my-3"},[t._v(t._s(this.people.onoffline.title)+" Only")]),e("div",[t._v("Experiences in platform: ")]),t._v(" Interests: "),this.people.interest.length>0?e("span",t._l(this.people.interest,(function(s){return e("span",{key:s.id},[t._v(t._s(s.name)+" | ")])})),0):e("span",[t._v("None")])],2)]),e("div",{staticClass:"d-flex justify-content-sm-around"},[e("button",{staticClass:"btn btn-primary"},[t._v("Contact User "+t._s(this.people.username))]),e("button",{staticClass:"btn btn-primary"},[t._v("View Resume/Portfolio")])]),e("div",{staticClass:"silmilar-skill-people-container mt-5"},[e("SimilarSkillPeopleListVue")],1)])},Ct=[],xt=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("People with similar skill")]),e("div",{staticClass:"project-container d-flex flex-row justify-content-around flex-wrap container-sm my-5"},t._l(this.peoples,(function(s){return e("div",{key:s.id,staticClass:"col-md-4 border border-light rounded"},[e("router-link",{attrs:{to:{name:"people",params:{username:s.username}}}},[e("div",[t._v(t._s(s.username))]),t._l(s.availability,(function(s){return e("span",{key:s.day},[t._v(t._s(s.day)+" | ")])})),e("div",[3===s.onoffline.id?e("span",[t._v(t._s(s.onoffline.title))]):e("span",[t._v(t._s(s.onoffline.title)+" Only")])]),t._l(s.skill,(function(s){return e("span",{key:s.id},[t._v(t._s(s.title)+" | ")])})),e("div",[e("svg",{staticClass:"bi bi-geo-alt",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}}),e("path",{attrs:{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v(" "+t._s(s.location[0].city)+" ")])],2)],1)})),0)])},kt=[],wt={data(){return{peoples:[],username:this.$route.params.username}},watch:{$route(t,e){t.params!=e.params&&(this.username=t.params.username,this.getSimilarSkillPeoples(),this.$router.go())}},methods:{getSimilarSkillPeoples(){(0,m.Z)({method:"get",url:`${this.$store.state.API_URL}/accounts/people/similarskill/${this.username}`}).then((t=>{this.peoples=t.data})).catch((t=>console.error(t)))}},created(){this.getSimilarSkillPeoples()}},At=wt,St=(0,o.Z)(At,xt,kt,!1,null,null,null),$t=St.exports,Lt={data(){return{people:null}},created(){this.getPeopleInfo()},methods:{getPeopleInfo(){console.log("getPeopleInfo");const t=this.$route.params.username;(0,m.Z)({method:"get",url:`${this.$store.state.API_URL}/accounts/people/${t}`}).then((t=>{this.people=t.data})).catch((t=>console.log(t)))}},components:{SimilarSkillPeopleListVue:$t}},Ot=Lt,Zt=(0,o.Z)(Ot,Pt,Ct,!1,null,null,null),It=Zt.exports,Dt={components:{PeopleItem:It}},Et=Dt,Vt=(0,o.Z)(Et,jt,gt,!1,null,null,null),Ut=Vt.exports;i["default"].use(p.ZP);const Rt=[{path:"",name:"main",component:U},{path:"/projects",name:"projects",component:at},{path:"/project/:projectId",name:"project",component:H},{path:"/peoples",name:"peoples",component:bt},{path:"/people/:username",name:"people",component:Ut}],Tt=new p.ZP({mode:"history",base:"/",routes:Rt});var Mt=Tt,zt=s(408);i["default"].use(zt.ZP);var Gt=new zt.ZP.Store({state:{projects:[],project:[],people:[],API_URL:"https://ec2-3-36-58-100.ap-northeast-2.compute.amazonaws.com:8000"},getters:{},mutations:{GET_PROJECTS(t,e){t.projects=e},GET_PROJECT(t,e){t.project=e},GET_PEOPLE(t,e){t.people=e}},actions:{getProjects(t){(0,m.Z)({method:"get",url:`${this.state.API_URL}/projects`}).then((e=>{t.commit("GET_PROJECTS",e.data)})).catch((t=>{console.log(t)}))},getProject(t,e){(0,m.Z)({method:"get",url:`${this.state.API_URL}/projects/project/${e}`}).then((e=>{t.commit("GET_PROJECT",e.data)})).catch((t=>{console.log(t)}))},getPeople(t){(0,m.Z)({method:"get",url:`${this.state.API_URL}/accounts/people`}).then((e=>{t.commit("GET_PEOPLE",e.data)})).catch((t=>{console.log(t)}))}},modules:{}}),Xt=s(4359),Bt=s(7244);s(7024);i["default"].use(Xt.XG7),i["default"].use(Bt.X),i["default"].config.productionTip=!1,new i["default"]({router:Mt,store:Gt,render:t=>t(d)}).$mount("#app")}},e={};function s(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,r,i){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],i=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(a=!1,i<o&&(o=i));if(a){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,r,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,o=n[0],a=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(l)var u=l(s)}for(e&&e(n);c<o.length;c++)i=o[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},n=self["webpackChunkpjt_front"]=self["webpackChunkpjt_front"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(2447)}));n=s.O(n)})();
//# sourceMappingURL=app.32d8d9d9.js.map