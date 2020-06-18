import React, { useState } from "react"

import PackageContext from "./Context";

const Provider = (props) => {
    const [mission, setMission] = useState({
        mname: "Got ot russia",
        agent: "007",
        isAccepted: "not accepted"
    });
    return (
        <PackageContext.Provider
            value={{
                data: mission,
                acceptTheMission: () => {
                    setMission({ ...mission, isAccepted: "accepted" })
                }
            }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider
