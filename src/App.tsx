import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hello", value);
  }

  const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
  `

  const H1 = styled.h1`
    color: ${props => props.theme.textColor};
  `
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} placeholder="username" value={value} />
        <button>Log in</button>
      </form>

      <br />
      {/* Circle 연습 */}
      <Circle borderColor="pink" bgColor="teal" />
      <Circle bgColor="tomato" text="Hello? Princess~" />

      <Container>
        <H1>안녕?</H1>
      </Container>
    </div>
  )
}

export default App;
