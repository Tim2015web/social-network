import{c as m,d as b,r as d,j as s,N as F,P as v}from"./index-B1LNkIDO.js";import{f as j}from"./friendsData-DqyGOLel.js";import{C}from"./ContentHeader-Y4xBNcB-.js";const x=m()(b((t,n)=>({friends:[],allFriends:j,pageSize:5,totalFriendsCount:j.length,currentPage:1,isFetching:!1,isFollowing:[],toggleFollow:(a,i)=>{t(e=>({allFriends:e.allFriends.map(c=>c.id===a?{...c,status:i}:c)})),n().getFriends(n().currentPage,n().pageSize)},setFriends:a=>t({friends:a}),setCurrentPage:a=>t({currentPage:a}),setPageSize:a=>t({pageSize:a}),handlePageSizeChange:a=>{t({pageSize:a,currentPage:1}),n().getFriends(1,a)},handlePageChange:(a,i)=>{const e=n().currentPage+a;e>=1&&e<=i&&(t({currentPage:e}),n().getFriends(e,n().pageSize))},handleSubscription:(a,i)=>{t(e=>({isFollowing:[...e.isFollowing,a]})),n().toggleFollow(a,i),t(e=>({isFollowing:e.isFollowing.filter(c=>c!==a)}))},getFriends:(a,i)=>{t({isFetching:!0});const e=n().allFriends,c=(a-1)*i,l=e.slice(c,c+i);t({isFetching:!1,friends:l})}}))),S="_friends_1ho63_1",f="_pagination_1ho63_7",N="_navButton_1ho63_13",P="_active_1ho63_44",w="_select_1ho63_49",k="_users_1ho63_72",z="_usersCard_1ho63_77",M="_usersProfile_1ho63_86",B="_usersAvatar_1ho63_91",A="_usersInfo_1ho63_104",E="_actions_1ho63_126",I="_actionsStatus_1ho63_132",U="_actionsSubscribe_1ho63_152",y="_actionsUnsubscribe_1ho63_158",o={friends:S,pagination:f,navButton:N,active:P,select:w,users:k,usersCard:z,usersProfile:M,usersAvatar:B,usersInfo:A,actions:E,actionsStatus:I,actionsSubscribe:U,actionsUnsubscribe:y},D="/social-network/assets/addfriends-DnREpjCz.png";function L({pageSize:t,currentPage:n}){const{setCurrentPage:a,handlePageSizeChange:i,totalFriendsCount:e}=x(),c=d.useMemo(()=>Math.ceil(e/t),[e,t]),l=5,p=d.useMemo(()=>{let r=Math.max(n-Math.floor(l/2),1),u=r+l-1;u>c&&(u=c,r=Math.max(u-l+1,1));const _=[];for(let g=r;g<=u;g++)_.push(g);return _},[n,c]),h=r=>{r>0&&r<=c&&a(r)};return s.jsxs("section",{className:o.pagination,children:[s.jsx("button",{onClick:()=>h(n-1),disabled:n===1,className:o.navButton,children:"Назад"}),p.map(r=>s.jsx("span",{className:n===r?o.active:"",onClick:()=>h(r),children:r},r)),s.jsx("button",{onClick:()=>h(n+1),disabled:n===c,className:o.navButton,children:"Вперед"}),s.jsxs("select",{name:"pageSize",value:t,onChange:r=>i(Number(r.target.value)),className:o.select,children:[s.jsx("option",{value:5,children:"5"}),s.jsx("option",{value:10,children:"10"}),s.jsx("option",{value:20,children:"20"}),s.jsx("option",{value:50,children:"50"})]})]})}function R(){const{friends:t,isFollowing:n,handleSubscription:a}=x(),i=d.useMemo(()=>new Set(n),[n]);return s.jsx("section",{className:o.users,children:t.map(e=>s.jsxs("div",{className:o.usersCard,children:[s.jsxs("div",{className:o.usersProfile,children:[s.jsx("div",{className:o.usersAvatar,children:s.jsx("img",{src:e.avatar,alt:e.name})}),s.jsxs("div",{className:o.usersInfo,children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Имя: "})," ",e.name]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Статус: "})," ",e.statusText]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Местоположение: "}),e.location.country,", ",e.location.city]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Дата рождения: "})," ",e.dateOfBirth]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Образование: "})," ",e.education]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Веб-сайт: "}),s.jsx("a",{href:e.webSite,className:o.infoWebsite,target:"_blank",rel:"noopener noreferrer",children:e.webSite})]}),s.jsx("p",{children:s.jsx(F,{to:`/profile/${e.id}`,children:"➡️ Перейти в профиль"})})]})]}),s.jsxs("div",{className:o.actions,children:[s.jsx("p",{className:o.actionsStatus,children:e.status?"Вы подписаны":"Вы не подписаны"}),s.jsx("button",{disabled:i.has(e.id),className:e.status?o.actionsUnsubscribe:o.actionsSubscribe,onClick:()=>a(e.id,!e.status),children:e.status?"Отписаться":"Подписаться"})]})]},e.id))})}function W(){const{pageSize:t,currentPage:n,isFetching:a,getFriends:i}=x();return d.useEffect(()=>{i(n,t)},[i,n,t]),s.jsxs("section",{className:o.friends,children:[s.jsx(C,{source:D,name:"Друзья"}),a&&s.jsx(v,{}),s.jsx(L,{pageSize:t,currentPage:n}),s.jsx(R,{})]})}export{W as default};
