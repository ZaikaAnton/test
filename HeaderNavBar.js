class HeaderNavBaR {
  create() {
    const html = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
              <div class="navbar-brand header-container__btn">
                  <img src="img/arrow.svg" alt="Profile Icon" class="mr-2">
                  User pages
              </div>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item active">
                          <div class="nav-link header-container__group" >
                              <img src="img/statistic.svg" alt="Icon" class="mr-2">
                              Statistic
                          </div>
                      </li>
                      <li class="nav-item">
                          <div class="nav-link header-container__group">
                              <img src="img/invoices.svg" alt="Icon" class="mr-2">
                              Invoices
                          </div>
                      </li>
                      <li class="nav-item">
                          <div class="nav-link header-container__group" >
                              <img src="img/shedule.svg" alt="Schedule Icon" class="mr-2">
                              Schedule
                          </div>
                      </li>
                  </ul>
              </div>
        </nav>
        `;
    return html;
  }
}

const headerNavBar = new HeaderNavBaR();
