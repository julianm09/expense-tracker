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
  position: relative;
`;
const xButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const BottomDiv = styled.div``;
export default function PopUp() {
  return (
    <Cont>
      <xButton></xButton>
      <BottomDiv></BottomDiv>
    </Cont>
  );
}
