// なるべくTypeScriptの型推論に任せるのが良いやり方
// const person :{
//     name: string;
//     age: number;
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Coney',
//     age: 25,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// }

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Coney',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

if (person.role === Role.ADMIN) {
    console.log('ADMIN');
}

const string: any = 1;