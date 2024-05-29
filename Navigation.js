class Navigation {
  constructor() {
    this.activePage = localStorage.getItem("activePage") || "resume";
    this.controlBar = new ControlBar();
    this.listMagazine = new Magazine();

    window.addEventListener("popstate", this.handleUrlChange.bind(this));
    window.onload = () => {
      this.handleUrlChange();
    };

    window.onbeforeunload = function () {
      localStorage.setItem("lastPage", window.location.pathname);
    };
  }

  setInitialPage() {
    const path = window.location.pathname;
    if (path === "/" || path === "") {
      history.replaceState(null, "", "/activity");
      this.setActivePage("resume");
      mainPage.render(this.controlBar, this.listMagazine);
      mapPage.clear();
      timerPage.clear();
      mapPage.stopTimer();
      return true;
    }
    return false;
  }

  handleUrlChange() {
    const path = window.location.pathname;
    if (path === "/activity") {
      this.setActivePage("resume");
      mapPage.clear();
      timerPage.clear();
      mainPage.render(this.controlBar, this.listMagazine);
      mapPage.stopTimer();
    } else if (path === "/map") {
      this.setActivePage("map");
      mapPage.render();
      mainPage.clear();
      timerPage.clear();
    } else if (path === "/timer") {
      this.setActivePage("timer");
      mainPage.clear();
      mapPage.clear();
      timerPage.render();
      mapPage.stopTimer();
    } else {
      history.replaceState(null, "", "/activity");
      this.handleUrlChange();
    }
  }

  handlePageChange(event, page, path) {
    event.preventDefault();
    if (this.isActivePage(page)) return;
    history.pushState(null, "", path);
    this.handleUrlChange();
  }

  isActivePage(page) {
    return this.activePage === page;
  }

  setActivePage(page) {
    this.activePage = page;
    localStorage.setItem("activePage", page);
    this.updateActiveButton();
  }

  updateActiveButton() {
    document.querySelectorAll(".nav-container button").forEach((button) => {
      button.classList.remove("active-btn");
    });

    const activeButtonId = this.activePage + "-btn";
    document.getElementById(activeButtonId)?.classList.add("active-btn");
  }

  render() {
    const htmlNavigation = `
      ${headerNavBar.create()}
      <div class="nav-container d-flex flex-wrap justify-content-between align-items-center">
        <div class="btn-group mb-2 mb-lg-0">
            <a href="/activity" onclick="event.preventDefault(); navigationComponent.handlePageChange(event, 'resume', '/activity');"><button id="resume-btn" class="btn btn-outline-primary ${
              this.activePage === "resume" ? "active-btn" : ""
            }">Resume</button></a>
            <a href="/map" onclick="event.preventDefault(); navigationComponent.handlePageChange(event, 'map', '/map');"><button id="map-btn" class="btn btn-outline-primary ${
              this.activePage === "map" ? "active-btn" : ""
            }">Map</button></a>
            <a href="/timer" onclick="event.preventDefault(); navigationComponent.handlePageChange(event, 'timer', '/timer');"><button id="timer-btn" class="btn btn-outline-primary ${
              this.activePage === "timer" ? "active-btn" : ""
            }">Timer</button></a>
        </div>
        <div class="btn-group mb-2 mb-lg-0">
            <button id="btn1" class="btn btn-outline-primary">Notes</button>
            <button id="btn2" class="btn btn-outline-primary">Friends</button>
            <button id="btn3" class="btn btn-outline-primary">Photos</button>
            <button id="btn4" class="btn btn-outline-primary">Settings</button>
        </div>
      </div>
      <hr class="nav-line">
    `;
    ROOT_NAVIGATION.innerHTML = htmlNavigation;
    if (!this.setInitialPage()) {
      this.handleUrlChange();
    }

    // Проверяем, была ли предыдущая страница сохранена в локальном хранилище,
    // и если да, перенаправляем пользователя на нее
    const lastPage = localStorage.getItem("lastPage");
    if (lastPage) {
      localStorage.removeItem("lastPage");
      window.location.href = lastPage;
    }
  }
}

const navigationComponent = new Navigation();
navigationComponent.render();
