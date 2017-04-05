# ES7 (ECMAScript 2016)
* [Array.prototype.includes](#arrayprototypeincludes)
* [Exponentiation Operator](#exponentiation-operator)

## Array.prototype.includes

Array `.includes()` determines if an array includes an specified element, returning `true` if it includes, `false` otherwise.

### Syntax

```
includes :: (searchElement, ?fromIndex) -> Boolean
```

#### Parameters
* `searchElement` - the element to search on the array.
* `fromIndex` - the index from which the search starts.

#### Examples

`includes :: (searchElement) -> Boolean`

```js
[].includes()                   // false
[].includes(undefined)          // false
['foo',3,{}].includes({})       // false
['foo','bar'].includes('zed')   // false

[-0].includes(+0)               // true
[1,2,3].includes(2)             // true
['foo','bar'].includes('foo')   // true
[undefined].includes(undefined) // true
```

`includes :: (searchElement, fromIndex >= 0) -> Boolean`

```js
['foo','bar','zed'].includes('foo')    // true - fromIndex 0 by default
['foo','bar','zed'].includes('foo',1)  // false
['foo','bar','zed'].includes('bar',1)  // true
// If the fromIndex is greater or equal to the array size,
// the array is not searched and false is returned.
['foo','bar','zed'].includes('bar',10) // false
```

`includes :: (searchElement, fromIndex < 0) -> Boolean`

```js
// When fromIndex is negative a computed index is calculated to be used.
// If the computed index if less than 0, the entire array is search.
// The computation goes like this:
// Computed index = Array length + fromIndex
// e.g.
var array = ['a','b','c','d'] // length = 4
array.includes('b', -3)  // computed index = 4 + (-3) = 1,   result = true
array.includes('b', -1)  // computed index = 4 + (-1) = 3,   result = false
array.includes('b', -10) // computed index = 4 + (-10) = -6, result = false
```

#### Further Reading
[Array.prototype.includes](https://github.com/tc39/Array.prototype.includes/) (Domenic Denicola, Rick Waldron)

# Exponentiation Operator

Exponentiation operator returns the result of raising the first operand to the power of the second (e.g. `x ** y`).
It will return the same result as `Math.pow(x,y)`.

### Syntax

```
x ** y
```

#### Example

```js
// x ** y (aka Math.pow(x,y))
2 ** 2   // 4
2 ** 'a' // NaN

var e = 2
e **= 2  // 4
```

#### Further Reading
[Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (Rick Waldron)

## Thanks to :beers:
* [2ality.com](http://2ality.com/2016/01/ecmascript-2016.html) from [@rauschma](https://twitter.com/rauschma)
* MDN documentation
    * [Array.prototype.includes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
    * [Exponentiation Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
