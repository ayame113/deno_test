const res = await fetch(new URL("./README.md", import.meta.url));
console.log(await res.text());
