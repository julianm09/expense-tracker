import { useState, useEffect } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function DisplayExpense({ expenses, date }) {
  console.log(expenses);

  return (
    <Cont>
      {expenses[date]
        ? expenses[date].map((expense) => (
            <div key={expense.name}>
              {expense.name + " " + expense.price + " " + expense.type}
            </div>
          ))
        : ""}
    </Cont>
  );
}
