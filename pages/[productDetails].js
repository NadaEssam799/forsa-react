import ProductDetails from "../components/productDetails";
import { useRouter } from 'next/router'

export default function ProductDetail() {
  const router = useRouter();
  return  <ProductDetails productId={router.query.productDetails}/>;
}
