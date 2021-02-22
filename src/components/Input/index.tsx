import React, {InputHTMLAttributes} from 'react';

import logoImg from '../asserts/tracking-track-svgrepo-com.svg'

import { 
    Container,
} from './styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({...rest}) => (
    <Container {...rest}/>

 );


export default Input;