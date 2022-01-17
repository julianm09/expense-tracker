import { useState, useEffect } from "react";
import styled from "styled-components";


export default function Dropdown ()  {

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
            <Box
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
}
