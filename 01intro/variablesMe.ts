let greetings: string = "Hello Jatin";

console.log(greetings);

export {};

//number
let userId: number = 4224;

//boolean
let isLoogedIn: boolean = false;

//any
//When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
//You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
