import{p as l,v as o,r as c,y as d,j as a,L as s,O as i}from"./index-ccd9abbd.js";const u=()=>{const{resturant:n}=l(r=>r.auth),[t,{isSuccess:e}]=o();return c.useEffect(()=>{e&&d.success("logout success")},[e]),a.jsx("nav",{className:"navbar navbar-expand-lg bg-success navbar-dark",children:a.jsxs("div",{className:"container",children:[a.jsx(s,{to:"/resturant",className:"navbar-brand",children:"Resturant Panel"}),a.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:a.jsxs("div",{className:"navbar-nav",children:[a.jsx(s,{to:"/resturant",className:"nav-link active",children:"dashboard"}),a.jsx(s,{to:"/resturant/orders",className:"nav-link active",children:"orders"})]})}),a.jsxs("div",{className:"dropdown",children:[a.jsxs("button",{className:"btn btn-light dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown",children:["Welcome ",n.name]}),a.jsxs("ul",{className:"dropdown-menu",children:[a.jsx("li",{children:a.jsx("a",{className:"dropdown-item",children:"Profile"})}),a.jsx("li",{children:a.jsx("a",{className:"dropdown-item",children:"Account"})}),a.jsx("li",{children:a.jsx("button",{onClick:t,className:"dropdown-item text-danger",children:"Logout"})})]})]})]})})},m=()=>a.jsxs(a.Fragment,{children:[a.jsx(u,{}),a.jsx(i,{})]});export{m as default};
