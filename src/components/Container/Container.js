import React from 'react';
import { ContainerTheme } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({children})=>{

  return (
    <ContainerTheme>{ children }</ContainerTheme>
  );

};