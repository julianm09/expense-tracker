import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

const Cont = styled.div`
  display: flex;
  width: 603px;
  height: 71px;
  justify-content: space-between;
  border-top: 0.5px solid #737373;
  border-bottom: 0.5px solid #737373;

`;

const Itemcont = styled.div`
  width: 151px;
`;

const Title = styled.p`
  font-size: 24px;
  color: #737373;
`;

const Iconcont = styled.div`
    width: 87px;
    height: 71px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 34px;
    color: #6D6D6D;

`;





export default function Itemlist({
    Itemname="popeyes",
    Itemtype="Food",
    Itemamount="$10.64",

}) {

  return (
    <Cont>
        <Itemcont>
            <Title>{Itemname}</Title>
        </Itemcont>

        <Itemcont>
            <Title>{Itemtype}</Title>
        </Itemcont>

        <Itemcont>
            <Title>{Itemamount}</Title>
        </Itemcont>

        <Iconcont>
                <AiOutlineEdit/>
                <AiFillDelete />
        </Iconcont>

        


    </Cont>
  );
}
