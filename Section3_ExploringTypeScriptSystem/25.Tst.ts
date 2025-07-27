/*Coding Exercise: Conditional Types and Type Casting
In the index.ts file, complete the following tasks:

Define a conditional type IsStringType that checks if a type is string. If true, it resolves to boolean, otherwise to number.

Using the IsStringType, declare a variable typeCheck and initialize it:

Set typeCheck to true if using the type string.

Otherwise, it should be 0.

Create a variable anyValue of type any and initialize it with the string "example".

Cast anyValue to string using type assertion and store it in a new variable castValue.
*/

type IsStringType<T> = T extends string ? boolean : number;

// 2. Use IsStringType with string
let typeCheck: IsStringType<string> = true; // Since T is string, typeCheck is boolean

// 3. Create a variable anyValue of type any
let anyValue: any = "example";

// 4. Cast anyValue to string using type assertion
let castValue: string = anyValue as string;
