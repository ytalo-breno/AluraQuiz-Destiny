import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'

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
  return(
    <QuizBackground backgroundImage={db.bg}> 
      <QuizContainer>
        <Widget>
          <h1>
            O mundo de Destiny
          </h1>
          <p>
            ad astra.....
          </p>
        </Widget>

        <Widget>
        <h1>
          Quizes da Comunidade
        </h1>
        <p>
          vou ver e te aviso
        </p>
        </Widget>

        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>

    
    

  ); 
}
