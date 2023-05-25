module.exports = async (port) => {
  process.env.PORT = port;
  await import('../dist/server.js');
  await new Promise((r) => setTimeout(r, 3000));
};
