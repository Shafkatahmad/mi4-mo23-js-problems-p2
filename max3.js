const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim) {
  console.log('jim is the ultimate boss');
}
else if(tim > jim && tim > kim) {
  console.log('tim is the ultimate boss');
}
else {
  console.log('kim is the ultimate boss');
}


const max = Math.max(12, 1, 56, 5, 65, 8, 1, 99, 2);
console.log('max using Math.max() is: ', max);