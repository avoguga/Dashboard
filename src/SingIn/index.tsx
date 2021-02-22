import React, {useState} from 'react';

import logoImg from '../asserts/tracking-track-svgrepo-com.svg'

import Button from '../components/Button'
import Input from '../components/Input'

import {useAuth} from '../hooks/auth'

import { 
    Container,
    Logo,
    Form,
    FormTitle
} from './styles';


const SingIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {signIn} = useAuth();
    return (
        <Container>
           <Logo>
               <img src={logoImg} alt="Tracking"/>
               <h2>Tracking Trade</h2>
           </Logo>
           <Form onSubmit={()=> signIn(email, password)}> 
                <FormTitle>Entrar</FormTitle>
                <Input
                type="email"
                placeholder="E-mail"
                required
                onChange={(e)=> setEmail(e.target.value)}
                />
                <Input
                type="password"
                placeholder="Senha"
                required
                onChange={(e)=> setPassword(e.target.value)}
                />
                <Button type="submit">Acessar</Button>

           </Form>
        </Container>
    );
}

export default SingIn;