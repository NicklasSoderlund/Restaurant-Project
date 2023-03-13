import styled from 'styled-components';

export interface IButtonProps {
    color:string;
    width:string;
    textColor:string;
    border:string;
}
export const Button = styled.button`
    background-color: ${(props:IButtonProps) => props.color || "black"};
    font-size: 1rem;
    font-weight:bold;
    color: ${(props:IButtonProps) => props.textColor || "white"};
    border-radius: 20px;
    width:${(props:IButtonProps) => props.width || "8em"};
    padding: 7px;
    border:${(props:IButtonProps) => props.border || "2px solid #C67B47"};
    cursor: pointer;

    
`;