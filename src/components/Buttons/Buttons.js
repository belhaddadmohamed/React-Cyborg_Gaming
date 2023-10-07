import React from 'react'

const PrimaryButton = (props) => {
  return (
    <div className="main-button">
        <a href="#">{props.children}</a>
    </div>
  )
}

const SecondaryButton = (props) => {
    return (
        <div className="main-border-button border-no-active">
            <a href="#">{props.children}</a>
        </div>
    )
}

export default PrimaryButton
export {SecondaryButton}