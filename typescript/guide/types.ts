/**
 * @file Guide to use Typescript - types
 * @name Types - TypeScript
 * @author Mikhail Cruz Andrade <jail.andrade@gmail.com>
 * @license MIT
 */

/*
 * Simple definition type boolean
 *
 * let var_name: type = value;
 */
let is_done: boolean = false;
let decimal: number = 10;
let hex: number = 0x00d0;
let binary: 0b1010;
let color: string = "blue";
let user_name: string = "Jail";

let full_name: string = `Mikhail Cruz Andrade`;
let age: number = 26;
let greeting: string = `Hello my name is ${ full_name },
I'll be ${ age + 1 } years old next year` 

// array's way #1
let list: number[] = [1, 2, 3];
// array's way #2
let abc: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

// tuples
let tuplx: [string, number];

// enum
enum Color { Red, Blue, Green }
let c: Color.Green

// any
let not_sure: any = 0;
not_sure = 'hola';
not_sure = true;

// void
function warning(): void {
    alert('warning');
}
let unusable: void = undefined;

// never

