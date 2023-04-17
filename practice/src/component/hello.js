import React from 'react'
import PropTypes from 'prop-types'
function Hello({ n1 }) {
    return <h1> Hello {n1} </h1>
}

Hello.prototype = {
    n1: PropTypes.string
}

Hello.defaultProps = {
    n1: "AAA"
}
export default Hello;