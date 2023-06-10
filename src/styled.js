import styled from 'styled-components';

export const StyledEscena = styled.p`
    border: 2px solid black;
    border-radius: 25px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    &.highlighted {
        background-color: pink; 
    }`

export const StyledButton = styled.button`
    width: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    font-size: 18px`

export const StyledTitle = styled.h1`
    text-align: center;
    &:hover {
        background-color: green;
    }`

export const StyledStart = styled.button`
    text-align: center;
    background-color: white;
    &:hover {
        background-color: green;
    }
    display: block; 
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
    padding: 5px;`