
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// Write your Character component here
//create a border with 1px?

const StyledCharacter = styled.div`
    border: 1px solid black;
    color: white;
    background-color: #28282B;
    margin: 10%;
    padding: 2%;
`;

const Character = props=> {
    return (
        <StyledCharacter>
            <div className='character-container'>
                <p> TESTING </p>
            </div>
        </StyledCharacter>
    )
}


export default Character;