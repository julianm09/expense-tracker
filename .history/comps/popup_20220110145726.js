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
  border-radius: 100px;
  background-color: #000;
`;

const TextCont = styled.div`
  width: 359px;
`;

const Box = styled.div`
  width: 359px;
  border-radius: ;
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
