import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {useRouter} from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer'

/* const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: contain;
background-position: center;
`; */





export default function Home() {
  const router = useRouter();
  console.log('submissao react');
  const [name,setName] = React.useState('');
  return(

  
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Destiny Quiz</title>
        </Head> 
      <QuizContainer>
        <Widget>
          <Widget.Header>
            O mundo de Destiny
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(event){
              event.preventDefault();


              router.push(`/quiz?name=${name}`)
          
          
    }}>
            
            <Input 
            name = "nomedoUsuario"
            onChange={(event)=> setName(event.target.value)}
              
            placeholder="Insira seu nome, guardião"
            value={name}/>
            

            <Button type= 'submit'disabled={name.length===0}>
              {`Jogar`}
            </Button>
            </form>
          </Widget.Content>
          
        </Widget>

        <Widget>
        <Widget.Header>
          Quizes da Comunidade
        </Widget.Header>
        <Widget.Content>
          vou ver e te aviso
        </Widget.Content>
        </Widget>

        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>

    
    

  ); 
}
