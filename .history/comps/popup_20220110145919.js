import { useState, useEffect } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 492px;
  height: 522px;
  padding: 45px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const XButton = styled.button`
  border-radius: 50px;
  background-color: #000;
  width: 10px;
  height: 20px;
  color: #fff;
`;

const TextCont = styled.div`
  width: 359px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  width: 359px;
  border: 0.5px solid #000;
  border-radius: 10px;
`;

const Title = styled.p``;
const BottomDiv = styled.div``;
export default function PopUp() {
  return (
    <Cont>
      <XButton>x</XButton>
      <BottomDiv>
        <TextCont>
          <Title>Item Name</Title>
          <Box></Box>
        </TextCont>
      </BottomDiv>
    </Cont>
  );
}
