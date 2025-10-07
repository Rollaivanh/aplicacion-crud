"use client";

import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { createProduct } from "../products.api";

export function ProductForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    await createProduct({...data,
      price: parseFloat(data.price)
    })
  });

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label>Product Name</Label>
        <Input {...register("name")} />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Input {...register("description")} />
      </div>

      <div className="space-y-2">
        <Label>Price</Label>
        <Input {...register("price")} />
      </div>

      <div className="space-y-2">
        <Label>Image</Label>
        <Input {...register("image")} />
      </div>

      <Button className="w-full">Create Product</Button>
    </form>
  );
}
