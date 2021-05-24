// this 의 type
interface User1 {
  name: string;
}

const Sam: User1 = { name: "Sam" };

// 함수의 첫번째 매개변수 자리에 명시
function showName(this: User1, age: number, gender: "m" | "f"): void {
  console.log(this.name);
}
const a = showName.bind(Sam);
a(30, "m");
