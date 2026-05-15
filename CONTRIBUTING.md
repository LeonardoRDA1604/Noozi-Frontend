<div align="center" style="background-color:#111; color:#fff; padding:20px; border-radius:8px; font-size:18px;">
  Português (Brasil) [PT-BR]
</div>

# Contribuindo com o projeto

Obrigado pelo interesse em contribuir com o **Noozi**! Este é um sistema de gestão de estoque focado em produtividade e excelência técnica. Este documento descreve as regras, padrões e fluxo que devem ser seguidos ao contribuir com o projeto.

> 📖 **Antes de contribuir**, leia o [README.md](README) para entender a arquitetura do projeto, as tecnologias utilizadas e a estrutura de pastas. Consulte também o `package.json` para verificar as versões e dependências utilizadas, e o `.nvmrc` para garantir que está utilizando a versão correta do Node.js.
---

## 📖 Índice

- [1. Git Flow](#-git-flow)
  - [1.1. Fluxo de trabalho da equipe](#fluxo-de-trabalho-da-equipe)
- [2. Proteção de Branches](#-proteção-de-branches)
  - [2.1. Regras aplicadas nas branches protegidas](#regras-aplicadas-nas-branches-protegidas)
  - [2.2. Conversas de revisão (Resolve conversation)](#-conversas-de-revisão-resolve-conversation)

- [3. Regras do Projeto](#-regras-do-projeto)
- [4. Estratégia de Branches](#-estratégia-de-branches)
  - [4.1. Exemplos de criação de branches ](#exemplos-de-criação-de-branches)
  - [4.2. Preparando o ambiente antes de criar sua branch](#preparando-o-ambiente-antes-de-criar-sua-branch)
- [5. Padrão de Mensagens de Commit](#-padrão-de-mensagens-de-commit)
  - [5.1. Exemplos de mensagens de commit ](#exemplos-de-mensagens-de-commit)
- [6. Regras de Pull Request](#-regras-de-pull-request)
  - [6.1. Checklist antes de abrir o PR](#-checklist-antes-de-abrir-o-pr)
- [7. Critérios de Revisão](#-critérios-de-revisão)
- [8. Quem Pode Aprovar](#-quem-pode-aprovar)
- [9. Padrão de Código e Interface](#-padrão-de-código-e-interface)
  - [9.1. ESLint e Formatação](#eslint-e-formatação)
  - [9.2. Componentes Reutilizáveis](#componentes-reutilizáveis)
  - [9.3. Ícones](#ícones)
  - [9.4. Design System](#design-system)
    - [9.4.1. Usando cores sem token (valores arbitrários)](#usando-cores-sem-token-valores-arbitrários)
    - [9.4.2. Identidade Visual](#identidade-visual)
    - [9.4.3. Tipografia](#tipografia)
    - [9.4.4. Bordas](#bordas)
    - [9.4.5. Sombras](#sombras)
    - [9.4.6. Breakpoints e Responsividade](#breakpoints-e-responsividade)
- [10. UX/UI e Acessibilidade](#-uxui-e-acessibilidade)
  - [10.1. Elementos Interativos](#elementos-interativos)
  - [10.2. HTML Semântico](#html-semântico)
  - [10.3. Acessibilidade (a11y)](#acessibilidade-a11y)
  - [10.4. Hierarquia Visual](#hierarquia-visual)
  - [10.5. Feedback ao Usuário](#feedback-ao-usuário)
  - [10.6. Consistência](#consistência)
- [11. Nomenclatura de Arquivos e Pastas](#️-nomenclatura-de-arquivos-e-pastas)
- [12. Acessibilidade](#-acessibilidade)
- [13. Versionamento](#️-versionamento)
- [14. Reportando Bugs](#-reportando-bugs)
- [15. Comunicação](#-comunicação)
- [16. Precisa de Ajuda?](#-precisa-de-ajuda)

---

## 🌊 Git Flow

Este projeto segue o **Git Flow** como estratégia de ramificação para garantir a estabilidade do sistema: 

```
main        → produção (código estável e validado, pronto para deploy)
dev         → homologação/testes (integração contínua)
feature/*   → desenvolvimento de novas funcionalidades individuais (branches dos contribuidores)
```

### Fluxo de trabalho da equipe

```
feature/* (sua branch)
     ↓  Pull Request
    dev  (revisão e testes)
     ↓  validação final
   main  (produção)
```

| Ação | Quem pode fazer |
|------|----------------|
| Push direto na `main` | ❌ Ninguém da equipe — PR Obrigatório |
| Push direto na `dev` | ❌ Ninguém da equipe — PR Obrigatório  |
| Deletar branches | ⚠️ Somente o Tech Leader |
| Abrir Pull Request | ✅ Todos os contribuidores |
| Aprovar Pull Request | ✅ Tech Leader e revisores designados |

---

## 🔒 Proteção de Branches

As branches `main` e `dev` possuem regras de proteção configuradas no GitHub para garantir a estabilidade, qualidade e segurança do projeto.

### Regras aplicadas nas branches protegidas

- Pull Request obrigatório para merge
- Aprovação obrigatória antes do merge
- Comentários de revisão devem ser resolvidos antes da aprovação final
- Force push bloqueado
- Deleção das branches protegidas bloqueada

### 💬 Conversas de revisão (`Resolve conversation`)

Durante a revisão do Pull Request, o Tech Leader ou revisores podem abrir comentários solicitando ajustes no código.

Enquanto existir alguma conversa pendente:
- o Pull Request não poderá ser mergeado
- todas as solicitações devem ser resolvidas antes da aprovação final

Após corrigir o problema:
- marque a conversa como resolvida (`Resolve conversation`)

Isso ajuda a manter:
- revisões organizadas
- histórico limpo
- feedback aplicado corretamente
- maior controle de qualidade do projeto

---

## 📌 Regras do Projeto

- **NÃO faça push diretamente nas branches `main` ou `dev`**
- Todas as alterações devem ser feitas em branches separadas e enviadas via **Pull Request**
- Apenas o **administrador** do repositório pode aprovar e realizar merge de **Pull Requests**

---

## 🌿 Estratégia de Branches

Crie branches a partir da `dev` seguindo o padrão:

- `feat/*` — novas funcionalidades
- `fix/*` — correção de bugs
- `chore/*` — tarefas de manutenção ou configuração
- `refactor/*` — refatoração de código sem mudança de comportamento
- `style/*` — ajustes visuais, CSS, identidade visual
- `docs/*` — alterações em documentação (README, CONTRIBUTING, CHANGELOG, etc.)

> ⚠️  **O nome da branch deve sempre ser em inglês**, seguindo o mesmo padrão dos [commits](#-padrão-de-mensagens-de-commit).

### Exemplos de criação de branches
```bash
git checkout -b feat/product-registration
git checkout -b feat/stock-list-view
git checkout -b feat/category-filter
git checkout -b feat/export-report
git checkout -b fix/quantity-validation
git checkout -b fix/minimum-stock-calculation
git checkout -b chore/update-lucide-icons
git checkout -b chore/config-eslint-prettier
git checkout -b refactor/product-table-component
git checkout -b style/brand-color-palette
git checkout -b docs/update-contributing
```

### Preparando o ambiente antes de criar sua branch

O `git clone` baixa todo o repositório, mas por padrão te deixa na branch `main`.
Como todas as suas branches devem partir da `dev`, siga os passos abaixo após o clone:

- Opção 1:
```bash
# 1. Clone o repositório apontando para a branch dev
git clone -b dev https://github.com/LeonardoRDA1604/Noozi-Frontend.git

# 2. Acesse a pasta do projeto
cd Noozi-Frontend

# 3. Confirme que está na branch dev
git branch
# O asterisco (*) deve estar na frente de dev

# 4. Agora sim, crie sua branch a partir da dev
git checkout -b feat/nome-da-sua-feature
```

- Opção 2:
```bash
# 1. Clone o repositório normalmente
git clone https://github.com/LeonardoRDA1604/Noozi-Frontend.git

# 2. Acesse a pasta do projeto
cd Noozi-Frontend

# 3. Mude para a branch dev
git checkout dev

# 4. Confirme que está na branch dev
git branch
# O asterisco (*) deve estar na frente de dev

# 5. Agora sim, crie sua branch a partir da dev
git checkout -b feat/nome-da-sua-feature
```

> ⚠️ **Nunca crie sua branch a partir da `main`.**
> Sempre confirme que está na `dev` antes de rodar o `git checkout -b`.

<!-- 
### Mantendo sua branch atualizada com a `dev`

Enquanto você trabalha, a `dev` pode receber atualizações de outros contribuidores.
Antes de abrir o PR, sincronize sua branch:

```bash
# 1. Salve seu trabalho atual
git add .
git commit -m "feat: meu progresso atual"

# 2. Busque as atualizações remotas
git fetch origin

# 3. Aplique as atualizações da dev na sua branch
git rebase origin/dev
```

> 💡 Prefira `rebase` a `merge` para manter o histórico de commits limpo e linear.
 -->

---

## 📝 Padrão de Mensagens de Commit

Este projeto segue o padrão **Conventional Commits**.

Formato:
```text
tipo(escopo opcional): descrição curta em inglês
```

> ℹ️ Na descrição, evite passar de **72 caracteres**, é o limite ideal do Conventional Commits.

### Exemplos de mensagens de commit
```text
feat: add product registration form
feat: add low stock alert badge
feat(stock): add list with pagination
fix(stock): correct minimum quantity validation
fix(form): prevent duplicate product submission
fix(table): fix sorting by product name
chore: configure eslint and prettier
chore(deps): update dependencies to latest versions
refactor(product-card): extract reusable card component
style(sidebar): apply brand color palette
style(button): adjust border radius to match design system
style(input): update focus ring color to cyan
docs(readme): refine README.md
docs(contributing): update CONTRIBUTING.md
```

---

## 🔁 Regras de Pull Request

- Todos os Pull Requests devem ter como destino a branch **`dev`** (nunca diretamente para `main`)
- Pull Requests exigem **pelo menos 1 aprovação (Tech Leader)**
- Todos os comentários de revisão devem ser resolvidos antes do merge
- Caso novos commits sejam adicionados após aprovação, a aprovação será removida e uma nova revisão será necessária
- Descreva claramente no PR **o que foi feito**, **por quê**, e **como testar**

> ℹ️ Ao abrir um Pull Request, o nosso template será carregado automaticamente pelo GitHub. Preencha todos os campos antes de solicitar revisão.

<br>

### ✅ Checklist antes de abrir o PR

Antes de submeter seu Pull Request, confirme que:

- [ ] O código compila e roda sem erros (`npm run dev`)
- [ ] O lint passa sem erros (`npm run lint`)
- [ ] Você testou manualmente o fluxo que alterou
- [ ] Não há `console.log`, `debugger` ou código comentado desnecessário
- [ ] Commits seguem o padrão **Conventional Commits**
- [ ] A branch foi criada a partir da `dev` e está atualizada com ela
- [ ] O PR está apontando para a branch `dev`
- [ ] A descrição do PR está preenchida com contexto suficiente para revisão
- [ ] Componentes novos são reutilizáveis e seguem os padrões do projeto
- [ ] Foram utilizados apenas ícones do **Lucide React**
- [ ] Foram utilizadas apenas (ou majoritariamente) cores da **paleta oficial**
- [ ] Elementos interativos possuem atributos de acessibilidade adequados

---

## 🔍 Critérios de Revisão

O Tech Leader avalia os Pull Requests com base nos seguintes critérios:

**Funcionalidade**
- A feature ou fix funciona conforme descrito no PR?
- Há casos de borda não tratados?

**Qualidade de código**
- O código está limpo, legível e sem duplicação desnecessária?
- A lógica está no lugar correto (componente, hook, utils)?
- Segue os padrões de nomenclatura do projeto?

**Componentes e reutilização**
- O componente criado é genérico o suficiente para ser reaproveitado?
- Props estão tipadas corretamente?

**Interface e identidade visual**
- Foram usadas apenas (ou majoritariamente) cores da paleta oficial?
- A interface está responsiva?
- Os ícones são do Lucide React?

**Acessibilidade**
- Elementos interativos têm `aria-label` ou texto acessível?
- A semântica HTML está correta?
- O contraste de cores atende ao mínimo recomendado (WCAG AA)?

**Impacto e segurança**
- A mudança pode quebrar algo existente?
- Há dados sensíveis expostos no código ou nos logs?

---

## 👤 Quem Pode Aprovar

- Apenas o revisor designado (**Tech Leader**) pode aprovar Pull Requests
- Contribuidores podem abrir Pull Requests e **solicitar revisão**

---

## 🎨 Padrão de Código e Interface

### ESLint e Formatação

- Siga rigorosamente as regras do **ESLint** configuradas no projeto
- Mantenha o código limpo, legível e bem organizado
- Evite complexidade desnecessária e código duplicado

### Componentes Reutilizáveis

- **Crie componentes reutilizáveis** seguindo os padrões do projeto (consulte a pasta `src/components/`)
- Componentes devem ser genéricos o suficiente para serem reaproveitados em diferentes partes do sistema
- Documente props e comportamentos esperados via TypeScript `type` ou `interface`

### Ícones

Utilize exclusivamente a biblioteca **[Lucide React](https://lucide.dev/)** para ícones. Não adicione outras bibliotecas de ícones ao projeto. Importe apenas os ícones necessários (tree-shaking).

✅ Correto — import específico
```tsx
import { Package, AlertCircle, Search } from 'lucide-react'
```

❌ Evite — import de toda a biblioteca
```tsx
import * as Icons from 'lucide-react'
```

---

### Design System

O Noozi possui um Design System próprio configurado em `tailwind.config.js` e aplicado globalmente via `src/index.css`. **Sempre utilize as classes e tokens do Design System** — nunca use cores, fontes ou tamanhos arbitrários ou padrões do Tailwind que não estejam mapeados aqui.

> ⚠️ Se precisar de um token (cor, tamanho, sombra, etc.) que não existe atualmente, **não adicione por conta própria**. Comunique ao(s) responsáveis pelo Design System (**Tech Leader** e **Designer**) para avaliação e inclusão oficial.

---

#### Usando cores sem token (valores arbitrários)

Em situações pontuais — protótipos, testes visuais ou ajustes rápidos — é possível usar cores diretamente via sintaxe de valor arbitrário do Tailwind:

```tsx
<div className="bg-[#1752FD] text-[#FFFFFF] border-[#E8E8E8]">
  Exemplo com valor arbitrário
</div>
```

> ℹ️ Essa sintaxe funciona para qualquer propriedade: `bg-[#hex]`, `text-[#hex]`, `border-[#hex]`, `shadow-[valor]`, etc.

> ⚠️ No entanto, **valores arbitrários NÃO devem ser mantidos em código de produção**.

Se durante o desenvolvimento você identificar necessidade real de um novo token, siga o fluxo:
1. Use o valor arbitrário temporariamente para não bloquear o desenvolvimento
2. Comunique ao **Tech Leader** e ao **Designer** com justificativa
3. Aguarde a aprovação e inclusão oficial no `tailwind.config.js`
4. Substitua o valor arbitrário pelo token oficial antes do merge

```tsx
// ❌ nunca — valor arbitrário em produção sem aprovação
<div className="bg-[#1A2B4C]">...</div> // sem token, sem aprovação = não vai pra main

// ✅ temporário — durante desenvolvimento
<div className="bg-[#1A2B4C]">...</div>

// ✅ definitivo — após aprovação e inclusão no Design System
<div className="bg-noozi-navy">...</div>
```

---

#### Identidade Visual

- **Paleta de Cores**

| Cor | Token Tailwind | Hex | RGBA | HSL |
|-----|---------------|-----|------|-----|
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#1752FD"/></svg> Azul intenso (Bright blue) — ação principal | `noozi-bright_blue` | `#1752FD` | `rgba(23, 82, 253, 1)` | `hsl(227, 98%, 54%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#30B7F0"/></svg> Azul-céu (Sky blue) | `noozi-sky_blue` | `#30B7F0` | `rgba(48, 183, 240, 1)` | `hsl(199, 85%, 56%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#9F9F9F"/></svg> Cinza médio (Medium gray) | `noozi-gray-500` | `#9F9F9F` | `rgba(159, 159, 159, 1)` | `hsl(0, 0%, 62%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#FFFFFF" stroke="#ccc"/></svg> Branco (White) — background padrão | `noozi-background` | `#FFFFFF` | `rgba(255, 255, 255, 1)` | `hsl(0, 0%, 100%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#F5F5F5" stroke="#ccc"/></svg> Surface — fundo de cards e painéis | `noozi-surface` | `#F5F5F5` | `rgba(245, 245, 245, 1)` | `hsl(0, 0%, 96%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#E8E8E8" stroke="#ccc"/></svg> Borda padrão | `noozi-border` | `#E8E8E8` | `rgba(232, 232, 232, 1)` | `hsl(0, 0%, 91%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#111111"/></svg> Texto principal | `noozi-text` | `#111111` | `rgba(17, 17, 17, 1)` | `hsl(0, 0%, 7%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#9F9F9F"/></svg> Texto secundário / muted | `noozi-muted` | `#9F9F9F` | `rgba(159, 159, 159, 1)` | `hsl(0, 0%, 62%)` |

- **Escala de cinza da marca (`noozi-gray`):**

| Cor | Token | Hex | RGBA | HSL |
|-----|-------|-----|------|-----|
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#111111"/></svg> | `noozi-gray-900` | `#111111` | `rgba(17, 17, 17, 1)` | `hsl(0, 0%, 7%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#1F1F1F"/></svg> | `noozi-gray-800` | `#1F1F1F` | `rgba(31, 31, 31, 1)` | `hsl(0, 0%, 12%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#2E2E2E"/></svg> | `noozi-gray-700` | `#2E2E2E` | `rgba(46, 46, 46, 1)` | `hsl(0, 0%, 18%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#4B4B4B"/></svg> | `noozi-gray-600` | `#4B4B4B` | `rgba(75, 75, 75, 1)` | `hsl(0, 0%, 29%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#9F9F9F"/></svg> | `noozi-gray-500` | `#9F9F9F` | `rgba(159, 159, 159, 1)` | `hsl(0, 0%, 62%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#BDBDBD"/></svg> | `noozi-gray-400` | `#BDBDBD` | `rgba(189, 189, 189, 1)` | `hsl(0, 0%, 74%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#D4D4D4"/></svg> | `noozi-gray-300` | `#D4D4D4` | `rgba(212, 212, 212, 1)` | `hsl(0, 0%, 83%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#E8E8E8"/></svg> | `noozi-gray-200` | `#E8E8E8` | `rgba(232, 232, 232, 1)` | `hsl(0, 0%, 91%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#F5F5F5" stroke="#ccc"/></svg> | `noozi-gray-100` | `#F5F5F5` | `rgba(245, 245, 245, 1)` | `hsl(0, 0%, 96%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#FAFAFA" stroke="#ccc"/></svg> | `noozi-gray-50` | `#FAFAFA` | `rgba(250, 250, 250, 1)` | `hsl(0, 0%, 98%)` |

- **Cores de status (`status`) — para ícones, badges e alertas:**

| Cor | Semântica | Token Tailwind | Hex | RGBA | HSL |
|-----|-----------|---------------|-----|------|-----|
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#34D399"/></svg> | Sucesso | `status-success` | `#34D399` | `rgba(52, 211, 153, 1)` | `hsl(158, 64%, 52%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#FBBF24"/></svg> | Alerta | `status-warning` | `#FBBF24` | `rgba(251, 191, 36, 1)` | `hsl(43, 96%, 56%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#F87171"/></svg> | Erro / Perigo | `status-danger` | `#F87171` | `rgba(248, 113, 113, 1)` | `hsl(0, 91%, 71%)` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#30B7F0"/></svg> | Informação | `status-info` | `#30B7F0` | `rgba(48, 183, 240, 1)` | `hsl(199, 85%, 56%)` |


- **Exemplos de uso:**

```tsx
// texto
<p className="text-noozi-text">Texto principal</p>
<p className="text-noozi-muted">Texto secundário</p>

// background
<div className="bg-noozi-surface">Card</div>
<div className="bg-noozi-bright_blue">Botão primário</div>

// borda
<div className="border border-noozi-border">Elemento com borda</div>

// status
<span className="text-status-success">Salvo com sucesso</span>
<span className="text-status-danger">Erro ao salvar</span>
```

> ❌ Não utilize classes de cor padrão do Tailwind como `text-zinc-500`, `bg-gray-100`, `border-slate-200`, etc. Use sempre os tokens `noozi-*` e `status-*`. Caso o token necessário não exista, siga os passos descritos na sessão: [Usando cores sem token (valores arbitrários)](#usando-cores-sem-token-valores-arbitrários).

---

#### Tipografia

As fontes estão configuradas em `tailwind.config.js` e importadas em `src/index.css` via `@fontsource-variable/geist`.

| Token | Fonte | Uso |
|-------|-------|-----|
| `font-sans` | Geist → DM Sans → Poppins | Texto padrão do sistema (aplicado globalmente no `body`) |
| `font-display` | Geist → Poppins | Títulos e headings (aplicado globalmente em `h1`–`h6`) |
| `font-mono` | Geist Mono | Código, valores técnicos |

```tsx
<h1 className="font-display text-2xl font-bold">Título</h1>
<p className="font-sans text-sm text-noozi-muted">Descrição</p>
<code className="font-mono text-xs">valor_tecnico</code>
```

> Na maioria dos casos você **não precisará declarar `font-sans` ou `font-display` manualmente** — eles já são aplicados globalmente pelo `index.css`.

---

#### Bordas

| Token | Valor | Uso sugerido |
|-------|-------|--------------|
| `rounded-sm` | 4px | Badges, tags |
| `rounded-md` | 8px | Inputs, botões |
| `rounded-lg` | 12px | Cards |
| `rounded-xl` | 16px | Modais, painéis |
| `rounded-2xl` | 24px | Elementos de destaque |
| `rounded-full` | 9999px | Avatares, pills |

---

#### Sombras

| Token | Uso sugerido |
|-------|--------------|
| `shadow-sm` | Elementos sutis |
| `shadow-md` | Dropdowns, tooltips |
| `shadow-lg` | Modais |
| `shadow-card` | Cards padrão do sistema |

---

#### Breakpoints e Responsividade

O Noozi é **mobile-first** — a interface base é desenvolvida para mobile e expandida progressivamente para telas maiores com os prefixos de breakpoint.

| Prefixo | Largura mínima | Dispositivo alvo |
|---------|---------------|-----------------|
| *(sem prefixo)* | < 375px | Mobile pequeno — base de todos os estilos |
| `xs:` | ≥ 375px | Mobile pequeno (iPhone SE, androids compactos) |
| `sm:` | ≥ 390px | Mobile padrão (iPhone 14, maioria dos androids) |
| `md:` | ≥ 768px | Tablet retrato (iPad, iPad Mini) |
| `lg:` | ≥ 1024px | Tablet paisagem (iPad deitado) + desktops pequenos |
| `xl:` | ≥ 1280px | Desktop padrão |
| `2xl:` | ≥ 1536px | Desktop grande / telas wide |
| `landscape:` | — | Qualquer dispositivo em modo paisagem (orientação) |
| `portrait:` | — | Qualquer dispositivo em modo retrato (orientação) |

**Exemplos de uso:**

```tsx
// layout em coluna no mobile, linha no tablet
<div className="flex-col md:flex-row">

// elemento visível só em mobile e tablet
<nav className="block lg:hidden">

// grid adaptável
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

// elemento só em modo paisagem
<div className="hidden landscape:block">
```

> 💡 Escreva sempre o estilo base pensando no menor dispositivo (mobile < 375px), e use os prefixos para adaptar progressivamente.

---

## ♿ UX/UI e Acessibilidade

O Noozi é um sistema de gestão com foco principal em **mobile e tablet** (PWA). As diretrizes abaixo devem ser seguidas em todos os componentes e telas.

---

### Elementos Interativos

- Elementos clicáveis (botões, links, ícones) devem ter altura mínima de **44px** (`h-11`) para garantir área de toque adequada em touchscreens
- Todo elemento interativo deve ter estado `hover`, `focus` e `disabled` visualmente distintos
- Use `transition-colors` e `transition-opacity` para transições suaves
- Elementos interativos devem ser **acessíveis via teclado** (Tab, Enter, Esc)

---

### HTML Semântico

Use sempre o elemento HTML correto para cada finalidade. Além de melhorar a acessibilidade, isso garante comportamento nativo correto (foco, teclado, leitores de tela).

| Situação | ✅ Correto | ❌ Evite |
|----------|-----------|---------|
| Ação (ex: salvar, excluir) | `<button>` | `<div onClick>` |
| Navegação interna | `<Link>` | `<div onClick>` |
| Navegação externa | `<a>` | `<span onClick>` |
| Menu de navegação | `<nav>` | `<div id="menu">` |
| Área principal | `<main>` | `<div id="content">` |
| Cabeçalho | `<header>` | `<div id="header">` |

```tsx
// ✅ Correto — botão de ícone com aria-label
<button aria-label="Excluir produto">
  <Trash2 size={16} />
</button>

// ❌ Evite — sem semântica e sem contexto para leitores de tela
<div onClick={handleDelete}>
  <Trash2 size={16} />
</div>
```

---

### Acessibilidade (a11y)

- Garanta que o **contraste de cores** atenda ao mínimo WCAG AA — 4.5:1 para texto normal, 3:1 para texto grande
- Adicione **`aria-label`** em elementos interativos sem texto visível (ex: botões de ícone)
- Campos de formulário devem ter **`<label>`** associado ou `aria-label`
- Imagens devem ter **`alt`** descritivo — ou `alt=""` se forem puramente decorativas

```tsx
// ✅ Correto — imagem descritiva
<img src="/produto.jpg" alt="Embalagem do produto Arroz Integral 1kg" />

// ✅ Correto — imagem decorativa
<img src="/divider.svg" alt="" />

// ✅ Correto — campo com label associado
<label htmlFor="nome">Nome do produto</label>
<input id="nome" type="text" />

// ✅ Correto — campo com aria-label
<input type="search" aria-label="Buscar produto" />
```

---

### Hierarquia Visual

- Mantenha clara a hierarquia entre informação primária e secundária — o olho do usuário deve ser guiado naturalmente ao dado mais importante primeiro
- Use `text-noozi-text` para informação principal e `text-noozi-muted` para informação secundária
- Tamanho, peso (`font-bold`, `font-medium`) e cor devem reforçar a hierarquia — nunca contradizê-la

---

### Feedback ao Usuário

- Toda ação do usuário deve ter retorno visual imediato (loading, sucesso, erro)
- Use os tokens de `status-*` para comunicar estados de forma consistente:

| Estado | Token | Uso |
|--------|-------|-----|
| Sucesso | `status-success` | Confirmações, salvamentos |
| Alerta | `status-warning` | Avisos, atenção necessária |
| Erro | `status-danger` | Falhas, ações destrutivas |
| Informação | `status-info` | Mensagens neutras, dicas |

- Nunca deixe o usuário sem feedback após interações assíncronas (chamadas de API, submissões de formulário)

---

### Consistência

- Reutilize componentes existentes antes de criar novos
- Não crie variações visuais de um componente sem alinhar com o **Tech Leader** e o **Designer**
- Espaçamentos, tamanhos e cores devem sempre vir do Design System — nunca valores arbitrários

---

## 🗂️ Nomenclatura de Arquivos e Pastas

Siga os padrões abaixo para manter a consistência em todo o projeto:

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Componentes React | `PascalCase` | `ProductCard.tsx`, `StockTable.tsx` |
| Hooks customizados | `camelCase` com prefixo `use` | `useProducts.ts`, `useStockFilter.ts` |
| Utilitários e helpers | `camelCase` | `formatCurrency.ts`, `calculateStock.ts` |
| Arquivos de estilo | `kebab-case` | `product-card.module.css` |
| Pastas | `kebab-case` | `components/`, `stock-management/` |
| Arquivos de tipos | `PascalCase` com sufixo `.types` | `Product.types.ts` |
| Constantes | `UPPER_SNAKE_CASE` | `const MAX_STOCK_LIMIT = 9999` |

> Ao criar um novo componente, crie também uma pasta com o nome dele e um `index.ts` que o re-exporta. Isso mantém os imports limpos.

```
components/
  Cards/
    ProductCard/
      ProductCard.tsx
      index.ts
```

---

## 🏷️ Versionamento

Este projeto segue o padrão **[Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/)**: `MAJOR.MINOR.PATCH`

Para mais detalhes sobre o significado de cada versão e exemplos práticos consulte o [README.md](README.md), e para histórico de mudanças, consulte o [CHANGELOG.md](CHANGELOG.md).

> ⚠️ O **bump de versão** é responsabilidade exclusiva do **Tech Leader**. Contribuidores **não devem alterar** o campo `version` no `package.json`.

---

## 🐛 Reportando Bugs

Encontrou um problema? Abra uma **Issue** pelo GitHub.

Ao clicar em **"New Issue"**, o template de bug do nosso projeto será carregado automaticamente com a estrutura necessária. Preencha todos os campos com o máximo de detalhes possível.

O template cobre:
- Descrição do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Ambiente (OS, navegador, versão)
- Evidências (prints, vídeos, logs)

> ⚠️ Antes de abrir uma Issue, verifique se o mesmo bug já não foi reportado anteriormente.

---

## 💬 Comunicação

- **Dúvidas sobre o código ou arquitetura** → abra uma [Issue](https://github.com/LeonardoRDA1604/Noozi-Frontend/issues) com a label `question`
- **Sugestões de melhoria** → abra uma [Issue](https://github.com/LeonardoRDA1604/Noozi-Frontend/issues) com a label `enhancement`
- **Bugs encontrados** → abra uma [Issue](https://github.com/LeonardoRDA1604/Noozi-Frontend/issues) com a label `bug` (veja a seção [Reportando Bugs](#-reportando-bugs))
- **Discussões do time e alinhamentos** → utilize o canal definido pelo Tech Leader (Slack, Discord, etc.)
- **Revisões e feedbacks de PR** → diretamente nos comentários do Pull Request no GitHub

---

## 📖 Precisa de Ajuda?

Caso tenha dúvidas, abra uma **Issue** ou entre em contato com o Tech Leader do repositório.


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<!-- ---
<br />
<div align="center" style="background-color:#111; color:#fff; padding:20px; border-radius:8px; font-size:18px;">
  [EN] English
</div>

TO DO -->