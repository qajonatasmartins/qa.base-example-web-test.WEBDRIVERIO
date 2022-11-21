# 4alltesters_webdriverIO_23062022

![Pipeline](https://github.com/qajonatasmartins/qa.base-example-web-test.WEBDRIVERIO/workflows/Pipeline/badge.svg)

**E ai QA, Bugou?**

>> Aqui quem fala é o @qajonatasmartins e esse projeto é para ensinar a como criar um projeto base de automação de testes com o WebdriverIO, segue abaixo o tutorial para criar do zero o projeto.

## Pré-requisitos

Você precisará de Node.js instalado.

Instale pelo menos v12.16.1 ou superior, pois esta é a versão LTS ativa mais antiga

## Como criar um projeto do zero com WebdriverIO

1. Passo: Crie uma pasta para criar o projeto do zero com WebdriverIO
2. Passo: Abra o terminal e no diretório criado
3. Passo: Execute o comando `npm init wdio .`
4. Passo: Após o 'WDIO CLI Wizard...' do WebdriverIO ser iniciado, o wizard de configurações faz uma serie de perguntas para você criar o projeto.
   1. >> Where is your automation backend located? (Onde está localizado seu back-end de automação?)
      1. [x] **On my local machine (Na minha máquina local)**
      2. [ ] In the cloud using Experitest (Na nuvem usando o Experitest)
      3. [ ] In the cloud using Sauce Labs (Na nuvem usando o Sauce Labs)
      4. [ ] In the cloud using Browserstack or Testingbot or LambdaTest or a different service (Na nuvem usando Browserstack ou Testingbot ou LambdaTest ou um serviço diferente)
      5. [ ] I have my own Selenium cloud (Eu tenho minha própria nuvem de Selenium)
   2. >> Which framework do you want to use? (Qual framework você quer usar?)
      1. [x] **mocha**
      2. [ ] jasmine
      3. [ ] cucumber
   3. >> Do you want to use a compiler? (Você quer usar um compilador?)
       1. [x] **Babel (https://babeljs.io/)**
       2. [ ] TypeScript (https://www.typescriptlang.org/)
       3. [ ] No!
   4. >> Where are your test specs located? (Onde estão localizadas suas especificações de teste?)
      1. **Clique [ENTER]**
   5. >> Do you want WebdriverIO to autogenerate some test files? (Deseja que o WebdriverIO gere automaticamente alguns arquivos de teste?)
      1. **Informe a letra "Y" e clique [ENTER]**
   6. >> Do you want to use page objects? (Deseja usar objetos de página?)
      1. **Informe a letra 'Y' e clique [ENTER]**
   7. >> Where are your page objects located? (Onde estão localizados seus objetos de página?)
      1. **Clique [ENTER]**
   8. >> Which reporter do you want to use? (Press [space] to select, [a] to toggle all, [i] to invert selection, and [enter] to proceed (Qual repórter você quer usar? (Pressione [espaço] para selecionar, [a] para alternar tudo, [i] para inverter a seleção e [enter] para continuar))
      1. **Clique [ENTER]**
   9. >> Do you want to add a plugin to your test setup? (Press [space] to select, [a] to toggle all, [i] to invert selection, and [enter] to proceed) (Deseja adicionar um plug-in à sua configuração de teste? (Pressione [espaço] para selecionar, [a] para alternar tudo, [i] para inverter a seleção e [enter] para continuar))
      1. **Clique [ENTER]**
   10. Do you want to add a service to your test setup? (Press [space] to select, [a] to toggle all, [i] to invert selection, and [enter] to proceed) (Deseja adicionar um serviço à sua configuração de teste? (Pressione [espaço] para selecionar, [a] para alternar tudo, [i] para inverter a seleção e [enter] para continuar))
       1. **Clique [ENTER]**
   11. >> What is the base url? (http://localhost) (Qual é o URL básico? (http://localhost))
       1. **Clique [ENTER]**
   12. >> Do you want me to run `npm install` (Y/n) (Você quer que eu execute `npm install` (S/n))
       1. **Informe a letra "Y"**
   13. Execute no terminal o seu teste base criado pelo WebdriverIO com o comando `npm run wdio`

# **Intalação das dependências do projeto**

npm install

# **Frameworks**

- **webdriverIO**: Framework utilizado para realizar as automações mobile e web utilizando a linguagem Java Script;

# **Libs**

- **superagent**: O Superagent é uma lib para prover as integrações com API;
- **moment**: Moment é lib para prover manipulações de datas/horas;
- **pg**: Pg é uma lib para prover conexão com banco de dados postgres;
- **eslit**: ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript;
- **allure**: O Allure é uma lib para prover relatórios de execução de testes.

# **Padrão dos nomes de Branchs**

## Nova funcionalidade

feature/Ticket

**Exemplo:** feature/TS-0000

## Bug

fix/Ticket

**Exemplo:** fix/TS-0000

## **Padrão de commit**

**Sumary:** Título breve da modificação
**Autor:** Seu Nome
**Data:** DIA/MES/ANO
**Ticket:** Número do Ticket (TS-XXXX)
**Descrição:** O que foi alterado no commit

## **Padrão de nomenclatura de elementos e métodos**

### Padrão de nomenclatura de elementos

- **Botão**: btn + nomeElemento
- **Campos**: inp + nomeElemento
- **Titúlos, nomes de campos e etc**: lbl + nomeElemento
- **link**: lnk + nomeElemento
- **Abas**: tab + nomeElemento
- **Combobox/Dropdownlist**: ddl + nomeElemento
- **Checkbox**: check + nomeElemento

### Padrão de nomenclatura de métodos

ação + nomeElemento

**Exemplo**: clickBtnEnter()

## Para rodar esse projeto

### Comando para executar em modo device

ENV=STAGING npm run local_device_chrome_android

ENV=STAGING npm run local_device_chrome_android_login

ENV=STAGING npm run local_device_chrome_ios

ENV=STAGING npm run local_device_chrome_ios_login

### Comando para executar no navegador

ENV=STAGING npm run local_chrome

ENV=STAGING npm run local_chrome_login

ENV=STAGING npm run local_chrome_login

ENV=STAGING npm run local_edge

ENV=STAGING npm run local_edge_login

ENV=STAGING npm run local_firefox

ENV=STAGING npm run local_firefox_login

ENV=STAGING npm run local_parallel

ENV=STAGING npm run local_parallel_login

### Comando para executar no navegador do browserstack

ENV=STAGING npm run browserstack_chrome

ENV=STAGING npm run browserstack_chrome_login

ENV=STAGING npm run browserstack_edge

ENV=STAGING npm run browserstack_edge_login

ENV=STAGING npm run browserstack_firefox

ENV=STAGING npm run browserstack_firefox_login

ENV=STAGING npm run browserstack_parallel

ENV=STAGING npm run allure_browserstack_parallel

## Executando o relatório

npm run allure_local_chrome

npm run allure_local_edge

npm run allure_local_firefox

npm run allure_local_parallel

npm run allure_local_device_chrome_android

npm run allure_local_device_chrome_ios

npm run allure_browserstack_chrome

npm run allure_browserstack_firefox

npm run allure_browserstack_parallel

## Executar o mode debug REPL

npm run repl

## Me siga nas redes sociais para mais conteúdos de tecnologia

> @QAJONATASMARTINS
> - Youtube: https://bit.ly/31SumOs
> - TikTok: https://www.tiktok.com/@qajonatasmartins
> - Linkedin: https://www.linkedin.com/in/jonatasmfaria/
> - Instagram: https://www.instagram.com/qajonatasmartins/