import {ReduxService} from '../services/state/ReduxService';
import {ClearCompareListUseCase} from "./ClearCompareListUseCase";

jest.mock('../services/state/ReduxService');

describe('ClearCompareListUseCase', () => {
    it('should call clearCompareList on reduxService', () => {
        const mockReduxService = new ReduxService() as jest.Mocked<ReduxService>;
        const useCase = new ClearCompareListUseCase(mockReduxService);

        useCase.execute();

        expect(mockReduxService.clearCompareList).toHaveBeenCalled();
    });
});