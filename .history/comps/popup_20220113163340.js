import { useState, useEffect } from "react";
import styled from "styled-components";
import AddButton from "./Button";
import Dropdown from "./dropdown";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.79);
  flex-direction: column;
  cursor: pointer;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  min-width: 442px;
  min-height: 492px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  padding: 0 15px;
`;

const Title = styled.p``;
const TopDiv = styled.div``;

const BottomDiv = styled.div`
  width: 359px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  flex-direction: column;
`;
/* const AddButton = styled.button`
  width: 144px;
  height: 54px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
`; */
export default function PopUp({
  setShowAddItem,
  addExpense,
  setExpensePrice,
  setExpenseName,
  setExpenseType,
  expensePrice,
  expenseName,
  expenseType,
}) {
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];

  return (
    <Overlay>
      <Background onClick={() => setShowAddItem(false)} />
      <Cont>
        <XButton onClick={() => setShowAddItem(false)}>x</XButton>
        <TopDiv>
          <TextCont>
            <Title>Item Name</Title>
            <Box
              onChange={(e) => setExpenseName(e.target.value)}
              value={expenseName}
            />
          </TextCont>
          <TextCont>
            <Title>Item Price</Title>
            <Box
              type={"number"}
              step="0.01"
              onChange={(e) => setExpensePrice(e.target.value)}
              value={expensePrice}
            />
          </TextCont>
          <TextCont>
            <Title>Type</Title>
            <Dropdown
              onChange={(e) => setExpenseType(e.target.value)}
              value={expenseType}
            />
          </TextCont>
          <BottomDiv>
            <AddButton handleClick={addExpense} />
          </BottomDiv>
        </TopDiv>
      </Cont>
    </Overlay>
  );
}
