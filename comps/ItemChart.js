import { useState, useEffect } from "react";
import styled from "styled-components";
import DisplayExpense from "./DisplayExpense";
import Itemheadings from "./ItemChartHeadings";

const Cont = styled.div`
  display: flex;
  width: 80%;
  height: 250px;

  box-sizing: border-box;
  overflow-y: scroll;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 50px 0;
`;

export default function ItemChart({ expenses, date, filteredExpenses, deleteExpense, editExpense, filter}) {
  return <Cont>
    <DisplayExpense
              expenses={expenses}
              date={date}
              filteredExpenses={filteredExpenses}
              deleteExpense={deleteExpense}
              editExpense={editExpense}
              filter={filter}
              />
    </Cont>;
}
