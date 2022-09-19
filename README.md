<div id="top"></div>

## 🚩 Objetivo

Avaliar capacidade técnica do candidato(a) com as tecnologias requeridas pela vaga, tais
como uso do GIT, javascript e boas práticas e organização de código.

## 🔀 tomada de decisão 

Escolhi ultilizar duas aplicações diferentes para diferentes abordagens:
- Alura Pic: uma aplicação de ambiente controlado sem muita troca de informaçoes no back-end, interações com formulario e mensagens onde cada teste tem um ponto de origem em comum.

- Amazon: Site de varejo popular onde há muitas trocas de informação pelo banck-end e conexões podem variar tornando um ambiente de muitas variaveis na qual pode e irá interferir no teste aplicado seja pelo tempo de resposta ou conexão, metodo na qual tem um fluxo longo e sequencial para testar uma funcionalidade.

## 💻 Tecnologias utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Mocha](https://img.shields.io/badge/-mochawesome-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)


• **NodeJS** *(ambiente de execução Javascript)*
<br/>
• **NPM** *(Gerenciador de Pacotes)*
<br/>
• **JavaScript** *(linguagem de desenvolvimento)*
<br/>
• **Cypress** *(Ferramenta de teste)*
<br/>
• **Mochawesome** *(reporter  personalizado para estrutura de testes Javascript)*


## Alura Pic
<details><summary>🗒️ Documentação <sub> Aperte aqui para ver</sub></summary>

## 🧪 Ciclo de Teste:
<img  alt="Relatorio de teste AluraPic" width="700" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/AluraPic.png?raw=true">


## AluraPic - CT0001 Cadastro
<img  alt="AluraPic - CT0001 Cadastro" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/AluraPic-CT0001.gif?raw=true">

## AluraPic - CT0002 Login
<img  alt="AluraPic - CT0001 Cadastro" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/AluraPic-CT0002.gif?raw=true">


## relatório Mochawesome CT001 Cadastro:
![Mocha](https://img.shields.io/badge/-mochawesome-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
<br>
<img  alt="AluraPic - CT0001 Cadastro" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/CT001.png?raw=true">

## relatório Cypress CT001 Cadastro:
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
<br>
<img  alt="AluraPic - CT0001 Cadastro" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/Alura%20Pic%20CT001%20cadastro.png?raw=true">


## relatório Mochawesome CT002 Login:
![Mocha](https://img.shields.io/badge/-mochawesome-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
<br>
<img  alt="AluraPic - CT002 Login" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/CT002.png?raw=true">
<br>



## relatório Cypress CT002 Login:
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
<br>
<img  alt="AluraPic - CT002 Login" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/Alura%20Pic%20CT002%20Login.png?raw=true">
<br>

</details>

## Amazon 
<details><summary>🗒️ Documentação <sub> Aperte aqui para ver</sub></summary>

## 🧪 Ciclo de Teste:
<img  alt="Relatorio de teste Amazon" width="700" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/Amazon.png?raw=true">


## Amazon - CT0001 Carrinho de compra
<img  alt="AluraPic - CT0001 Cadastro" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/Amazon-CT0001.gif?raw=true">


## relatório Mochawesome CT001 Carrinho de Compra:
![Mocha](https://img.shields.io/badge/-mochawesome-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
<br>
<img  alt="Amazon - CT001 Carrinho de Compra" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/CT001%20Amazon.png?raw=true">
<br>

## relatório Cypress CT001 Carrinho de Compra:
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
<br>
<img  alt="Amazon - CT001 Carrinho de Compra" width="500" src="https://github.com/roodrigoomendes/NucleusEti/blob/main/assets/Amazon%20CT001%20carrinho%20de%20compra.png?raw=true">
<br>

</details>

## 📀 Clone para Execução

Clone este repositório para sua máquina local usando comando abaixo:

```
$ git clone https://github.com/roodrigoomendes/NucleusEti.git
```

### Execução na interface

Acessar a raiz do repositório
```
$ cd /{diretorio}/NucleusEti
```
Execute comando para instalar as dependências listadas na seção de `devDependencies` do arquivo `package.json`

```
npm install
```

Execute comando para abrir a UI do cypress
```
npx cypress open
```

Na UI do cypress
```
1. Clicar em E2E Testing
2. Clicar na opção Electron como browser

• Confirmar em Start E2E Testing in Electron

3. Selecionar qual teste deseja iniciar:

•AluraPic - CT0001 Cadastro.cy.js
•AluraPic - CT0002 Login.cy.js
•Amazon - CT0001 Carinho de Compra.cy.js

```

>### Execução modo headless 

Acessar a raiz do repositório
```
$ cd /{diretorio}/NucleusEti
```
Abrir o ```git bash```
Execute comando 
```
npx cypress run
```


## 💯 Autor

<img style="border-radius: 50%;" src="https://github.com/roodrigoomendes.png" width="100px" alt=""/><br>
<br />
Feito com ❤️ por Rodrigo Mendes 👋🏽 Entre em contato!
<br/>


 <a href="mailto:roodrigoomendessilva@gmail.com">![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a>
 <a href="https://www.linkedin.com/in/rodrigomendes-/" target="_blank">![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a> 

<p align="right">(<a href="#top">Voltar para o TOPO</a>)</p>
