import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCalender from "../comps/Calender";
import "react-calendar/dist/Calendar.css";
import DisplayExpense from "../comps/DisplayExpense";
import PopUp from "../comps/popup";
import Itemheadings from "../comps/ItemChartHeadings";
import Itemlist from "../comps/itemChartItems";
import AddButton from "../comps/Button";
import DisplayTotal from "../comps/DisplayTotal";
import ItemChart from "../comps/ItemChart";
import SetBudget from "../comps/SetBudjet";
import ItemFilterIcons from "../comps/ItemFilterIcons";

export default function Home() {
  //selected date
  const [date, setDate] = useState("");

  //form inputs
  const [expenseName, setExpenseName] = useState("");
  const [expensePrice, setExpensePrice] = useState(0);
  const [expenseType, setExpenseType] = useState("Food");

  //hook to show and hide popup
  const [showAddItem, setShowAddItem] = useState(false);

  // default data
  const [expenses, setExpenses] = useState([
    {
      date: "2022-01-12",
      expenses: [
        { id: 4343, name: "save on foods", price: 101.22, type: "groceries" },
        { id: 435, name: "shell", price: 55.21, type: "gasoline" },
      ],
    },
    {
      date: "2022-01-13",
      expenses: [
        { id: 3453, name: "save on foods", price: 101.22, type: "Food" },
        { id: 7567, name: "shell", price: 55.21, type: "Travel" },
        { id: 3234, name: "asd", price: 55.21, type: "Utilities" },
      ],
    },
  ]);

  //daily expense array
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  //clicking on sort will change text colour states
  const [nameClickColour, setNameClickColour] = useState("black");
  const [amountClickColour, setAmountClickColour] = useState("black");

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

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //add an expense
  const addExpense = () => {
    setExpenses([
      ...expenses.filter((expense) => expense.date != date),
      {
        date: date,
        expenses: [
          ...filteredExpenses,
          {
            id: randomInteger(0, 99999),
            name: expenseName,
            price: expensePrice,
            type: expenseType,
          },
        ],
      },
    ]);

    setShowAddItem(false);
  };

  // show popup form
  const showItemMenu = () => {
    setShowAddItem(!showAddItem);
  };

  //Filter expenses by date
  const [filter, setFilter] = useState("All");

  //Filter expenses by name

  //Filter expenses by amount

  //Sort by date

  const expenseDates = [];

  const getDates = async () => {
    try {
      const o = expenses;

      for (var i = 0; i < expenses.length; i++) {
        expenseDates.push(o[i].date);
      }

      /*       console.log("EXPENSE DATES ARRAY: " + expenseDates); */

      return expenseDates;
    } catch (e) {
      console.log("ERROR IN GETDATES: " + e);
    }
  };

  getDates();

  //not sure how this could be used, since we have a calender that filters expense dates already for the user

  const sortDatesAsc = () => {
    function compareDates(a, b){
      if(a < b){

        return -1;
      }
      if (a > b) {
        return 1;
      }

      return 0;
    }


    filteredExpenses.sort(compareDates);
  }

  const sortDatesDesc = () => {
    function compareDates(a, b){
      if(a < b){

    expenseDates.sort(compareDates);

    // console.log("ASCENDING EXPENSE DATES: " + expenseDates);
  };

  const sortDatesAsc = () => {
    function compareDates(a, b) {
      if (a < b) {

        return 1;
      }
      if (a > b) {
        return -1;
      }

      return 0;
    }


    filteredExpenses.sort(compareDates);
  }

    expenseDates.sort(compareDates);

    // console.log("DESCENDING EXPENSE DATES: " + expenseDates);
  };


  const sortNameAsc = () => {
    filteredExpenses.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
  };

  const sortNameDesc = () => {
    filteredExpenses.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }

      return 0;
    });
  };

  //reset clicked sort colour when date is changed
  useEffect(() => {
    setNameClickColour("black");
    setAmountClickColour("black");
  }, [date]);

  const nameSortClick = 0;

  const handleNameSort = () => {
    nameSortClick += 1;


    if(nameSortClick % 2 == 1){
      setNameClickColour("blue");
      sortNameAsc();
    } else if(nameSortClick % 2 == 0){
      setNameClickColour("purple");

    if (nameSortClick % 2 == 1) {
      sortNameAsc();
    } else if (nameSortClick % 2 == 0) {

      sortNameDesc();
    }
  };

  //Sort by amount
  const sortAmountAsc = () => {
    filteredExpenses.sort((a, b) => {
      return a.price - b.price;
    });
  };

  const sortAmountDesc = () => {
    filteredExpenses.sort((a, b) => {
      return b.price - a.price;
    });
  };

  const amountSortClick = 0;

  const handleAmountSort = () => {
    amountSortClick += 1;


    if(amountSortClick % 2 == 1){
      setAmountClickColour("blue");
      sortAmountAsc();
    } else if(amountSortClick % 2 == 0){
      setAmountClickColour("purple");

    if (amountSortClick % 2 == 1) {
      sortAmountAsc();
    } else if (amountSortClick % 2 == 0) {

      sortAmountDesc();
    }
  };

  //Add Total expenses from day
  console.log(filteredExpenses.map((x) => x.price));

  //Set Daily Budget

  //Calculate Budget and Total Expense Difference

  //Delete an Expense
  const deleteExpense = (i) => {
    setExpenses([
      ...expenses.filter((expense) => expense.date != date),
      {
        date: date,
        expenses: [...filteredExpenses.filter((expense) => expense.id != i)],
      },
    ]);
  };

  const [editingExpense, setEditingExpense] = useState(false);
  const [editId, setEditId] = useState(null);

  //Edit an Expense

  const editExpense = (i) => {
    //open popup with inputs filled
    setExpenseName(i.name);
    setExpenseType(i.type);
    setExpensePrice(i.price);
    setShowAddItem(true);
    setEditId(i.id);
    setEditingExpense(true);
  };

  const addEditExpense = () => {
    //setExpenses to filtered expenses + update
    setExpenses([
      ...expenses.filter((expense) => expense.date != date),
      {
        date: date,
        expenses: [
          ...filteredExpenses.filter((expense) => expense.id != editId),
          {
            id: randomInteger(0, 99999),
            name: expenseName,
            price: expensePrice,
            type: expenseType,
          },
        ],
      },
    ]);

    // close popup and reset fields
    setExpenseName("");
    setExpenseType("Food");
    setExpensePrice(0);
    setShowAddItem(false);
    setEditId(null);
    setEditingExpense(false);
  };

  return (
    <Cont>
      <Column>
        <DisplayTotal />
        <SetBudget />
        <MyCalender date={date} setDate={setDate} />
      </Column>

      <Column>
        <ItemFilterIcons
          onClickName={handleNameSort}
          onClickAmount={handleAmountSort}

          nameColour={nameClickColour}
          amountColour={amountClickColour}

          filter={filter}
          setFilter={setFilter}

        />

        <Itemheadings />
        <ItemChart
          expenses={expenses}
          date={date}
          filteredExpenses={filteredExpenses}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
          filter={filter}
        />
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
          editingExpense={editingExpense}
          addEditExpense={addEditExpense}
        />
      ) : (
        <></>
      )}
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
