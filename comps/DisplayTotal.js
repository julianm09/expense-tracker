import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  width: 80%;
  height: 75px;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 0px 0 40px 0;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export default function DisplayTotal({ totalSum, budget }) {
  return (
    <Cont color={budget >= totalSum ? "#006EDC" : "#D10404"}>
      Expenses: ${parseFloat(totalSum).toFixed(2)}
    </Cont>
  );
}
