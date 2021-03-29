import React from "react";
import { useLocation, Route, useHistory } from "react-router-dom";
import ManagerPage from "./components/pages/authenicatedPages/ManagerPage"
import AdminPage from "./components/pages/authenicatedPages/AdminPage"
import Error404 from "./components/pages/Error404"
import { useAppContext } from "./AppContext"

function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

export default function UserRoutes() {
    const { userACL } = useAppContext()
    const history = useHistory();

    console.log("here: " + JSON.stringify(userACL))
    if (userACL) {
        switch (userACL.role) {
            case "admin":
                return (<>
                    <Route  path="/admin">
                        <AdminPage />
                    </Route>
                </>
                )
            case "manager":
                return (
                    <Route  path="/manager">
                        <ManagerPage />
                    </Route>
                )
            default:
                console.log("HETE")
                return (
                    <Link to="/dashboard">Dashboard</Link>
                )
        }
    } else {
        return (<><hr /><h1>Works</h1></>)
    }
}