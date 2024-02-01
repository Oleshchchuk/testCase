import {Product} from '../models';
import {ReduxService} from "../services/state/ReduxService";
import {RemoveProductFromCompareListUseCase} from "./RemoveProductFromCompareListUseCase";

jest.mock('../services/state/ReduxService');

describe('RemoveProductFromCompareListUseCase', () => {
    it('should call removeProductFromCompareList on reduxService with the product', () => {
        const mockReduxService = new ReduxService() as jest.Mocked<ReduxService>;
        const useCase = new RemoveProductFromCompareListUseCase(mockReduxService);
        const product: Product = {id: '1', name: 'Test Product', price: 100};

        useCase.execute({product});

        expect(mockReduxService.removeProductFromCompareList).toHaveBeenCalledWith(product);
    });
});