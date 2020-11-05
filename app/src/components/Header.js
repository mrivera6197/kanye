import React from 'react'
import styled from 'styled-components'
import img from '../images/lol.jpg'

const StyledHeader = styled.div`
    h1 {
        margin-top: 5%;
    }
    .container {
        margin-top: 5%;
        size: 100%;
        height: 20vh;
    }

    .container img {
        width: 100%;
    }

    .big-container {
        height: 25vh;
        background: #486269;
    }
   
`

const Header = () => {
    return (
        <StyledHeader>
            <div className='big-container'>
                <div className='container'>
                    <img src={img}></img>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header