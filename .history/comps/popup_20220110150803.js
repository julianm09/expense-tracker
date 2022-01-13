import { useState, useEffect } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  min-width: 442px;
  min-height: 472px;
  padding: 45px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  position: relative;
`;
const XButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  border-radius: 20px;
  background-color: #000;
  width: 30px;
  height: 30px;
  color: #fff;
`;

const TextCont = styled.div`
  width: 359px;
  display: flex;
  justify-content: flex-start;

  flex-direction: column;
`;

const Box = styled.input`
  width: 359px;
  height: 60px;
  border: 0.5px solid #000;
  border-radius: 10px;
`;

const Title = styled.p``;
const TopDiv = styled.div``;

const BottomDiv = styled.div`
  width: 359px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;
const AddButton = styled.button`
  width: 184px;
  height: 58px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
`;
export default function PopUp() {
  return (
    <Cont>
      <XButton>x</XButton>
      <TopDiv>
        <TextCont>
          <Title>Item Name</Title>
          <Box></Box>
        </TextCont>
        <TextCont>
          <Title>Item Price</Title>
          <Box></Box>
        </TextCont>
        <TextCont>
          <Title>Type</Title>
          <Box></Box>
        </TextCont>
        <BottomDiv>
          <AddButton>ADD</AddButton>
        </BottomDiv>
      </TopDiv>
    </Cont>
  );
}
