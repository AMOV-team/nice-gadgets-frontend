import React, { useState, useEffect } from 'react';
import { Dropdown } from '../atoms/Dropdown';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';
import products from '../../../public/api/products.json';
import type { SortOption } from '../../types/SortOption';
import type { Product } from '../../types/Product';

export const ComparePage: React.FC = () => {
  const [firstProduct, setFirstProduct] = useState<Product | null>(null);
  const [secondProduct, setSecondProduct] = useState<Product | null>(null);
  const [firstProductCategory, setFirstProductCategory] = useState<
    string | null
  >(null);

  const [productOptions, setProductOptions] = useState<SortOption[]>([]);
  const [secondProductOptions, setSecondProductOptions] = useState<
    SortOption[]
  >([]);

  useEffect(() => {
    const allOptions: SortOption[] = products.map((product) => ({
      id: product.id,
      label: product.name,
      category: product.category,
    }));
    setProductOptions(allOptions);
  }, []);

  useEffect(() => {
    if (firstProductCategory) {
      const filteredOptions: SortOption[] = products
        .filter((product) => product.category === firstProductCategory)
        .map((product) => ({
          id: product.id,
          label: product.name,
        }));
      setSecondProductOptions(filteredOptions);
    }
  }, [firstProductCategory]);

  const handleFirstProductSelect = (selectedLabel: string) => {
    const selectedProduct = products.find((p) => p.name === selectedLabel);
    if (selectedProduct) {
      setFirstProduct(selectedProduct);
      setFirstProductCategory(selectedProduct.category);
      //   setSecondProduct(null);
    }
  };

  const handleSecondProductSelect = (selectedLabel: string) => {
    const selectedProduct = products.find((p) => p.name === selectedLabel);
    if (selectedProduct) {
      setSecondProduct(selectedProduct);
    }
  };

  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-2 sm:text-h1-lg">
          Compare devices
        </h1>
      </div>

      <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4">
        <div className="col-start-1 col-end-3 sm:col-end-6">
          <p className="text-small font-mont text-custom-secondary mb-1">
            First device
          </p>
          <Dropdown
            // value={firstProduct?.name ?? null}
            defaultText={
              firstProduct ? firstProduct.name : 'Select a device to compare'
            }
            itemData={productOptions}
            triggerClass="w-full"
            itemClass="w-full"
            onSelect={handleFirstProductSelect}
          />
        </div>

        <div className="col-start-3 col-end-5 sm:col-start-6 sm:col-end-11">
          <p className="text-small font-mont text-custom-secondary mb-1">
            Second device
          </p>
          <Dropdown
            // value={secondProduct?.name ?? null}
            defaultText={
              secondProduct !== null ?
                secondProduct.name
              : 'Select a device to compare'
            }
            itemData={secondProductOptions}
            triggerClass="w-full"
            itemClass="w-full"
            onSelect={handleSecondProductSelect}
            disabled={!firstProduct}
          />
        </div>
      </div>

      {firstProduct && secondProduct && (
        <div className="col-span-full">
          {/* Header Row */}
          <div className="grid grid-cols-3 sm:grid-cols-12 xl:grid-cols-24 gap-4 py-3 border-b border-gray-900 items-center">
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center text-xs font-semibold font-mont text-gray-600 uppercase tracking-wider">
              Spec
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center text-xs font-semibold font-mont text-gray-600 uppercase tracking-wider">
              {firstProduct.name}
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center text-xs font-semibold font-mont text-gray-600 uppercase tracking-wider">
              {secondProduct.name}
            </div>
          </div>

          {/* Image Row */}
          <div className="grid grid-cols-3 sm:grid-cols-12 xl:grid-cols-24 gap-4 py-4 items-center border-b border-gray-200">
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-medium">
              Image
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 flex justify-center items-center">
              <img
                src={firstProduct.image}
                alt={firstProduct.name}
                className="h-20 w-20 object-contain"
              />
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 flex justify-center items-center">
              <img
                src={secondProduct.image}
                alt={secondProduct.name}
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>

          {/* Full Price Row */}
          <div className="grid grid-cols-3 sm:grid-cols-12 xl:grid-cols-24 gap-4 py-4 border-b border-gray-200">
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-mont">
              Full Price
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-mont">{`$ ${firstProduct.fullPrice}`}</div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-mont">{`$ ${secondProduct.fullPrice}`}</div>
          </div>

          {/* Screen Row */}
          <div className="grid grid-cols-3 sm:grid-cols-12 xl:grid-cols-24 gap-4 py-4 border-b border-gray-200">
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-mont">
              Screen
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-mont">
              {firstProduct.screen}
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-mont">
              {secondProduct.screen}
            </div>
          </div>

          {/* Capacity Row */}
          <div className="grid grid-cols-3 sm:grid-cols-12 xl:grid-cols-24 gap-4 py-4 border-b border-gray-200">
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-medium">
              Capacity
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center">
              {firstProduct.capacity}
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center">
              {secondProduct.capacity}
            </div>
          </div>

          {/* RAM Row */}
          <div className="grid grid-cols-3 sm:grid-cols-12 xl:grid-cols-24 gap-4 py-4 border-b border-gray-200">
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center font-medium">
              RAM
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center">
              {firstProduct.ram}
            </div>
            <div className="col-span-1 sm:col-span-4 xl:col-span-8 text-center">
              {secondProduct.ram}
            </div>
          </div>
        </div>
      )}
    </GridContainer>
  );
};
