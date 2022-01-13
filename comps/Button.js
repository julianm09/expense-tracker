import { useState, useEffect } from "react";
import styled from "styled-components";


const ButtonUI = styled.button`
font-size:16px;
background-color: #000000;
color:#FFFFFF;
border-radius:10px;
height: 50px;
width: 180px;
border: none;
transition:0.1s ease;
cursor: pointer;

&:hover{
    width: 190px;
}

`;

const AddButton = ({
    text = "ADD ITEM",
    handleClick
}) => {
    return (<ButtonUI onClick={handleClick}>{text}</ButtonUI>
    );
}

export default AddButton;
