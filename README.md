# Tests e2e cypress

### Gerando relatórios
npx - executor de pacotes do npm
para executar os testes sem abrir a interface gráfica:
> npx cypress run 

pacote para gerar relatório dos testes:
> npm i -D mochawesome

é também necessário colocar as seguintes informações no arquivo cypress.json

    "reporter": "mochawesome",
    "reporterOptions": { 
        "reportDir": "cypress/report/mochawesome-report",
        "overwhite": "true",
        "html": "true",
        "json": "false",
        "timestamp": "mmddyyy_HHMMss"
     }  <br/>

a partir disso, quando rodar os testes, o comando é da seguinte forma:
> npx cypress run --reporter mochawesome

### Gerando Dashboard
recurso que conseguimos centralizar a execução dos testes e gerar dados analiticos de forma mais simples de analisar.

* é necessário criar uma conta no cypress
* vincular o projeto a essa conta
* para saber mais sobre [Mocha](https://mochajs.org/)

### comandos personalizados
Ao criar comandos personalizados, tem que fazer o import deste arquivo, na index.html na pasta suport

### Manipular dados sensíveis
* Criar variáveis de ambiente para guardar os dados como senha, informações de cartão de crédito e outros num arquivo separado como o cypress.env.json.
* Armazenar arquivos de dados sensíveis no .gitignore, para não integrar essas variáveis com ferramentas de integração contínua
* Incluir parâmetro { logs: false } na função que faz a digitação da senha, para não demonstrar na interface gráfica do Cypress o valor digitado.

### organizando os testes