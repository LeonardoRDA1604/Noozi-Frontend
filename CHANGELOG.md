# 📜 Changelog
Todas as mudanças relevantes do projeto serão documentadas neste arquivo.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/), seguindo [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## 📌 Convenções

- ✨ Adicionado → novas funcionalidades
- 🎨 Melhorado → melhorias visuais/UX
- 🔧 Alterado → mudanças estruturais/configuração
- 🐛 Corrigido → correções de bugs

---

## 📚 Índice
- [1. Convenções](#-convenções)
- [2. Unreleased](#-unreleased)
- [3. Versões](#️-versões)
    - [[1.0.0] - 2026-05-13](#100---2026-05-13)
    - [[1.1.0] - 2026-05-13](#110---2026-05-13)
    - [[1.2.0] - 2026-05-18](#120---2026-05-18)

---

## 🚧 [Unreleased]
> Funcionalidades em desenvolvimento ainda não lançadas.

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de funcionalidades ainda em desenvolvimento para as próximas versões</b></summary>
  <br />

### ✨ Adicionar
- Criação da Sidebar Menu
- Implementação dos componentes da tela Home
- Criação dos formulários de cadastro de novo produto
- Implementação da Searchbar da tela de produtos
- Implementação do botão de filtros da listagem de produtos
- Implementação do organizador/ordenador da tela de produtos
- Implementação da Dashboard Screen e seus componentes
- Criação do `db.json` com dados mockados

---

### 🎨 Melhorar
- Rework visual e estrutural do Header
- Rework visual e estrutural do Footer

</details>

---

## 🏷️ Versões
### [1.0.0] - 2026-05-13

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.0.0]</b></summary>
  <br />

#### ✨ Adicionado
- Estrutura inicial do frontend com React + TypeScript + Vite
- Configuração do Tailwind CSS
- Integração do shadcn/ui
- Integração do Lucide React
- Configuração inicial do React Router DOM
- Estrutura modular de pastas (Arquitetura Component-based)
- Implementação do Header e Footer (versão inicial sem polimento)
- Adição da logo oficial do Noozi
- Criação das páginas:
  - Home
  - Products
  - NewProduct
- Implementação do componente reutilizável `metrics-card`
- Navegação e suporte a modal via `onTitleClick`
- Configuração inicial do Git Flow
- Documentação inicial do projeto
- Criação do CONTRIBUTING.md

---

#### 🎨 Melhorado
- Melhorias visuais no dashboard de métricas
- Ajustes de responsividade
- Auto resize global via `index.css`
- Melhorias na experiência visual do Footer

---

#### 🔧 Alterado
- Remoção da configuração SWC
- Atualização da documentação do README
- Atualização das regras de contribuição

---

#### 🐛 Corrigido
- Correções de responsividade no Footer
- Correções de hover e comportamento visual
- Correção da configuração depreciada `baseUrl`
- Ajustes de configuração do TypeScript

---

</details>

---

### [1.1.0] - 2026-05-13

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.1.0]</b></summary>
  <br />

#### ✨ Adicionado
- Design System completo no `tailwind.config.js`:
  - Paleta de cores da marca (`noozi-*`, `status-*`) com escala de cinza
  - Hierarquia tipográfica com Geist, DM Sans e Poppins (`font-sans`, `font-display`, `font-mono`)
  - Tokens de borda, sombra e espaçamento
  - Breakpoints mobile-first (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`)
- Estilos globais de base no `src/index.css` com import da fonte Geist via `@fontsource-variable/geist`
- `AppLayout` em `src/layouts/AppLayout/` como wrapper global de todas as rotas via `Outlet`
- `Header` fixo com hamburguer (abre sidebar) e sino de notificações
- `Footer` de navegação exclusivo para mobile e tablet (`lg:hidden`) com highlight da rota ativa
- `Sidebar` drawer com overlay, animação de slide e navegação completa
- Itens de navegação centralizados em `src/constants/navigation.ts`
- Tipo `NavItem` em `src/types/Navigation.types.ts`
- Páginas de Dashboard (`/dashboard`) e Perfil (`/profile`)
- Documentação inline no componente `MetricsCard`
- Seções de Design System, UX/UI e Acessibilidade no `CONTRIBUTING.md`
- `CHANGELOG.md` seguindo os padrões SemVer e Keep a Changelog

---

#### 🎨 Melhorado
- `MetricsCard` atualizado para usar tokens do Design System (`noozi-*`, `status-*`)
- Footer reescrito com `Link` e `useLocation` substituindo `useNavigate` e `onClick` em `div`
- Header padronizado como named export (`export function`)
- Rotas atualizadas para usar `AppLayout` como rota pai, eliminando duplicação de Header e Footer nas páginas

---

#### 🔧 Alterado
- Import do `index.css` movido para `main.tsx`, removido de `routes/index.tsx`
- `Header` e `Footer` padronizados para named exports (alinhado com convenção do projeto)
- Itens de navegação extraídos das páginas para `constants/navigation.ts`

---

#### 🐛 Corrigido
- Corrigidas páginas de Products e rotas relacionadas
- Removido `className="cadastro"` incorreto do Header (nome de página em componente global)
- Removido `invisible` do Footer que escondia o elemento mas mantinha espaço no layout
- Substituídos `div` com `onClick` por `Link` e `button` nos itens de navegação (semântica e acessibilidade)

---

</details>

---

### [1.2.0] - 2026-05-18

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.2.0]</b></summary>
  <br />

#### ✨ Adicionado
- Estrutura inicial completa do módulo de produtos
- Página de listagem de produtos (`/products`)
- Componente reutilizável `ProductCard`
- Componente `Searchbar` com integração ao fluxo de busca
- Estrutura de filtros de produtos
- Componente reutilizável `ActionButton` com variantes:
  - `primary`
  - `submit`
  - `edit`
  - `delete`
- Integração da Home com métricas dinâmicas de produtos
- Hooks customizados:
  - `useProducts`
  - `useProductMetrics`
- Camada de serviços para produtos e transações:
  - `productService`
  - `transactionRecordService`
- Configuração centralizada do Axios em `lib/api.ts`
- Estrutura de interceptors preparada para autenticação futura
- Integração com `json-server`
- Mock data completa para:
  - produtos
  - estoque baixo
  - vencimento próximo
  - produtos expirados
  - campos opcionais
- Configuração de `VITE_API_URL`
- Estrutura inicial de busca utilizando `MiniSearch`
- Guidelines de uso do `shadcn/ui` no `CONTRIBUTING.md`
- Seção de proteção de branches na documentação
- Melhorias no template de Pull Request
- Atualização do template de Technical Debt
- Estrutura inicial do formulário de cadastro de produtos (`/products/new`)
- Upload de imagem com interface drag & drop
- Campos de inventário:
  - validade
  - lote
  - SKU
- Toggle de status ativo/inativo com animação
- Sistema de contador de caracteres para inputs do formulário
- Feedback visual de limite de caracteres:
  - amarelo em 80%
  - vermelho em 90%
- Estrutura de validação e máscara para data (`DD/MM/YYYY`)
- Máscara monetária BRL com digitação invertida
- Interface `NewProductForm` para tipagem do formulário
- Constante `CHAR_LIMITS` para centralização dos limites de campos

---

#### 🎨 Melhorado
- Layout e hierarquia visual do `ProductCard`
- Estrutura visual e responsividade da `Searchbar`
- Organização das responsabilidades entre páginas
- Consistência visual entre componentes
- Fluxo de navegação entre telas de produtos
- Estrutura geral de componentes reutilizáveis
- Organização do projeto e padronização arquitetural
- Conteúdo do `README.md`
- Índice e status do projeto no README
- Checklist do Pull Request
- Estrutura do template de Pull Request
- Responsividade do formulário de cadastro de produtos
- Espaçamento vertical dos campos de inventário
- UX dos campos de data e preço
- Usabilidade do toggle de status
- Organização semântica do grid do formulário
- Consistência visual utilizando tokens oficiais do Design System Noozi

---

#### 🔧 Alterado
- Refatorada a estrutura de nomenclaturas do projeto
- Padronização de nomes de arquivos, imports e tipos
- Padronização de nomenclaturas do banco/mock para inglês:
  - `id_produto` → `id_product`
  - `update_at` → `updated_at`
- Simplificação das propriedades de descrição de produtos
- Separação de responsabilidades entre Home e Products
- Reorganização de botões de ação do módulo de produtos
- Refatoração da estrutura de filtros e busca
- Atualização da aplicação para `pt-BR`
- Extração de estilos responsivos para `index.css`
- Substituição parcial de cores arbitrárias por tokens oficiais do Tailwind Design System
- Reorganização de estados do formulário de cadastro
- Padronização de IDs dos inputs e botões

---

#### 🧹 Removido
- Arquivos obsoletos e imports não utilizados
- Arquivo `api.ts` residual não utilizado
- Estruturas duplicadas na documentação

---

#### 🐛 Corrigido
- Correções de compatibilidade entre branches
- Ajustes de layout e estilos da página de produtos
- Ajustes de estrutura e tipagem dos componentes
- Correções de imports e organização interna do projeto
- Correções de alinhamento entre campos do formulário
- Correções de comportamento do toggle de status
- Correções de validação e formatação de inputs de data

---

#### ⚠️ Débito Técnico
- Warning conhecido em `useProducts` relacionado à regra:
  - `react-hooks/set-state-in`

- Máscara monetária do campo de preço ainda possui melhorias futuras planejadas:
  - locale formatting adicional
  - refinamento de edge cases
  - melhorias de UX do input monetário

O problema não impacta o funcionamento atual da aplicação e será tratado em uma correção futura.

---

</details>

<!-- 
### [1.3.0] - 2026-05-01



<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.0.1]</b></summary>
  <br />

#### ✨ Adicionado

---

#### 🎨 Melhorado

---

#### 🛠 Alterado

---

#### 🐛 Corrigido

---

</details>

---

--> 
