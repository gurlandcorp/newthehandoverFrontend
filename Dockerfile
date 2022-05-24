FROM node:16.15.0 AS deps

RUN mkdir /ho_frontend

ENV NODE_ENV=production

WORKDIR /ho_frontend

# COPY ./package.json ./
COPY ["package.json", "package-lock.json*", "./"]

RUN npm cache clear --force

RUN npm install --legacy-peer-deps --production
# RUN npm install --legacy-peer-deps

# COPY next.config.js ./next.config.js
# COPY components ./components
# COPY config ./config
# COPY context ./context
# COPY database ./database
# COPY helpers ./helpers
# COPY pages ./pages
# COPY public ./public
# COPY styles ./styles
COPY .env.local ./env.local
COPY . .

RUN npm run build

CMD ["npm", "start"]