FROM Sithuwa/queensithu:fullcontrol

RUN git clone https://github.com/Sithuwa/QUEEN-SITHU-MD /root/QueenSithuWhatsappBot
WORKDIR /root/QueenSithuWhatsappBot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "sithu.js"]
