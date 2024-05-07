import React, { Suspense, useEffect, useState } from "react";

import './App.scss';
import Routing from "./routing/Routing";
import { useDispatch, useSelector } from "react-redux";
import { ChangeTheme } from "./redux/Reducer/Themereducer/ThemeReducer";
function App() {
  const dispatch=useDispatch();
  const themestate=useSelector((state)=>state?.themes?.theme)
  const getThemeChat=()=>{
    return JSON.parse(localStorage.getItem("theme-chat"));
  }
  const [theme,setTheme]=useState(getThemeChat());
  useEffect(()=>{
localStorage.setItem("theme-chat",JSON.stringify(theme));
  },[theme]);

  useEffect(()=>{
    if(localStorage.getItem("theme-chat"))
      {
        dispatch(ChangeTheme(getThemeChat()))
      }
      else
      {
    dispatch(ChangeTheme(false))

      }

  },[theme])


  
  return (
    <div className={themestate? "theme--dark" : "theme--light" }>
      <div className="App">
      <Suspense
        fallback={
          <div className="loading">
           {/* <ClimbingBoxLoader color="#36d7b7" /> */}
          </div>
        }
      > 
<Routing/>
      </Suspense>
      </div>
    </div>
  );
}

export default App;
