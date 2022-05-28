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

   enterKeyPress = (e) => (e.code === 'Enter' ? this.onSend() : null);

   onSend = () => {
      if (!this.state.user || !this.state.text) return;

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

   onDelete = (id) => {
      const allMessages = [...this.state.messages];

      const newMessages = allMessages.filter((msgs, index) => index !== id);

      this.setState({ messages: newMessages });
   };

   render() {
      const messagesToRender = this.state.messages.map((message, index) => {
         const user = message.user.toLowerCase();
         if (user === 'eu') {
            return (
               <OutputMessage
                  onDoubleClick={() => this.onDelete(index)}
                  user={'eu'}
                  key={index}
               >
                  {message.text}
               </OutputMessage>
            );
         } else {
            return (
               <OutputMessage
                  onDoubleClick={() => this.onDelete(index)}
                  key={index}
               >
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
