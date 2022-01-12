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

  return (
    <Cont>
      <MyCalender date={date} setDate={setDate} />
      <DisplayExpense expenses={expenses} date={date} />
    </Cont>
  );
}
