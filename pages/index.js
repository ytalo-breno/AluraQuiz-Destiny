import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {useRouter} from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';


/* const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: contain;
background-position: center;
`; */

export const QuizContainer = styled.div`
width:100%;
max-width:350px;
padding-top:45px;
margin: auto 10%;
@media screen and (max-width:500px){
  margin:auto;
  padding: 15px;
}
`;



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
            
            <input 
            onChange={function(){
              setName(event.target.value)
              console.log(event.target.value);
            }}
            placeholder="Insira seu nome, guardião"/>

            <Widget.Button type= 'submit'disabled={name.length===0}>
              Jogar
            </Widget.Button>
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
