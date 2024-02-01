import React, {FC, useContext} from "react";
import '../style.css';
import {Product} from "../../../../models";
import {UseCaseContext} from "../../../../contexts/UseCaseContext";
import {ProductCard} from "../../common/ProductCard";
import {cn} from "@bem-react/classname";
import {Modal} from "../../common/modal";
import {useModal} from "../../../hooks/useModal";


interface ProductCompareListItemProps {
    product: Product;
}

const cnLinkedCompareList = cn('LinkedCompareList');

export const LinkedCompareListItem: FC<ProductCompareListItemProps> = ({product}) => {
    const {removeProductFromCompareList} = useContext(UseCaseContext);
    const {isOpen, toggleModal} = useModal();

    const handleRemove = () => removeProductFromCompareList.execute({product})

    return (
        <>
            <li className={cnLinkedCompareList('Item')} onClick={toggleModal}>
                <ProductCard product={product}/>
                <button className={'RemoveButton'} onClick={handleRemove}>
                    x
                </button>
            </li>
            {isOpen && (
                <Modal onClose={toggleModal}>
                    <ProductCard product={product} noBorder></ProductCard>
                </Modal>
            )}
        </>
    )
};