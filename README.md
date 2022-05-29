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

### Flaky Test
* são testes sensíveis, teste intermitente.
* acontece porque o mesmo código apresenta resultados de falha e sucesso, sem que haja nenhuma alteração.

Algumas dicas que podem ser úteis para evitar os flaky tests:
1 - Se a falha for por diferença de tempo nos diversos ambientes, considere colocar pontos de espera, orientado a algum evento e não com tempo fixo;

2 - Verificar se as variáveis de ambiente estão configuradas corretamente para cada tipo de ambiente onde o teste será executado;

3 - Verificar se a ferramenta de teste automatizado que você está usando dá suporte a rerun ou reteste, que é um recurso que permite que a ferramenta rode novamente o teste em caso de falha, para verificar se numa segunda tentativa vai dar certo. Isso é normalmente configurável por teste;

4 - Se for alguma situação de teste que compare data ou hora, tente usar alguma constante para retornar esse valor e não depender da hora/data real do ambiente, que pode estar diferente;

5 - Caso seja algum teste que faz uma chamada a alguma API externa ou de terceiros, considere usar um mock para ter um controle melhor sobre a resposta que será devolvida.


Flaky tests não devem estar na suite de testes. Se não for possível corrigi-lo, considere remover o teste ou pensar em outra alternativa para verificar esse resultado.