export const PageNotFound = () => {
  const [products, setProducts] = useState<ProductsAll[]>([]);
  const [productsById, setProductsById] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const phones = await getProductsByCategory('phones');
      setProducts(phones);
      console.log('Phones only:', phones);
    } catch (err) {
      // console.error('Fetch error:', err);
      setError(`Упс, щось пішло не так ${err} 🙈`);
    }
  };

  const fetchProductById = async () => {
    try {
      const phoneById = await getProductById(
        'phones',
        'apple-iphone-13-pro-max-128gb-graphite',
      );
      setProductsById(phoneById);
      console.log('Phones byid:', phoneById);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Упс, щось пішло не так ${err} 🙈`);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchProductById();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <h1 className="title">Page not found</h1>
      <p>{products[1]?.name}</p>
      <p className="text-black bg-yellow-200">
        {productsById[0]?.description[0].text}
      </p>

      <section className=" flex flex-col gap-6 col-span-4 sm:col-span-12 xl:col-span-24">
        <h2>Gadget store</h2>
      </section>
    </>
  );
};
