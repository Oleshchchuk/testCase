import {RemoveSelectedProductUseCase} from './RemoveSelectedProductUseCase';
import {IStoreManagementService} from "../services/state/interfaces";

jest.mock('../services/state/interfaces');

describe('RemoveSelectedProductUseCase', () => {
    it('should call removeSelectedProduct', () => {
        const mockStateService = {
            setSelectedProduct: jest.fn(),
            removeSelectedProduct: jest.fn()
        } as unknown as IStoreManagementService;
        const useCase = new RemoveSelectedProductUseCase(mockStateService);

        useCase.execute();

        expect(mockStateService.removeSelectedProduct).toHaveBeenCalled();
    });
});