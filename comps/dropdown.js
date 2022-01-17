import { useState, useEffect } from "react";
import styled from "styled-components";

const DropDownBox = styled.select`
  width: 359px;
  height: 60px;
  border: 0.5px solid #000;
  border-radius: 10px;
  padding: 0 15px;

  select{
      -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  }
`;
export default function Dropdown({ expenseType, setExpenseType }) {
  return (
    <DropDownBox
      id="cars"
      name="Categories"
      onChange={(e) => setExpenseType(e.target.value)}
      value={expenseType}
    >
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Utilities">Utilities</option>
    </DropDownBox>
  );
}
