import{r as l,j as e}from"./jsx-runtime-56DGgGmo.js";const c=()=>[{title:"JUICY - On-Demand EV Charging Anywhere"},{name:"description",content:"Never worry about EV charging again. Get on-demand charging wherever you park - at restaurants, stadiums, work, or home."}];function d(){const r=l.useRef(null);return l.useEffect(()=>(r.current=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&a.target.classList.add("active")})},{threshold:.1}),document.querySelectorAll(".step-animation").forEach(s=>{var a;(a=r.current)==null||a.observe(s)}),()=>{var s;return(s=r.current)==null?void 0:s.disconnect()}),[]),e.jsxs("main",{className:"bg-white text-gray-900",children:[e.jsxs("section",{className:"snap-section relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white",children:[e.jsx("div",{className:"absolute inset-0 bg-grid opacity-20"}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[e.jsxs("h1",{className:"text-5xl md:text-7xl font-bold mb-6",children:["The Future of ",e.jsx("span",{className:"gradient-text",children:"EV Charging"})," is Here"]}),e.jsx("p",{className:"text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto",children:"Charge your EV wherever you are, whenever you need it. No stations, no waiting."}),e.jsxs("a",{href:"#waitlist",className:"inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl",children:["Join the Revolution",e.jsx("svg",{className:"ml-2 w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]})]}),e.jsxs("section",{className:"snap-section min-h-screen bg-gradient-to-b from-white to-blue-50 relative flex items-center py-24",children:[e.jsx("div",{className:"absolute inset-0 bg-grid opacity-10"}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-20",children:["Charging Made ",e.jsx("span",{className:"gradient-text",children:"Effortless"})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-12",children:t.map((s,a)=>e.jsxs("div",{className:"step-animation hover-card bg-white rounded-2xl p-8 border border-gray-100 shadow-sm",style:{animationDelay:`${a*200}ms`},children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 animate-float",children:s.icon}),e.jsxs("h3",{className:"text-2xl font-semibold mb-4",children:[e.jsxs("span",{className:"text-blue-600",children:["0",a+1,"."]})," ",s.title]}),e.jsx("p",{className:"text-gray-600",children:s.description}),e.jsx("div",{className:"mt-6",children:s.animation})]},s.title))})]})]}),e.jsxs("section",{className:"snap-section h-screen bg-gradient-to-b from-blue-50 to-white relative flex items-center overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-grid opacity-10"}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("h2",{className:"text-6xl font-bold text-center mb-16",children:"Reviews"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:n.map((s,a)=>e.jsx("div",{className:"step-animation backdrop-blur-lg bg-white/70 rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden mb-6",children:e.jsx("img",{src:s.avatar,alt:s.name,className:"w-full h-full object-cover"})}),e.jsx("h3",{className:"text-2xl font-semibold mb-4",children:s.name}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:s.quote})]})},s.name))})]})]}),e.jsxs("section",{id:"waitlist",className:"snap-section min-h-screen bg-gradient-to-b from-blue-50 to-white relative flex items-center py-24",children:[e.jsx("div",{className:"absolute inset-0 bg-grid opacity-10"}),e.jsx("div",{className:"relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-100",children:[e.jsxs("h2",{className:"text-4xl font-bold text-center mb-8",children:["Join the ",e.jsx("span",{className:"gradient-text",children:"Waitlist"})]}),e.jsxs("form",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Name"}),e.jsx("input",{type:"text",id:"name",className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600",placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),e.jsx("input",{type:"email",id:"email",className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600",placeholder:"Enter your email"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"vehicle",className:"block text-sm font-medium text-gray-700 mb-2",children:"Vehicle Type (Optional)"}),e.jsx("input",{type:"text",id:"vehicle",className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600",placeholder:"e.g., Tesla Model 3"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"zipcode",className:"block text-sm font-medium text-gray-700 mb-2",children:"ZIP Code"}),e.jsx("input",{type:"text",id:"zipcode",className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600",placeholder:"Enter your ZIP code"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"usage",className:"block text-sm font-medium text-gray-700 mb-2",children:"Usage Type"}),e.jsxs("select",{id:"usage",className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600",children:[e.jsx("option",{children:"Personal Use"}),e.jsx("option",{children:"Fleet"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subscription",className:"block text-sm font-medium text-gray-700 mb-2",children:"Interested in Subscription?"}),e.jsxs("select",{id:"subscription",className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600",children:[e.jsx("option",{children:"Yes"}),e.jsx("option",{children:"No"})]})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white rounded-lg px-4 py-3 font-semibold hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl",children:"Reserve Your Spot"})]})]})})]}),e.jsx("footer",{className:"snap-section bg-white border-t border-gray-200 py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e.jsx("div",{className:"text-gray-600 text-sm mb-4 md:mb-0",children:"© 2025 ChargeMobile. All rights reserved."}),e.jsx("div",{className:"flex space-x-6",children:i.map(s=>e.jsxs("a",{href:s.href,className:"text-gray-400 hover:text-gray-600 transition-colors",children:[e.jsx("span",{className:"sr-only",children:s.name}),s.icon]},s.name))})]})})})]})}const t=[{title:"Park Anywhere",description:"Park your EV at any location - restaurants, stadiums, work, or home. No special parking spots needed.",icon:e.jsxs("svg",{className:"w-8 h-8 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),animation:e.jsxs("div",{className:"relative h-32",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg animate-float",children:e.jsx("svg",{className:"w-full h-full text-blue-600 p-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"})})})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-24 h-24 border-2 border-blue-200 rounded-full animate-radar opacity-0"})})]})},{title:"Request Service",description:"Open the app, set your charging preferences, and we'll handle the rest while you go about your day.",icon:e.jsx("svg",{className:"w-8 h-8 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})}),animation:e.jsx("div",{className:"relative h-32",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-lg animate-pulse-slow",children:e.jsx("svg",{className:"w-full h-full text-green-600 p-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})})})})},{title:"Drive Happy",description:"Return to a fully charged vehicle, ready for your next adventure. No waiting, no hassle.",icon:e.jsx("svg",{className:"w-8 h-8 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),animation:e.jsx("div",{className:"relative h-32",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg animate-float",children:e.jsx("svg",{className:"w-full h-full text-blue-600 p-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})})})})}],i=[{name:"Twitter",href:"#",icon:e.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"LinkedIn",href:"#",icon:e.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{fillRule:"evenodd",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",clipRule:"evenodd"})})},{name:"GitHub",href:"#",icon:e.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}],n=[{name:"Sarah Johnson",quote:"ChargeMobile has completely changed how I think about EV charging. No more planning my day around charging stations!",avatar:"/images/testimonials/sarah.jpg"},{name:"Michael Chen",quote:"As a fleet manager, this service has been a game-changer. Our vehicles are always charged and ready to go.",avatar:"/images/testimonials/michael.jpg"},{name:"Emily Rodriguez",quote:"The convenience is unmatched. I love that I can get my car charged while shopping or at work.",avatar:"/images/testimonials/emily.jpg"}];export{d as default,c as meta};
