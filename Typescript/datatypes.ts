//Data Types
const fruits: string = "apple";
const year: number = 2023;
const veges: string[] = ["tomato", "potato"];
const month: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const isBrighter: boolean | null = true;
const Any: any = null; //this accepts alll the data types
const bigNumber : bigint =100n;
const bigNumberTwo: bigint = BigInt(100);

//Function parameter annotations
function add(a: number, b: number): number {
    return a + b;
}
// const additionVal = add("Guru",8) ===> This shows errro as the first argument is string
const additionVal = add(5, 8);
console.log(additionVal); //13

function multiply(a: number, b: number): void {
    // return a + b;  This show error as the function is typed void -> should not return anything
    console.log(a * b);
}
multiply(8, 5); //40

//alias the type of parameters 
const flexAlign = (region: "center" | "left" | "right"): void => {
    console.log(`Items are aligned at ${region}`);
};

// flexAlign("centre"); ==> This shows error as not assignable to the region
flexAlign("center");