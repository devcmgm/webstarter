import React from "react";

export default function Home() {
 
  return (
    <>
       <div>
         <h1>Home</h1>
         <a href="/admin">Admin</a>
         <br/>
         <a href="/another">Another</a>
         <br/>
         <a href="/manager">Manager</a> <br/>
         NOTE: This does not have a route yet since user default admin change in App.js
        
       </div>
    </>
  );
}
