// 1. 명확한 변수명 사용하기
// css 실제값 입력할 때 폰트 색상 변경하기
// 3. 키보드 이벤트 적용하기

const fieldInput = document.getElementById("field");
const timeInput = document.getElementById("time");

const resultText = document.getElementById("result-text");
const resultTime = document.getElementById("result-time");

const calButton = document.querySelector(".calc-btn");

calButton.addEventListener("click", () => {
  // 1. 입력값 가져오기
  const fieldValue = fieldInput.value.trim();
  const timeNumber = Number(timeInput.value);

  // 2. 입력값 검증 (먼저!)
  if (!fieldValue) {
    alert("분야를 입력해주세요.");
    return;
  }

  if (isNaN(timeNumber) || timeNumber <= 0) {
    alert("올바른 시간을 입력해주세요.");
    return;
  }

  // 3. 계산 로직
  const totalHours = 10000;
  const dayNeeded = Math.ceil(totalHours / timeNumber);
  const formattedDayNeeded = dayNeeded.toLocaleString();

  // 4. 결과 표시
  resultText.textContent = fieldValue;
  resultTime.textContent = formattedDayNeeded;

  // 5. 시각적 피드백
  resultText.style.color = "#007bff";
  resultTime.style.color = "#007bff";

  setTimeout(() => {
    resultText.style.color = "";
    resultTime.style.color = "";
  }, 2000);

  // 6. 입력 필드 초기화
  fieldInput.value = "";
  timeInput.value = "";
  fieldInput.focus();

  // 7. 콘솔 로그
  console.log(
    `${fieldValue}를 ${timeNumber}시간 공부하면 ${formattedDayNeeded}일 만에 1만 시간이 됩니다.`
  );
});
