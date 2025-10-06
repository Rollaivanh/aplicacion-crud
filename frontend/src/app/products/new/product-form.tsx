"use client";

import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

export function ProductForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {});

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label>Product Name</Label>
        <Input {...register("name")} />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Input {...register("Description")} />
      </div>

      <div className="space-y-2">
        <Label>Price</Label>
        <Input {...register("Price")} />
      </div>

      <div className="space-y-2">
        <Label>Image</Label>
        <Input {...register("imagen")} />
      </div>

      <Button className="w-full">Create Product</Button>
    </form>
  );
}
