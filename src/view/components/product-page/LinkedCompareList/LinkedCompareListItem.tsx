import React, {FC} from "react";
import '../style.css';
import {LinkedProduct} from "../../../../models";
import {ProductCard} from "../../common/ProductCard";
import {cn} from "@bem-react/classname";

interface ProductCompareListItemProps {
    linkedProduct: LinkedProduct;
    handleOpenModal: (linkedProduct: LinkedProduct) => void
    handleRemove: (linkedProduct: LinkedProduct) => void
}

const cnLinkedCompareList = cn('LinkedCompareList');

export const LinkedCompareListItem: FC<ProductCompareListItemProps> = ({linkedProduct, handleOpenModal, handleRemove}) => (
    <li className={cnLinkedCompareList('Item')} onClick={() => handleOpenModal(linkedProduct)}>
        <ProductCard product={linkedProduct}/>
        <button className={'RemoveButton'} onClick={(event) => {
            event.stopPropagation()
            handleRemove(linkedProduct)
        }}>
            x
        </button>
    </li>
)