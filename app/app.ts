let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'MAX';
userName = userInput; // 型 'unknown' を型 'string' に割り当てることはできません。

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw new { message: message, errorCode: code };
}