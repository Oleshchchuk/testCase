import {Category, Product} from '../../models';
import {IProductPageRepository} from './interfaces';

export class ProductService implements IProductPageRepository {

    constructor(
        private readonly gateway: IProductPageRepository
    ) {
    }

    async getProduct(productId: string): Promise<Product> {
        return this.gateway.getProduct(productId);
    }

    async getLinkedProducts(productId: string): Promise<Product[]> {
        return this.gateway.getLinkedProducts(productId);
    }

    async getCategories(): Promise<Category[]> {
        return this.gateway.getCategories();
    }
}