<div style="background-color: rgba(99, 122, 156, 0.48); padding: 20px;">
<!-- <div style="background-color: rgba(2, 103, 255, 0.4); padding: 20px;"> -->

<img src="./src/assets/icons/readme-icons/Noozi Logo.png" alt="Noozi Logo" width="1000"/>
<!-- logo centralizada abaixo -->
<!-- <div style="text-align: center;">
  <img src="./src/assets/icons/readme-icons/Noozi Logo.png" alt="Noozi Logo" width="1000">
</div> -->

<!-- → -->

# **Noozi**

### 📝 Descrição:

O **Noozi** é uma aplicação web de gestão inteligente de estoque, idealizada em um **contexto acadêmico** para apoiar a transformação digital de **micro, pequenas e médias empresas (PMEs)**. Desenvolvido para solucionar dores graves como **ruptura de estoque**, **prejuízo por validade** e **divergência de dados** gerados por processos manuais, o sistema tem como grande diferencial a sua **intuitividade**. Atuando como um **Raio-X do Negócio**, nosso software oferece *métricas inteligentes* e coloca o controle do estoque na palma da mão do empreendedor, permitindo gerenciar tudo de forma ágil e dar baixa em produtos direto da prateleira ou de onde estiver.

Este repositório contém o código-fonte do **Frontend** da aplicação em sua fase de **Minimum Viable Product (MVP - Versão Closed Alpha)**. Construído com uma arquitetura modular moderna (*React* e *Vite*), o projeto foi projetado seguindo uma abordagem **Mobile-First** e desenvolvido como um **Progressive Web App (PWA)**, o que garante excelente usabilidade em dispositivos móveis e permite sua instalação como um aplicativo nativo. A estrutura foi planejada desde o início para **escalar progressivamente** e, nesta etapa inicial, a interface consome uma API simulada (JSON Server) para validar rapidamente os fluxos de telas e regras de negócio junto aos *stakeholders*, assegurando uma base técnica sólida antes do desenvolvimento do Backend definitivo e da modelagem do banco de dados em produção.

---

## Índice
- [1. Descrição](#-descrição)
- [2. Objetivo do Projeto](#-objetivo-do-projeto)
    - [2.1. Para o Negócio (Empreendedores e Gestores de PMEs)](#-para-o-negócio-empreendedores-e-gestores-de-pmes)
    - [2.2. Para a Equipe de Desenvolvimento (Aprendizado e Experiência de Mercado)](#-para-a-equipe-de-desenvolvimento-aprendizado-e-experiência-de-mercado)
- [3. Tecnologias e Ferramentas Utilizadas](#️-tecnologias-e-ferramentas-utilizadas)
- [4. Design de Interfaces e Prototipação](#-design-de-interfaces-e-prototipação-figma)
- [5. Responsividade](#-responsividade)
- [6. Gerenciamento do Projeto](#-gerenciamento-do-projeto-trello)
- [7. Metodologias adotadas no Projeto](#-metodologias-adotadas-ágeis)
- [8. Arquitetura do Projeto](#-arquitetura-do-projeto-frontend)
- [9. Funcionalidades Principais](#-funcionalidades-principais)
- [10. Dependências Necessárias](#-dependências-necessárias)
    - [10.1. Como Baixar e Utilizar o Repositório](#️-como-baixar-e-utilizar-o-repositório)
        - [10.1.1. Scripts Disponíveis](#scripts-disponíveis)
- [11. Status do Projeto](#-status-do-projeto)
    - [11.1. Em desenvolvimento ➜ Construção do MVP (v1.6.0)](#-em-desenvolvimento--️-construção-do-mvp-v160)

- [12. Demonstração do Software (Demo)](#-demonstração-do-software-demo)
- [13. Versionamento](#️-versionamento)
    - [13.1. Significado das versões](#-significado-das-versões)
    - [13.2. Objetivo do versionamento](#-objetivo-do-versionamento)
    - [13.3. Exemplos práticos](#-exemplos-práticos)
- [16. Colaboração](#-colaboração)
- [17. Documentação do Sistema](#-documentação-do-sistema)
- [18. Licença](#-licença)
- [18. Contato](#-contato)
<!-- - [Como baixar e utilizar o sistema](#️-como-baixar-e-utilizar-o-sistema) -->

---

## 🎯 Objetivo do Projeto

O principal objetivo do **Noozi** é desenvolver e implantar uma solução intuitiva e eficiente para o controle de estoque, focada especialmente nas necessidades de **PMEs**. A aplicação busca solucionar as ineficiências das ferramentas atuais (como cadernos e planilhas) utilizadas por nossos *stakeholders*, que frequentemente sofrem com a **ausência de tempo para gestão** e com a falta de **dados atualizados**.

Além do impacto direto para os empreendedores, o Noozi nasceu em um **contexto acadêmico** com um forte viés de evolução e vivência profissional. O projeto foi desenhado para escalar progressivamente, unindo a entrega de valor real ao mercado com o desenvolvimento técnico e interpessoal de toda a equipe.

Como um MVP, o foco atual desta etapa do projeto divide-se em duas frentes principais:

### 📈 Para o Negócio (Empreendedores e Gestores de PMEs)

* **Otimização da Organização:** Redução do retrabalho, do estoque parado e de perdas (como produtos vencidos), além da melhoria da rotina de reposição para evitar a ruptura de estoque;
* **Apoio Estratégico e Visibilidade:** Fornecer *dashboards* e relatórios inteligentes, com dados mais claros e confiáveis atualizados em tempo real, apoiando a tomada de decisão;
* **Gestão Completa e Mobilidade:** Garantir que o usuário consiga controlar o fluxo de entradas e saídas e gerenciar os dados dos seus produtos pelo celular, de forma ágil e direto da prateleira;
* **Eficiência Operacional:** Minimizar erros manuais, eliminar desperdícios e aumentar a produtividade do negócio, respeitando a falta de tempo do empreendedor para tarefas operacionais.

### 🚀 Para a Equipe de Desenvolvimento (Aprendizado e Experiência de Mercado)

* **Imersão Tecnológica:** Consolidar o aprendizado prático com tecnologias modernas de mercado (como *React*, *TypeScript*, *Vite* e *Tailwind*) e padrões robustos de arquitetura de software;
* **Experiência de Mercado e Stakeholders:** Desenvolver soft skills essenciais de comunicação e negociação, alinhando expectativas e validando requisitos diretamente com os stakeholders para atender às verdadeiras necessidades do mercado;
* **Cultura Ágil e Entrega de Valor:** Aplicar metodologias ágeis (*Scrumban*, *XP* e *Lean*) na prática, focando na eliminação de desperdícios, aprimoramento da colaboração, divisão de tarefas e gestão do ciclo de vida do produto;
* **Visão de Escalabilidade Progressiva:** Construir uma base sólida de MVP que suporte o crescimento incremental do sistema e futuras integrações mais complexas, sem a necessidade de refatorações estruturais.

---

### 🖥️ Tecnologias e Ferramentas Utilizadas
<!-- React -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="20" height="20"/> **[*React.js*](https://react.dev/)**

<!-- Vite -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="20" height="20"/> **[*Vite*](https://vite.dev/)**

<!-- TypeScript 6.0 -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="20" height="20"/> **[*TypeScript*](https://www.typescriptlang.org/)**

<!-- SWC (Rust-based Fast Compiler)
- <img src="./src/assets/icons/readme-icons/swc-icon.png" alt="SWC" width="20" height="20"/> **[*SWC*](https://swc.rs/)** (Compilador em Rust para builds rápidos) -->

<!-- Node.js -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="20" height="20"/> **[*Node.js*](https://nodejs.org/)**

<!-- HTML5 -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="20" height="20"/> **[*HTML5*](https://html.com/)**

<!-- CSS3 -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="20" height="20"/> **[*CSS3*](https://www.w3.org/Style/CSS/)**

<!-- Tailwind CSS -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="20" height="20" alt="Tailwind"/> **[*Tailwind CSS*](https://tailwindcss.com/)**

<!-- Lucide-react -->
- <img src="https://lucide.dev/logo.light.svg" alt="Lucide" width="20" height="20"/> **[*Lucide-react*](https://lucide.dev/)**

<!-- Shadcn/UI -->
- <img src="https://ui.shadcn.com/apple-touch-icon.png" alt="shadcn/ui" width="20" height="20"/> **[*Shadcn/UI*](https://ui.shadcn.com/)**

<!-- JSON Server -->
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" alt="JSON" width="20" height="20"/> **[*JSON Server*](https://my-json-server.typicode.com/)** (API fake para simulação de backend)

<!-- Git -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" width="20" height="20"/> **[*Git*](https://git-scm.com/)**

<!-- Github -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="20" height="20"/>  **[*GitHub*](https://github.com/)**

<!-- Figma -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="Figma" width="20" height="20"/> **[*Figma*](https://www.figma.com/)**

<!-- Trello -->
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-original.svg" alt="Trello" width="20" height="20"/> **[*Trello*](https://trello.com/)**

---

## 🎨 Design de Interfaces e Prototipação (Figma)

Todas as interfaces foram desenvolvidas e prototipadas no **[*Figma*](https://www.figma.com/)**, garantindo:
- Padronização visual;
- Melhor UX/UI;
- Redução de retrabalho;
- Fidelidade entre design e implementação;
- Interface construída com componentes reutilizáveis e escaláveis, garantindo consistência visual e facilidade de manutenção.

---

## 📱 Responsividade

O projeto é totalmente responsivo, garantindo boa experiência em Desktop, Tablet e Mobile.

> ℹ️ **Foco principal:** o sistema foi desenvolvido como um **aplicativo (PWA) voltado para mobile**.
> As demais resoluções são suportadas, mas o design e a experiência são otimizados para dispositivos móveis.

---

## 📋 Gerenciamento do Projeto (Trello)

O **[Trello](https://trello.com/)** foi utilizado para organizar e acompanhar o desenvolvimento do projeto, utilizando práticas de **Scrum** e **Kanban**, garantindo:
- Criação, organização e priorização do **Product Backlog**;
- Planejamento e acompanhamento das **sprints**;
- Visualização do fluxo de trabalho por meio do **quadro Kanban**;
- Distribuição de tarefas e acompanhamento do progresso;
- Melhor comunicação e transparência no desenvolvimento;
- Documentação, refinamento e acompanhamento dos **requisitos funcionais**.

---

## ⚡ Metodologias adotadas (Ágeis)

Durante o desenvolvimento deste projeto, adotamos *metodologias ágeis* para *otimizar o fluxo de trabalho*, *priorizar tarefas* e *entrega de valor*, além de *garantir a qualidade técnica*. Utilizamos o framework ***Scrumban***, uma abordagem híbrida entre **Scrum** e **Kanban**, incorporando também práticas de **XP (eXtreme Programming)** e princípios **Lean**.

- **Scrum** — Planejamento de sprints, acompanhamento de progresso, reuniões regulares de alinhamento, remoção de impedimentos, revisões e retrospectivas para aprendizado, ajustes de processos e evolução contínua do time;

- **Kanban** — Controle visual do fluxo de tarefas (*Workflow*), priorização e gerenciamento contínuo do trabalho em andamento para evitar gargalos;

- **XP (eXtreme Programming)** — Desenvolvimento baseado em Histórias do usuário, pair programming, integração contínua, feedback rápido, refatoração constante para assegurar a qualidade do código;

- **Lean** — Foco na maximização do valor entregue ao usuário e na eliminação de desperdícios no processo desperdícios durante todo o ciclo de desenvolvimento.


---

## 🧱 Arquitetura do Projeto (Frontend)

O desenvolvimento foi guiado pelo modelo **Component-Based (Modular)**, focado na separação de responsabilidades e na criação de um ecossistema de código escalável. A estrutura organiza o projeto em três pilares principais:

- **Camada de Apresentação (Components & Pages):** Focada na interface do usuário e na composição visual, garantindo que elementos como botões, modais e tabelas sejam altamente reutilizáveis e consistentes em todo o ecossistema do projeto;
- **Camada de Lógica e Estado (Hooks & Context):** Centraliza as regras de negócio e o gerenciamento de estados globais (como a autenticação), desacoplando a inteligência da aplicação da interface visual;
- **Camada de Dados e Utilidades (Services & Utils):** Responsável pela comunicação com APIs externas e pelo processamento de dados brutos através de funções auxiliares, garantindo um fluxo de dados limpo e previsível.
<!-- melhorar depois -->

Essa abordagem garante que o sistema seja de fácil manutenção, permitindo evoluções rápidas sem comprometer a estabilidade das funcionalidades existentes.

<details>
  <summary style="background-color: white; color: blue"><b>ℹ️ Clique para expandir a árvore de diretórios 📂 (estrutura de pastas)</b></summary>
  <br />

```bash
/
│
├── src/
│   │
│   ├── assets/        # Arquivos estáticos (imagens, ícones, fontes, logos)
│   ├── components/    # Componentes reutilizáveis da aplicação
│   ├── constants/     # Constantes fixas reutilizáveis
│   ├── contexts/      # Context API e estados globais compartilhados
│   ├── hooks/         # Custom Hooks reutilizáveis
│   ├── layouts/       # Layouts reutilizáveis (Sidebar, Navbar, estruturas)
│   ├── lib/           # Configurações, helpers e utilitários internos (shadcn, axios, etc.)
│   ├── mocks/         # Dados mockados e db.json
│   ├── pages/         # Páginas/telas do sistema
│   ├── routes/        # Configuração e gerenciamento de rotas
│   ├── services/      # Comunicação com APIs e regras de acesso a dados
│   ├── styles/        # Estilos globais, temas e customizações
│   ├── types/         # Tipagens globais e interfaces do TypeScript
│   ├── utils/         # Funções utilitárias e helpers genéricos
│   │
│   ├── App.tsx        # Componente principal da aplicação
│   └── main.tsx       # Ponto de entrada da aplicação React
│
├── .env.example       # Modelo das variáveis de ambiente necessárias para rodar o projeto
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── .nvmrc             # Versão do Node.js utilizada no projeto
├── CHANGELOG.md       # Histórico de mudanças e versões do projeto
├── components.json    # Configuração do shadcn/ui
├── CONTRIBUTING.md    # Guia de contribuição, padrões e fluxo de trabalho
├── eslint.config.js   # Configuração do ESLint
├── index.html         # HTML principal do Vite
├── LICENSE            # Licença de uso do projeto
├── package-lock.json  # Controle exato das dependências instaladas
├── package.json       # Configuração principal do projeto Node.js
├── postcss.config.js  # Configuração do PostCSS/Tailwind
├── README.md          # Documentação principal do projeto
├── tailwind.config.js # Configuração do Tailwind CSS
├── tsconfig.app.json  # Configuração TypeScript da aplicação frontend
├── tsconfig.json      # Configuração base do TypeScript
├── tsconfig.node.json # Configuração TypeScript do Node/Vite
└── vite.config.ts     # Configuração do Vite
```
</details>

<br>
ou
<br>
<br>

<details>
<summary style="background-color: white; color: blue"><b>ℹ️ Clique para expandir a explicação da arquitetura do projeto </b></summary>
  <br />
```
<!-- TO DO: add explicação específica de cada pasta do projeto -->
```
</details>

---

## ✨ Funcionalidades Principais
<!-- #### 🔒 Segurança e Controle de Acesso
- **Autenticação de Usuários:** Sistema de cadastro e login seguro para proteção das informações.
- **Recuperação de Senha:** Fluxo de redefinição de acesso via e-mail ou tokens de segurança, garantindo a autonomia do usuário.
- **Níveis de Permissão (RBAC):**
  - **Administrador:** Controle total do sistema, gestão de usuários e configurações globais.
  - **Operador:** Acesso restrito às ferramentas de gestão.

#### 📊 Interface de Monitoramento (BI)
- **Dashboard Gerencial:** Painel administrativo com visualização centralizada de métricas, facilitando a análise de dados e a tomada de decisão estratégica em tempo real.

#### ⚙️ Gestão de Entidades (CRUD)
O sistema oferece o gerenciamento completo (Criação, Consulta, Atualização e Exclusão) dos seguintes módulos: -->

<!--
---
## 🖥️ Como baixar e utilizar o Sistema:
1. Baixe o sistema em nosso site:
    - https://sites.google.com/view/ps-sports-frontend-project

2. Fazer um Tutorial 
3. #to-do
4. #to-do
5. #to-do
6. #to-do
7. #to-do

-->

----

## 📦 Dependências Necessárias

1. Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- **[Git](https://git-scm.com/)** — Controle de versão
    - Versão recomendada: [![Git](https://img.shields.io/badge/Git-2.30+-orange.svg)](https://git-scm.com/)

- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript
    - Versão recomendada: [![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/) *(Versão LTS — consulte o `.nvmrc` para a versão exata utilizada no projeto)*

- **[npm](https://www.npmjs.com/)** — Gerenciador de pacotes (instalado junto com o Node.js)
    - Versão recomendada: [![npm](https://img.shields.io/badge/npm-10.x+-red.svg)](https://www.npmjs.com/)

> ⚠️ **Nota:** 
As demais dependências são instaladas automaticamente ao seguir o [tutorial de como baixar e utilizar o repositório](#️-como-baixar-e-utilizar-o-repositório), via `npm install`, conforme definido no arquivo [package.json](https://github.com/LeonardoRDA1604/Noozi-Frontend/blob/main/package.json).

> ℹ️ As versões exatas podem ser consultadas [aqui](https://github.com/LeonardoRDA1604/Noozi-Frontend/blob/main/package.json).

2. Verifique a instalação.
Após instalar as dependências globais, verifique se estão disponíveis com os comandos:
```bash
git --version
```

```bash
node --version
```

```bash
npm --version
```

## ▶️ Como Baixar e Utilizar o Repositório:

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Para informações sobre como contribuir com o projeto, consulte a seção [Colaboração](#-colaboração).


1. Clone o repositório para sua máquina local.
```bash
git clone https://github.com/LeonardoRDA1604/Noozi-Frontend.git
```
- > ℹ️ Ou, se preferir, [baixe o projeto como arquivo .zip](https://github.com/LeonardoRDA1604/Noozi-Frontend/archive/refs/heads/main.zip) pelo [GitHub](https://github.com/LeonardoRDA1604/Noozi-Frontend).

2. Acesse a pasta do projeto.
```bash
cd ./Noozi-Frontend/
```

3. Instale todas as dependências do projeto com:
```bash
npm install
```

4. Configure as variáveis de ambiente
```bash
cp .env.example .env
```
- > ℹ️ Depois, edite o arquivo .env com os valores adequados

5. Execute o projeto (Frontend) com:
```bash
npm run dev
```
- > ℹ️ O projeto será executado em um endereço semelhante a: [http://localhost:5173](http://localhost:5173) (ou na porta definida no `.env`).

- > ⚠️ Nunca suba o arquivo `.env` para o repositório.

6. Para simular uma API local: Servidor fake (JSON Server)
    - **Em outro terminal** (cmd, powershell, git bash, etc.), execute: 
```bash
npm run server
```
- > ℹ️ O servidor será executado em um endereço semelhante a: [http://localhost:3001](http://localhost:3001)


### Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com Vite |
| `npm run build` | Verifica os tipos com TypeScript e gera o build de produção |
| `npm run type-check` | Verifica erros de tipagem TypeScript sem gerar arquivos |
| `npm run lint` | Executa o ESLint no projeto |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run server` | Inicia o servidor mock com json-server na porta 3001 |

---

## 🚧 Status do Projeto

#### 🟡 Em desenvolvimento ➜ 🏷️ Construção do MVP (v1.6.0)

Com a arquitetura base e o Design System (*Mobile-First*) plenamente estabelecidos, o projeto estruturou todo o seu ecossistema de navegação global, contando com componentes de *Sidebar*, *Footer* responsivo e um *Header* que realiza o redirecionamento dinâmico para a Home a partir do clique na logo. Atualmente, a aplicação possui **3 telas totalmente funcionais** integradas ao **módulo de produtos**. Isso inclui a listagem dinâmica em tabela responsiva com layout de cards flutuantes e *header sticky*, barra de pesquisa com acessibilidade aprimorada, modais reutilizáveis (incluindo fluxos de segurança com o modal de confirmação de exclusão), e uma tela de cadastro modular com *tooltips* e *helper texts*, com validações de *frontend* com *feedback* em tempo real. A aplicação conta com um **sistema avançado de filtros e ordenação** multicategoria e o **fluxo completo de CRUD**, integrados a uma API simulada (`json-server`). Na tela Home, a implementação de **indicadores-chave** e o **log interativo de atividades recentes** formam a base estrutural para o futuro *Dashboard*. O grande destaque atual é a implementação de um sistema nativo de **Dark Mode** (com persistência e suporte à preferência do SO) atrelado ao aprimoramento em **acessibilidade e estruturação semântica** (`role`, `aria-live`, `fieldset`) por toda a interface.

No momento, com as funcionalidades essenciais e o polimento de UI/UX concluídos, o foco da equipe está na mitigação de **débitos técnicos estruturais** para o fechamento pleno do MVP. As ações atuais envolvem a transição das últimas classes utilitárias legadas para os *Design Tokens* oficiais, planejamento de virtualização para listas extensas na tabela de produtos, e arquitetura de persistência de estado para filtros via *query params* da URL. Esse esforço contínuo visa consolidar a estabilidade e a usabilidade do MVP, preparando o terreno para a futura integração com o *Backend* definitivo.

---

## 🎬 Demonstração do Software (Demo)

Um *walkthrough* detalhado pelas funcionalidades da plataforma, destacando a interface responsiva, a fluidez da experiência do usuário (UX) e as regras de negócio aplicadas.
* [Assistir à Demo do Software](link-da-demo)
<!-- TO DO -->

---

## 🏷️ Versionamento

Este projeto segue o padrão [Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/) para controle de versões, garantindo clareza, previsibilidade e compatibilidade entre as mudanças. Todas as versões publicadas do projeto podem ser consultadas por meio das [*tags* do repositório](https://github.com/LeonardoRDA1604/Noozi-Frontend/tags), onde cada tag representa um marco importante na evolução do sistema, e todas as mudanças são registradas no [`CHANGELOG.md`](./CHANGELOG.md).

O versionamento utiliza o seguinte formato:
> `MAJOR.MINOR.PATCH`

#### 🔹 Significado das versões

| Tipo | Quando usar | Exemplo |
|------|-------------|---------|
| `MAJOR` | Alterações incompatíveis com versões anteriores (*breaking changes*) | `1.1.0` → `2.0.0` |
| `MINOR` | Novas funcionalidades adicionadas de forma retrocompatível, sem quebrar o que já existe | `1.0.1` → `1.1.0` |
| `PATCH` | Correções de bugs e pequenos ajustes que não afetam a compatibilidade nem o comportamento esperado | `1.0.0` → `1.0.1` |

#### 🔹 Objetivo do versionamento

- Melhor rastreabilidade da evolução do projeto;
- Identificação clara de mudanças relevantes;
- Facilidade na manutenção, colaboração e integração contínua.

#### 🔹 Exemplos práticos

**MAJOR** — o que justifica bump de versão maior:
- Redesign completo da interface ou navegação;
- Remoção de uma funcionalidade existente;
- Mudança na estrutura de rotas que quebra links existentes;
- Alteração no contrato de dados (ex: renomear ou remover campos).

**MINOR** — o que justifica bump de versão menor:
- Adição da tela de cadastro de produtos;
- Novo filtro por categoria no estoque;
- Exportação de relatório em CSV;
- Novo componente reutilizável adicionado ao projeto.

**PATCH** — o que justifica bump de versão de correção:
- Correção de validação incorreta no formulário;
- Ajuste de estilo fora da paleta oficial;
- Correção de cálculo de estoque mínimo;
- Correção de typo em mensagem de erro.

---

## 🤝 Colaboração
 >⚠️ **Nota:**   
 Para contribuir com o projeto, leia o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para obter detalhes sobre o nosso código de conduta e o processo de contribuição.

Após a leitura, sinta-se à vontade para abrir uma [*Issue*](https://github.com/LeonardoRDA1604/Noozi-Frontend/issues) ou enviar um [*Pull Request*](https://github.com/LeonardoRDA1604/Noozi-Frontend/pulls). 
Ideias, sugestões de melhorias e feedbacks são sempre bem-vindos!

1. Faça um fork do projeto.
2. Crie uma branch nos padrões descritos no [CONTRIBUTING.md](CONTRIBUTING.md).
3. Desenvolva sua contribuição.
4. Faça o commit das suas alterações.
5. Faça o push para a branch.
6. Com a contribuição concluída, abra um [*Pull Request*](https://github.com/LeonardoRDA1604/Noozi-Frontend/pulls).
<!-- - 1️⃣ Faça um fork do projeto.
- 2️⃣ Crie uma branch nos padrões descritos no [CONTRIBUTING.md](CONTRIBUTING.md).
- 3️⃣ Desenvolva sua contribuição.
- 4️⃣ Faça o commit das suas alterações.
- 5️⃣ Faça o push para a branch.
- 6️⃣ Com a contribuição concluída, abra um [*Pull Request*](https://github.com/LeonardoRDA1604/Noozi-Frontend/pulls). -->

<!-- Emojis de números e diversos
0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 4️⃣ | 5️⃣ | 6️⃣ | 7️⃣ | 8️⃣ | 9️⃣ | 🔟
➊ | ➋ | ➌ | ➍ | ➎ | ➏ | ➐ | ➑ | ➒ | ➓ | ⚠️ | ℹ️ | ▶️ | 🟡
-->

---

## 📖 Documentação do Sistema

A documentação detalhada dos requisitos, fluxos de interface e especificações técnicas do front-end está disponível para consulta externa e pode ser visualizada no documento através do link abaixo:
- [📄 Visualizar Documentação Técnica (PDF)](link-do-drive) <!-- to do, colocar link da documentação no drive -->

---

## 📄 Licença

Este projeto está sob a [Licença MIT](https://opensource.org/license/mit) - veja o arquivo [LICENSE](LICENSE) para detalhes.

[![License MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/license/mit)

---

## 📧 Contato

Para mais informações, entre em contato com o administrador do repositório pelo e-mail leonardo.rafael1604@gmail.com, ou via <a href="https://www.linkedin.com/in/leonardorafael1604/" target="_blank" rel="noopener noreferrer">Linkedin</a>.