interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength(10);
logTextLength({ leng: 10 });

// 제네릭 타입 제한 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends >(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption(10);
getShoppingItemOption<string>('a');