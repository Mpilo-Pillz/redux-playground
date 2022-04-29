import styled from "styled-components";
import StyledButton from "../Components/Button";

export const Button = styled.button`
width: 200px;
height: 50px;
background-color: ${(props) => props.backgroundColor};

&:hover {
    & label {
        color: purple;
    }
}
`;

export const ButtonLabel = styled.label`
font-size: 25px;
color: white;
`

export const CustomButton = styled(StyledButton)`
width: 200px;
height: 50px;
background-color: ${(props) => props.backgroundColor};

&:hover {
    & label {
        color: purple;
    }
}
`