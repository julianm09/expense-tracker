import { useState, useEffect } from "react";
import styled from "styled-components";


export default function Dropdown ()  {

  return (
    <form action="/action_page.php">
    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
    <input type="submit">
  </form>
  );
} 

