import React, {ButtonHTMLAttributes} from 'react';

import logoImg from '../asserts/tracking-track-svgrepo-com.svg'

import { 
    Container,
} from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({...rest}) => (
   <Container {...rest}></Container>

 );


export default Button;