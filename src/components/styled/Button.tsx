import styled from 'styled-components';

export interface IButtonProps {
    color:string;
}
export const Button = styled.button`
    background-color: ${(props:IButtonProps) => props.color || "black"};
    color: white;
    border-radius: 10px;
    width:7em;
    padding: 3px;
    border: 2px solid #C67B47;
    
`;