import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.theme.bgColor};
    border: 5px solid ${props => props.borderColor}
`;


interface CircleProps {
    bgColor:string;
    borderColor? :string;
    text?: string;
}

function Circle({bgColor, borderColor, text = "Default Text"} : CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
    {text}
    </Container>;
}

export default Circle;