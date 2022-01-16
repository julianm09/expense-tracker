import { useState, useEffect } from "react";
import styled from "styled-components";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdAirportShuttle, MdHardware } from "react-icons/md";
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
  width: 40%;
  height: 100%;
  justify-content: space-between;
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


export default function ItemFilterIcons({
  onClickName,
  onClickAmount,
}) {

    // const [showFood, setShowFood] = useState(false);
    // const [showTravel, setShowTravel] = useState(false);
    // const [showUtils, setShowUtils] = useState(false);

    // const setFood = () => showFood(true);
    // const setTravel = () => showTravel(true);
    // const setUtils = () => showUtils(true);

    // const [filter, setFilter] = useState('all')
    
    // filtering trial

    const [isBlue, setIsBlue] = useState(false);
    const [isGreen, setIsGreen] = useState(false);
    const [isRed, setIsRed] = useState(false);

    //color change

  return (
    <Cont>
      <FilterContainer>
        Filter By:
        {/* <GiForkKnifeSpoon onClick={()=>{setFood}}/>
        <MdAirportShuttle onClick={()=>{setTravel}}/>
        <MdHardware onClick={()=>{setUtils}}/>       */}

        {/* <GiForkKnifeSpoon onClick={()=>{setFilter('food')}}/>
        <MdAirportShuttle onClick={()=>{setFilter('travel')}}/>
        <MdHardware onClick={()=>{setFilter('utils')}}/>     */}
        

        <GiForkKnifeSpoon 
        onClick={() => setIsBlue(!isBlue)}
        size='1.8rem'
        color={isBlue ? 'blue' : 'black'}
        />
        <MdAirportShuttle 
        onClick={() => setIsGreen(!isGreen)}
        size='1.8rem'
        color={isGreen ? 'green' : 'black'}
        />
        <MdHardware onClick={() => setIsRed(!isRed)}
        size='1.8rem'
        color={isRed? 'red' : 'black'}
        />   
      </FilterContainer>
 
      <SortContainer>
        Sort By:
        <SortList>
          <li onClick={onClickName}>Name</li>
          <li onClick={onClickAmount}>Amount</li>
        </SortList>
      </SortContainer>
    </Cont>
  );
}
