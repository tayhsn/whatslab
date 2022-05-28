import styled from 'styled-components';
import background from '../images/background.png';

const Container = styled.div`
   box-sizing: border-box;
   width: clamp(500px, 50vw, 700px);
   height: 100vh;
   margin: 0 auto;
   border: solid 1px black;
   display: flex;
   flex-direction: column;
   background-image: url(${background});
`;

const Input = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-around;
   margin-bottom: 0.6em;
`;

const InputUser = styled.input`
   width: 20%;
   border: none;
   border-radius: 5px;
   padding-left: 5px;
`;

const InputMessage = styled.input`
   width: 60%;
   border-radius: 5px;
   padding-left: 5px;
   border: none;
`;

const Button = styled.button`
   width: 10%;
   padding: 0.5em;
   border: none;
   border-radius: 5px;
   background-color: rgb(50, 205, 50, 0.9);
   cursor: pointer;
`;

const Output = styled.div`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
`;

const OutputUser = styled.div`
   color: #008000;
   font-size: 1em;
   font-weight: 600;
   margin-bottom: 0.2em;
`;

const OutputMessage = styled.div`
   max-width: 60%;
   min-width: 10%;
   heigth: fit-content;
   padding: 10px;
   margin-bottom: 1em;
   border-style: none;
   border-radius: 0.5em;
   line-height: 1.3;
   font-weight: 450;
   box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
   word-wrap: break-word;

   background-color: ${(props) =>
      props.user === 'eu' ? '#DDF7C8' : '#ffffff'};

   align-self: ${(props) => (props.user === 'eu' ? 'flex-end' : 'flex-start')};

   margin-right: ${(props) => (props.user === 'eu' ? '1em' : '')};

   margin-left: ${(props) => (props.user !== 'eu' ? '1em' : '')};

   position: relative;
   &:after {
      content: '';
      border: 15px solid transparent;
      border-top-color: ${(props) =>
         props.user === 'eu' ? '#DDF7C8' : '#ffffff'};

      position: absolute;
      top: 0px;
      right: ${(props) => (props.user === 'eu' ? '-8px' : '')};
      left: ${(props) => (props.user !== 'eu' ? '-8px' : '')};
   }
`;

export {
   Container,
   Input,
   InputMessage,
   InputUser,
   Button,
   Output,
   OutputUser,
   OutputMessage,
};
