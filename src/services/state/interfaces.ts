import {LinkedProduct, Product} from '../../models';

/**
 * Интерфейс хранилища
 */
export interface IStore {
    productPage: {
        product?: Product;
        linkedProducts?: LinkedProduct[];
        comparingProducts?: LinkedProduct[];
        selectedProduct?: LinkedProduct;
    };
}




/**
 * Интерфейс сервиса для управления хранением данных страницы продукта
 */
export interface IStoreManagementService {
    /**
     * Сохраняет продукт в хранилище
     * @param product Объект продукта.
     */
    setProduct(product: Product): void;

    /**
     * Получает продукт из хранилища
     */
    getProduct(): Product | undefined;

    /**
     * Сохраняет список связанных продуктов в хранилище
     * @param linkedProducts Массив связанных продуктов.
     */

    setLinkedProducts(linkedProducts: LinkedProduct[]): void;

    /**
     * Получает список связанных продуктов из хранилища
     */
    getLinkedProductsList(): LinkedProduct[];

    /**
     * Добавляет продукт в список сравнения.
     * @param linkedProduct продукт для добавления в список сравнения.
     */
    addProductToCompareList(linkedProduct: LinkedProduct): void;

    /**
     * Получает список список сравнения из хранилища
     */
    getProductCompareList(): LinkedProduct[];

    /**
     * Удаляет продукт из списка сравнения.
     * @param product продукт для удаления из списка сравнения.
     */
    removeProductFromCompareList(product: LinkedProduct): void;

    /**
     * Очищает список сравнения продуктов.
     */
    clearCompareList(): void;

    /**
     * Сохраняет выбранный продукт в хранилище
     */
    setSelectedProduct(product: Product): void;

    /**
     * Получает выбранный продукт в хранилище
     */
    getSelectedProduct(): Product | undefined;

    /**
     * Удаляет выбранный продукт в хранилище
     */
    removeSelectedProduct(): void;

    /**
     * Получает выбранный продукт в хранилище
     */
    getStore(): IStore;
}

