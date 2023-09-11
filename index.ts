Bun.serve({
  fetch(request) {
    return new Response(process.env.VARIABLE);
  }
});

console.log("Listening on Port 3000");
