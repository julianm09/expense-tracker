import styled from "styled-components"
import {useState} from "react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const InputBox = styled.input`
    width: 200px;
    height: 25px;
`;

const Button = styled.button`
    margin-top: 10px;
    width: 200px;
    height: 25px;
    border:none;


`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    background-color: ${props=>props.bgcolor};

    margin-bottom: 10px;

    
`;

const Title = styled.h1`
    color: white;
    border-radius: 10px;

`;

export default function Home({
    bgcolor = '#000',
}) {

    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(val){
        setData(val.target.value)
        setPrint(false)
    } 

  return <Container>
        

        {
          print?
          <Card bgcolor={bgcolor} >
              <Title >{data}</Title>
          </Card>
          :null
        }

        <InputBox type="text" onChange={getData}/>
        <Button onClick={()=>setPrint(true)}>Add $ Amount</Button>

    </Container>

}
