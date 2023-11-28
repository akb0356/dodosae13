Promise.reject(new Error("에러발생사유")).catch((err: Error) =>
  console.log("err:", err.message)
);

Promise.resolve(1)
  .then((value: number) => {
    console.log(value);
    return Promise.resolve(true);
  })
  .then((value: boolean) => {
    console.log(value);
    return [1, 2, 3];
  })
  .then((value: number[]) => {
    console.log(value);
    return { name: "jack", age: 32 };
    //객체를 타입정의할 때 :object는 잘 안쓴다. 저렇게 타입정의를 객체화해서 정의해라.
  })
  .then((value: { name: string; age: number }) => {
    console.log(value);
  });
