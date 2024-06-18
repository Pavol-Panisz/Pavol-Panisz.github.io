"use strict";(self["webpackChunkproject1"]=self["webpackChunkproject1"]||[]).push([[379],{9379:function(s,t,i){i.r(t),i.d(t,{default:function(){return z}});var e=i(2420),n=i(6764);const o=(0,e.Lk)("h1",null,"Lists",-1),l={key:0},h={id:"lists-brief-container"},p=(0,e.Lk)("br",null,null,-1),r=(0,e.Lk)("br",null,null,-1),a=(0,e.Lk)("br",null,null,-1);function d(s,t,i,d,u,c){const g=(0,e.g2)("AShoppingListBrief");return(0,e.uX)(),(0,e.CE)(e.FK,null,[o,u.shoppingLists?u.shoppingLists.error?((0,e.uX)(),(0,e.CE)(e.FK,{key:1},[(0,e.eW)(" Pri načítaní dát nastala chyba: "+(0,n.v_)(u.shoppingLists.error),1)],64)):((0,e.uX)(),(0,e.CE)(e.FK,{key:2},[(0,e.Lk)("button",{onClick:t[0]||(t[0]=s=>c.addNewList())}," add new list "),(0,e.Lk)("div",h,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(u.shoppingLists,((s,t)=>((0,e.uX)(),(0,e.Wv)(g,{ref_for:!0,ref:"listRefs",key:s.id,shoppingList:s},null,8,["shoppingList"])))),128))])],64)):((0,e.uX)(),(0,e.CE)("p",l,"Načítavam dáta")),p,r,a],64)}i(3926);var u=i(3955),c=i(6718);const g=["href"],f={key:0};function L(s,t,i,o,l,h){return(0,e.uX)(),(0,e.CE)("div",{href:`/shopping-lists/${i.shoppingList.id}`,onClick:t[0]||(t[0]=(0,c.D$)((s=>h.openShoppingListDetail(i.shoppingList.id)),["prevent"])),class:"shopping-list-brief"},[(0,e.Lk)("h2",null,(0,n.v_)(i.shoppingList.title),1),(0,e.Lk)("ul",null,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(i.shoppingList.items.slice(0,l.showItemCount),(s=>((0,e.uX)(),(0,e.CE)("li",{key:s.id},[(0,e.Lk)("span",{class:(0,n.C4)({"item-checked":s.is_checked})},(0,n.v_)(s.name)+" "+(0,n.v_)(s.value)+" "+(0,n.v_)(s.unit),3)])))),128)),i.shoppingList.items.length>l.showItemCount?((0,e.uX)(),(0,e.CE)("li",f," ... and "+(0,n.v_)(i.shoppingList.items.length-l.showItemCount)+" more ",1)):(0,e.Q3)("",!0)])],8,g)}var w={props:{shoppingList:{type:Object,default:{title:"no title",items:[],id:0}}},data(){return{showItemCount:3,debugWidth:0,debugHeight:0}},methods:{openShoppingListDetail(s){this.$router.push({name:"Shopping List - Detail",params:{id:s}})}}},m=i(8493);const v=(0,m.A)(w,[["render",L]]);var k=v;class y{constructor(s,t,i){this.x=s,this.y=t,this.w=i}}function C(s,t){s.sort(((s,t)=>s.w<t.w?1:s.w>t.w?-1:0));let i=new Array;i.push(new y(0,0,t));for(let e=0;e<s.length;e++){const t=s[e];let n=i[0],o=0,l=1e6;for(let s=0;s<i.length;s++)if(i[s].w>=t.w){const e=i[s].y+t.h;e<l&&(n=i[s],o=s,l=e)}t.x=n.x,t.y=n.y,i[o].x+=t.w,i[o].w-=t.w;const h=new y(t.x,t.y+t.h,t.w);i.push(h)}}var R={data(){return{shoppingLists:null,listDimensions:[],prevResizeTime:0,minResizeInterval:100,finalResizeCallbackId:0}},created(){window.addEventListener("resize",this.handleWindowResize)},destroyed(){window.removeEventListener("resize",this.handleWindowResize)},async mounted(){try{const{data:{data:s}}=await u.A.get("https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists");this.shoppingLists=s,this.$nextTick((()=>{this.$refs.listRefs.sort(((s,t)=>{let i=s.$el.offsetWidth,e=t.$el.offsetWidth;return i<e?1:i>e?-1:0}));for(let s=0;s<this.shoppingLists.length;s++){let t=this.$refs.listRefs[s].$el,i={w:t.offsetWidth+10,h:t.offsetHeight+10,x:0,y:0};this.listDimensions[s]=i}this.setListPositions()}))}catch(s){console.error("Error:",s),this.shoppingLists={error:s}}},components:{AShoppingListBrief:k},methods:{async addNewList(){try{var s=await u.A.post("https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/",{title:"new list"});this.shoppingLists.push(s.data.data),console.log("succesfully added a new shopping list"),this.$router.push(`/shopping-list/${s.data.data.id}`)}catch(t){console.log(t)}},handleWindowResize(s){this.shoppingLists&&s.timeStamp-this.prevResizeTime>this.minResizeInterval&&(this.prevResizeTime=s.timeStamp,clearTimeout(this.finalResizeCallbackId),this.finalResizeCallbackId=setTimeout(this.setListPositions,this.minResizeInterval+50))},setListPositions(){if(0!==this.$refs.listRefs.length&&this.shoppingLists){C(this.listDimensions,window.innerWidth);for(let s=0;s<this.shoppingLists.length;s++)this.$refs.listRefs[s].$el.style.left=`${this.listDimensions[s].x}px`,this.$refs.listRefs[s].$el.style.top=`${this.listDimensions[s].y}px`}}}};const $=(0,m.A)(R,[["render",d]]);var z=$}}]);
//# sourceMappingURL=379.2a3d8bd9.js.map