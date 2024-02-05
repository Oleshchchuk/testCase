import {AddSelectedProductUseCase} from './AddSelectedProductUseCase';
import {IStoreManagementService} from "../services/state/interfaces";
import {LinkedProduct} from "../models";

jest.mock('../services/state/interfaces');

describe('AddSelectedProductUseCase', () => {
    it('should call setSelectedProduct with provided product', () => {
        const mockStateService = {
            setSelectedProduct: jest.fn(),
            removeSelectedProduct: jest.fn()
        } as unknown as IStoreManagementService;
        const useCase = new AddSelectedProductUseCase(mockStateService);
        const product: LinkedProduct = {id: '1', name: 'Test Product', price: 100, linkType: 'analog'};

        useCase.execute({product});

        expect(mockStateService.setSelectedProduct).toHaveBeenCalledWith(product);
    });
});