import React, {createContext, ReactNode} from 'react';
import {FetchProductDataUseCase} from "../use-cases/FetchProductDataUseCase";
import {ProductService} from "../services/products/ProductService";
import {MockProductPageGateway} from "../gateways/product-page";
import {ReduxService} from "../services/state/ReduxService";
import {AddProductToCompareListUseCase} from "../use-cases/AddProductToCompareListUseCase";
import {RemoveProductFromCompareListUseCase} from "../use-cases/RemoveProductFromCompareListUseCase";
import {ClearCompareListUseCase} from "../use-cases/ClearCompareListUseCase";

interface UseCaseProviderProps {
    children: ReactNode;
}

interface IUseCaseContext {
    fetchProductData: FetchProductDataUseCase
    addProductToCompareList: AddProductToCompareListUseCase
    removeProductFromCompareList: RemoveProductFromCompareListUseCase
    clearCompareList: ClearCompareListUseCase
}

const productGateway = new MockProductPageGateway()
const productService = new ProductService(productGateway)
const reduxService = new ReduxService()

const useCases = {
    fetchProductData: new FetchProductDataUseCase(
        productService,
        reduxService
    ),
    addProductToCompareList: new AddProductToCompareListUseCase(
        reduxService
    ),
    removeProductFromCompareList: new RemoveProductFromCompareListUseCase(
        reduxService
    ),
    clearCompareList: new ClearCompareListUseCase(
        reduxService
    )
} as const

export const UseCaseContext = createContext<IUseCaseContext>(useCases);
export const UseCaseProvider: React.FC<UseCaseProviderProps> = ({children}) => {

    return (
        <UseCaseContext.Provider value={useCases}>
            {children}
        </UseCaseContext.Provider>
    );
};