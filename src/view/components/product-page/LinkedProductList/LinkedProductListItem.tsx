import React, {FC} from 'react';
import {LinkedProduct} from "../../../../models";

interface LinkedProductItemProps {
    linkedProduct: LinkedProduct;
    handleClick: (linkedProduct: LinkedProduct) => void;
    linkName: string | undefined;
}

const LinkedProductListItem: FC<LinkedProductItemProps> = ({linkedProduct, handleClick, linkName}) => {


    return (
        <li>
            {linkName && linkName + ': '}
            <button onClick={() => handleClick(linkedProduct)}>{linkedProduct.name}</button>
        </li>
    );
}


export default LinkedProductListItem;