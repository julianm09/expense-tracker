import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  width: 60%;
  height: 75px;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export default function DisplayTotal(
{ expensePrice }
){
return <Cont>{expensePrice}</Cont>;
}