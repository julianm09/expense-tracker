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

export default function DisplayExpense({ expenses, date }) {
  console.log(expenses);

  return (
    <Cont>
      {expenses[date]
        ? expenses[date].map((expense) => (
            <Itemlist key={expense.name} Itemname={expense.name} Itemtype={expense.type} Itemamount={expense.price}/>
          ))
        : ""}
    </Cont>
  );
}
