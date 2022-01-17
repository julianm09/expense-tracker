import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

const Cont = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  border-bottom: 0.5px solid #737373;
  align-items: center;
`;

const Itemcont = styled.div`
  width: 151px;
`;

const Title = styled.div`
  font-size: 18px;
  color: #737373;
`;

const Iconcont = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #6d6d6d;
`;

const Icon = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #6d6d6d;
  cursor: pointer;

  &:hover {
    color: #006edc;
  }
`;

export default function Itemlist({
  Itemname = "popeyes",
  Itemtype = "Food",
  Itemamount = 10.64,
  deleteExpense,
  editExpense,
  expense,
  id,
}) {
  return (
    <Cont>
      <Itemcont>
        <Title>{Itemname.substring(0,15)}</Title>
      </Itemcont>

      <Itemcont>
        <Title>{Itemtype}</Title>
      </Itemcont>

      <Itemcont>
        <Title>${parseFloat(Itemamount).toFixed(2)}</Title>
      </Itemcont>

      <Iconcont>
        <Icon>
          <AiOutlineEdit onClick={() => editExpense(expense)} />
        </Icon>

        <Icon style={{ margin: "0 0 0 22px" }}>
          <AiFillDelete onClick={() => deleteExpense(id)} />
        </Icon>
      </Iconcont>
    </Cont>
  );
}
