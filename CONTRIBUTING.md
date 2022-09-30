<h1 align="center">
📼<br>Contribuição no MusicTape
</h1>

<p align="center">
<img src="https://github.com/UlissesJunior/MusicTape/raw/main/src/assets/img/readme/tostudy.png">
<p>


---

- Entre no seu compilador e execute o comando: 
```git clone https://github.com/UlissesJunior/MusicTape.git```
- Abra a pasta clonada e execute no terminal:
```npm i vite ```
- Baixe a extensão do VS Code para compilar o SCSS:  [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
- Vá nos arquivos  [Sidebar](https://github.com/UlissesJunior/MusicTape/blob/main/src/components/Sidebar/index.jsx) e [Music](https://github.com/UlissesJunior/MusicTape/blob/main/src/pages/Music.jsx) e comente a seguinte linha:
```import  {  supabase  }  from  "../client/supabaseClient"; ```
- Execute o comando no terminal:
```npm start ```
- Defina o nome do seu tema no arquivo  [_themes.scss](https://github.com/UlissesJunior/MusicTape/blob/main/src/assets/styles/_themes.scss)
Exemplo: ```#nomedoseutema {
}```
- Clique no botão ```Watch SASS``` localizado no canto inferior direito
- Faça suas alterações e acompanhe elas em tempo real no link: ```http://localhost:3000/nomedoseutema``` <br/> Obs: Se você utilizar de uma imagem local para o background do seu tema, coloque ela em um prefetch no arquivo  [index.html](https://github.com/UlissesJunior/MusicTape/blob/main/index.html)
- Volte aos arquivos  [Sidebar](https://github.com/UlissesJunior/MusicTape/blob/main/src/components/Sidebar/index.jsx) e [Music](https://github.com/UlissesJunior/MusicTape/blob/main/src/pages/Music.jsx) e tire o comentário da linha:
```import  {  supabase  }  from  "../client/supabaseClient"; ```
-   Altere o  [README](https://github.com/UlissesJunior/MusicTape/blob/main/README.md)  na seção  [Temas](https://github.com/UlissesJunior/MusicTape#temas)  e adicione no padrão:

```
<h3>Nome do Tema</h3>
<p>Descrição do tema</p>
<img src=""> //Imagem do Tema
<h5> Made By: <a href="https://github.com/NomeDoUsuario">Nome do Usuário</a> </h5>

```
- Faça o Fork do projeto
- Suba para seu repositório forkado
- Envie um pull request para a branch main, documentando suas alterações e com o seu email para contato.

Finalizado essa etapa, você já contribuiu com o projeto!  😉 
Agora é só esperar eu te enviar o client no seu email.