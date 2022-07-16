import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import TodoComponent from './components/StateExample.js';
// import TodoComponent1 from './components/TodoComponent1.js';
import App2 from './App2'
import FunctionHooks  from './components/Network calls/FunctionHooks';
import UseEffectDependency from './components/Network calls/UseEffectDpenedency';



// const data=[
//     {
//       fname:"peter",
//       email:"peter@gmail.com"
//     },
//     {
//       fname:"peter",
//       email:"peter@gmail.com"
//     },
//     {
//       fname:"peter",
//       email:"peter@gmail.com"
//     }
  
//   ]
  


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
  
  //  <App studentdata={data}></App>
  // <div>
  //    <TodoComponent fname="john"></TodoComponent>
  //    <TodoComponent fname="peter"></TodoComponent>

  // </div>

  <div>
  {/* <TodoComponent1 fname="john"></TodoComponent1> */}
  {/* <TodoComponent1 fname="peter"></TodoComponent1> */}
  {/* <App2></App2> */}

  {/* <FunctionHooks></FunctionHooks>
  <UseEffectDependency></UseEffectDependency> */}

  <App2></App2>

</div>
 
  
  );


