import styled from 'styled-components';
import background from '../images/background.png';

const Container = styled.div`
   box-sizing: border-box;
   width: clamp(500px, 50vw, 50%);
   height: 100vh;
   margin: 0 auto;
   border: solid 1px black;
   display: flex;
   flex-direction: column;
`;

const Input = styled.div`
   display: flex;
   width: 100%;
`;

const InputNome = styled.input`
   width: 25%;
   height: 25px;
   border-radius: 5px;
   padding-left: 5px;
`;

const InputMensagem = styled.input`
   width: 75%;
   border-radius: 5px;
   padding-left: 5px;
`;

const Output = styled.div`
   width: 100%;
   height: 100%;
   background-image: url(${background});
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
`;

const OutputMensagem = styled.div`
   width: max-content;
   heigth: fit-content;
   padding: 5px;
   background-color: white;
   border: 1px solid;
   border-radius: 10px;
`;

export { Container, Input, InputMensagem, InputNome, Output, OutputMensagem };
