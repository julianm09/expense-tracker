import { useState, useEffect } from "react";
import styled from "styled-components";


const ButtonUI = styled.button`
font-size:16px;
background-color: #000000;
color:#FFFFFF;
border-radius:10px;
height: 58px;
width: 184px;
border: none;
transition:0.5s ease;

&:hover{
    width: 200px;
}

`;

const AddButton = ({
    text = "ADD ITEM"
}) => {
    return (<ButtonUI>{text}</ButtonUI>
    );
}

export default AddButton;
