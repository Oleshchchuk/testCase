export function logger(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        const useCaseName = target.constructor.name
        console.log(`выполнен ${useCaseName}`);
        return result;
    };
    return descriptor;
}
