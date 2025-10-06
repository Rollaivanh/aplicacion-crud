import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./product-form";

export default function ProductNewPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[380px] shadow-md border border-border">
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <ProductForm />
        </CardContent>
      </Card>
    </div>
  );
}
