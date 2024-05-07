
import {  lazy } from "react";
const Singin = lazy(() =>
    import("../components/auth/Signin.js")
  );

  const Signup = lazy(() =>
    import("../components/auth/Signup.js")
  );

export {Singin,Signup}