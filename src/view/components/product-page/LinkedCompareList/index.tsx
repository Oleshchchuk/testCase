import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {compareListSelector} from "../../../../store/selectors/product-page";
import {LinkedCompareListItem} from "./LinkedCompareListItem";
import './style.css';

export const LinkedCompareList: FC = () => {
    const compareList = useSelector(compareListSelector);

    if (!compareList.length) {
        return null
    }

    return (
        <div>
            <span className={'Title'}>Сравнение</span>
            <ul className={'LinkedCompareList'}>
                {compareList.map((compareItem) => (
                    <LinkedCompareListItem product={compareItem} key={compareItem.id}/>
                ))}
            </ul>
        </div>

    )
};