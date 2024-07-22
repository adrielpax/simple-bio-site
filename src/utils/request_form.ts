export const json = {
  "logoPosition": "right",
  "completedHtml": "<!DOCTYPE html><html lang=\"pt-BR\"><head>    <meta charset=\"UTF-8\">    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">    <title>Obrigado</title>    <style>        body, html {            height: 100%;            margin: auto;            display: flex;            justify-content: center;            align-items: center;            background-color: #f0f0f0;            font-family: Arial, sans-serif;        }        .container {            text-align: center;            display: flex;            flex-direction: column;            gap: 16px; /* Gap de 16px (equivalente a 4 no Tailwind) */        }        .button {            background-color: white; /* Fundo branco */            color: #1D4ED8; /* Texto azul */            padding: 15px 25px;            text-decoration: none;            font-size: 16px;            border: 2px solid #1D4ED8; /* Borda azul */            border-radius: 5px;            cursor: pointer;   width:250px;  margin:auto;      }        .button:hover {            background-color: #f0f0f0; /* Fundo levemente cinza no hover */        }    </style></head><body>    <div class=\"container\">        <h1>Obrigado por entrar em contato conosco!</h1>        <p>Entraremos em contato com você em breve. Enquanto isso, clique no botão abaixo para ir para o WhatsApp.</p>        <a class=\"button\" href=\"https://wa.me/seunumerodetelefone\">Ir para o WhatsApp</a>    </div></body></html>",
  "completedBeforeHtml": "<h3>Você Acabou de completar o formulario.</h3>",
  "loadingHtml": "<h3>Carregando Formulario...</h3>",
  "pages": [
    {
      "name": "costumerData",
      "elements": [
        {
          "type": "text",
          "name": "name",
          "title": "Como podemos te chamar ?",
          "description": "Escreva seu nome e sobrenome",
          "isRequired": true,
          "requiredErrorText": "Seu Nome é nescessario",
          "autocomplete": "name",
          "placeholder": "Ex: Adrian Silva"
        },
        {
          "type": "text",
          "name": "email",
          "title": "Qual seu E-mail de Contato ?",
          "description": "Adicione o seu melhor E-mail",
          "isRequired": true,
          "requiredErrorText": "Seu e-mail é necessário",
          "inputType": "email",
          "placeholder": "Ex: negocios@mail.com"
        },
        {
          "type": "text",
          "name": "phoneNumber",
          "title": "Deixe seu numero  para alinharmos ideias.",
          "description": "coloque seu numero de whatsApp completo.",
          "isRequired": true,
          "requiredErrorText": "Seu numero é necessário",
          "inputType": "tel",
          "placeholder": "Ex: 99 9999-9999"
        },
        {
          "type": "text",
          "name": "BussinesModel",
          "title": "Qual sua empresa ou o seu nicho de negocio ?",
          "description": "adicione seu nicho de negocio",
          "isRequired": true,
          "requiredErrorText": "Seu tipo de negocio é necessário ",
          "placeholder": "Ex: Pizzaria..."
        }
      ]
    },
    {
      "name": "serviceRequestly",
      "elements": [
        {
          "type": "radiogroup",
          "name": "requestService",
          "title": "Qual é o principal objetivo da sua empresa ao contratar nossos serviços  ?",
          "description": "Precisa de um site?, gerenciar suas redes sociais? gerenciar seus dados?",
          "isRequired": true,
          "choices": [
            {
              "value": "marketingConsult",
              "text": "Aumentar as vendas"
            },
            {
              "value": "branding",
              "text": "Melhorar a presença online"
            },
            {
              "value": "socialMedia",
              "text": "Aumentar o engajamento nas redes sociais"
            },
            {
              "value": "dataAnalist",
              "text": "Melhorar minha analise de dados"
            },
            {
              "value": "webDevelopment",
              "text": "Preciso de um site"
            }
          ],
          "showOtherItem": true,
          "otherText": "Outros (Descreva)"
        }
      ]
    },
    {
      "name": "webDevelopment",
      "visibleIf": "{requestService} = 'webDevelopment'",
      "elements": [
        {
          "type": "radiogroup",
          "name": "typeService",
          "title": "Você está interessado em um site desenvolvido em:",
          "isRequired": true,
          "choices": [
            {
              "value": "react",
              "text": "React"
            },
            {
              "value": "wordpress",
              "text": "Wordpress"
            }
          ],
          "showOtherItem": true,
          "otherText": "Customizado"
        },
        {
          "type": "radiogroup",
          "name": "productService",
          "title": "Qual é a principal funcionalidade que você deseja no seu site ?",
          "isRequired": true,
          "choices": [
            {
              "value": "ecommerce",
              "text": "Loja Online"
            },
            {
              "value": "blog",
              "text": "Blog"
            },
            {
              "value": "portifolio",
              "text": "Portifolio"
            },
            {
              "value": "landingPage",
              "text": "Landing Page"
            }
          ],
          "showOtherItem": true,
          "otherText": "Outro (descreva)"
        },
        {
          "type": "comment",
          "name": "custumerBenefits",
          "title": "Como você imagina que um site bem projetado pode impactar o seu negócio?",
          "description": "(Opicional)"
        }
      ]
    }
  ],
  "cookieName": "sendedForm",
  "sendResultOnPageNext": true,
  "showProgressBar": "aboveheader",
  "pagePrevText": "Pagina Anterior",
  "pageNextText": "Proximo",
  "completeText": "Enviar Formulario",
  "questionsOnPageMode": "questionPerPage"
}