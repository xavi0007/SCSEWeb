import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonSize} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};


export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size : 1.4rem;
  background: transparent;
  border: 0.1rem solid var(--lightColor);
  border-color:var(--mainYellow);
  color:var(--mainYellow);
  border-radius: 0.5rem;
  padding:0.2rem 0.5rem;
  cursor:pointer;
  margin:0.2rem 0.5rem;
  transition:all 0.5s ease-in-out;
&:hover{
  background:var(--lightColor);
  color:var(--mainWhite);
}
&:focus{
  outline: none;
}
`;