/** Array **/

// Array.prototype.includes
// Determines if an array includes the specified element.

[].includes()                   // false
[].includes(undefined)          // false
['foo',3,{}].includes({})       // false
['foo','bar'].includes('zed')   // false

[1,2,3].includes(2)             // true
['foo','bar'].includes('foo')   // true
[undefined].includes(undefined) // true
