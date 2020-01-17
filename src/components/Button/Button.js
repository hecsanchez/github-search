import React from 'react';
import { ButtonTheme } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({children, ...rest})=>{

  return (
    <ButtonTheme {...rest}>{ children }</ButtonTheme>
  );

};