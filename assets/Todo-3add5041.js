import{d as r,r as m,o as l,c as d,w as f,v,a as c,b as h,F as y,e as $,n as b,t as C,f as k,g,_ as w,h as p,i as T}from"./index-b92b74a3.js";const x={class:"add-task"},A=["onKeydown"],D=r({__name:"AddTask",emits:["addTask"],setup(s,{emit:i}){const a=m(""),o=()=>{if(a.value.trim()!==""){const n={id:Date.now(),text:a.value,completed:!1,failed:!1};i("addTask",n),a.value=""}};return(n,e)=>(l(),d("div",x,[f(c("input",{type:"text",placeholder:"Add new task","onUpdate:modelValue":e[0]||(e[0]=_=>a.value=_),onKeydown:h(o,["enter"])},null,40,A),[[v,a.value]]),c("button",{onClick:o},"Add")]))}});const L={class:"task-list"},N={class:"task-info"},S={class:"task-actions"},V=["onClick"],B=["onClick"],F=["onClick"],K=r({__name:"TaskList",props:{tasks:{type:Array,required:!0}},emits:["deleteTask"],setup(s,{emit:i}){const a=e=>{i("deleteTask",e)},o=e=>{e.completed=!0,e.failed=!1},n=e=>{e.failed=!0,e.completed=!1};return(e,_)=>(l(),d("ul",L,[(l(!0),d(y,null,$(s.tasks,t=>(l(),d("li",{key:t.id,class:b({completed:t.completed,failed:t.failed})},[c("div",N,[c("span",null,C(t.text),1)]),c("div",S,[!t.completed&&!t.failed?(l(),d("button",{key:0,class:"btn btn-complete",onClick:u=>o(t)}," Done ",8,V)):k("",!0),!t.failed&&!t.completed?(l(),d("button",{key:1,class:"btn btn-fail",onClick:u=>n(t)}," Fail ",8,B)):k("",!0),c("button",{class:"btn btn-delete",onClick:u=>a(t.id)}," Delete ",8,F)])],2))),128))]))}});const E=r({components:{AddTask:D,TaskList:K},setup(){const s=m(JSON.parse(localStorage.getItem("tasks")||"[]")),i=n=>{s.value.push(n)},a=()=>{localStorage.setItem("tasks",JSON.stringify(s.value))},o=n=>{s.value=s.value.filter(e=>e.id!==n)};return g(()=>{a()}),{tasks:s,addTask:i,deleteTask:o}}});const I={class:"container"},J=c("h1",null,"Todo List",-1);function O(s,i,a,o,n,e){const _=p("AddTask"),t=p("TaskList");return l(),d("div",I,[J,T(_,{onAddTask:s.addTask},null,8,["onAddTask"]),T(t,{tasks:s.tasks,onDeleteTask:s.deleteTask},null,8,["tasks","onDeleteTask"])])}const z=w(E,[["render",O]]);export{z as default};