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

  // Safety check: pastikan price & discountedProduct.price ada
  const safePrice = typeof price === "number" ? price : 0;
  const safeDiscountedPrice =
    discountedProduct && typeof discountedProduct.price === "number"
      ? discountedProduct.price
      : 0;

  const total = calculateTotal(quantity, safePrice);

  return (
    <div className="mx-20 my-20 grid gap-3 ">
      <div className="bg-amber-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Arrow Function</h2>
        <p>a = 3</p>
        <p>b = 3</p>
        <p>arrowFunction : perkalian</p>
        <p>console log = {mathUtils.multiply(3, 3)}</p>
      </div>

      <div className="bg-red-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Destructuring</h2>
        <div className="border-2 w-auto p-4 rounded-lg">
          <h2 className="text-2xl font-bold">🎧 Product Detail</h2>
          <div className="p-6 w-80">
            <p className="text-lg font-semibold">{title || "No title"}</p>
            <p>Price: Rp {safePrice.toLocaleString()}</p>
            <p>Stock: {stock ?? 0}</p>
            <p className="mt-2 text-sm text-gray-500">
              Available colors: {mainColor || "-"}, {secondaryColor || "-"},{" "}
              {thirdColor || "-"}
            </p>
          </div>
        </div>
        <p className="font-medium">
          If you buy {quantity} items → Total = Rp {total.toLocaleString()}
        </p>
      </div>

      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Discounted Product (Spread)</h2>
        <p>Title: {discountedProduct?.title || "-"}</p>
        <p>New Price: Rp {safeDiscountedPrice.toLocaleString()}</p>
        <p>
          Discount Active:{" "}
          {discountedProduct?.isDiscount ? "✅ Yes" : "❌ No"}
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p>Spread And Rest</p>
        <p>
          Beli {quantity} unit → Total: Rp{" "}
          {mathUtils.multiply(safeDiscountedPrice, quantity).toLocaleString()}
        </p>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Rest Operator</h2>
          <p>Product Name (custom alias): {productName || "-"}</p>
          <p>Remaining Data:</p>
          <pre>{JSON.stringify(restProduct || {}, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
