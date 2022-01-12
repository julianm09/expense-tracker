import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCalender from "../comps/Calender";
import "react-calendar/dist/Calendar.css";
import DisplayExpense from "../comps/DisplayExpense";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export default function Home() {
  const [date, setDate] = useState("");

  const [expenses, setExpenses] = useState([
    {
      date: "2022-01-08",
      expenses: [
        { name: "save on foods", price: 101.22, type: "groceries" },
        { name: "shell", price: 55.21, type: "gasoline" },
      ],
    },
    {
      date: "2022-01-09",
      expenses: [
        { name: "save on foods", price: 11.22, type: "groceries" },
        { name: "shell", price: 515.21, type: "gasoline" },
      ],
    },
    {
      date: "2022-01-10",
      expenses: [
        { name: "save on foods", price: 101.22, type: "groceries" },
        { name: "shell", price: 55.21, type: "gasoline" },
      ],
    },
  ]);

  const [showExpenses, setShowExpenses] = useState([])

  useEffect(() => {
    const filteredDate = expenses.filter((e) => e.date === date)[0];
    if (filteredDate) {
      setShowExpenses(filteredDate.expenses)
    }
  },[date]);

  const addExpense = () => {

        /* expenses["2022-01-08"].push({ name: "shell", price: 55.21, type: "gasoline" }); */
    /*     setExpenses({
      ...expenses,
      "2022-01-09": [
        ...expenses["2022-01-09"],
        { name: "shell", price: 55.21, type: "gasoline" },
      ],
    }); */

    
    setExpenses({
      ...expenses,
    });
  };

  return (
    <Cont>
      <button onClick={addExpense} />
      <MyCalender date={date} setDate={setDate} />
      <DisplayExpense showExpenses={showExpenses} />
    </Cont>
  );
}
