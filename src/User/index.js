import React from 'react'

const User = (props) => {

    const changeName = () => {
        props.parentCallback('Niloy')
    }
    
    return (
        <div>
            <button onClick={changeName} type='button'>Click Me</button>
        </div>
    )
}

export default User