import { useState, useEffect } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  width: 80%;
  height: 75px;
  border-top: 0.5px solid #737373;
  border-bottom: 0.5px solid #737373;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  color: #737373;
  font-weight: 700;
`;

const Titlecont = styled.div`
  width: 151px;
`;

const Iconcont = styled.div`
    width: 87px;
    height: 71px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 34px;
    color: #6D6D6D;

`;


export default function Itemheadings() {

  return (
    <Cont>
        <Titlecont>
            <Title>Expense</Title>
        </Titlecont>

        <Titlecont>
            <Title>Type</Title>
        </Titlecont>

        <Titlecont>
            <Title>Amount</Title>
        </Titlecont>

        <Iconcont>

        </Iconcont>
    </Cont>
  );
}