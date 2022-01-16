import { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import styled from "styled-components";
import Itemlist from "./itemChartItems";

const Cont = styled.div`
  display: flex;
  flex-direction: column-reverse;
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

export default function DisplayExpense({
  expenses,
  date,
  filteredExpenses,
  deleteExpense,
  editExpense
}) {
  return (
    <Cont>
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <Itemlist
            key={expense.id}
            Itemname={expense.name}
            Itemtype={expense.type}
            Itemamount={expense.price}
            expenses={expenses}
            deleteExpense={deleteExpense}
            id={expense.id}
            expense={expense}
            editExpense={editExpense}
          />
        ))
      ) : (
        <Message>Add an Expense</Message>
      )}
    </Cont>
  );
}
