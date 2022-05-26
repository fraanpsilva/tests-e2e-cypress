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