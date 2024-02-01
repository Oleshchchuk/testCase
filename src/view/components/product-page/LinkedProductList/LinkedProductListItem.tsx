import React, {FC, useContext} from 'react';
import {LinkedProduct} from "../../../../models";
import {Modal} from "../../common/modal";
import {ProductCard} from "../../common/ProductCard";
import {UseCaseContext} from "../../../../contexts/UseCaseContext";
import {useModal} from "../../../hooks/useModal";


interface LinkedProductItemProps {
    product: LinkedProduct;
}

const linkNameByType = {analog: 'Аналог', related: 'Сопутствующий товар'}

const LinkedProductListItem: FC<LinkedProductItemProps> = ({product}) => {
    const {addProductToCompareList} = useContext(UseCaseContext);
    const {isOpen, toggleModal} = useModal();

    const linkName = product.linkType && linkNameByType[product.linkType]
    const handleClick = () => {
        if (linkName === linkNameByType.analog) {
            return addProductToCompareList.execute({product});
        }
        toggleModal()
    };

    return (
        <>
            <li>
                {linkName && linkName + ': '}
                <button onClick={handleClick}>{product.name}</button>
            </li>
            {isOpen && (
                <Modal onClose={toggleModal}>
                    <ProductCard product={product} noBorder></ProductCard>
                </Modal>
            )}
        </>

    );
}


export default LinkedProductListItem;