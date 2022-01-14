import { useState, useEffect } from "react";
import styled from "styled-components";

const DropDownBox = styled.select`
  width: 359px;
  height: 60px;
  border: 0.5px solid #000;
  border-radius: 10px;
  padding: 0 25px 0 25px;
`;
export default function Dropdown() {
  return (
    <form action="/action_page.php">
      <DropDownBox id="cars" name="Categories">
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Utilities">Utilities</option>
      </DropDownBox>
    </form>
  );
}
