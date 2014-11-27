function getRelationship(x, y) {
    // Your code goes here!
    var typeX = typeof x;
    var typeY = typeof y;
    var relationshipMessage;
    // Condition to test if either value is not a number
    if (typeX != "number" || typeY != "number"){
        //var isOrAre;
        relationshipMessage = "Can't compare relationships because ";
        if (typeX != "number" && typeY != "number"){
            relationshipMessage = relationshipMessage + x + " and " + y + " are not numbers";
        } else if (typeX === "number" && typeY != "number"){
            relationshipMessage = relationshipMessage + y + " is not a number";
        } else if (typeX != "number" && typeY === "number"){
            relationshipMessage = relationshipMessage + x + " is not a number";
        };
    } else {
        if (x > y) {
            relationshipMessage = ">";
        } else if (x < y){
            relationshipMessage = "<";
        } else {
            relationshipMessage = "=";
        };
    };
    return relationshipMessage;
};

// Try logging these functions to test your code!
console.log("hello");
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));