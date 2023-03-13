process.on("message", ({ duration, id }) => {
  const start = Date.now();
  while (Date.now() - start < duration) {}
  process.send({ duration, id });
});
