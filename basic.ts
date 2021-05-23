// js 가 runtime 시 에러를 감지하는 반면, ts 는 compile 시 에러를 감지함
// 또한 js 에서는 에러인지 확인할 수 없는 에러들도 ts 에서 확인 가능함

// string
let car: string = "bmw";
let car2 = "benz"; // type 을 설정하지 않아도 자동으로 car2 의 type 을 string 으로 인지함. (타입 추론)
// number
let nums: number = 3;
// boolean
let bool: boolean = true;
// array
let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];
let strArr: string[] = ["1", "2", "3"];
let strArr2: Array<string> = ["1", "2", "3"];

// tuple
let b: [string, number];
// 배열의 첫 요소는 string 두번째 요소는 number

// void : 아무것도 return 하지 않는 함수
function hi(): void {
  console.log("hi");
}

// never : 항상 에러를 return 하거나, 무한 루프의 함수
function showErr(): never {
  throw new Error();
}
function infLoop(): never {
  while (true) {
    // do sth
  }
}

// enum : 서로 연관있는 특정값만 입력하도록 하고 싶을때 씀
enum Os {
  window, // 0    window = 3 일 경우,     0
  ios, // 1    4                       ios = 5 일 경우
  android, // 2    5                       6
}

let vNull: null = null;
let vUndf: undefined = undefined;
