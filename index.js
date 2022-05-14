let count1 = document.querySelector(".count1");
let count2 = document.querySelector(".count2");
let count3 = document.querySelector(".count3");
let btn = document.querySelector("button");
let countF = 8;
let countS = 8;
let countT = 8;
btn.addEventListener("click", function () {
  if (countF < 9) {
    countF++;
    count1.innerHTML = `${countF}`;
  } else if (countS < 9) {
    count1.innerHTML = `0`;
    countF = 0;

    countS++;
    count2.innerHTML = `${countS}`;
  } else if (countT < 9) {
    count2.innerHTML = `0`;
    count1.innerHTML = `0`;
    countF=0;
    countS=0;
      
    countT++;
    count3.innerHTML=`${countT}`
  }else{
      countF=0;
      countS=0;
      countT=0;
    count2.innerHTML = `0`;
    count1.innerHTML = `0`;
    count3.innerHTML = `0`;
  }
});
