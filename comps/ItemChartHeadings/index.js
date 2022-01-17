import { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const Cont = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
  border-top: 0.5px solid #737373;
  border-bottom: 0.5px solid #737373;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  color: #737373;
  font-weight: 700;
  cursor: pointer;
  margin: 0 10px 0 0;

  color: ${props => props.clickColour};
`;

const Titlecont = styled.div`
  width: 151px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

const Iconcont = styled.div`
  width: 87px;

  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 34px;
  color: #6d6d6d;
`;

export default function Itemheadings({
  onClickName,
  onClickAmount,
  nameColour,
  amountColour,
}) {
  return (
    <Cont>
      <Titlecont>
<Title onClick={onClickName} clickColour={nameColour === "down" || nameColour === "up" ?  "#006EDC" : "#737373"}>Expense</Title>
        {nameColour === "down" ? <BsFillCaretDownFill color={'#006EDC'} /> : nameColour === "up" ? <BsFillCaretUpFill color={'#006EDC'} /> : <BsFillCaretDownFill color={'#737373'} /> }
      </Titlecont>

      <Titlecont>
        <Title > Type</Title>
      </Titlecont>

      <Titlecont>
        <Title onClick={onClickAmount} clickColour={amountColour === "down" || amountColour === "up" ?  "#006EDC" : "#737373"}>Amount</Title>
        {amountColour === "down" ? <BsFillCaretDownFill color={'#006EDC'} /> : amountColour === "up" ? <BsFillCaretUpFill color={'#006EDC'} /> : <BsFillCaretDownFill color={'#737373'} /> }
      </Titlecont>

      <Iconcont></Iconcont>
    </Cont>
  );
}
