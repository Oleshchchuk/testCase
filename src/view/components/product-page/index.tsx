import {FC, useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {UseCaseContext} from "../../../contexts/UseCaseContext";
import {ProductCard} from "../common/ProductCard";
import {productSelector} from "../../../store/selectors/product-page";
import {useSelector} from "react-redux";
import {LinkedProductList} from "./LinkedProductList";
import {LinkedCompareList} from "./LinkedCompareList";
import {cn} from "@bem-react/classname";
import './style.css';

const cnContainer = cn('Container');

export const ProductPage: FC = () => {
    const {productId} = useParams()
    const {fetchProductData, clearCompareList} = useContext(UseCaseContext);
    const product = useSelector(productSelector);

    useEffect(() => {
        if (productId) {
            fetchProductData.execute({productId})
        }


        return () => {
            clearCompareList.execute()
        };
    }, [clearCompareList, fetchProductData, productId])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className={cnContainer()}>
                <div className={cnContainer('Item')}>
                    <ProductCard product={product}/>
                </div>
                <LinkedCompareList/>
            </div>
            <LinkedProductList/>
        </>
    );
};
