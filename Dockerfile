FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
# Instalar el servidor serve para servir archivos estáticos
RUN npm install -g serve
# Servir la carpeta dist en el puerto 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
