"use strict";(self["webpackChunkproject1"]=self["webpackChunkproject1"]||[]).push([[700],{5700:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var n=i(2420),s=i(6764);const o={key:0},l={cellspacing:0,cellpadding:"5"},a=(0,n.Lk)("br",null,null,-1),u=(0,n.Lk)("br",null,null,-1),p=(0,n.Lk)("br",null,null,-1);function m(t,e,i,m,c,d){const r=(0,n.g2)("ShoppingListDetailItem");return c.shoppingList?((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.Lk)("h1",null,(0,s.v_)(c.shoppingList.title),1),(0,n.Lk)("table",l,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.shoppingList.items,(t=>((0,n.uX)(),(0,n.CE)("tr",{key:t.id},[(0,n.bF)(r,{item:t},null,8,["item"])])))),128)),(0,n.Lk)("tr",null,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=t=>d.newItem())},"new item")])]),a,(0,n.Lk)("button",{onClick:e[1]||(e[1]=t=>d.deleteShoppingList())}," delete list (wip, doesnt work) "),u,p,(0,n.Lk)("button",{onClick:e[2]||(e[2]=t=>d.goToLists())}," back ")],64)):((0,n.uX)(),(0,n.CE)("p",o,"Načítavam dáta"))}i(3926);var c=i(3955),d=i(6718);const r=(0,n.Lk)("option",{value:"piece"},"Piece",-1),h=(0,n.Lk)("option",{value:"package"},"Package",-1),g=(0,n.Lk)("option",{value:"grams"},"Grams",-1),k=(0,n.Lk)("option",{value:"kilograms"},"Kilograms",-1),L=[r,h,g,k];function v(t,e,i,s,o,l){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.item.name=t),onChange:e[1]||(e[1]=t=>l.changedItem(i.item)),class:"item-attribute-input"},null,544),[[d.Jo,i.item.name]])]),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>i.item.value=t),onChange:e[3]||(e[3]=t=>l.changedItem(i.item)),class:"item-attribute-input"},null,544),[[d.Jo,i.item.value]])]),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>i.item.unit=t),onChange:e[5]||(e[5]=t=>l.changedItem(i.item)),class:"item-attribute-input"},L,544),[[d.u1,i.item.unit]])]),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>i.item.is_checked=t),onChange:e[7]||(e[7]=t=>l.changedItem(i.item)),type:"checkbox"},null,544),[[d.lH,i.item.is_checked]])])],64)}var b={props:{item:Object},data(){return{}},methods:{changedItem(t){console.log("changed item with id: "+t.id),(0,c.A)({method:"put",url:`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${this.$route.params.id}/items/${t.id}`,data:{name:t.name,value:t.value,unit:t.unit,is_checked:t.is_checked}})},changedNewItem(){console.log(this.newItem)}}},w=i(8493);const C=(0,w.A)(b,[["render",v]]);var I=C,f={data(){return{shoppingList:null}},async mounted(){try{const{data:{data:t}}=await c.A.get("https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists");this.shoppingList=t.find((({id:t})=>t==this.$route.params.id))}catch(t){console.error("Error:",t),this.shoppingList={error:t}}},components:{ShoppingListDetailItem:I},methods:{deleteShoppingList(){this.goToLists()},goToLists(){this.$router.push({name:"Shopping List - List"})},newItem(){(0,c.A)({method:"post",url:`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${this.$route.params.id}/items/523`,data:{name:"test new item",value:"1",unit:"Piece",is_checked:!0}})}}};const $=(0,w.A)(f,[["render",m]]);var y=$}}]);
//# sourceMappingURL=700.a29f6ace.js.map