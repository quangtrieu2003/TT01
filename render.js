var Challenge = [
  {
    challengeName: "Challenge 0",
    titleChallenge: "Website Khoa Tieng ITALI HANU",
    href: "https://trieupq.thuctap.inevn.com/TT0/trangchu.html",
    status: "mo",
    locationDiv: 3,
  },
  {
    challengeName: "Challenge 1",
    titleChallenge: "Portfolio + Project IE",
    href: "https://trieupq.thuctap.inevn.com",
    status: "mo",
    locationDiv: 3,
  },
];

var khaNangTuDuy_List = [
  {
    img: "./img/tuduylogic.jpg",
    text: "Tư duy logic",
    alt: "tuduylogic",
  },
  {
    img: "./img/tưduydachieu.png",
    text: "Tư duy đa chiều",
    alt: "tuduydachieu",
  },
  {
    img: "./img/tuduytoandien.jpg",
    text: "Tư duy toàn diện",
    alt: "tuduytoandien",
  },
  {
    img: "./img/tưduysangtao.jpg",
    text: "Tư duy sáng tạo",
    alt: "tuduysangtao",
  },
];

var khaNangTuDuyContainer = document.getElementById("khaNangTuDuy");

khaNangTuDuyContainer.innerHTML = khaNangTuDuy_List
  .map((item) => {
    return `
    <li class="flex">
        <img class="anhtuduy mr-5 mb-3" src="${item.img}" alt="${item.alt}">
        <p class="mb-2 mt-3">${item.text}</p>
    </li>
    `;
  })
  .join("");

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["kỹ năng giao tiếp", "kỹ năng học hỏi "],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
