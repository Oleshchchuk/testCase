/**
 * Интерфейс базового Кейса
 */
export interface IBaseUseCase{
    execute(props?: unknown): Promise<unknown> | unknown ;
}

