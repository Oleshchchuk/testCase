import React, {FC} from 'react';
import {Product} from "../../../../models";
import {cn} from "@bem-react/classname";
import './style.css';

interface ProductCardProps {
    product: Product;
    noBorder?: boolean;
}

const cnProductCard = cn('ProductCard');

export const ProductCard: FC<ProductCardProps> = ({product, noBorder = false}) => {
    return (
        <div className={cnProductCard({NoBorder: noBorder})}>
            <h4 className={cnProductCard('Name')}>{product.name}</h4>
            <span className={cnProductCard('Price')}>Price: {product.price}</span>
        </div>
    );
};