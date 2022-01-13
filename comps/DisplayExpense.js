import { useState, useEffect } from "react";
import styled from "styled-components";
import Itemlist from "./itemChartItems";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export default function DisplayExpense({ expenses, date, filteredExpenses }) {
  return (
    <Cont>
      {filteredExpenses.length > 0
        ? filteredExpenses.map((expense) => (
            <Itemlist
              key={expense.name}
              Itemname={expense.name}
              Itemtype={expense.type}
              Itemamount={expense.price}
            />
          ))
        : <Message>Add an Expense</Message>}
    </Cont>
  );
}
