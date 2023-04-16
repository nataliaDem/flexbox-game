const intervalTimeout = 1000;
const urlMatch = window.location.pathname.match(/\/(.*?)\//);
const hostingDirectory = urlMatch ? "/" + urlMatch[1] : "";
const baseUrl = window.location.origin + hostingDirectory;

const urlParams = new URLSearchParams(window.location.search);
const gameCode = urlParams.get("code") || localStorage.getItem("gameCode") || null;
const isNewGame = !!urlParams.has("new");
if (isNewGame) {
  localStorage.removeItem("gameCode");
  localStorage.removeItem("userRole");
  localStorage.removeItem("gameStatus");
  localStorage.removeItem("userId");
  localStorage.removeItem("userIsLogged");
  urlParams.delete("new");
}
if (gameCode) {
  localStorage.setItem("gameCode", gameCode);
  setCodeToUrlParams(gameCode);
}

$(document).ready(function () {

  // Custom scrollbar plugin
  $(".level-menu").mCustomScrollbar({
    scrollInertia: 0,
    autoHideScrollbar: true
  });

  $(".note-toggle").on("click", function () {
    if(!$(".note-toggle").hasClass('disabled')) {
      $(".note").slideToggle();
    }
  });

  showLeaderBoard();

  setInterval(function() {
    showLeaderBoard();
  }, intervalTimeout);

});

async function getGameStatus(gameCode) {
  return axios.get(`${baseUrl}/api/check-game-status?code=${gameCode}`)
    .then(res => {
      return res.data.status;
    });
}

function showLeaderBoard() {
  const gameCode = localStorage.getItem("gameCode");
  const userId = localStorage.getItem("userId");
  if (gameCode) {
    axios.get(`${baseUrl}/api/leaderboard?code=${gameCode}`)
      .then(res => {
        console.log(res.data);
        $('.leaderboard').empty();
        for (let [i, member] of res.data.entries()) {
          const item = document.createElement("div");
          if (i === 0) {
            $(item).addClass('leader');
          }
          if (i === 1) {
            $(item).addClass('second');
          }
          if (i === 2) {
            $(item).addClass('third');
          }
          if (member.progress === levels.length) {
            $(item).addClass('completed');
          }
          $(item).html("<div><span class='member-rank'>" + (i + 1) + "</span>" +
            "<span class='member-name'>" + (userId && member.id === Number(userId) ? "> " : "") + member.name + "</span></div>" +
            "<div class='time'>" + formatTime(member.lastAnswerTime) +
            "<span class='member-score'>" + member.progress + "</span></div>");
          $(".leaderboard").append(item);
        }
      });
  }
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatTime(timestamp) {
  if (!timestamp) {
    return "";
  }
  const date = new Date(timestamp)
  return [
    padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
}

function setCodeToUrlParams(gameCode) {
  if (gameCode) {
    urlParams.set("code", gameCode);
    history.replaceState(null, null, window.location.pathname+"?"+urlParams.toString());
  }
}

function playWinSound(audioId) {
  const audio = document.getElementById(audioId);
  audio.play();
}