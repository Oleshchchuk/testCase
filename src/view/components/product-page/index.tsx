import React, {useEffect} from 'react';
import {ProductPage} from "./ProductPage";
import {useParams} from "react-router-dom";
import {useUseCase} from "../../../contexts/UseCaseContext";
import {useModal} from "../../hooks/useModal";

export const ProductPageContainer = () => {
    const {productId} = useParams()
    const {
        getProductData,
        clearCompareList,
        getProduct,
        getSelectedProduct,
        removeSelectedProduct,
        getCompareList
    } = useUseCase()
    const removeSelected = () => removeSelectedProduct.execute()
    const product = getProduct();
    const selectedProduct = getSelectedProduct();
    const compareList = getCompareList();
    const {openModal, isOpen, closeModal} = useModal(450, removeSelected);

    const onDestroy = () => {
        if (compareList.length) {
            clearCompareList.execute()
        }
        if (selectedProduct) {
            removeSelected()
        }
        closeModal()
    }

    useEffect(() => {
        if (selectedProduct) {
            openModal()
        }
    }, [selectedProduct])

    useEffect(() => {
        if (productId) {
            getProductData.execute({productId})
        }

        return () => onDestroy()
    }, [clearCompareList, getProductData, productId])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <ProductPage
            product={product}
            onModalClose={closeModal}
            isModalOpen={isOpen}
            selectedProduct={selectedProduct}/>
    );
};

