import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserConsumer } from './UserContext'
import UserContext from "./UserContext";


const ComponentC = () => {
    const show = useContext(UserContext);

    return (
        
        <>
            <ComponentD />
            <UserConsumer>
                {
                    (simple) => {
                        return <h1>{simple()}</h1>
                    }
                }
            </UserConsumer>
            <h1>{show()}</h1>

        </>

    )
}

export default ComponentC
