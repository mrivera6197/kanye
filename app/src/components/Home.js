import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { updateQuote } from '../actions/kanyeAction'

import styled from 'styled-components'



const StyledHome = styled.div`

    .quoteContainer {
        display: flex;
        background: #edf0f5;
        padding: 4%;
        border: 2px solid #999ca1;
        justify-content: center;
        align-items: center;
        width: 60%;
        margin: 2%;
        border-radius: 6px;
    }
    .name {
        text-align: left;
    }
    .quoteContainer img {
        width: 10%;
    }
    button {
        border: none;
        background: #404040;
        color: white;
        font-weight: 100;
        padding: 1rem;
        text-transform: uppercase;
        border-radius: 6px;
        display: inline-block;
        transition: all 0.3s ease 0s;
        margin: 2%;
    }

    button:hover {
        color: white;
        font-weight: 700;
        letter-spacing: 1px;
        background: none;
        -webkit-box-shadow: 0 5px 4rem -1rem rgba(0,0,0,0.57);
        -moz-box-shadow: 0 5px 4rem -1rem rgba(0,0,0,0.57);
        transition: all 0.3s ease 0s;
        }

    .bigContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5%;
    }
`

const Home = (props) => {

    useEffect(() => {
        props.updateQuote()
    }, [])


    return (
        <StyledHome>
            <div className='bigContainer'>
                {/* <h2>ye</h2> */}
                <div className='quoteContainer'>
                    {/* {props.loading ? <p>loading...</p> : props.quote} */}
                    {props.quote}
                    {props.error ? <p>{props.error}</p> : null}
                </div>
            <button onClick={props.updateQuote}>more pls</button>
            </div>
        </StyledHome>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        quote: state.quote.toUpperCase(),
        error: state.error,
    }
}

export default connect(mapStateToProps, { updateQuote })(Home)