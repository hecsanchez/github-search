import React from 'react';
import { AlertTheme } from './Alert.styled';
import PropTypes from 'prop-types';

export const Alert = ({ error })=>{
    const getMessage = (error) => {
        switch(error) {
            case 404:
                return "Oops! We didn't find that user";
            case 500:
                return "Oops! Looks like something wen't wrong, please try again"
            default:
                return;
        }
    }
  return (
    <AlertTheme>{getMessage(error)}</AlertTheme>
  );

};