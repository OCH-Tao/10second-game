let game = {
  startTime: null,
  displayArea: document.getElementById('display-area'),
  rapTime: document.getElementById('rap-time'),
};
function start() {
  game.startTime = Date.now();
  document.body.onkeydown = stop;
}
function rapHide() {
  document.getElementById("rap-time").hidden = true;
}
function rap() {
  game.rapTime.innerText = ((Date.now()) - game.startTime) / 1000 + '秒';
}
function stop() {
  rapHide();
  let currentTime = Date.now();
  let seconds = (currentTime - game.startTime) / 1000;
  if (9.5 <= seconds && seconds <= 10.5) {
    game.displayArea.innerText = seconds + '秒でした。すごい。';
  } else {
    game.displayArea.innerText = seconds + '秒でした。残念。';
  }
}
if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
  start();
  setInterval(rap, 10);
  setTimeout(rapHide, 3000);
}