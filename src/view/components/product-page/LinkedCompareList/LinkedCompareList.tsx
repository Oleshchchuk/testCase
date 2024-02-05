import React, {FC, ReactNode} from 'react';
import './style.css';

interface LinkedCompareListProps {
    children: ReactNode;
}
export const LinkedCompareList: FC<LinkedCompareListProps> = ({children}) => {
    return (
        <div>
            <span className={'Title'}>Сравнение</span>
            <ul className={'LinkedCompareList'}>
                {children}
            </ul>
        </div>
    )
};