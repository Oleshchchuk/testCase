import React, {createContext, ReactNode, useContext} from 'react';
import {ProductService} from "../services/products/ProductService";
import {MockProductPageGateway} from "../gateways/product-page";
import {ReduxService} from "../services/state/ReduxService";
import {
    ClearCompareListUseCase,
    AddSelectedProductUseCase,
    RemoveSelectedProductUseCase,
    RemoveProductFromCompareListUseCase,
    AddProductToCompareListUseCase,
    GetProductDataUseCase
} from "../use-cases";
import {LinkedProduct} from "../models";


interface UseCaseProviderProps {
    children: ReactNode;
}


const productService = new ProductService(new MockProductPageGateway())
const reduxService = new ReduxService()

const useCases = {
    getProductData: new GetProductDataUseCase(
        productService,
        reduxService
    ),
    removeProductFromCompareList: new RemoveProductFromCompareListUseCase(
        reduxService
    ),
    clearCompareList: new ClearCompareListUseCase(
        reduxService
    ),
    addSelectedProduct: new AddSelectedProductUseCase(
        reduxService
    ),
    removeSelectedProduct: new RemoveSelectedProductUseCase(
        reduxService
    ),
    linkedListItemUseCaseAdapter: (product: LinkedProduct) => {
        if (product.linkType !== 'analog') {
            return new AddSelectedProductUseCase(reduxService).execute({ product });
        }
        const { comparingProducts } = reduxService.getStore().productPage;
        if (!comparingProducts?.some(comparingProduct => comparingProduct.id === product.id)) {
            new AddProductToCompareListUseCase(reduxService).execute({product});
        }
    },
    getProduct: () => reduxService.getProduct(),
    getCompareList: () => reduxService.getProductCompareList(),
    getLinkedProductsList: () => reduxService.getLinkedProductsList(),
    getSelectedProduct: () => reduxService.getSelectedProduct(),
} as const

export const UseCaseContext = createContext<typeof useCases>(useCases);

export const UseCaseProvider: React.FC<UseCaseProviderProps> = ({children}) => {
    return (
        <UseCaseContext.Provider value={useCases}>
            {children}
        </UseCaseContext.Provider>
    );
};

export const useUseCase = () => useContext(UseCaseContext);



