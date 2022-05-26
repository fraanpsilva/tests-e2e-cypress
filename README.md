# Tests e2e cypress

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
