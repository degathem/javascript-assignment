/** isNumber function returns true only if the data type is a number and not NaN;
 *this function is required because NaN is considered as 'number' data type.
 */
function isNumber(num){
    if (typeof num === 'number' && !isNaN(num)){
        return true;
    } else {
        return false;
    }
}

function getRelationship(x, y) {
    var isNumberX = isNumber(x);
    var isNumberY = isNumber(y);
    var relationshipMessage;
    
    // Condition to test if either value is not a number.
    if (!isNumberX || !isNumberY){
        /**
         * When either value is not a number, the first part of the phrase 
         * will be the same.
        */
        relationshipMessage = 'Can\'t compare relationships because ';
        if (!isNumberX && !isNumberY){
            relationshipMessage = relationshipMessage + x + ' and ' + y + ' are not numbers';
        } else if (isNumberX && !isNumberY){
            relationshipMessage = relationshipMessage + y + ' is not a number';
        } else if (!isNumberX && isNumberY){
            relationshipMessage = relationshipMessage + x + ' is not a number';
    };
    // When both values passed to the function are numbers.
    } else {
        if (x > y) {
            relationshipMessage = '>';
        } else if (x < y){
            relationshipMessage = '<';
        } else {
            relationshipMessage = '=';
        }
    }
    return relationshipMessage;
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));