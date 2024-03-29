import {LinkedProduct} from '../models';
import {AddProductToCompareListUseCase} from "./AddProductToCompareListUseCase";
import {ReduxService} from "../services/state/ReduxService";

jest.mock('../services/state/ReduxService');

describe('AddProductToCompareListUseCase', () => {
    it('should call addProductToCompareList on reduxService with the product', () => {
        const mockReduxService = new ReduxService() as jest.Mocked<ReduxService>;
        const useCase = new AddProductToCompareListUseCase(mockReduxService);
        const product: LinkedProduct = {id: '1', name: 'Test Product', price: 100, linkType: undefined};

        useCase.execute({product});

        expect(mockReduxService.addProductToCompareList).toHaveBeenCalledWith(product);
    });
});

