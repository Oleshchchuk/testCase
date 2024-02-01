/**
 * Интерфейс базового Кейса
 */
export interface IBaseUseCase<P = undefined> {
    execute(props?: P): Promise<void> | void;
}