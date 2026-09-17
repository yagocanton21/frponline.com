# Estágio 1: Build da aplicação
FROM node:22-alpine AS builder

WORKDIR /app

# Copia arquivos de dependência e instala
COPY package.json package-lock.json* ./
RUN npm install

# Copia o restante dos arquivos e faz o build
COPY . .
RUN npm run build

# Estágio 2: Servidor Nginx leve para servir os arquivos estáticos
FROM nginx:alpine

# Remove configurações padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf

# Copia as novas configurações de segurança e performance do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos compilados do Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# A porta padrão do Nginx no container é 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
