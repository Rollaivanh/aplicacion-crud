export async function getProducts(){
   const data = await fetch('http://localhost:4000/api/products')
return await data.json()
}











export async function createProduct(productData: any) {
  const res = await fetch('http://localhost:4000/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      cache: "no-store"
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();
  console.log(data);
  
}
