import React from 'react';
import {
   Container,
   Input,
   InputMensagem,
   InputNome,
   Output,
   OutputMensagem,
} from './style.js';

export class Tela extends React.Component {
   state = {
      mensagens: [],
      usuario: '',
      texto: '',
   };

   onChangeName = (event) => {
      this.setState({ usuario: event.target.value });
   };

   onChangeMessage = (event) => {
      this.setState({ texto: event.target.value });
   };

   onSend = () => {
      if (this.state.usuario.length === 0 || this.state.texto.length === 0)
         return;

      const msgs = [
         ...this.state.mensagens,
         {
            usuario: this.state.usuario,
            texto: this.state.texto,
         },
      ];
      this.setState({ mensagens: msgs });
      this.setState({ usuario: '' });
      this.setState({ texto: '' });
   };

   enterKeyPress = (e) => {
      if (e.code === 'Enter') this.onSend();
   };

   render() {
      return (
         <Container>
            <Output>
               {this.state.mensagens.map((mensagem, indice) => {
                  return (
                     <OutputMensagem key={indice}>
                        <strong>{mensagem.usuario}: </strong>
                        {mensagem.texto}
                     </OutputMensagem>
                  );
               })}
            </Output>

            <Input>
               <InputNome
                  type='text'
                  placeholder='Nome'
                  onChange={this.onChangeName}
                  value={this.state.usuario}
               />

               <InputMensagem
                  type='text'
                  placeholder='Mensagem'
                  onChange={this.onChangeMessage}
                  value={this.state.texto}
                  onKeyPress={this.enterKeyPress}
               />

               <button onClick={this.onSend} onKeyPress={this.enterKeyPress}>
                  Enviar
               </button>
            </Input>
         </Container>
      );
   }
}
