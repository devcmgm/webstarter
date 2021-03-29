import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import {AppContext} from "./AppContext";

function App() {
 
  const [userACL, setUserACL] = useState({
    isProcessing: true,
    isComplete: false,
    userInfo: null,
    role: "manager"
  });

  useEffect(() => {
    initUserInfo();
  }, []);

  
  async function initUserInfo() {

    setUserACL({
      isProcessing: false,
      isComplete: 1,
      userInfo: {id: 1001, email: "foo@foo"},
      role: "admin",
      routes: [ "home", "secure" ]
    });

  }

  console.log("APP:" + userACL.role)

  return (
    !userACL.isProcessing && (
      <div>
        <AppContext.Provider
          value={{
            userACL,
            initUserInfo,
          }}
        >
           <a href="/">Home</a>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
