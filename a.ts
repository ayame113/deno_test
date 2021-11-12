const res = await fetch(new URL("./test.csv", import.meta.url));
console.log(await res.text());
