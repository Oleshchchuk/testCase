import React, {FC} from 'react';
import {ProductCard} from "../common/ProductCard";
import {cn} from "@bem-react/classname";
import './style.css';
import {LinkedProduct, Product} from "../../../models";
import {LinkedCompareListContainer} from "./LinkedCompareList";
import {LinkedProductListContainer} from "./LinkedProductList";
import {Modal} from "../common/modal";

const cnContainer = cn('Container');

interface ProductPageProps {
    product: Product;
    selectedProduct: LinkedProduct | undefined;
    onModalClose: () => void
    isModalOpen: boolean
}

export const ProductPage: FC<ProductPageProps> = ({product,selectedProduct, onModalClose, isModalOpen}) => (
    <>
        <div className={cnContainer()}>
            <div className={cnContainer('Item')}>
                <ProductCard product={product}/>
            </div>
            <LinkedCompareListContainer/>
        </div>
        <LinkedProductListContainer/>
        {isModalOpen && (
            <Modal onClose={() => onModalClose()}>
                {selectedProduct ? <ProductCard product={selectedProduct} noBorder /> : 'Загрузка...'}
            </Modal>
        )}
    </>
);