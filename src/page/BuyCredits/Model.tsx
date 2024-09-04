"use client";
import { useCallback, useEffect } from "react";
import View from "./View";
import { ProductOutput } from "@/services/openapi";

type Props = {
  getProducts: VoidFunction;
  products: ProductOutput[];
  selectCreditsPack: (productId: string) => void;
  coins: number
};

const ViewModel: React.FC<Props> = ({ getProducts, products, selectCreditsPack, coins }) => {
  useEffect(() => {
    getProducts();
  }, []);

  const onSelectProduct = useCallback((productId: string) => () => {
    selectCreditsPack(productId)
  }, [])

  return <View {...{ products, onSelectProduct, coins }} />;
};

export default ViewModel;
