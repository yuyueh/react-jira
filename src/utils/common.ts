export const isUndefined = (obj: unknown) => obj === undefined;

export const isNull = (obj: unknown) => obj === null;

export const isEmptyString = (obj: unknown) => obj === '';

export const isUndefinedOrNull = (obj: unknown) =>
    isNull(obj) || isUndefined(obj);

export const isEmpty = (obj: unknown) =>
    isNull(obj) ||
    isUndefined(obj) ||
    isEmptyString(obj) ||
    (Number.isInteger(obj) && Number.isNaN(obj));

export const clearEmptyKeys = <T extends { [key: string]: any }>(
    obj: T
): Partial<T> =>
    Object.keys(obj).reduce(
        (result, key) =>
            isEmpty(obj[key]) ? result : { ...result, [key]: obj[key] },
        {}
    );
