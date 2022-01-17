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
  height: 200px;
`;

export default function DisplayExpense({
  expenses,
  date,
  filteredExpenses,
  deleteExpense,
  editExpense,
  filter,
}) {
  return (
    <Cont>
      {filteredExpenses.length > 0 ? (
        filteredExpenses
          .filter((x) => (filter === "All" ? x : x.type === filter))
          .map((expense) => (
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
