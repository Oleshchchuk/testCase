import React, {FC} from 'react';
import LinkedProductListItem from "./LinkedProductListItem";
import {useSelector} from "react-redux";
import {linkedProductsSelector} from "../../../../store/selectors/product-page";

export const LinkedProductList: FC = () => {
    const linkedProducts = useSelector(linkedProductsSelector);

    return (
        <ul>
            {linkedProducts.map((linkedProduct) => (
                <LinkedProductListItem key={linkedProduct.id} product={linkedProduct}/>
            ))}
        </ul>

    )
};