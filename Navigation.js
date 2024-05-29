class Navigation {
  constructor() {
    this.activePage = localStorage.getItem("activePage") || "resume";
    this.controlBar = new ControlBar();
    this.listMagazine = new Magazine();

    window.addEventListener("popstate", this.handleUrlChange.bind(this));
    window.onload = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("page");
      if (page) {
        this.navigateToPage(page);
      } else {
        this.handleUrlChange();
      }
    };

    window.onbeforeunload = () => {
      const currentPage = this.activePage;
      const baseUrl = window.location.origin + "/test/";
      sessionStorage.setItem("redirectUrl", `${baseUrl}?page=${currentPage}`);
    };
  }

  setInitialPage() {
    const path = window.location.pathname;
    if (path === "/test/" || path === "/test") {
      history.replaceState(null, "", "/test/activity");
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
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    if (page) {
      this.navigateToPage(page);
    } else if (path === "/test/activity") {
      this.setActivePage("resume");
      mapPage.clear();
      timerPage.clear();
      mainPage.render(this.controlBar, this.listMagazine);
      mapPage.stopTimer();
    } else if (path === "/test/map") {
      this.setActivePage("map");
      mapPage.render();
      mainPage.clear();
      timerPage.clear();
    } else if (path === "/test/timer") {
      this.setActivePage("timer");
      mainPage.clear();
      mapPage.clear();
      timerPage.render();
      mapPage.stopTimer();
    } else {
      history.replaceState(null, "", "/test/activity");
      this.handleUrlChange();
    }
  }

  navigateToPage(page) {
    switch (page) {
      case "resume":
        this.setActivePage("resume");
        mainPage.render(this.controlBar, this.listMagazine);
        mapPage.clear();
        timerPage.clear();
        mapPage.stopTimer();
        break;
      case "map":
        this.setActivePage("map");
        mapPage.render();
        mainPage.clear();
        timerPage.clear();
        break;
      case "timer":
        this.setActivePage("timer");
        timerPage.render();
        mainPage.clear();
        mapPage.clear();
        mapPage.stopTimer();
        break;
      default:
        this.setActivePage("resume");
        mainPage.render(this.controlBar, this.listMagazine);
        mapPage.clear();
        timerPage.clear();
        mapPage.stopTimer();
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
            <a href="/test/activity" onclick="event.preventDefault(); navigationComponent.handlePageChange(event, 'resume', '/test/activity');"><button id="resume-btn" class="btn btn-outline-primary ${
              this.activePage === "resume" ? "active-btn" : ""
            }">Resume</button></a>
            <a href="/test/map" onclick="event.preventDefault(); navigationComponent.handlePageChange(event, 'map', '/test/map');"><button id="map-btn" class="btn btn-outline-primary ${
              this.activePage === "map" ? "active-btn" : ""
            }">Map</button></a>
            <a href="/test/timer" onclick="event.preventDefault(); navigationComponent.handlePageChange(event, 'timer', '/test/timer');"><button id="timer-btn" class="btn btn-outline-primary ${
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

    // Перенаправляем пользователя на сохраненную страницу после перезагрузки
    const redirectUrl = sessionStorage.getItem("redirectUrl");
    if (redirectUrl) {
      sessionStorage.removeItem("redirectUrl");
      window.location.href = redirectUrl;
    }
  }
}

const navigationComponent = new Navigation();
navigationComponent.render();
