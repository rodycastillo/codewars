const billboard = (name, price = 30) =>
name.split('').reduce(total => total + price, 0)

console.log(billboard("Jeong-Ho Aristotelis"));

