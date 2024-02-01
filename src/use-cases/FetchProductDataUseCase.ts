import {Category, LinkedProduct, Product, ProductLinkType} from '../models';
import {IProductPageRepository,} from "../services/products/interfaces";
import {IStateManagementService} from "../services/state/interfaces";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";

/**
 * Кейс с запросом всех необходимых данные для коррктной отрисовки ПродуктПейдж
 */
export class FetchProductDataUseCase implements IBaseUseCase<{ productId: string }> {
    constructor(
        private readonly productService: IProductPageRepository,
        private readonly stateService: IStateManagementService
    ) {
    }

    @logger
    async execute(props: { productId: string }): Promise<void> {
        const fetchedProduct = await this.productService.getProduct(props.productId);
        const fetchedLinkedProducts = await this.productService.getLinkedProducts(props.productId);
        const categories = await this.productService.getCategories();
        const linkedProducts = this.classifyLinkedProducts(fetchedProduct, categories, fetchedLinkedProducts);

        this.stateService.setProduct(fetchedProduct);
        this.stateService.setLinkedProducts(linkedProducts);
    }


    private findCategory(categoryId: string | undefined, categories: Category[]): Category | undefined {
        if (!categoryId) return undefined;

        for (let category of categories) {
            if (category.id === categoryId) {
                return category;
            }
            if (category.children) {
                const childCategory = this.findCategory(categoryId, category.children);
                if (childCategory) {
                    return childCategory;
                }
            }
        }
        return undefined;
    }

    private classifyLinkedProducts(mainProduct: Product, categories: Category[], relatedProducts: Product[]): LinkedProduct[] {
        const mainCategory = this.findCategory(mainProduct.category?.id, categories);

        return relatedProducts.map(product => {
            const productCategory = this.findCategory(product.category?.id, categories);
            let linkType: ProductLinkType;

            if (productCategory && productCategory.id === mainCategory?.id) {
                linkType = 'analog';
            } else if (productCategory) {
                linkType = 'related';
            } else {
                linkType = undefined;
            }

            return {...product, linkType};
        });
    }
}