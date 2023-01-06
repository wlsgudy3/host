const quotes = [
  {
    quote_EN: "Life's greatest happiness is to be convinced we are loved.",
    quote_KR:
      "인생에 있어서 최고의 행복은 우리가 사랑받고 있음을 확신하는 것이다.",
    author: "[빅터 위고]",
  },
  {
    quote_EN: "He that can have patience can have what he will.",
    quote_KR:
      "인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다.",
    author: "[벤자민 프랭클린]",
  },
  {
    quote_EN:
      "I hear and I forget. I see and I remember. I do and I understand.",
    quote_KR: "들은 것은 잊어버리고, 본 것은 기억하고 직접 해본 것은 이해한다",
    author: "[공자]",
  },
  {
    quote_EN: "Success is counted sweetest by those who ne'er succeed.",
    quote_KR:
      "성공이 그렇게 달콤한 것은 결코 성공하지 못한 사람들이 있기 때문이다.",
    author: "[에밀리 디킨스]",
  },
  {
    quote_EN: "Prosperity makes friends, adversity tries them.",
    quote_KR: "성공은 친구를 만들고, 역경은 친구를 시험한다.",
    author: "[퍼블릴리어스 사이러스]",
  },
  {
    quote_EN: "Read much, but not many books.",
    quote_KR: "많이 읽어라. 그러나 많은 책을 읽지는 마라.",
    author: "[벤자민 프랭클린]",
  },
  {
    quote_EN: "Let no one ever come to you without leaving better and happier.",
    quote_KR:
      "당신을 만나는 모든 사람이 당신과 헤어질 때는 더 나아지고 더 행복해질 수 있도록 하라.",
    author: "[마더 테레사]",
  },
  {
    quote_EN:
      "I don't think of the past. The only thing that matters is the everlasting present.",
    quote_KR: "나는 과거를 생각하지 않습니다. 중요한것은 끝없는 현재 뿐이지요.",
    author: "[윌리엄 서머셋 모옴]",
  },
  {
    quote_EN:
      "It's not that I'm so smart, it's just that I stay with problems longer.",
    quote_KR: "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
    author: "[알버트 아인슈타인]",
  },
  {
    quote_EN: "While there's life, there's hope.",
    quote_KR: "삶이 있는 한 희망은 있다.",
    author: "[키케로]",
  },
  {
    quote_EN: "Well begun is half done.",
    quote_KR: "시작이 반이다.",
    author: "[아리스토텔레스]",
  },
  {
    quote_EN: "Respect a man, he will do the more.",
    quote_KR: "사람을 존경하라, 그러면 그는 더 많은 일을 해 낼 것이다.",
    author: "[제임스 오웰]",
  },
];

const quote_EN = document.querySelector("#quote span:nth-child(1)");
const quote_KR = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:nth-child(3)");

const quote = quotes[Math.floor(Math.random() * quotes.length)];

quote_EN.innerText = quote.quote_EN;
quote_KR.innerText = quote.quote_KR;
author.innerText = quote.author;
