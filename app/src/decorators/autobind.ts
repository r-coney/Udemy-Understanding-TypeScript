// autobind decorator
// thisをクラスにbindするためのデコレーﾀ
export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // 実行したメソッドを取得
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      // 実行したメソッドのthisにクラスをバインドする
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}
