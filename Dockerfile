FROM arm32v7/node:latest
MAINTAINER g.wilken <greg@gwilken.com>

WORKDIR /src/app

COPY . .

RUN npm i

CMD ["node", "index.js"]