import { useState, useEffect } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function DisplayExpense({ showExpenses}) {



  return (
    <Cont>
            {showExpenses
        ? showExpenses.map((expense) => (
            <div key={expense.name}>
              {expense.name + " " + expense.price + " " + expense.type}
            </div>
          ))
        : ""}
    </Cont>
  );
}
