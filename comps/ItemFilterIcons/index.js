import { useState, useEffect } from "react";
import styled from "styled-components";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdAirportShuttle, MdHardware } from "react-icons/md";
// import { AiFillThunderBolt } from "react-icons/ai";

const Cont = styled.div`
  display: flex;
  width: 35%;
  /* background-color: aliceblue; */
  height: 75px;
  justify-content: space-between;
  align-items: center;
  display:flex;
  font-size: 1.2rem;


`;

const filterhead = styled.p`
`;





export default function ItemFilterIcons() {

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
      <filterhead>Filter By:</filterhead>
      {/* <GiForkKnifeSpoon onClick={()=>{setFood}}/>
      <MdAirportShuttle onClick={()=>{setTravel}}/>
      <MdHardware onClick={()=>{setUtils}}/>       */}

      {/* <GiForkKnifeSpoon onClick={()=>{setFilter('food')}}/>
      <MdAirportShuttle onClick={()=>{setFilter('travel')}}/>
      <MdHardware onClick={()=>{setFilter('utils')}}/>     */}
      

      <GiForkKnifeSpoon 
      onClick={() => setIsBlue(!isBlue)}
      color={isBlue ? 'blue' : 'black'}
      />
      <MdAirportShuttle 
      onClick={() => setIsGreen(!isGreen)}
      color={isGreen ? 'green' : 'black'}
      />
      <MdHardware onClick={() => setIsRed(!isRed)}
      color={isRed? 'red' : 'black'}
      />    

      
    </Cont>
  );
}
