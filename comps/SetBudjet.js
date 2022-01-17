import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0 10px 0;
  font-family: Karla;
  width: 80%;

  @media(max-width: 1200px){
    flex-direction: column;
  }
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;

  @media(max-width: 1200px){
    width: 100%;
  }
`;

const InputBox = styled.input`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 10px;
  border: 0.5px solid black;
  margin: 0 10px 0 0;
  width: 100%;
`;

const Button = styled.button`
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  font-size: 16px;
  color: white;
  padding: 0 10px;
background: #006EDC;
  border-radius: 10px;
  border: 0.5px solid #006EDC;
  margin: 0 0 0 10px;
  @media(max-width: 1200px){
  margin: 10px 0 0 0;
  }

/*   background-color: ${(props) => props.bgcolor}; */
`;

export default function Home({ bgcolor = "#000", budget, setBudget }) {

  const [print, setPrint] = useState(false);

  function getData(val) {
    setBudget(val.target.value);
    setPrint(false);
  }

  return (
    <Container>
      <InputCont>
        <InputBox
          type="text"
          onChange={getData}
          placeholder="Enter daily budget"
          type={"number"}
          step="0.01"
        />
        <Button onClick={() => setPrint(true)}>Set</Button>
      </InputCont>

      {print ? (
        <InputCont>
          <Card bgcolor={bgcolor}>{'Your Daily Budget: $' + parseFloat(budget).toFixed(2)}</Card>{" "}
        </InputCont>
      ) : null}
    </Container>
  );
}
