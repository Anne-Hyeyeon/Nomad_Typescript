import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation:${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size:98px;
    }
  }
`
function App() {
  return (
    <Wrapper>
      <Title>안녕</Title>
      {/* <Box>
        <Emoji as="p">😍</Emoji>
      </Box> */}
    </Wrapper>
  );
}

export default App;
