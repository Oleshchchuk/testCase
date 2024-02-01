import {LinkedProduct, Product} from '../../models';

/**
 * Интерфейс сервиса для управления хранением данных страницы товара
 */
export interface IStateManagementService {
    /**
     * Сохраняет товар.
     * @param product Объект товара.
     */
    setProduct(product: Product): void;

    /**
     * Сохраняет список связанных товаров.
     * @param linkedProducts Массив связанных товаров.
     */
    setLinkedProducts(linkedProducts: LinkedProduct[]): void;

    /**
     * Добавляет товар в список сравнения.
     * @param product Товар для добавления в список сравнения.
     */
    addProductToCompareList(product: Product): void;

    /**
     * Удаляет товар из списка сравнения.
     * @param product Товар для удаления из списка сравнения.
     */
    removeProductFromCompareList(product: Product): void;

    /**
     * Очищает список сравнения товаров.
     */
    clearCompareList(): void;
}
