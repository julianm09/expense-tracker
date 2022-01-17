import { useState, useEffect } from "react";
import styled from "styled-components";

const MainCont = styled.div`
    width: 504px;
    border: 1px solid grey;
    border-radius: 20px;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
`;

const Number = styled.h1`
 color: black;
 font-size: 60px;
 font-weight: bold;

 display: flex;
 justify-content: center;
`;

const Spent = styled.p`
    color: black;

`;

const Remaining = styled.p`
    color: black;
`;

const BotCont = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Card = ({
    Num="$200",
    AmountSpent="$50",
    AmountRemaining="$150"
})=> {
  return (
    <MainCont>
            <Number>{Num}</Number>
            <BotCont>
            <Spent>Spent:{AmountSpent}</Spent>
            <Remaining>Remaining:{AmountRemaining}</Remaining>
            </BotCont>
    </MainCont>
  );
}

export default Card;
