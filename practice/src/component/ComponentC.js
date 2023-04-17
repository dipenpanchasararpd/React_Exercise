import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentC extends Component {
    render() {
        return (
            <>
                <UserConsumer>
                    {
                        (username) => {
                            return <h1>Hello {username}</h1>
                        }
                    }
                </UserConsumer>

            </>
        )
    }
}

export default ComponentC
