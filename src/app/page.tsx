import { mathUtils } from "@/utils/logic";
import {
  calculateTotal,
  discountedProduct,
  mainColor,
  price,
  productName,
  restProduct,
  secondaryColor,
  stock,
  thirdColor,
  title,
} from "@/utils/productData";

export default function Home() {
  const quantity = 2;
  const total = calculateTotal(quantity, price);
  return (
    <div className="mx-20 my-20 grid gap-3 ">
      <div className="bg-amber-100">
        <h2 className="text-lg font-bold">Arrow Function</h2>
        <p>a = 3</p>
        <p>b = 3</p>
        <p>arrowFunction : perkalian</p>
        <p> console log = {mathUtils.multiply(3, 3)}</p>
      </div>
      <div className="bg-red-100">
        <h2 className="text-lg font-bold">Destructuring</h2>
        <div className="border-2  w-auto">
          <h2 className="text-2xl font-bold">🎧 Product Detail</h2>
          <div className=" p-6 w-80">
            <p className="text-lg font-semibold">{title}</p>
            <p>Price: Rp {price.toLocaleString()}</p>
            <p>Stock: {stock}</p>
            <p className="mt-2 text-sm text-gray-500">
              Available colors: {mainColor}, {secondaryColor}, {thirdColor}
            </p>
          </div>
        </div>
        <p className="font-medium">
          If you buy {quantity} items → Total = Rp {total.toLocaleString()}
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Discounted Product (Spread)</h2>
        <p>Title: {discountedProduct.title}</p>
        <p>New Price: Rp {discountedProduct.price.toLocaleString()}</p>
        <p>
          Discount Active: {discountedProduct.isDiscount ? "✅ Yes" : "❌ No"}
        </p>
      </div>
      {/* Total harga */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <p>spread And Rest</p>
        <p>
          Beli {quantity} unit → Total: Rp{" "}
          {mathUtils
            .multiply(discountedProduct.price, quantity)
            .toLocaleString()}
        </p>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Rest Operator</h2>
          <p>Product Name (custom alias): {productName}</p>
          <p>Remaining Data:</p>
          <pre>{JSON.stringify(restProduct, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
