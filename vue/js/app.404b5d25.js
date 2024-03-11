(function(){"use strict";var t={5379:function(t,e,n){var i=n(5130),r=n(6768),o=n(4232);const l={style:{width:"100","margin-top":"100px"}},u={style:{margin:"auto",width:"300px"}},d=(0,r.Lk)("h1",{style:{width:"fit-content",margin:"auto","margin-bottom":"60px"}},"Todo List",-1),s=(0,r.Lk)("hr",null,null,-1),a=(0,r.Lk)("h2",null,"Položky:",-1),c={class:"undeleted-text"},f=["onClick"],p=(0,r.Lk)("hr",null,null,-1),h=(0,r.Lk)("h2",null,"Zmazané:",-1),v={class:"deleted-item",style:{width:"200px","word-wrap":"break-word"}};function m(t,e,n,m,k,b){return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.Lk)("div",u,[d,(0,r.bo)((0,r.Lk)("input",{onKeyup:e[0]||(e[0]=(0,i.jR)((t=>b.addItem()),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=t=>k.input=t),style:{"margin-right":"20px"},autofocus:""},null,544),[[i.Jo,k.input]]),(0,r.Lk)("button",{onClick:e[2]||(e[2]=t=>b.addItem())},"Pridať"),s,a,(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(b.validList,(t=>((0,r.uX)(),(0,r.CE)("li",{key:`item-${t.id}`,class:"undeleted-li"},[(0,r.Lk)("span",c,(0,o.v_)(t.text),1),(0,r.Lk)("button",{onClick:e=>b.deleteItem(t),class:"delete-btn"},"X",8,f)])))),128))]),p,h,(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(b.deletedList,(t=>((0,r.uX)(),(0,r.CE)("li",{key:t.id},[(0,r.Lk)("div",v,(0,o.v_)(t.text),1)])))),128))])])])}n(4114);var k={name:"todo-list",data(){return{input:"",list:[]}},computed:{validList(){return this.list.filter((t=>!t.is_deleted))},deletedList(){return this.list.filter((t=>t.is_deleted))},getItem(t){return this.list.filter((e=>e.id==t))}},methods:{addItem(){""!==this.input.trim()&&(this.list.push({id:this.list.length+1,text:this.input,is_deleted:!1}),this.input="",console.log("added "+this.input))},deleteItem(t){t.is_deleted=!0,console.log("deleting item "+t.text+" that has id "+t.id)}}},b=n(1241);const g=(0,b.A)(k,[["render",m]]);var L=g;(0,i.Ef)(L).mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var l=1/0;for(a=0;a<t.length;a++){i=t[a][0],r=t[a][1],o=t[a][2];for(var u=!0,d=0;d<i.length;d++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[d])}))?i.splice(d--,1):(u=!1,o<l&&(l=o));if(u){t.splice(a--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var a=t.length;a>0&&t[a-1][2]>o;a--)t[a]=t[a-1];t[a]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,l=i[0],u=i[1],d=i[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(d)var a=d(n)}for(e&&e(i);s<l.length;s++)o=l[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(a)},i=self["webpackChunkproject1"]=self["webpackChunkproject1"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(5379)}));i=n.O(i)})();
//# sourceMappingURL=app.404b5d25.js.map