"use strict";(self["webpackChunkproject1"]=self["webpackChunkproject1"]||[]).push([[929],{1929:function(t,e,i){i.r(e),i.d(e,{default:function(){return A}});var s=i(2420);const n={key:0},o=["value"],l={cellspacing:0,cellpadding:"5"},a=(0,s.Lk)("br",null,null,-1),d=(0,s.Lk)("br",null,null,-1),p=(0,s.Lk)("br",null,null,-1),c=(0,s.Lk)("br",null,null,-1),h=(0,s.Lk)("br",null,null,-1),u=(0,s.Lk)("b",null,"note:",-1);function r(t,e,i,r,m,g){const k=(0,s.g2)("ShoppingListDetailItem");return m.shoppingList?((0,s.uX)(),(0,s.CE)(s.FK,{key:1},[(0,s.Lk)("input",{value:m.shoppingList.title,onChange:e[0]||(e[0]=(...t)=>g.changedTitle&&g.changedTitle(...t)),id:"title"},null,40,o),(0,s.Lk)("table",l,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.shoppingList.items,(t=>((0,s.uX)(),(0,s.CE)("tr",{key:t.id},[(0,s.bF)(k,{onChangedItem:g.changeItem,onDeletedItem:g.deleteItem,item:t},null,8,["onChangedItem","onDeletedItem","item"])])))),128)),(0,s.Lk)("button",{onClick:e[1]||(e[1]=t=>g.newItem())},"new item")]),a,(0,s.Lk)("button",{onClick:e[2]||(e[2]=t=>g.deleteShoppingList())}," delete list 💀 "),d,p,(0,s.Lk)("button",{onClick:e[3]||(e[3]=t=>g.goToAllListsView())}," back "),c,h,u,(0,s.eW)(" to delete an item, rename it to an empty string ")],64)):((0,s.uX)(),(0,s.CE)("p",n,"Načítavam dáta"))}i(3926);var m=i(3955),g=i(6718),k=i(6764);const L=(0,s.Fv)('<option disabled value="">Unselected</option><option value="piece">Piece</option><option value="package">Package</option><option value="grams">Grams</option><option value="kilograms">Kilograms</option>',5),v=[L];function w(t,e,i,n,o,l){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("td",null,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.editedItem.name=t),class:"item-attribute-input"},null,512),[[g.Jo,o.editedItem.name,void 0,{lazy:!0}]])]),(0,s.Lk)("td",null,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.editedItem.value=t),class:"item-attribute-input"},null,512),[[g.Jo,o.editedItem.value,void 0,{lazy:!0}]])]),(0,s.Lk)("td",null,[(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.editedItem.unit=t),class:"item-attribute-input"},v,512),[[g.u1,o.editedItem.unit,void 0,{lazy:!0}]])]),(0,s.Lk)("td",null,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>o.editedItem.is_checked=t),type:"checkbox"},null,512),[[g.lH,o.editedItem.is_checked,void 0,{lazy:!0}]])]),(0,s.Lk)("td",null,"id: "+(0,k.v_)(i.item.id),1)],64)}var y={emits:["changed-item","deleted-item"],props:{item:{type:Object,required:!0}},data(){return{editedItem:Object}},created(){this.editedItem={...this.item},this.$watch("editedItem",(t=>{console.log("changed on client: ",t),""!=t.name.trim()?this.$emit("changed-item",t):this.$emit("deleted-item",t)}),{deep:!0})}},b=i(8493);const I=(0,b.A)(y,[["render",w]]);var $=I,f={data(){return{shoppingList:null}},async mounted(){try{const{data:{data:t}}=await m.A.get("https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists");this.shoppingList=t.find((({id:t})=>t==this.$route.params.id)),console.log(this.shoppingList)}catch(t){console.error("Error:",t),this.shoppingList={error:t}}},components:{ShoppingListDetailItem:$},methods:{async deleteShoppingList(){try{await m.A.delete(`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${this.$route.params.id}`);console.log("succesfully deleted the shopping list"),this.goToAllListsView()}catch(t){console.log("api error while trying to delete the shopping list: "+t)}},goToAllListsView(){this.$router.push({name:"Shopping List - List"})},async changedTitle(t){function e(t){const e=t.title;t.title="",t.title=e}const i=t.target.value;if(""==i.trim())return e(this.shoppingList);try{await m.A.put(`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${this.$route.params.id}`,{title:i});this.shoppingList.title=i,console.log("succesfully renamed this list")}catch(s){console.log("Error while trying to change title of list: "+s),e(this.shoppingList)}},async changeItem(t){try{await m.A.put(`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${this.$route.params.id}/items/${t.id}`,{name:t.name,value:t.value,unit:t.unit,is_checked:t.is_checked});console.log(`succesfully changed item with id ${t.id} on server`)}catch(e){404==e.response.status?console.log(`Error 404 not found while trying to change item in list ${this.$route.params.id}, item id ${t.id}. Item most likely doesn't exist anymore`):console.log(`Unknown error while trying to change item with id ${t.id}`)}},async deleteItem(t){try{await m.A.delete(`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${this.$route.params.id}/items/${t.id}`);console.log(`succesfully deleted item with id ${t.id}`),this.shoppingList.items=this.shoppingList.items.filter((e=>e.id!=t.id))}catch(e){console.log(`Error while trying to delete item with id ${t.id}`)}},async newItem(){try{const t=await m.A.post(`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${this.$route.params.id}/items/`,{name:"test new item",value:"1",unit:"piece",is_checked:!1});this.shoppingList.items.push(t.data.data);const e=t.data.data;console.log(`succesfully created new item with id ${e.id}`)}catch(t){console.log(t)}}}};const C=(0,b.A)(f,[["render",r]]);var A=C}}]);
//# sourceMappingURL=929.0580ed3c.js.map