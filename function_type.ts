// 함수
function Add(num1: number, num2: number): number {
  return num1 + num2;
}
// (): number -- number 를 return
// (): boolean -- true, false 를 return
// (): void -- 아무것도 return 하지 않음

// 함수도 interface 처럼 optional 가능 -- ? 를 사용
function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}
// optional 은 default 값 지정을 통해서도 구현가능
function hello2(name = "world") {
  return `Hello, ${name}`;
}
// optional value 는 필수 값보다 앞에오면 안된다.
// function hello3(age?: number, name: string) {
//   if (age) {
//     return `Hello, ${name}, you are ${age}.`;
//   } else {
//     return `Hello, ${name}`;
//   }
// }
// 굳이 optional value 를 앞에 써야한다면 다음과 같이 쓰고, 호출시 undefined 를 명시적으로 전달해준다.
function hello4(age: number | undefined, name: string) {
  if (age) {
    return `Hello, ${name}, you are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(hello4(undefined, "Sam"));

// rest
// 어떤 형태의 배열인지를 명시 ex): number[], string[] etc.
function addAll(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}
addAll(1, 2, 3);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// overload
interface User2 {
  name: string;
  age: number;
}

function join(name: string, age: number): User2;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User2 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력하세요.";
  }
}
// 동일한 매개변수 age 이지만, age 의 type 을 각각 number 와 string 으로 줄 수 있음
// 함수에서 age 를 받았을때, return 값이 User2 여야 하는지 string 이어야 하는지 알지 못함
// 그래서 같은 함수를 경우의 수 두개 모두 적어줌
const sam: User2 = join("Sam", 30);
const jane: string = join("Jane", "30");
