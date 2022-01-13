import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCalender from "../comps/Calender";
import "react-calendar/dist/Calendar.css";
import DisplayExpense from "../comps/DisplayExpense";
<<<<<<< HEAD

import Card from '../comps/Card';

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
=======
import PopUp from "../comps/popup";
import Itemheadings from "../comps/ItemChartHeadings";
import Itemlist from "../comps/itemChartItems";
import AddButton from "../comps/Button";
import DisplayTotal from "../comps/DisplayTotal";
import ItemChart from "../comps/ItemChart";
>>>>>>> 9f058ff2c7a9ac65de26a1ce8015c608ceef2da5

export default function Home() {

  //selected date
  const [date, setDate] = useState("");

  //form inputs
  const [expenseName, setExpenseName] = useState("");
  const [expensePrice, setExpensePrice] = useState(null);
  const [expenseType, setExpenseType] = useState("");

  //hook to show and hide popup
  const [showAddItem, setShowAddItem] = useState(false);

  // default data
  const [expenses, setExpenses] = useState([
    {
      date: "2022-01-12",
      expenses: [
        { name: "save on foods", price: 101.22, type: "groceries" },
        { name: "shell", price: 55.21, type: "gasoline" },
      ],
    },
    {
      date: "2022-01-13",
      expenses: [
        { name: "save on foods", price: 101.22, type: "groceries" },
        { name: "shell", price: 55.21, type: "gasoline" },
      ],
    },
  ]);

  //daily expense array
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  //update when date is changed
  useEffect(() => {
    filterDate();
  }, [date]);

  //upate when expenses are added
  useEffect(() => {
    filterDate();
  }, [expenses]);


  //filter expenses by date
  const filterDate = () => {
    const filteredDate = expenses.filter((expense) => expense.date === date);

    if (filteredDate[0]) {
      setFilteredExpenses(filteredDate[0].expenses);
    } else {
      setFilteredExpenses([]);
    }
  };

  //add an expense
  const addExpense = () => {
    if (filteredExpenses.length > 0) {
      console.log([...expenses.filter((expense) => expense.date != date)]);
      setExpenses([
        ...expenses.filter((expense) => expense.date != date),
        {
          date: date,
          expenses: [
            ...filteredExpenses,
            { name: expenseName, price: expensePrice, type: expenseType },
          ],
        },
      ]);
    } else {
      setExpenses([
        ...expenses,
        {
          date: date,
          expenses: [
            ...filteredExpenses,
            { name: expenseName, price: expensePrice, type: expenseType },
          ],
        },
      ]);
    }
  };

  // show popup form
  const showItemMenu = () => {
    setShowAddItem(!showAddItem);
  };

  //Filter expenses by date

  //Filter expenses by name

  //Filter expenses by amount

  //Add Total expenses from day

  //Set Daily Budget

  //Calculate Budget and Total Expense Difference

  //Delete an Expense

  //Edit an Expense

  return (
    <Cont>
<<<<<<< HEAD
      <MyCalender date={date} setDate={setDate} />
      <DisplayExpense expenses={expenses} date={date} />
      <Card/>
=======
      <Column>
        <MyCalender date={date} setDate={setDate} />
      </Column>

      <Column>
      <DisplayTotal/>
        <Itemheadings />
        <ItemChart expenses={expenses}
              date={date}
              filteredExpenses={filteredExpenses}/>
        <AddButton handleClick={showItemMenu} />
      </Column>

      {showAddItem ? (
        <PopUp
          setExpensePrice={setExpensePrice}
          expensePrice={expensePrice}
          setExpenseName={setExpenseName}
          expenseName={expenseName}
          setExpenseType={setExpenseType}
          expenseType={expenseType}
          setShowAddItem={setShowAddItem}
          addExpense={addExpense}
        />
      ) : (
        <></>
      )}
>>>>>>> 9f058ff2c7a9ac65de26a1ce8015c608ceef2da5
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
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