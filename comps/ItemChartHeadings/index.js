import { useState, useEffect } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  width: 603px;
  height: 71px;
  border-top: 0.5px solid #737373;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 24px;
  color: #737373;
  font-weight: 400;
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


export default function Itemheadings({}) {

  return (
    <Cont>
        <Titlecont>
            <Title>Item Name</Title>
        </Titlecont>

        <Titlecont>
            <Title>Item Name</Title>
        </Titlecont>

        <Titlecont>
            <Title>Item Name</Title>
        </Titlecont>

        <Iconcont>

        </Iconcont>
    </Cont>
  );
}
