for (let i = 0; i <= 200; i++) {
  setTimeout(() => {
    console.clear();
    console.log("[" + "=".repeat(i) + " ".repeat(200 - i) + "] " + i * 5 + "%");
  }, i * 200);
}
