import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Dropdown() {
  return (
    <form action="/action_page.php">
      <select id="cars" name="Categories">
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Utilities">Utilities</option>
      </select>
    </form>
  );
}
