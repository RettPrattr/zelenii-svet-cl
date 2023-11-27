export default function findValue(entireObj, keyToFind, valToFind) { // TASK Вынести в utils
    let foundObj;
    JSON.stringify(entireObj, (_, nestedValue) => {
        if (nestedValue && nestedValue[keyToFind]) {
            foundObj = nestedValue[keyToFind];
            return foundObj
        }
        return nestedValue
    });
    return foundObj
};