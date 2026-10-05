# Pedro Nascimento Developer

Projeto do meu site profissional: [pedronascimento.dev.br](https://pedronascimento.dev.br/).

Página estática gerada com [Nuxt 4](https://nuxt.com/) (Vue 3) e publicada no
Cloudflare Pages. O tema (escuro, sépia ou claro) usa o
[`@nuxtjs/color-mode`](https://color-mode.nuxtjs.org/) e, por padrão, segue o
tema do sistema.

## Desenvolvimento

Requer Node.js 22 ou mais novo (o CI usa o 24 LTS).

```bash
npm install        # instala as dependências
npm run dev        # servidor local em http://localhost:3000
npm run generate   # gera o site estático em .output/public
npm run preview    # serve o resultado do generate
```

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `app/pages/index.vue` | a página |
| `app/components/` | seletor de tema e ícones |
| `app/error.vue` | página de erro (404) |
| `app/assets/css/` | variáveis de cor de cada tema e fontes |
| `app/assets/images/pedro_nascimento.jpeg` | imagem original do avatar (2048x2048) |
| `public/` | arquivos servidos como estão: favicon, `og-image.jpg`, `_headers` |
| `scripts/gera-imagens.py` | gera o avatar, a `og-image.jpg` e o `apple-touch-icon.png` a partir da imagem original |

Ao trocar a imagem original, rode `python3 scripts/gera-imagens.py` (requer Pillow).

## Deploy

Todo push na `main` dispara o workflow `.github/workflows/deploy_production.yml`,
que gera o site e publica `.output/public` no projeto `pedronascimento` do
Cloudflare Pages com o `wrangler`. O workflow também pode ser disparado
manualmente (`workflow_dispatch`).

Secrets do repositório usados no deploy:

- `CLOUDFLARE_API_TOKEN`: token com permissão apenas de **Cloudflare Pages: Edit**
- `CLOUDFLARE_ACCOUNT_ID`: conta Cloudflare onde fica o projeto

## Domínios

Os dois domínios estão com DNS na Cloudflare:

- `pedronascimento.dev.br`: domínio principal (canônico), ligado ao Pages
- `www.pedronascimento.dev.br`, `pedronascimento.dev` e `www.pedronascimento.dev`:
  redirecionam com 301 para `https://pedronascimento.dev.br`, preservando caminho
  e query string (Single Redirect Rules de cada zona)

Cabeçalhos HTTP (cache dos assets e segurança) ficam em `public/_headers`.
