import React from "react";
import { Navbar, About, MySkill, FormInput } from "./components";



const Main: React.FC =()=>{
  return(
    <div className="h-screen">
      <Navbar logo={'BINMS'} link1={'About me'} link2={'Contact me'} />
      <About  />
      <MySkill />
      <FormInput/>
    </div>
  )
}

export default Main;
