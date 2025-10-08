import Link from "next/link";
import { getProducts } from "./products/products.api";
import { buttonVariants, Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic"



async function HomePage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">NextNestApp</h1>
        <Link href="/products/new" className={buttonVariants()}>
          Create Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product: any) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {product.name}
                <span className="text-sm font-bold text-gray-500">
                 ${product.price} 
                 </span>
                   </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <img src={product.image} alt="" />
              <p>{product.description}</p>
           
            </CardContent>
            <CardFooter className="flex justify-between">
                 <Button className="mt-5">Comprar</Button>
                 <Button className="mt-5" variant={"destructive"}>Eliminar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
