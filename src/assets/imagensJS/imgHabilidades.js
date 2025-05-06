import nest from "../nest.png";
import node from "../nodejs.png";
import typescript from "../typescript.png";
import jest from "../jest.png";
import prisma from "../prisma.svg";
import redis from "../redis.png";
import bull from "../bull.png";
import rabbit from "../rabbit.png";
import swagger from "../swagger.svg";
import mongodb from "../mongo.svg";

const imagensHabilidades = [
  {
    id: 1,
    imagem: nest,
    descricao: "NestJS",
    detalhe: "Experiência na construção de APIs escaláveis utilizando NestJS, seguindo os princípios de Clean Architecture, DDD (Domain-Driven Design) e boas práticas modernas de desenvolvimento backend.",
  },
  {
    id: 2,
    imagem: node,
    descricao: "Node.js",
    detalhe: "Desenvolvimento de aplicações backend utilizando Node.js, com foco em APIs performáticas, seguras e bem estruturadas, aplicando princípios de Clean Code, SOLID e arquitetura desacoplada.",
  },
  {
    id: 3,
    imagem: typescript,
    descricao: "TypeScript",
    detalhe: "aplicando boas práticas de tipagem estática, interfaces, generics e estruturação de código robusto e seguro. Utilizo o poder do TypeScript para garantir escalabilidade, legibilidade e redução de erros em tempo de desenvolvimento.",
  },
  {
    id: 4,
    imagem: prisma,
    descricao: "Prisma",
    detalhe: "Trabalhei com Prisma como ORM para banco de dados relacional, estruturando os schemas, lidando com migrations e configurando conexões de forma organizada. Utilizei seus recursos para manter o modelo de dados claro, com tipagem automática no TypeScript e facilidade nas consultas, ",
  },
  {
    id: 5,
    imagem: redis,
    descricao: "Redis",
    detalhe: "Tenho experiência com Redis, utilizando-o principalmente como cache e integração com filas utilizando Bull no NestJS. Em cenários de background processing, implementei tarefas assíncronas e agendadas para melhorar a performance e desacoplar operações do fluxo principal da API.",
  },
  {
    id: 6,
    imagem: bull,
    descricao: "Bull",
    detalhe: "Experiência prática com Bull no NestJS para gerenciamento de filas e execução de tarefas assíncronas. Programei atividades como envio de SMS e e-mails, exclusão automatizada de registros e criação temporária de administradores no banco de dados. Utilizei Bull para desacoplar tarefas críticas, garantindo maior performance, rastreabilidade e confiabilidade na aplicação. Também integrei o Bull Board para monitoramento visual das filas, facilitando o acompanhamento de jobs ativos, pendentes e com falhas.",
  },
  {
    id: 7,
    imagem: rabbit,
    descricao: "RabbitMQ",
    detalhe: "Experiência prática com RabbitMQ no NestJS para comunicação assíncrona entre microsserviços. Configurei a aplicação produtora para enviar mensagens a partir de eventos do domínio, utilizando ClientProxy e padrões como emit e send para garantir desacoplamento e escalabilidade. Na aplicação consumidora, implementei listeners com @EventPattern para processar os dados recebidos de forma robusta e rastreável. Utilizei RabbitMQ para transmitir informações entre APIs, como dados de agendamentos e notificações,",
  },
  {
    id: 8,
    imagem: mongodb,
    descricao: "MongoDB",
    detalhe: "Experiência prática com MongoDB no NestJS, utilizando Mongoose para modelagem de dados, definição de schemas e integração com a camada de domínio. Modelei coleções com decorators personalizados e implementei operações de leitura, escrita e atualização seguindo boas práticas de organização, consistência e rastreabilidade no código.",
  },
  {
    id: 9,
    imagem: jest,
    descricao: "Jest",
    detalhe: "Experiência prática com Jest no NestJS para implementação de testes unitários e estruturação de uma base sólida para testes end-to-end (e2e). Validei regras de negócio importantes com foco em qualidade, organização e manutenção do código. Apliquei boas práticas na escrita dos testes, utilizando o padrão Triple A (Arrange, Act, Assert).",
  },
  {
    id: 10,
    imagem: swagger,
    descricao: "Swagger",
    detalhe: "Experiência prática com Swagger no NestJS para documentação completa e estruturada das rotas da API. Documentei todos os endpoints com exemplos de requisições simples e complexas, destacando campos opcionais, obrigatórios e seus tipos. Também adicionei exemplos de respostas para diferentes cenários, como sucesso (200), erro de validação (400), recurso não encontrado (404) e mensagens personalizadas. Utilizei decorators personalizados para manter a documentação padronizada, legível e alinhada com as regras de negócio, facilitando a integração entre frontend e backend.",
  },

];

export default imagensHabilidades;
