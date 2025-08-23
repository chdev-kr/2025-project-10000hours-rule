// 1. 명확한 변수명 사용하기
// css 실제값 입력할 때 폰트 색상 변경하기
// 3. 키보드 이벤트 적용하기

const fieldInput = document.getElementById("field");
const timeInput = document.getElementById("time");

const resultText = document.getElementById("result-text");
const resultTime = document.getElementById("result-time");

const calButton = document.querySelector(".calc-btn");

// 페이지 로드 시 버튼 비활성화
calButton.disabled = true;

calButton.addEventListener("click", () => {
  // 1. 로딩 상태 시작 (맨 처음!)
  calButton.innerHTML = "계산 중...";
  calButton.disabled = true;

  // 2. 입력값 가져오기
  const fieldValue = fieldInput.value.trim();
  const timeNumber = Number(timeInput.value);

  // 3. 입력값 검증
  if (!fieldValue) {
    alert("분야를 입력해주세요.");
    // 에러 시 버튼 복원
    calButton.innerHTML =
      '<span class="enter">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</span>';
    calButton.disabled = false;
    return;
  }

  if (isNaN(timeNumber) || timeNumber <= 0) {
    alert("올바른 시간을 입력해주세요.");
    // 에러 시 버튼 복원
    calButton.innerHTML =
      '<span class="enter">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</span>';
    calButton.disabled = false;
    return;
  }

  // 4. 계산 로직
  const totalHours = 10000;
  const dayNeeded = Math.ceil(totalHours / timeNumber);
  const formattedDayNeeded = dayNeeded.toLocaleString();

  // 5. 결과 표시
  resultText.textContent = fieldValue;
  resultTime.textContent = formattedDayNeeded;

  // 6. 시각적 피드백
  resultText.style.color = "#007bff";
  resultTime.style.color = "#007bff";

  setTimeout(() => {
    resultText.style.color = "";
    resultTime.style.color = "";
  }, 2000);

  // 7. 입력 필드 초기화
  fieldInput.value = "";
  timeInput.value = "";

  // 8. 콘솔 로그
  console.log(
    `${fieldValue}를 ${timeNumber}시간 공부하면 ${formattedDayNeeded}일 만에 1만 시간이 됩니다.`
  );

  // 9. 로딩 상태 종료
  setTimeout(() => {
    calButton.innerHTML =
      '<span class="enter">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</span>';
    calButton.disabled = false;
  }, 500);
});

// 9. 키보드 이벤트 추가
timeInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    calButton.click();
    fieldInput.focus();
  }
});

// 입력값이 유효할 때만 버튼 활성화
function validateInputs() {
  const fieldValue = fieldInput.value.trim();
  const timeValue = timeInput.value;

  // fieldValue와 timeValue가 존재하면서 timeValue가 숫자인지 확인
  if (fieldValue && timeValue && !isNaN(Number(timeValue))) {
    calButton.disabled = false; // 모든 조건 만족 시 활성화
  } else {
    calButton.disabled = true; // 조건 불만족 시 비활성화
  }
}

// 입력할 때마다 검사
// 사용자가 분야와 시간에 입력할 때마다 validateInputs 함수 호출
fieldInput.addEventListener("input", validateInputs);
timeInput.addEventListener("input", validateInputs);
