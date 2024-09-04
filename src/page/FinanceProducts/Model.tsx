"use client";
import { ProductOutput } from "@/services/openapi";
import View from "./View";
import { useCallback, useEffect, useState } from "react";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { FinanceproductsState } from "@/reducers/financeproductsReducer";

type Props = {
  getProducts: VoidFunction;
  products: ProductOutput[];
  deleteProduct: (product_id: string) => void;
  newTitle: string;
  newDescription: string;
  newAmount: number;
  newCredits: number;
  changeFinanceproductsPageFields: ReduxUniversalSetter<FinanceproductsState>;
  submitNewProduct: VoidFunction
};

const ViewModel: React.FC<Props> = ({
  getProducts,
  products,
  deleteProduct,
  newTitle,
  newDescription,
  newAmount,
  newCredits,
  changeFinanceproductsPageFields,
  submitNewProduct
}) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<string | null>(null);
  const [openProductForm, setOpenProductForm] = useState<boolean>(false);
  useEffect(() => {
    getProducts();
  }, []);

  const deleteOne = useCallback(
    (productId: string) => () => {
      setCurrentProduct(productId);
      setConfirmDelete(true);
    },
    []
  );

  const onCloseConfirm = useCallback(() => {
    setConfirmDelete(false);
    setCurrentProduct(null);
  }, []);

  const onConfirmDelete = useCallback(() => {
    if (currentProduct) {
      deleteProduct(currentProduct);
      onCloseConfirm();
    }
  }, [currentProduct, deleteProduct, onCloseConfirm]);

  const pressOpenNewForm = useCallback(() => {
    setOpenProductForm(true);
  }, []);

  const onCloseProductForm = useCallback(() => {
    setOpenProductForm(false);
  }, []);

  const onChangeFormTitle = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeFinanceproductsPageFields({ newTitle: e.target.value });
    },
    [changeFinanceproductsPageFields]
  );

  const onChangeFormDescription = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeFinanceproductsPageFields({ newDescription: e.target.value });
    },
    [changeFinanceproductsPageFields]
  );

  const onChangeFormCredits = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeFinanceproductsPageFields({ newCredits: Number(e.target.value) });
    },
    [changeFinanceproductsPageFields]
  );

  const onChangeFormAmount = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeFinanceproductsPageFields({ newAmount: Number(e.target.value) });
    },
    [changeFinanceproductsPageFields]
  );

  const onSubmitNewProduct = useCallback(() => {
    submitNewProduct()
    setOpenProductForm(false)
  }, [submitNewProduct])
  return (
    <View
      {...{
        products,
        deleteOne,
        confirmDelete,
        onCloseConfirm,
        onConfirmDelete,
        pressOpenNewForm,
        openProductForm,
        onCloseProductForm,
        newTitle,
        newDescription,
        newAmount,
        newCredits,
        onChangeFormTitle,
        onChangeFormDescription,
        onChangeFormCredits,
        onChangeFormAmount,
        onSubmitNewProduct
      }}
    />
  );
};

export default ViewModel;
