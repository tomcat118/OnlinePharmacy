import React from 'react'

function clickAction(props) {
    document.getElementById("signout").click();
    if (props.value == false) {
        props.value = true
    } else {
        props.value = false
    }
}

const SignOut = (props) => {
  return (
    <div className = {props.value ? 'signout' : ''}> </div>
  )
}

export default SignOut;