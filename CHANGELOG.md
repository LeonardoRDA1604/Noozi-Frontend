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
    - [[1.2.1] - 2026-05-21](#121---2026-05-21)
    - [[1.3.0] - 2026-05-24](#130---2026-05-24)
    - [[1.4.0] - 2026-05-24](#140---2026-05-24)
    - [[1.5.0] - 2026-05-26](#150---2026-05-26)
    - [[1.6.0] - 2026-05-27](#160---2026-05-27)

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

</details>

---

### [1.2.1] - 2026-05-21

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.2.1]</b></summary>
  <br />

#### ✨ Adicionado
- Sistema reutilizável de inputs para formulários:
  - `TextInput`
  - `TextArea`
  - `NumberInput`
  - `DateInput`
  - `PriceInput`
  - `FileUpload`
  - `ToggleSwitch`
- Hook reutilizável `useCharCounter`
- Integração da página de produtos com a camada centralizada de mock data
- Integração da `Searchbar` com busca dinâmica baseada em `useProducts`
- Estrutura reutilizável para upload de arquivos com suporte a imagens
- Arquitetura reutilizável para máscaras e validações de inputs

---

#### 🎨 Melhorado
- Organização arquitetural do formulário de cadastro de produtos
- Reutilização de componentes de formulário no Design System
- Consistência visual e estrutural entre inputs
- UX de digitação em campos monetários e de data
- Estrutura de busca inteligente da listagem de produtos
- Escalabilidade da arquitetura de formulários reutilizáveis

---

#### 🔧 Alterado
- Refatoração completa da página `NewProduct` para utilização de componentes reutilizáveis
- Extração da lógica inline de:
  - validação
  - máscaras
  - contadores
  - upload
  - estados de inputs
- Centralização dos limites de caracteres em `CHAR_LIMITS`
- Refatoração da estrutura de mock data para integração centralizada via hooks e services
- Ajuste temporário da estrutura de thresholds de estoque:
  - `min_level`
  - `max_level`
- Reversão da padronização anterior de thresholds de estoque para manter compatibilidade com a arquitetura atual

---

#### 🧹 Removido
- Arquivos mock locais obsoletos:
  - `mockItems.ts`
  - `CardItems.types.ts`
- Estruturas de dados duplicadas utilizadas antes da integração com `useProducts`

---

#### 🐛 Corrigido
- Problema de reset do input nativo `type="date"`
- Problemas de inconsistência visual entre inputs reutilizáveis
- Ajustes de controle de estado em componentes de formulário
- Correções de integração entre cards de produto e dados centralizados

---

#### ⚠️ Débito Técnico
- O componente `FileUpload` ainda não possui validação real de:
  - tamanho máximo de arquivo
  - compressão
  - preview otimizado

- Alguns tokens de cor arbitrários (`bg-[#f5f5f5]`) ainda precisam ser migrados totalmente para os tokens oficiais do Design System.

</details>

---

### [1.3.0] - 2026-05-24

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.3.0]</b></summary>
  <br />

#### ✨ Adicionado
- Sistema reutilizável de Tooltips para inputs e formulários
- Suporte opcional a tooltips em componentes de input reutilizáveis
- Estrutura tipada dedicada para inputs e tooltips
- Campos de alerta de estoque mínimo e máximo no formulário de produtos
- Novos variants (`cancel` e `save`) para `ActionButton`
- Sistema completo de modais reutilizáveis:
  - `BaseModal`
  - `MetricsModal`
  - `ProductModal`
- Estrutura reutilizável de seções com componente `SectionTitle`
- Sistema de rastreamento de atividades recentes:
  - criação
  - atualização
  - remoção de produtos
- Componente `RecentActivities`
- Serviço `activityLogService`
- Tabela `activity_logs` no `db.json`
- Métrica de custo total de produtos vencidos
- Novo card de métricas financeiras na Home
- Persistência funcional do formulário `NewProduct` integrada ao `db.json`
- Utilitário compartilhado `dateHelpers.ts`
- Estrutura responsiva baseada em colunas para produtos
- Componente reutilizável `TableHeader`
- Sistema de breakpoints reutilizável para tabela responsiva
- Novos tokens de Design System:
  - `default_screen`
  - `input_field`

---

#### 🎨 Melhorado
- Organização visual do formulário `NewProduct` em seções semânticas
- Hierarquia visual da Home
- Responsividade geral da listagem de produtos
- Escalabilidade da arquitetura de tabelas responsivas
- UX dos inputs monetários
- Estrutura visual da Searchbar e filtros
- Consistência visual utilizando tokens oficiais do Design System
- Legibilidade em telas extremamente pequenas
- Responsividade de métricas, status e atividades recentes
- Organização e padronização da arquitetura de componentes reutilizáveis
- Estrutura visual dos modais com header sticky
- Feedback visual dos cards e seções através de hover states
- Estrutura visual dos indicadores de status ativos/inativos

---

#### 🔧 Alterado
- Refatoração do `NewProduct` para fluxo totalmente vertical
- Refatoração dos componentes de input para tipagem desacoplada
- Refatoração da Home para utilização de `SectionTitle`
- Refatoração do layout de produtos de cards para tabela responsiva
- Extração da configuração de colunas para hook reutilizável
- Extração da lógica de conversão de data para utilitário compartilhado
- Centralização de cores através do `tailwind.config.js`
- Atualização do sistema de filtros e Searchbar para Design Tokens
- Ajuste progressivo de tipografia baseado em breakpoints
- Padronização dos nomes:
  - `getBreakpoints`
  - `TableHeader`
  - `filterDebounced`
- Estrutura de imports reorganizada após refactors
- Atualização do README para status `v1.2.1`

---

#### 🧹 Removido
- Upload temporário de imagem no formulário de produtos
- Estados e imports obsoletos relacionados ao upload
- Headings temporários de identificação de páginas
- Tipagens não utilizadas relacionadas ao formulário de produto

---

#### 🐛 Corrigido
- Problema de scroll no header dos modais
- Problemas de responsividade em telas muito pequenas
- Erro de tag não fechada na página `Products`
- Correção de typo em:
  - `GetBrakpoints`
  - `TableHearder`
  - `filterDebouncado`
- Correções de imports quebrados após renomeações
- Correção do identificador `id_log` incompatível com `json-server`
- Correções de renderização de estados vazios em `RecentActivities`
- Correções de alinhamento visual entre Searchbar e inputs reutilizáveis
- Ajustes de bordas, espaçamentos e responsividade em componentes de listagem

---

#### ⚠️ Débito Técnico
- O sistema ainda utiliza `json-server` como camada mock temporária
- O upload de imagens permanece comentado aguardando implementação futura
- O sistema de atividades ainda depende parcialmente de timestamps mockados
- O fluxo de atualização de produtos ainda pode ser expandido para persistência completa via backend real
- Algumas implementações futuras permanecem temporariamente comentadas para evitar warnings de lint/build

</details>

---

### [1.4.0] - 2026-05-24

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.4.0]</b></summary>
  <br />

#### ✨ Adicionado
- Indicador visual ativo aprimorado na navegação mobile do Footer
- Badge de notificação no Header
- Badges contextuais de atividades recentes:
  - `Cadastrado`
  - `Atualizado`
  - `Removido`
- Subtítulos opcionais em `SectionTitle`
- Estados interativos avançados nos botões reutilizáveis:
  - active scale
  - focus ring refinado
  - transitions aprimoradas
- Melhorias de acessibilidade:
  - `aria-current`
  - `aria-modal`
  - `role="dialog"`
  - `aria-label`
- Comentários semânticos documentando tokens do Design System

---

#### 🎨 Melhorado
- UX geral do Sidebar Drawer com visual mais moderno e responsivo
- Feedback visual e microinterações de botões reutilizáveis
- Estrutura visual do Header com hierarquia e espaçamento refinados
- Layout da Home reorganizado em abordagem mobile-first
- Organização visual do formulário `NewProduct`
- Clareza textual da Searchbar de produtos
- Estados ativos da navegação mobile
- Hierarquia visual de `RecentActivities`
- Responsividade dos cards de métricas
- Consistência visual entre cards, botões e modais utilizando `rounded-xl`
- Contraste e visibilidade de Tooltips para acessibilidade
- Navegação por teclado com focus states mais consistentes
- Feedback visual de hover, active e focus em múltiplos componentes
- Estrutura visual das atividades recentes com cards individuais
- Legibilidade e hierarquia tipográfica de títulos e subtítulos
- Consistência visual de headings e títulos de seção
- Animações e transições gerais da interface

---

#### 🔧 Alterado
- Limite de exibição de atividades recentes alterado de `8` para `10`
- Refatoração do Header para estrutura semântica utilizando `nav`
- Refatoração do Sidebar para animações e overlay aprimorados
- Refatoração dos `MetricsCard` para sizing responsivo
- Refatoração de `SectionTitle`:
  - redução de tipografia
  - substituição de `space-y` por `gap`
- Refatoração do componente `RecentActivities`
- Atualização do variant `edit` para utilizar paleta oficial da marca
- Centralização de estados visuais utilizando Design Tokens
- Ajustes de espaçamento e grid responsivo na Home
- Atualização da arquitetura visual dos botões reutilizáveis

---

#### 🧹 Removido
- Comentário residual deixado acidentalmente no código
- Dois pontos (`:`) desnecessários em títulos de seção da Home

---

#### 🐛 Corrigido
- Fechamento do Sidebar ao clicar fora do menu
- Contraste insuficiente em Tooltips
- Acessibilidade da Searchbar com `aria-label`
- Acessibilidade da navegação Home no Header
- Texto alternativo (`alt`) do logo para leitores de tela
- Ajustes de alinhamento e balanceamento visual de ícones
- Correções de estados visuais ativos no Footer mobile
- Melhorias de acessibilidade e navegação por teclado
- Correções de consistência visual em estados hover/active

---

#### ⚠️ Débito Técnico
- Algumas animações ainda dependem exclusivamente de transições CSS locais e podem futuramente ser centralizadas
- O sistema visual ainda possui partes parcialmente desacopladas do Design System global
- A arquitetura de acessibilidade continua em evolução incremental componente por componente
- Alguns componentes reutilizáveis ainda podem receber abstrações adicionais para reduzir duplicação de estilos

</details>

---

### [1.5.0] - 2026-05-26

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.5.0]</b></summary>
  <br />

#### ✨ Adicionado
- Sistema completo de filtros avançados para produtos
- Modal reutilizável de filtros integrado ao módulo de produtos
- Filtros por:
  - status ativo/inativo
  - produtos vencidos
  - faixa de preço
- Ordenação multi-categoria:
  - alfabética
  - preço
  - estoque
  - nível crítico de estoque
  - validade
  - SKU
- Suporte a múltiplas prioridades de ordenação encadeadas
- Integração reutilizável do componente `PriceInput` nos filtros
- Indicadores visuais de filtros ativos
- Tooltips contextuais em filtros e status
- Toggle switches reutilizáveis e responsivos
- Sistema reutilizável de badges de status (`StatusBadge`)
- Integração do `ProductModal` diretamente ao fluxo do `ProductCard`
- Visualização expandida de produtos contendo:
  - descrição
  - identificador do produto
  - alerta de estoque baixo
  - alerta de estoque alto
- Sistema completo de validação do formulário `NewProduct`
- Indicadores visuais de campos obrigatórios
- Feedback de erro em tempo real nos inputs
- Scroll automático para o topo em falhas de validação
- Novas variantes de logo em:
  - PNG
  - AVIF
  - grayscale
  - horizontal
  - wordmark
- Banco mockado de exemplo:
  - `db.example.json`
  - `db.seed.json`
- Atualização automática de timestamps:
  - `created_at`
  - `updated_at`

---

#### 🎨 Melhorado
- UX geral do modal de filtros com agrupamento visual mais claro
- Layout responsivo do sistema de filtros
- Feedback visual de botões ativos e filtros aplicados
- Responsividade e acessibilidade dos toggle switches
- Organização visual do `ProductModal`
- Hierarquia tipográfica da tabela de produtos
- Tratamento de overflow e quebra automática de texto em tabelas
- Alinhamento vertical da `Searchbar`
- Consistência visual do sistema de status
- Estrutura visual da listagem de produtos
- Fluxo de atualização automática após operações CRUD
- Organização de assets e estrutura de componentes
- Experiência de onboarding para ambiente local mockado

---

#### 🔧 Alterado
- Refatoração completa da arquitetura de filtros de produtos
- Centralização da lógica de filtros em hooks reutilizáveis
- Refatoração da tabela de produtos para `ProductTable`
- Unificação estrutural de `TableHeader` e `ProductCard`
- Extração de:
  - `ActivityItem`
  - `StatusBadge`
  - `formatDateTime`
  - configurações de atividades
- Separação semântica entre status de produto e atividades
- Reorganização de módulos utilitários e convenções de nomenclatura
- Migração de componentes para estruturas mais reutilizáveis
- Atualização do fluxo CRUD para utilizar `PATCH` ao invés de `PUT`
- Atualização automática de refetch após edição e exclusão
- Reorganização da ordem de campos no formulário `NewProduct`
- Atualização da estrutura mockada para refletir o schema atual
- Melhorias de organização interna de imports e diretórios

---

#### 🧹 Removido
- Componentes obsoletos:
  - `TableHeader.tsx`
  - `ProductCard.tsx`
- Comentários temporários e anotações de desenvolvimento
- Imports e ícones não utilizados
- Estruturas antigas de toggle switch baseadas em CSS legado
- Botões órfãos de edição e remoção na página de produtos

---

#### 🐛 Corrigido
- Correção do botão de exclusão que ignorava `onClick`
- Correção de updates destrutivos utilizando `PUT`
- Correção de tipagem em `CreateProductDTO` e `UpdateProductDTO`
- Correção de renderização de bordas responsivas na tabela
- Correção de labels duplicadas em alertas de estoque
- Correção de imports após reorganização estrutural
- Correção de tipagem do `CardItem`
- Correção de alinhamento e responsividade de toggle switches
- Correção da atualização automática da listagem após CRUD
- Correção de validação e feedback visual em campos obrigatórios

---

#### ⚠️ Débito Técnico
- Parte da lógica ainda depende de estruturas específicas do `json-server`
- O fluxo CRUD ainda utiliza IDs temporários preparados para futura migração de API
- O sistema de filtros pode futuramente ser desacoplado para persistência em query params
- Alguns componentes reutilizáveis ainda podem ser abstraídos para reduzir duplicação de layouts
- A arquitetura de tabelas ainda pode evoluir para virtualização em listas maiores

</details>

---

### [1.6.0] - 2026-05-27

<details>
  <summary style="background-color: white; color: black"><b>ℹ️ Clique para expandir o log de alterações da versão [1.6.0]</b></summary>
  <br />

#### ✨ Adicionado
- Sistema completo de Dark Mode utilizando estratégia `darkMode: class`
- Hook reutilizável `useDarkMode`
- Persistência automática de tema via `localStorage`
- Suporte automático à preferência do sistema operacional (`prefers-color-scheme`)
- Variáveis CSS globais para:
  - background
  - surface
  - border
  - text
  - muted
  - input_field
  - default_screen
- Toggle avançado de tema no Sidebar:
  - ícones Sun/Moon
  - labels CLARO/ESCURO
  - animações reativas
  - acessibilidade com `role="switch"`
- Novo componente reutilizável `DeleteConfirmModal`
- Novo variant `filter` no `ActionButton`
- Indicador visual de filtro ativo no botão de filtros
- Helper texts reutilizáveis em:
  - `Input`
  - `Select`
  - `CurrencyInput`
- Validação de data no formulário de criação de produtos
- Estados semânticos de loading e erro na página de produtos
- Estrutura semântica acessível utilizando:
  - `role="search"`
  - `aria-live`
  - `aria-label`
  - `role="tooltip"`
  - `fieldset`
  - `legend`
  - `role="radiogroup"`
- Suporte completo de Dark Mode em:
  - Sidebar
  - BaseModal
  - ProductModal
  - ProductFilterModal
  - Header
  - Footer
  - MetricsCard
  - RecentActivities
  - ActivityItem
- Header sticky na tabela de produtos
- Layout de cards flutuantes na listagem de produtos
- Scrollbar customizada via `tailwindcss-scrollbar`

---

#### 🎨 Melhorado
- UX geral do sistema de tema escuro
- Consistência visual entre modais, páginas e tabelas
- Acessibilidade da `Searchbar`
- Estrutura visual do `ProductTable`
- Legibilidade de badges de status
- Hierarquia visual das páginas `Products` e `NewProduct`
- Espaçamento e organização visual do `ProductModal`
- Responsividade do toggle de tema
- Clareza visual dos filtros de produtos
- Alinhamento da `Searchbar` com a tabela de produtos
- Fluxo de confirmação de exclusão de produtos
- Feedback visual de foco em inputs e botões
- Organização arquitetural de tabelas e utilities
- Padronização de formatação monetária e de datas
- Consistência visual de datas no padrão `DD/MM/YYYY`

---

#### 🔧 Alterado
- Centralização de utilitários:
  - `formatCurrency`
  - `formatISODate`
- Reorganização estrutural do `ProductTable`
- Criação da pasta centralizada `Table`
- Renomeação e padronização de utilities relacionadas a datas
- Refatoração do `Searchbar` para estrutura mais acessível e semântica
- Refatoração do `SectionTitle` para centralizar headers de páginas
- Refatoração do `ProductFilterModal` para utilizar:
  - `ActionButton`
  - semântica acessível
  - tokens oficiais do Design System
- Refatoração do `ProductModal`:
  - suporte ao Dark Mode
  - utilização do `DeleteConfirmModal`
  - integração do `StatusBadge`
- Refatoração da navegação do Sidebar para melhorar UX
- Reorganização de layouts e componentes relacionados a tabelas
- Substituição de cores hardcoded por Design Tokens oficiais
- Atualização do fluxo visual de tooltips e indicadores obrigatórios
- Remoção de tooltips não essenciais no formulário `NewProduct`

---

#### 🧹 Removido
- Arquivo obsoleto `mockItems.ts`
- Tooltips redundantes em campos autoexplicativos
- Estruturas antigas inline de confirmação de exclusão
- Estruturas visuais antigas da Searchbar
- Cores hardcoded substituídas por tokens globais

---

#### 🐛 Corrigido
- Correção do formato de exibição da validade dos produtos
- Correção da data da versão no índice do `CHANGELOG`
- Correção de inconsistências de formatação monetária
- Correção de alinhamentos visuais na tabela de produtos
- Correção de acessibilidade em modais e tooltips
- Correção de contraste visual no Dark Mode
- Correção de comportamento do botão limpar da Searchbar
- Correção de nomenclatura inconsistente em utilities de data

---

#### ⚠️ Débito Técnico
- O sistema de tema ainda depende parcialmente de classes utilitárias legadas
- Alguns componentes ainda utilizam estrutura híbrida entre tokens CSS e Tailwind utilities
- O gerenciamento de preferências visuais ainda não está sincronizado com backend
- O ProductTable ainda pode futuramente evoluir para virtualização em listas extensas
- O sistema de filtros ainda não persiste estado via URL/query params
- Algumas utilities de formatação ainda podem ser internacionalizadas futuramente

</details>

---

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
