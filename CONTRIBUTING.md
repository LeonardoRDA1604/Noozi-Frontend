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
- [2. Regras do Projeto](#-regras-do-projeto)
- [3. Estratégia de Branches](#-estratégia-de-branches)
  - [3.1. Exemplos de criação de branches ](#exemplos-de-criação-de-branches)
  - [3.2. Preparando o ambiente antes de criar sua branch](#preparando-o-ambiente-antes-de-criar-sua-branch)
- [4. Padrão de Mensagens de Commit](#-padrão-de-mensagens-de-commit)
  - [4.1. Exemplos de mensagens de commit ](#exemplos-de-mensagens-de-commit)
- [5. Regras de Pull Request](#-regras-de-pull-request)
  - [5.1. Checklist antes de abrir o PR](#-checklist-antes-de-abrir-o-pr)
- [6. Critérios de Revisão](#-critérios-de-revisão)
- [7. Quem Pode Aprovar](#-quem-pode-aprovar)
- [8. Padrão de Código e Interface](#-padrão-de-código-e-interface)
  - [8.1. ESLint e Formatação](#eslint-e-formatação)
  - [8.2. Componentes Reutilizáveis](#componentes-reutilizáveis)
  - [8.3. Ícones](#ícones)
  - [8.4. Paleta de Cores (Identidade Visual)](#paleta-de-cores-identidade-visual)
- [9. Nomenclatura de Arquivos e Pastas](#️-nomenclatura-de-arquivos-e-pastas)
- [10. Acessibilidade](#-acessibilidade)
- [11. Versionamento](#️-versionamento)
- [12. Reportando Bugs](#-reportando-bugs)
- [13. Comunicação](#-comunicação)
- [14. Precisa de Ajuda?](#-precisa-de-ajuda)

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
- **Crie componentes reutilizáveis** seguindo os padrões do projeto (consulte a pasta `components/`)
- Componentes devem ser genéricos o suficiente para serem reaproveitados em diferentes partes do sistema
- Documente props e comportamentos esperados via comentários ou TypeScript types/interfaces

### Ícones
- Utilize exclusivamente a biblioteca **[Lucide React](https://lucide.dev/)** para ícones
- Não adicione outras bibliotecas de ícones ao projeto
- Importe apenas os ícones necessários (tree-shaking)

✅ Correto — import específico
```tsx
import { Package, AlertCircle, Search } from 'lucide-react'
```

❌ Evite — import de toda a biblioteca
```tsx
import * as Icons from 'lucide-react'
```

### Paleta de Cores (Identidade Visual)
Respeite a paleta de cores oficial do projeto em todos os componentes e estilos:

| Cor | Hex | RGBA | HSL | Tailwind CSS |
|------|-----|------|-----|--------------|
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#30B7F0"/></svg> Azul-céu (Sky blue) | `#30B7F0` | `rgba(48, 183, 240, 1)` | `hsl(199, 85%, 56%)` | `bg-[#30B7F0]` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#1752FD"/></svg> Azul intenso (Bright blue) | `#1752FD` | `rgba(23, 82, 253, 1)` | `hsl(227, 98%, 54%)` | `bg-[#1752FD]` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#9F9F9F"/></svg> Cinza médio (Medium gray) | `#9F9F9F` | `rgba(159, 159, 159, 1)` | `hsl(0, 0%, 62%)` | `bg-[#9F9F9F]` |
| <svg width="20" height="20"><circle cx="10" cy="12" r="8" fill="#FFFFFF" stroke="#ccc"/></svg> Branco (White) | `#FFFFFF` | `rgba(255, 255, 255, 1)` | `hsl(0, 0%, 100%)` | `bg-[#FFFFFF]` |


> ℹ️ **Tailwind CSS** — como são cores customizadas fora da paleta padrão do Tailwind, utilize a sintaxe de valor arbitrário `bg-[#hex]`, `text-[#hex]`, `border-[#hex]` conforme o contexto.

> ⚠️ Não utilize cores fora dessa paleta sem aprovação do Tech Leader ou do Designer.

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

## ♿ Acessibilidade

Como projeto front-end, seguimos boas práticas de acessibilidade. Ao criar ou alterar componentes:

- Use **HTML semântico** — prefira `<button>` a `<div onClick>`, `<nav>` a `<div id="menu">`, etc.
- Adicione **`aria-label`** em elementos interativos sem texto visível (ex: botões de ícone)
- Garanta que o **contraste de cores** atenda ao mínimo WCAG AA (4.5:1 para texto normal, 3:1 para texto grande)
- Campos de formulário devem ter **`<label>`** associado ou `aria-label`
- Imagens devem ter **`alt`** descritivo (ou `alt=""` se for puramente decorativa)
- Elementos interativos devem ser **acessíveis via teclado** (Tab, Enter, Esc)

```tsx
// ✅ Correto — botão de ícone com aria-label
<button aria-label="Excluir produto">
  <Trash2 size={16} />
</button>

// ❌ Evite — sem contexto para leitores de tela
<div onClick={handleDelete}>
  <Trash2 size={16} />
</div>
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