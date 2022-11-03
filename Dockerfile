FROM quay.io//md:beta
RUN git clone https://github.com/Sithuwa/QUEEN-SITHU-MD.git /root/LyFE/
WORKDIR /root/LyFE/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
