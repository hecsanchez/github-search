import React from 'react';
import { FormTheme } from './Form.styled';
import PropTypes from 'prop-types';

export const Form = ({children})=>{

  return (
    <FormTheme>{children}</FormTheme>
  );

};