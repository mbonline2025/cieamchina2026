# 📁 Guia de Mídia - Missão Ásia 2026

Estrutura organizada para todas as mídias do projeto.

## 📂 Estrutura de Pastas

```
public/
├── logos/              # Logos da marca CIEAM
│   └── cieam.png       # Logo principal
│
├── images/             # Imagens em geral
│   ├── cities/         # Imagens das cidades
│   │   ├── guangzhou.webp
│   │   ├── shanghai.png
│   │   └── tokyo.jpg
│   ├── hero/           # Imagens para hero section
│   │   └── [hero-images]
│   └── cards/          # Imagens para cards
│       └── [card-images]
│
├── icons/              # Ícones SVG/PNG
│   └── [icons-aqui]
│
└── videos/             # Vídeos e mídia de movimento
    └── [videos-aqui]
```

## 🎨 Formatação Recomendada

### Imagens
- **Logos**: PNG (transparência) - min. 512x512px
- **Hero**: WebP otimizado - 1920x1080px mínimo
- **Cities**: WebP otimizado - 1200x800px mínimo
- **Cards**: WebP - 600x400px
- **Icons**: SVG (preferência) ou PNG 48x48px+

### Vídeos
- **MP4** (H.264) para compatibilidade máxima
- **WebM** para otimização web
- Máx. 20MB para vídeos em background

## 📌 Como Usar

```tsx
// Logos
<img src="/logos/cieam.png" alt="CIEAM" />

// Imagens de cidade
<img src="/images/cities/guangzhou.webp" alt="Guangzhou" />

// Ícones
<img src="/icons/feature.svg" alt="Feature" />
```

## ✅ Mídias Atuais

- ✅ Logo CIEAM
- ✅ Guangzhou (1920x1080)
- ✅ Shanghai (1920x1080)
- ✅ Tokyo (1920x1080)

## 📝 Adicione Aqui

Para adicionar novas mídias:
1. Faça upload na pasta apropriada
2. Use nomes descritivos e em lowercase
3. Comprima imagens (Tinify, ImageOptim)
4. Prefira WebP para imagens grandes
