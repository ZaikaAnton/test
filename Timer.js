class Timer {
  constructor() {
    this.timerInterval = null;
    this.setStartTime();
  }

  init() {
    if (!this.startTime) {
      this.setStartTime();
    } else {
      this.startTime = parseInt(this.startTime);
    }
    this.startTimer();
  }
  setStartTime() {
    this.startTime = new Date().getTime();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (!document.getElementById("timer")) {
        clearInterval(this.timerInterval);
        return;
      }
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - this.startTime;
      this.updateTimerDisplay(timeElapsed);
    }, 10);
  }

  updateTimerDisplay(timeElapsed) {
    const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (hoursEl) hoursEl.textContent = this.pad(hours);
    if (minutesEl) minutesEl.textContent = this.pad(minutes);
    if (secondsEl) secondsEl.textContent = this.pad(seconds);
  }

  pad(number) {
    return number < 10 ? "0" + number : number;
  }

  handleToRefresh() {
    document.getElementById("refresh-button").addEventListener("click", () => {
      timerPage.setStartTime();
    });
  }

  clear() {
    clearInterval(this.timerInterval);
    ROOT_TIMER.innerHTML = "";
  }

  render() {
    this.clear();
    this.startTimer();
    let html = `
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h3>Timer</h3>
                <div>
                  <button id="refresh-button" class="btn btn-danger">Refresh</button>
                </div>
              </div>
              <div class="card-body">
                 <div id="timer-display">
                 ${VALUES_TIMER.map((el) => {
                   return `<span id="${el.id}" class="${el.className}">${el.value}</span>`;
                 }).join(":")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    ROOT_TIMER.innerHTML = html;
    this.handleToRefresh();
    return html;
  }
}

const timerPage = new Timer();
