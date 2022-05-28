import React from 'react';
import { IoSendSharp } from 'react-icons/io5';
import {
   Container,
   Input,
   InputMessage,
   InputUser,
   Button,
   Output,
   OutputUser,
   OutputMessage,
} from './style.js';

export class Tela extends React.Component {
   state = {
      messages: [],
      user: '',
      text: '',
   };

   onChangeUser = (event) => {
      this.setState({ user: event.target.value });
   };

   onChangeMessage = (event) => {
      this.setState({ text: event.target.value });
   };

   onSend = () => {
      if (this.state.user.length === 0 || this.state.text.length === 0) return;

      const msgs = [
         ...this.state.messages,
         {
            user: this.state.user,
            text: this.state.text,
         },
      ];
      this.setState({ messages: msgs });
      this.setState({ user: '' });
      this.setState({ text: '' });
   };

   enterKeyPress = (e) => {
      if (e.code === 'Enter') this.onSend();
   };

   render() {
      const messagesToRender = this.state.messages.map((message, index) => {
         const name = message.user.toLowerCase();
         if (name === 'eu') {
            return (
               <OutputMessage user={'eu'} key={index}>
                  {message.text}
               </OutputMessage>
            );
         } else {
            return (
               <OutputMessage key={index}>
                  <OutputUser>{message.user}</OutputUser>
                  {message.text}
               </OutputMessage>
            );
         }
      });

      return (
         <Container>
            <Output>{messagesToRender}</Output>

            <Input>
               <InputUser
                  type='text'
                  placeholder='Nome'
                  onChange={this.onChangeUser}
                  value={this.state.user}
               />

               <InputMessage
                  type='text'
                  placeholder='Mensagem'
                  onChange={this.onChangeMessage}
                  value={this.state.text}
                  onKeyPress={this.enterKeyPress}
               />

               <Button onClick={this.onSend} onKeyPress={this.enterKeyPress}>
                  <IoSendSharp size={26} color='#ffffff' />
               </Button>
            </Input>
         </Container>
      );
   }
}
