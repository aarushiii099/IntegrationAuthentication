// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import ProductCatalog from "./components/ProductCatalog";
// import SignUpComponent from './components/SPA Components/SignUpComponents';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import ViewContact from "./components/Contact Manager/ViewContacts"


import DeleteContact from "./components/Contact Manager/DeleteContact"


import SignInComponent from "./components/IntegrationAuthentication/SignInComponent"
import DashBoard from "./components/IntegrationAuthentication/DashBoard"

import UpdatePassword from "./components/IntegrationAuthentication/UpdatePassword"

// import HomePage from "./components/SPA Components/HomePage"

// import DashBoard from "./components/SPA Components/DashBoard"
// import SearchCompoenent from './components/SPA Components/SearchComponent';
import HomePageComponent from "./components/handlingsessions/HomePage"

import SearchComponent from "./components/handlingsessions/SearchComponent"
import {DashBoardComponent} from "./components/handlingsessions/DashBoard"

import SignINComponent from "./components/handlingsessions/SignINComponents"

import AddContact from "./components/Contact Manager/AddContact"


// import ClassLifeCyle from "./components/Network calls/ClassLifeCycle"


// // const data=[{
// //     itemPrice:"1000",
// //     itemLink:"https://www.amazon.in/IBELL-AF40BH-Technology-Switch-off-Temperature/dp/B09B55P74Q/ref=sr_1_1_sspa?crid=3MK1JEVKLSH6P&keywords=appliances&qid=1653398745&sprefix=appliances%2Caps%2C244&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQlhURzRQWjUxSVAyJmVuY3J5cHRlZElkPUEwMjkyNDM2TjNYM0c0VUhMRTkzJmVuY3J5cHRlZEFkSWQ9QTA3MjA3NDMyMTBIQVlERVlTUDlQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" ,itemImage:"https://m.media-amazon.com/images/I/61Ze3Yfi0ML._SX425_.jpg",
// //      itemTitle:"iBELL AF40BH 4 Litre 1400W Digital Air Fryer with 7 Cooking Presets, Smart Rapid Air Technology, Timer Function with Automatic Switch-off & Fully Adjustable Temperature Control (Black)"
// // },
// // {
// //     itemPrice:"1000",
// //     itemLink:"https://www.amazon.in/IBELL-AF40BH-Technology-Switch-off-Temperature/dp/B09B55P74Q/ref=sr_1_1_sspa?crid=3MK1JEVKLSH6P&keywords=appliances&qid=1653398745&sprefix=appliances%2Caps%2C244&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQlhURzRQWjUxSVAyJmVuY3J5cHRlZElkPUEwMjkyNDM2TjNYM0c0VUhMRTkzJmVuY3J5cHRlZEFkSWQ9QTA3MjA3NDMyMTBIQVlERVlTUDlQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" ,itemImage:"https://m.media-amazon.com/images/I/61Ze3Yfi0ML._SX425_.jpg",
// //      itemTitle:"iBELL AF40BH 4 Litre 1400W Digital Air Fryer with 7 Cooking Presets, Smart Rapid Air Technology, Timer Function with Automatic Switch-off & Fully Adjustable Temperature Control (Black)"
// // },
// // {
// //     itemPrice:"1000",
// //     itemLink:"https://www.amazon.in/IBELL-AF40BH-Technology-Switch-off-Temperature/dp/B09B55P74Q/ref=sr_1_1_sspa?crid=3MK1JEVKLSH6P&keywords=appliances&qid=1653398745&sprefix=appliances%2Caps%2C244&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQlhURzRQWjUxSVAyJmVuY3J5cHRlZElkPUEwMjkyNDM2TjNYM0c0VUhMRTkzJmVuY3J5cHRlZEFkSWQ9QTA3MjA3NDMyMTBIQVlERVlTUDlQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" ,itemImage:"https://m.media-amazon.com/images/I/61Ze3Yfi0ML._SX425_.jpg",
// //      itemTitle:"iBELL AF40BH 4 Litre 1400W Digital Air Fryer with 7 Cooking Presets, Smart Rapid Air Technology, Timer Function with Automatic Switch-off & Fully Adjustable Temperature Control (Black)"
// // },
// // {
// //     itemPrice:"1000",
// //     itemLink:"https://www.amazon.in/IBELL-AF40BH-Technology-Switch-off-Temperature/dp/B09B55P74Q/ref=sr_1_1_sspa?crid=3MK1JEVKLSH6P&keywords=appliances&qid=1653398745&sprefix=appliances%2Caps%2C244&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQlhURzRQWjUxSVAyJmVuY3J5cHRlZElkPUEwMjkyNDM2TjNYM0c0VUhMRTkzJmVuY3J5cHRlZEFkSWQ9QTA3MjA3NDMyMTBIQVlERVlTUDlQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" ,itemImage:"https://m.media-amazon.com/images/I/61Ze3Yfi0ML._SX425_.jpg",
// //      itemTitle:"iBELL AF40BH 4 Litre 1400W Digital Air Fryer with 7 Cooking Presets, Smart Rapid Air Technology, Timer Function with Automatic Switch-off & Fully Adjustable Temperature Control (Black)"
// // }
// // ]

// function App2(){
//     return(
//         <div>
//             {/* <ProductCatalog data={data}></ProductCatalog> */}
//             {/* <SignUpComponent></SignUpComponent> */}
//         <BrowserRouter>
//         {/* <Link to="/home">Home Page</Link>  */}
//         {/* //when this is hit,redirects to home page by searching for its url */}
        
//         {/* <Link to="/dashboard">DashBoard</Link> */}
//         <Link to="/lfc">lfc</Link>




//     <Routes>
//             {/* <Route path="/home" element={<HomePage></HomePage>}></Route>
//             <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route> */}
            

//        <Route path="/" element={<HomePage></HomePage>}></Route>
//        <Route path="/signup" element={<SignUpComponent></SignUpComponent>}></Route>
//        <Route path="/dashboard/:username/:country" element={<DashBoard></DashBoard>}></Route>
//        <Route path="/search" element={<SearchCompoenent></SearchCompoenent>}></Route>
//        <Route path="/lfc" element={<ClassLifeCyle></ClassLifeCyle>}></Route>

           

//     </Routes>

        
//         </BrowserRouter>

//         </div>
//     )
// }

// export default App2

// ///for protected routes
// import { useState } from "react"
// import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
// import { Admin, Contact, Home, Navigation } from "./components/Protected Routes/AllComponents"
// export default function App(){
//   const [user,setUser]=useState(null)
//   const handleLogin=()=>{
//     setUser({username:"john",role:"admin"})
//   }
//   const handleLogout=()=>{
//     setUser(null)
//   }
//   return(
//     <div>
//       <button onClick={handleLogin}>login</button>
//       <button onClick={handleLogout}>logout</button>
//     <BrowserRouter>
//     <Navigation></Navigation>
//     <Routes>
//       <Route path="/" element={<Home></Home>}></Route>
//       <Route path="/admin" element={<Admin user={user}></Admin>}></Route>
//       <Route path="/contact" element={<Contact></Contact>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

//for handlingsessions vala folder//local storage vala thing

function App2(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<HomePageComponent></HomePageComponent>}></Route> */}

            {/* Contact Manager routes */}
            {/* <Route path="/" element={<ViewContact></ViewContact>}></Route>
            <Route path="/create" element={<AddContact></AddContact>}></Route>
            <Route path="/delete/:userid" element={<DeleteContact></DeleteContact>}></Route> */}



            {/* Integration of AuthenticationRoutes.js from backend to IntegrationAuthentication Folder here */}

            <Route path="/" element={<SignInComponent></SignInComponent>}></Route>

            <Route path="/dashboard/:email" element={<DashBoard></DashBoard>}></Route>

            <Route path="/updatepassword" element={<UpdatePassword></UpdatePassword>}></Route>



            {/* <Route path="/signin" element={<SignINComponent></SignINComponent>}></Route>

            <Route path="/dashboard" element={<DashBoardComponent></DashBoardComponent>}></Route>

            <Route path="/search" element={<SearchComponent></SearchComponent>}></Route> */}
        </Routes>
        </BrowserRouter>
    </div>

    )
   
}
export default App2