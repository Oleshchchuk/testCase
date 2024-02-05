import React from 'react';
import {useUseCase} from "../../../../contexts/UseCaseContext";
import LinkedProductListItem from "./LinkedProductListItem";

const linkNameByType = {analog: 'Аналог', related: 'Сопутствующий товар'}
export const LinkedProductListContainer = () => {
    const {getLinkedProductsList, linkedListItemUseCaseAdapter} = useUseCase()
    const linkedProducts = getLinkedProductsList();

    if (!linkedProducts.length) {
        return null
    }

    return (
        <ul>
            {linkedProducts.map((linkedProduct) => (
                <LinkedProductListItem
                    linkName={linkedProduct.linkType && linkNameByType[linkedProduct.linkType]}
                    key={linkedProduct.id}
                    linkedProduct={linkedProduct}
                    handleClick={(linkedProduct) =>linkedListItemUseCaseAdapter(linkedProduct)}
                />
            ))}
        </ul>

    );
};



