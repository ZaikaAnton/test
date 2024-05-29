class ControlBar {
  create() {
    const html = `
      <div class="control-bar-container">
        ${DATA_BAR.map(
          ({
            title,
            hiddenBtn,
            imgPerson,
            profileName,
            imgBalance,
            balanceName,
            imgRoot,
            rootsName,
            imgFriends,
            nameBlockFriends,
            imgFolder,
            nameFolder,
            imgSettings,
            nameSettings,
          }) => {
            return `
            <div class="control-bar-item">
              <nav>
                <div class="d-flex justify-content-between align-items-center">
                  <h2>${title}</h2>
                  <button class="btn-hidden"><img src=${hiddenBtn} alt="Иконка"></button>
                </div>
                <hr>
                <ul>
                  <li><a href="#" onclick="event.preventDefault();"><img src=${imgPerson} alt="Иконка">${profileName}</a></li>
                  <li><a href="#" onclick="event.preventDefault();"><img src=${imgBalance} alt="Иконка">${balanceName}</a></li>
                  <li><a href="#" onclick="event.preventDefault();"><img src=${imgRoot} alt="Иконка">${rootsName}</a></li>
                  <li><a href="#" onclick="event.preventDefault();"><img src=${imgFriends} alt="Иконка">${nameBlockFriends}</a></li>
                  <hr>
                  <li><a href="#" onclick="event.preventDefault();"><img src=${imgFolder} alt="Иконка">${nameFolder}</a></li>
                  <li><a href="#" onclick="event.preventDefault();"><img src=${imgSettings} alt="Иконка">${nameSettings}</a></li>
                </ul>
              </nav>
            </div>
          `;
          }
        ).join("")}
      </div>
    `;
    return html;
  }
}

const controlBar = new ControlBar();
