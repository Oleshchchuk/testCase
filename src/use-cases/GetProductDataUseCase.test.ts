import {ProductService} from '../services/products/ProductService';
import {ReduxService} from '../services/state/ReduxService';
import {Category, Product} from '../models';
import {MockProductPageGateway} from "../gateways/product-page";
import {GetProductDataUseCase} from "./GetProductDataUseCase";


jest.mock('../services/products/ProductService');
jest.mock('../services/state/ReduxService');
jest.mock('../gateways/product-page');

describe('FetchProductDataUseCase', () => {
    it('should fetch product data, classify, sort linked products, and update redux state', async () => {
        const mockProductPageGateway = new MockProductPageGateway() as jest.Mocked<MockProductPageGateway>;
        const mockProductService = new ProductService(mockProductPageGateway) as jest.Mocked<ProductService>;
        const mockReduxService = new ReduxService() as jest.Mocked<ReduxService>;
        const useCase = new GetProductDataUseCase(mockProductService, mockReduxService);
        const productId = '1';

        const mainProduct: Product = {id: productId, name: 'Main Product', price: 100, category: {id: 'cat1'}};
        const analogProduct: Product = {id: '2', name: 'Analog Product', price: 150, category: {id: 'cat1'}};
        const relatedProduct: Product = {id: '3', name: 'Related Product', price: 120, category: {id: 'cat2'}};
        const undefinedProduct: Product = {id: '4', name: 'Undefined Product', price: 130};
        const mockCategories: Category[] = [{id: 'cat1', name: 'Category 1'}, {id: 'cat2', name: 'Category 2'}];

        mockProductService.getProduct.mockResolvedValue(mainProduct);
        mockProductService.getLinkedProducts.mockResolvedValue([analogProduct, relatedProduct, undefinedProduct]);
        mockProductService.getCategories.mockResolvedValue(mockCategories);

        await useCase.execute({productId});

        expect(mockProductService.getProduct).toHaveBeenCalledWith(productId);
        expect(mockProductService.getLinkedProducts).toHaveBeenCalledWith(productId);
        expect(mockProductService.getCategories).toHaveBeenCalled();

        expect(mockReduxService.setLinkedProducts).toHaveBeenCalledWith(
            expect.arrayContaining([
                expect.objectContaining({id: '2', linkType: 'analog'}), // Аналоги идут первыми
                expect.objectContaining({id: '3', linkType: 'related'}), // Сопутствующие товары следуют за аналогами
                expect.objectContaining({id: '4', linkType: undefined})  // Неопределенные типы связи идут последними
            ])
        );
    });
});