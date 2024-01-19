import styled from "styled-components";

export const Button = styled.button`
    
    padding: 10px 18px;
    border: none;
    border-radius: 5px;
    background: black;
    color: white;
    min-width: 220px;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`
export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
    
`