What Is Type Narrowing in TypeScript?

Type narrowing is an important feature in TypeScript that helps us work safely with different data types.

It allows TypeScript to identify the specific type of a variable within a particular code block.

This is especially useful when working with union types, where a variable can have multiple possible types.

There are several ways to perform type narrowing in TypeScript.
One common way is using the typeof operator.

For example, typeof value === "string" 

checks whether a value is a string before calling string methods like toUpperCase() or toLowerCase. To avoid issues.



TypeScript also provides the in operator for type narrowing.

It checks whether a specific property exists inside an object.

For example, "email" in user.

 checks whether the user object contains an email property.

This is particularly useful when working with different object types in a union.
Each method helps TypeScript understand what type of data we are currently handling.

Without type narrowing, we may face errors when accessing properties or methods that do not exist on every possible type.

I find type narrowing especially helpful when building functions that accept different kinds of input.

It makes code easier to understand, safer to maintain, and less dependent on type assertions.
