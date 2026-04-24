# Deploy na Vercel

Este projeto está pronto para ser publicado na Vercel mantendo SSR completo do TanStack Start.

## Passos

1. **Conecte o repositório do GitHub** no painel da Vercel (Add New → Project).
2. A Vercel detecta automaticamente:
   - **Framework Preset:** Other (config do `vercel.json` é usada)
   - **Build Command:** `vite build`
   - **Output Directory:** `.output/public`
   - **Install Command:** `npm install`
3. (Opcional) Defina variáveis de ambiente em **Settings → Environment Variables**.
   - Variáveis públicas devem usar prefixo `VITE_`.
   - Segredos do servidor **não** devem ter o prefixo `VITE_`.
4. Clique em **Deploy**.

## Observações importantes

- O arquivo `wrangler.jsonc` continua no repo porque o **ambiente de preview da Lovable** depende dele. A Vercel ignora esse arquivo (listado em `.vercelignore`).
- Se quiser desativar totalmente o Cloudflare, é necessário desconectar o projeto da Lovable e remover o pacote `@lovable.dev/vite-tanstack-config` substituindo o `vite.config.ts` por uma configuração manual com o plugin `@tanstack/react-start/plugin/vite` — isso é uma operação fora do que o ambiente Lovable suporta.
- Domínio personalizado: configure em **Settings → Domains** após o primeiro deploy.

## Região

A região padrão configurada é `gru1` (São Paulo) para latência baixa no Brasil. Edite em `vercel.json` se desejar outra.
