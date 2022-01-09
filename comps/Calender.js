import { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalenderUI = styled(Calendar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`;

export default function MyCalender({ date, setDate }) {
  const [value, onChange] = useState(new Date());

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  useEffect(() => {
    setDate(convert(value));
  }, [value]);

  return (
    <div>
      <CalenderUI onChange={onChange} value={value} />
    </div>
  );
}
