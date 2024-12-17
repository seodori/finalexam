document.addEventListener("DOMContentLoaded", () => {
  // 1. 원과 방향 초기화
  const circles = document.querySelectorAll(".circle");

  const directions = Array.from({ length: circles.length }, () => ({
    xDirection: Math.random() > 0.5 ? 1 : -1, // X축 방향 초기화
    yDirection: Math.random() > 0.5 ? 1 : -1, // Y축 방향 초기화
  }));

  // 2. 마우스 움직임 이벤트 처리
  document.addEventListener("mousemove", (e) => {
    circles.forEach((circle, index) => {
      const speed = 0.02; // 원의 느린 이동 속도
      const { xDirection, yDirection } = directions[index]; // 각 원의 방향 가져오기

      // 반대 방향 계산
      const x = (window.innerWidth / 2 - e.pageX) * speed * xDirection; // 반대 방향 이동 계산
      const y = (window.innerHeight / 2 - e.pageY) * speed * yDirection; // 반대 방향 이동 계산

      // 현재 위치 계산
      const rect = circle.getBoundingClientRect();
      const newX = rect.left + x; // x 좌표 업데이트
      const newY = rect.top + y; // y 좌표 업데이트

      // 화면 경계 제한
      const maxLeft = window.innerWidth - rect.width;
      const maxTop = window.innerHeight - rect.height;

      const limitedX = Math.max(0, Math.min(newX, maxLeft)); // X축 경계 제한
      const limitedY = Math.max(0, Math.min(newY, maxTop)); // Y축 경계 제한

      // 위치 적용
      circle.style.left = `${limitedX}px`;
      circle.style.top = `${limitedY}px`;
      circle.style.position = "absolute";
      circle.style.transition = "left 0.5s ease-out, top 0.5s ease-out"; // 부드럽고 느린 이동
    });
  });
});
// 2. 별명 입력 후 URL 파라미터로 전달
function sendNickname() {
  const nickname = document.getElementById("nicknameInput").value;
  if (nickname) {
    window.location.href = `nextpage.html?nickname=${encodeURIComponent(
      nickname
    )}`;
  } else {
    alert("별명을 입력해주세요!");
  }
}

// 3. 버튼 클릭 시 URL 파라미터 추가
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".page-button");
  const input = document.getElementById("nicknameInput");

  button.addEventListener("click", (event) => {
    const nickname = input.value;
    if (nickname) {
      button.href = `test.html?nickname=${encodeURIComponent(nickname)}`;
    } else {
      event.preventDefault(); // 기본 이동 방지
      alert("별명을 입력해주세요!");
    }
  });
});

// 4. URL 파라미터 읽기 (jQuery)
$(document).ready(function () {
  // URL의 파라미터를 가져오는 함수
  function getUrlParams() {
    const params = {};
    const queryString = window.location.search; // '?user=JohnDoe&age=30'
    const urlParams = new URLSearchParams(queryString);

    // 모든 파라미터를 객체에 저장
    urlParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }

  // 파라미터 읽기
  const params = getUrlParams();
  console.log(params);

  // 입력 필드와 버튼의 동적 속성 설정
  $(".name-input").val(params.nickname); // nickname을 입력 필드에 설정
  $(".page-button").attr("href", "test.html?nickname=" + params.nickname);
});

document.addEventListener("DOMContentLoaded", () => {
  // 타이틀 애니메이션
  const title = document.querySelector(".contentsImg");
  const button = document.querySelector(".button-container");

  title.style.opacity = "0";
  title.style.transform = "translateY(50px)";
  setTimeout(() => {
    title.style.transition = "all 1s ease";
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
  }, 1000);

  button.style.opacity = "0";
  setTimeout(() => {
    button.style.transition = "opacity 1s ease";
    button.style.opacity = "1";
  }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "수업시간에 메모한 시험범위를 잃어버렸다! 당신은...",
      choices: [
        {
          text: "학교 홈페이지에서 시험범위를 찾아본다",
          value: "E",
          img: "img/17.png",
        },
        {
          text: "같이 수업을 듣는 친구들에게 물어본다",
          value: "I",
          img: "img/18.png",
        },
      ],
    },
    {
      question: "친구들과 함께 있을 때 나는...",
      choices: [
        { text: "내가 먼저 화제를 꺼내는 타입", value: "E", img: "img/19.png" },
        {
          text: "들어주면서 리액션 많이하는 타입",
          value: "I",
          img: "img/20.png",
        },
      ],
    },
    {
      question: "갑자기 회의가 사라졌을 때 당신은...",
      choices: [
        {
          text: "일단 그날 시간 되는 친구가 있는지 물어본다",
          value: "E",
          img: "img/21.png",
        },
        {
          text: "하루종일 누워서 유튜브를 본다",
          value: "I",
          img: "img/22.png",
        },
      ],
    },
    {
      question: "여행 계획을 세운다면...",
      choices: [
        {
          text: "시간, 장소 단위로 최대한 자세히 세운다",
          value: "S",
          img: "img/23.png",
        },
        { text: "그날 뭐할지 정도만 정해둔다", value: "N", img: "img/24.png" },
      ],
    },
    {
      question: "나는 다른사람보다?",
      choices: [
        { text: "성실하고 꼼꼼하다", value: "S", img: "img/25.png" },
        { text: "창의적이고 유연하다", value: "N", img: "img/26.png" },
      ],
    },
    {
      question: "처음 해보는 일을 할 때,",
      choices: [
        {
          text: "다른 사람들이 어떻게 하는지 참고한다",
          value: "S",
          img: "img/27.png",
        },
        {
          text: "일단 부딪혀보고 내 방식대로 한다",
          value: "N",
          img: "img/28.png",
        },
      ],
    },
    {
      question: "드라마나 소설을 볼 때,",
      choices: [
        {
          text: "일어난 사건들을 중심으로 본다",
          value: "T",
          img: "img/29.png",
        },
        {
          text: "내가 인물에게 몰입해 공감하며 본다",
          value: "F",
          img: "img/30.png",
        },
      ],
    },
    {
      question: "갑자기 친구가 다른 친구와 생긴 문제를 이야기한다. 우선...",
      choices: [
        {
          text: "어쩌다 문제가 생겼는지 알아낸다",
          value: "T",
          img: "img/31.png",
        },
        { text: "친구의 기분을 먼저 풀어준다", value: "F", img: "img/32.png" },
      ],
    },
    {
      question: "고급 레스토랑에서 맛있는 음식을 먹고난 뒤,",
      choices: [
        {
          text: "아무리 맛있어도 비싸서 별로인 것 같다",
          value: "T",
          img: "img/33.png",
        },
        {
          text: "좀 비싸도 맛있으니까 만족이다",
          value: "F",
          img: "img/34.png",
        },
      ],
    },
    {
      question: "일을 하다가 작지만 아리송한 부분이 생겼을 때,",
      choices: [
        { text: "시간이 걸려도 도움을 청한다", value: "J", img: "img/35.png" },
        {
          text: "일단 할 수 있는 대로 하고 넘어간다",
          value: "P",
          img: "img/36.png",
        },
      ],
    },
    {
      question: "늦은 시간,영화 한편만 보고 자려했는데 잠이 안온다. 나는...",
      choices: [
        {
          text: "내일 일정이 있으니 억지로라도 자야한다.",
          value: "J",
          img: "img/37.png",
        },
        { text: "한편 더 보고 자면 된다.", value: "P", img: "img/38.png" },
      ],
    },
    {
      question: "나는 일을 할 때,",
      choices: [
        {
          text: "나만의 계획을 세우고 그대로 실행한다.",
          value: "J",
          img: "img/39.png",
        },
        {
          text: "일단 눈 앞에 보이는 일 먼저 처리한다.",
          value: "P",
          img: "img/40.png",
        },
      ],
    },
  ];

  const results = {
    ESTJ: {
      name: "독수리",
      description: "돈 많은 억만장자",
      img: "img/1.png",
    },
    ENTJ: {
      name: "호랑이",
      description: "이 구역의 권위자",
      img: "img/2.png",
    },
    ESTP: {
      name: "땃쥐",
      description: "나한테 걸리기만 해봐",
      img: "img/3.png",
    },
    ENTP: {
      name: "여우",
      description: "이래도 안 넘어와?",
      img: "img/4.png",
    },
    ESFJ: {
      name: "주먹밥",
      description: "누룽지가 되고싶은",
      img: "img/5.png",
    },
    ENFJ: {
      name: "골든 리트리버",
      description: "저랑도 친구해요",
      img: "img/6.png",
    },
    ESFP: {
      name: "쿼카",
      description: "웃으면 복이와요",
      img: "img/7.png",
    },
    ENFP: {
      name: "원숭이",
      description: "이래도 안웃어?",
      img: "img/8.png",
    },
    ISTJ: {
      name: "늑대",
      description: "잘생김이 흘러넘치는",
      img: "img/9.png",
    },
    INTJ: {
      name: "사자",
      description: "추구미가 낭만 그자체",
      img: "img/10.png",
    },
    ISTP: {
      name: "나무늘보",
      description: "어? 나 불렀어?",
      img: "img/11.png",
    },
    INTP: {
      name: "고양이",
      description: "집에 가고 싶어..",
      img: "img/12.png",
    },
    ISFJ: {
      name: "양",
      description: "헤헤.. ",
      img: "img/13.png",
    },
    INFJ: {
      name: "부엉이",
      description: "혼자있을 시간이 필요한",
      img: "img/14.png",
    },
    ISFP: {
      name: "토끼",
      description: "일 쌓인 여유만만",
      img: "img/15.png",
    },
    INFP: {
      name: "고릴라",
      description: "남들보다 조금 슬픈",
      img: "img/16.png",
    },
  };

  let currentQuestionIndex = 0;
  let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  const questionTitle = document.getElementById("question-title");
  const choicesContainer = document.querySelector(".choices");
  const nextButton = document.getElementById("next-button");
  const resultContainer = document.getElementById("result-container");
  const questionContainer = document.getElementById("question-container");

  // 로딩 화면 추가
  const loadingContainer = document.createElement("div");
  loadingContainer.id = "loading-container";
  loadingContainer.style.display = "none";
  loadingContainer.style.position = "fixed"; // 화면 중앙 배치를 위해
  loadingContainer.style.top = "50%";
  loadingContainer.style.left = "50%";
  loadingContainer.style.transform = "translate(-50%, -50%)";
  loadingContainer.style.backgroundColor = "#000"; // 배경색
  loadingContainer.style.color = "#c0f500"; // 텍스트 색상
  loadingContainer.style.fontSize = "2rem"; // 폰트 크기
  loadingContainer.style.fontFamily = "CWDangamAsac-Bold"; // 폰트
  loadingContainer.style.padding = "40px"; // 여백
  loadingContainer.style.textAlign = "center"; // 가운데 정렬
  loadingContainer.style.borderRadius = "10px"; // 모서리 둥글게
  loadingContainer.style.boxShadow = "0px 0px 8px #c0f500"; // 그림자 추가

  loadingContainer.innerHTML = `
    <h1>결과 계산 중...</h1>
  `;
  document.body.appendChild(loadingContainer);

  function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
  }

  function swipeAnimation(direction, callback) {
    questionContainer.classList.add(direction);
    setTimeout(() => {
      questionContainer.classList.remove(direction);
      callback();
    }, 500); // 애니메이션 시간
  }

  function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      updateProgressBar();

      questionTitle.textContent = question.question;

      choicesContainer.innerHTML = "";
      question.choices.forEach((choice) => {
        const choiceElement = document.createElement("div");
        choiceElement.className = "choice";
        choiceElement.dataset.value = choice.value;

        const imgElement = document.createElement("img");
        imgElement.src = choice.img;
        imgElement.alt = choice.text;
        imgElement.className = "choice-image";

        const textElement = document.createElement("p");
        textElement.textContent = choice.text;

        choiceElement.appendChild(imgElement);
        choiceElement.appendChild(textElement);
        choicesContainer.appendChild(choiceElement);

        choiceElement.addEventListener("click", () => {
          scores[choice.value]++;
          swipeAnimation("swipe-left", () => {
            currentQuestionIndex++;
            updateQuestion();
          });
        });
      });

      if (currentQuestionIndex === 0) {
        nextButton.textContent = "이전 질문";
        nextButton.disabled = true;
        nextButton.style.display = "block"; // "이전 질문" 버튼 표시
      } else if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "결과 보기";
        nextButton.disabled = false;
        nextButton.style.display = "block"; // "결과 보기" 버튼 표시
      } else {
        nextButton.textContent = "이전 질문";
        nextButton.disabled = false;
        nextButton.style.display = "block"; // "이전 질문" 버튼 표시
      }
    } else {
      showLoadingScreen();
    }
  }

  function handlePrevClick() {
    if (currentQuestionIndex > 0) {
      swipeAnimation("swipe-right", () => {
        currentQuestionIndex--;
        updateQuestion();
      });
    }
  }

  function showLoadingScreen() {
    questionContainer.style.display = "none"; // 질문 컨테이너 숨기기
    nextButton.style.display = "none"; // 버튼 숨기기
    loadingContainer.style.display = "block"; // 로딩 화면 보이기

    setTimeout(() => {
      loadingContainer.style.display = "none"; // 로딩 화면 숨기기
      showResult(); // 결과 화면 보여주기
    }, 3000); // 3초 대기 후 결과 페이지로 전환
  }

  function showResult() {
    const resultContainer = document.getElementById("result-container");
    const resultTitle = document.getElementById("result-title");
    const resultImage = document.getElementById("result-image");
    const resultDescription = document.getElementById("result-description");
    const resultButtons = document.getElementById("result-buttons");

    const mbti =
      (scores.E > scores.I ? "E" : "I") +
      (scores.S > scores.N ? "S" : "N") +
      (scores.T > scores.F ? "T" : "F") +
      (scores.J > scores.P ? "J" : "P");

    const resultData = results[mbti];
    const nickname = new URLSearchParams(window.location.search).get(
      "nickname"
    );

    resultTitle.textContent = `${nickname}님의 MBTI는 ${mbti}입니다!`;
    resultImage.src = resultData.img;
    resultDescription.textContent = resultData.description;

    resultButtons.innerHTML = `
      <button id="share-button">결과 공유하기</button>
      <button id="back-button">처음으로 돌아가기</button>
    `;

    nextButton.style.display = "none"; // "이전 질문" 버튼 숨기기

    document.getElementById("share-button").addEventListener("click", () => {
      const shareUrl = `${window.location.origin}${
        window.location.pathname
      }?nickname=${encodeURIComponent(nickname)}&mbti=${mbti}&result=true`;

      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          alert("결과 링크가 복사되었습니다!");
        })
        .catch(() => {
          alert("링크 복사에 실패했습니다. 다시 시도해주세요.");
        });
    });

    document.getElementById("back-button").addEventListener("click", () => {
      window.location.href = "index.html";
    });

    questionContainer.style.display = "none"; // 질문 컨테이너 숨기기

    // 슬라이드 애니메이션 설정
    resultContainer.style.display = "block"; // 결과 컨테이너 표시
    setTimeout(() => {
      resultContainer.style.transform = "translateY(0)"; // 아래에서 위로 슬라이드
      resultContainer.style.opacity = "1"; // 페이드인 효과
    }, 100); // 약간의 딜레이 추가
  }

  nextButton.addEventListener("click", () => {
    if (nextButton.textContent === "결과 보기") {
      showLoadingScreen();
    } else {
      handlePrevClick();
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const resultParam = urlParams.get("result");

  if (resultParam === "true") {
    const nickname = urlParams.get("nickname");
    const mbti = urlParams.get("mbti");

    for (const key of Object.keys(scores)) {
      if (mbti.includes(key)) {
        scores[key]++;
      }
    }

    nextButton.style.display = "none"; // 결과 공유 URL로 접근 시 이전 버튼 숨김
    showResult();
  } else {
    questionContainer.style.display = "block";
    resultContainer.style.display = "none";
    updateQuestion();
  }
});
