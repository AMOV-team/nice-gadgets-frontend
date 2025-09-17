import type { Products } from '../types/Products';
import type { ProductsAll } from '../types/ProductsAll';
import { client } from '../utils/fetchClient';

export type Category = 'phones' | 'tablets' | 'accessories';

// GET ByCategory
export const getProductsByCategory = (
  category: Category,
): Promise<ProductsAll[]> => {
  return client.get<ProductsAll[]>(
    `/products?category=eq.${category}&select=*`,
  );
};

// GET byId
export const getProductById = (
  category: Category,
  id: string,
): Promise<Products> => {
  return client.get<Products>(`/${category}?id=eq.${id}&select=*`);
};

// POST
export const createProduct = (
  category: Category,
  product: Omit<Products, 'id'>,
): Promise<Products> => {
  return client.post<Products>(`/${category}`, product);
};

// PATCH
export const updateProduct = (
  category: Category,
  product: Products,
): Promise<Products> => {
  return client.patch<Products>(`/${category}?id=eq.${product.id}`, product);
};

// DELETE
export const deleteProduct = (
  category: Category,
  id: string,
): Promise<void> => {
  return client.delete(`/${category}?id=eq.${id}`);
};
