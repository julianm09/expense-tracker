import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCalender from "../comps/Calender";
import "react-calendar/dist/Calendar.css";
import DisplayExpense from "../comps/DisplayExpense";
import PopUp from "../comps/popup";
import Itemheadings from "../comps/ItemChartHeadings";
import Itemlist from "../comps/itemChartItems";
import AddButton from "../comps/Button";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default function Home() {
  const [date, setDate] = useState("");

  const [expenseName, setExpenseName] = useState("default");
  const [expensePrice, setExpensePrice] = useState(0);
  const [expenseType, setExpenseType] = useState("deault");

  const [showAddItem, setShowAddItem] = useState(false);

  const [expenses, setExpenses] = useState({
    "2022-01-08": [
      { name: "save on foods", price: 101.22, type: "groceries" },
      { name: "shell", price: 55.21, type: "gasoline" },
    ],
    "2022-01-09": [
      { name: "earls", price: 150.45, type: "dining" },
      { name: "starbucks", price: 5.24, type: "coffee" },
    ],
    "2022-01-10": [
      { name: "cineplex", price: 24.28, type: "night out" },
      { name: "rent", price: 1250, type: "rent" },
    ],
  });

  const addExpense = () => {
    setExpenses({
      ...expenses,
      [date] : [
        ...expenses[date],
        { name: expenseName, price: 55.21, type: "gasoline" },
      ],
    });

    console.log(expenses);
  };

  const showItemMenu = () => {
    setShowAddItem(!showAddItem);
  };

  return (
    <Cont>
      <Column>
        <MyCalender date={date} setDate={setDate} />
      </Column>

      <Column>
        <button onClick={addExpense} />
        <Itemheadings />
        <DisplayExpense expenses={expenses} date={date} />
        <AddButton handleClick={showItemMenu} />
      </Column>

      {showAddItem ? (
        <PopUp
          setExpensePrice={setExpensePrice}
          setExpenseName={setExpenseName}
          setExpenseType={setExpenseType}
          setShowAddItem={setShowAddItem}
          addExpense={addExpense}
        />
      ) : (
        <></>
      )}
    </Cont>
  );
}
