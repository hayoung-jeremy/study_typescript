// property 를 정의해서 객체를 사용하고자 할 때
type Score = "A" | "B" | "C" | "D";

interface User {
  name: string;
  age: number;
  // ? : optional
  gender?: number;
  // readonly : 변경 불가
  readonly birthYear: number;
  // 여러개의 grade 를 가질 수 있음 // Score 에 선언된 값만 가질 수 있음
  [grade: number]: Score;
}
// User에서 정의되지 않은 property 를 사용하거나, 명시되지 않은 type 을 사용하면 에러 발생
let user: User = {
  name: "xx",
  age: 31,
  birthYear: 1991,
};

// 함수
interface Add {
  // (인자값) : 반환값
  (num1: number, num2: number): number;
}
const add: Add = (x, y) => {
  return x + y;
};

// implements : class 정의
interface Car {
  color: string;
  wheels: number;
  start(): void;
}
interface Toy {
  name: string;
}
// 여러개의 interface 로 확장 가능
interface ToyCar extends Toy, Car {
  // Toy 와 Car 에 이미 있는 property 들을 그대로 가지고 추가로 price 를 가짐
  price: number;
}

class Bmw implements Car {
  color;
  constructor(c: string) {
    this.color = c;
  }
  wheels: 4;
  start() {
    console.log("go");
  }
}
