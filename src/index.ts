import server from './server/Server';




server.listen(process.env.PORT || 3000, () => {
  console.log(`ervidor rodando na porta ${process.env.PORT || 3000}`);
});