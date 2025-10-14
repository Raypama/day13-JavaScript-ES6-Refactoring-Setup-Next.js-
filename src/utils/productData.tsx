

// Object Destructuring
export const product = {
  title: "Iphone 16e",
  price: 12000000,
  stock: 5,
};

// Ambil value-nya dari object
export const { title, price, stock } = product;

// Array Destructuring
const colors = ["Black", "White", "Blue"];
export const [mainColor, secondaryColor, thirdColor] = colors;

// Arrow Function
export const calculateTotal = (quantity: number, price: number) => quantity * price;
// spread product
export const discountedProduct = {
  ...product,
  price: 11000000,
  isDiscount: true,
};

export const { title: productName, ...restProduct } = product;
