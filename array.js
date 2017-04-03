/** Array **/

// Array.prototype.includes(searhElement, fromIndex)
// Determines if an array includes the specified element.

[].includes()                   // false
[].includes(undefined)          // false
['foo',3,{}].includes({})       // false
['foo','bar'].includes('zed')   // false

[-0].includes(+0)               // true
[1,2,3].includes(2)             // true
['foo','bar'].includes('foo')   // true
[undefined].includes(undefined) // true

// fromIndex >= 0
['foo','bar','zed'].includes('foo')    // true - fromIndex 0 by default
['foo','bar','zed'].includes('foo',1)  // false
['foo','bar','zed'].includes('bar',1)  // true
// If the fromIndex is greater or equal to the array size,
// the array is not searched and false is returned.
['foo','bar','zed'].includes('bar',10) // false

// fromIndex <= 0
// When fromIndex is negative a computed index is calculated to be used.
// If the computed index if less than 0, the intire array is search.
// The computation goes like this:
// Computed index = Array length + fromIndex
// e.g.
var array = ['a','b','c','d'] // length = 4
array.includes('b', -3)  // computed index = 4 + (-3) = 1,   result = true
array.includes('b', -1)  // computed index = 4 + (-1) = 3,   result = false
array.includes('b', -10) // computed index = 4 + (-10) = -6, result = false
