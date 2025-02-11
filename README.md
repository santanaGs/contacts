# Agenda Telefônica - React Native com Expo

Este é um aplicativo de **Agenda Telefônica** desenvolvido utilizando **React Native** com o **Expo**. O aplicativo permite que o usuário recupere e visualize todos os contatos armazenados no dispositivo, oferecendo uma interface simples e intuitiva para gerenciar os contatos.

## Funcionalidades

- Recupera e lista todos os contatos armazenados no dispositivo do usuário.
- Exibe informações essenciais dos contatos, como nome e número de telefone.
- Permite visualizar a agenda de contatos de maneira prática e fácil.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta que facilita o desenvolvimento e teste de aplicativos em React Native.
- **react-native-contacts**: Biblioteca para acessar os contatos armazenados no dispositivo.

## Pré-requisitos

Antes de começar, é necessário ter o seguinte instalado:

- **Node.js**: [Baixe e instale o Node.js](https://nodejs.org/)
- **Expo CLI**: Instale o Expo CLI globalmente através do comando:
  ```bash
  npm install -g expo-cli
  ```

## Instalação

1. Clone este repositório para o seu computador:
   ```bash
   git clone https://github.com/seu-usuario/agenda-telefonica.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd agenda-telefonica
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Instale a biblioteca de contatos para o React Native:
   ```bash
   expo install react-native-contacts
   ```

## Configuração de Permissões

O aplicativo requer permissões para acessar os contatos do dispositivo. No **Android**, você precisará garantir que a permissão foi solicitada adequadamente. O Expo trata as permissões de maneira simplificada, mas você pode precisar ajustar as permissões específicas no `app.json` se necessário.

No arquivo `app.json`, adicione as permissões necessárias:

```json
{
  "expo": {
    "android": {
      "permissions": [
        "READ_CONTACTS"
      ]
    }
  }
}
```

## Execução

1. Inicie o projeto com o comando:
   ```bash
   expo start
   ```

2. Utilize o **Expo Go** para escanear o QR code gerado no terminal e executar o aplicativo no seu dispositivo físico ou emulador.

## Como Funciona

- O aplicativo solicita permissão ao usuário para acessar os contatos do dispositivo.
- Uma vez que a permissão é concedida, o aplicativo recupera e lista todos os contatos, exibindo informações como nome e número de telefone.
- O usuário pode visualizar facilmente todos os contatos na interface do aplicativo.

## Screenshots

![Tela de Lista de Contatos](https://via.placeholder.com/300x500.png)

## Contribuição

Se você quiser contribuir para o projeto, sinta-se à vontade para fazer um fork deste repositório, criar uma branch, fazer suas alterações e enviar um pull request. Qualquer contribuição é bem-vinda!

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature ou correção (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adicionando nova feature'`).
4. Faça o push para a branch (`git push origin minha-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

