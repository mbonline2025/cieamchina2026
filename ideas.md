# Brainstorming: Redesenho Missão Ásia 2026

## Três Abordagens de Design

### 1. **Minimalismo Corporativo Moderno**
Estética limpa e profissional com tipografia ousada, muito espaço em branco, cores neutras com acentos em azul/dourado. Foco em clareza e elegância corporativa.
**Probabilidade:** 0.06

### 2. **Luxo Contemporâneo com Movimento**
Design premium com degradês sutis, tipografia sofisticada, animações elegantes e imagens de alta qualidade. Paleta preta/dourado/branco com profundidade visual e interações fluidas.
**Probabilidade:** 0.08

### 3. **Futurismo Asiático Vibrante**
Inspiração em estética asiática moderna com padrões geométricos, cores vibrantes (neon/saturadas), tipografia experimental e imagens urbanas dinâmicas das cidades.
**Probabilidade:** 0.04

---

## Abordagem Escolhida: Luxo Contemporâneo com Movimento

### Design Movement
**Neo-Luxury Minimalism** — Fusão de elegância corporativa com sofisticação visual, inspirado em design de hotéis de luxo e marcas premium globais.

### Core Principles
1. **Espaço Respirável** — Seções amplas com muito whitespace, evitando poluição visual
2. **Hierarquia Clara** — Tipografia e tamanhos que guiam naturalmente o olhar
3. **Imagens Impactantes** — Fotografias de alta qualidade como protagonistas visuais
4. **Transições Suaves** — Animações elegantes que conectam seções sem agressividade

### Color Philosophy
- **Preto Profundo** (#0A0A0A) — Sofisticação e foco
- **Branco Cremoso** (#F5F3F0) — Calidez e legibilidade
- **Dourado Luxuoso** (#D4AF37) — Acentos premium e destaque
- **Cinza Neutro** (#8B8B8B) — Texto secundário e divisões
- **Fundo Escuro** — Realça imagens e cria profundidade

### Layout Paradigm
- **Hero com Imagem Full-Width** — Impacto visual imediato
- **Seções Alternadas** — Texto à esquerda/imagem à direita, depois invertido
- **Cards Minimalistas** — Sem bordas pesadas, apenas sombras sutis
- **Divisores Orgânicos** — Transições suaves entre seções

### Signature Elements
1. **Linha Dourada Delgada** — Separadores elegantes entre seções
2. **Números Grandes em Fundo** — Estatísticas com tipografia monumental
3. **Imagens com Overlay Gradiente** — Profundidade e legibilidade de texto

### Interaction Philosophy
- Hover effects sutis (opacity, scale pequeno)
- Scroll animations que revelam conteúdo gradualmente
- Botões com transições suaves
- Sem animações agressivas ou poluídas

### Animation Guidelines
- Fade-in em scroll (opacity 0 → 1, 600ms)
- Scale suave em hover (1 → 1.02, 200ms ease-out)
- Slide-up ao entrar na viewport (transform translateY, 500ms)
- Respeitar `prefers-reduced-motion`

### Typography System
- **Display**: Playfair Display (serif, elegante) — títulos principais
- **Heading**: Montserrat Bold — subtítulos e seções
- **Body**: Inter Regular — corpo de texto
- **Accent**: IBM Plex Mono — labels e detalhes técnicos

### Brand Essence
**Porta de acesso ao ecossistema de inovação asiático para líderes industriais brasileiros.**
Personalidade: Sofisticado, Confiável, Visionary

### Brand Voice
- Headlines: Ousadas, aspiracionais, sem clichês
- CTAs: Diretos e premium ("Garanta sua vaga" em vez de "Clique aqui")
- Microcopy: Informativo e elegante

### Wordmark & Logo
Símbolo geométrico: Ponte estilizada conectando dois pontos (Amazonas ↔ Ásia), em dourado sobre fundo transparente.

### Signature Brand Color
**Dourado Luxuoso (#D4AF37)** — Unmistakably premium, conecta com identidade CIEAM

---

## Implementação
Todas as decisões de design acima serão rigorosamente aplicadas em cada componente, CSS e animação.
