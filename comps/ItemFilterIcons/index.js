import { useState, useEffect } from "react";
import styled from "styled-components";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdAirportShuttle, MdHardware, MdAllInclusive } from "react-icons/md";
// import { AiFillThunderBolt } from "react-icons/ai";

const Cont = styled.div`
  display: flex;
  width: 80%;
  height: 75px;
  justify-content: space-between;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 1.2rem;
`;

const SortContainer = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const SortList = styled.ul`
  list-style-type: none;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;


const SortP = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${props=>props.clickColour};
  &:hover{
    cursor: pointer;
  }
`;


const Filter = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 0 0 25px ;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  color: ${(props) => props.color};
  border: ${(props) => props.border};
`;


export default function ItemFilterIcons({
  onClickName,
  onClickAmount,

  nameColour,
  amountColour,

  setFilter,
  filter,

}) {
  return (
    <Cont>
      <FilterContainer>
        Filter By:
        <Filter
        style={{fontSize: '14px'}}
          color={filter === "All" ? "#006EDC" : "#6d6d6d"}
          border={
            filter === "All" ? "0.5px solid #006EDC" : "0.5px solid #6d6d6d"
          }
          onClick={() => setFilter("All")}
        >
          All
        </Filter>
        <Filter
          onClick={() => setFilter("Food")}
          color={filter === "Food" ? "#006EDC" : "#6d6d6d"}
          border={
            filter === "Food" ? "0.5px solid #006EDC" : "0.5px solid #6d6d6d"
          }
          filter={filter}
        >
          <GiForkKnifeSpoon />
        </Filter>
        <Filter
          onClick={() => setFilter("Travel")}
          color={filter === "Travel" ? "#006EDC" : "#6d6d6d"}
          border={
            filter === "Travel" ? "0.5px solid #006EDC" : "0.5px solid #6d6d6d"
          }
          filter={filter}
        >
          <MdAirportShuttle />
        </Filter>
        <Filter
          onClick={() => setFilter("Utilities")}
          color={filter === "Utilities" ? "#006EDC" : "#6d6d6d"}
          border={
            filter === "Utilities"
              ? "0.5px solid #006EDC"
              : "0.5px solid #6d6d6d"
          }
          filter={filter}
        >
          <MdHardware />
        </Filter>
      </FilterContainer>

  <SortContainer>
        Sort By:
        <SortList>
          <li
          onClick={onClickName} 
          >
            <SortP
            clickColour={nameColour} 
            >
              Name
            </SortP>
          </li>
          <li 
          onClick={onClickAmount} 
          >
            <SortP 
            clickColour={amountColour} 
            >
              Amount
            </SortP>   
          </li>
        </SortList>
      </SortContainer> 
    </Cont>
  );
}
