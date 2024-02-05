import React from 'react';
import {LinkedCompareList} from "./LinkedCompareList";
import {useUseCase} from "../../../../contexts/UseCaseContext";
import {LinkedCompareListItem} from "./LinkedCompareListItem";
import {LinkedProduct} from "../../../../models";

export const LinkedCompareListContainer = () => {
    const {getCompareList, removeProductFromCompareList, addSelectedProduct} = useUseCase()
    const compareList = getCompareList();

    if (!compareList.length) {
        return null
    }

    return (
        <LinkedCompareList>
            {compareList.map((compareItem) => (
                <LinkedCompareListItem
                    linkedProduct={compareItem}
                    key={compareItem.id}
                    handleRemove={(linkedProduct: LinkedProduct) => removeProductFromCompareList.execute({product: linkedProduct})}
                    handleOpenModal={(linkedProduct: LinkedProduct) => addSelectedProduct.execute({product: linkedProduct})}
                />
            ))}
        </LinkedCompareList>
    );
};

