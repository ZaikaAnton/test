class Main {
  clear() {
    ROOT_MAIN.innerHTML = "";
  }
  render(controlBar, listMagazine) {
    MAIN_RESUME.forEach(({ id, name, img, contacts, skills }) => {
      const html = `
<div class="container-fluid mt-4">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-12 d-flex flex-column align-items-center align-items-lg-start mb-4 mb-lg-0">
      <div class="resume-header mb-4">
        <img src='${img}' alt='Фото${name}' class="resume-photo"/>
        <h1 class="resume-name">${name}</h1>
        <div class="resume-skills">
          ${skills
            .map((skill) => `<p class="resume-skill__item">${skill}</p>`)
            .join("")}
        </div>
        <div class="resume-hrefs">
          ${contacts
            .map((contact) => {
              let iconSrc = "";
              if (contact.includes("hh.ru")) {
                iconSrc = "img/hh_logo.svg";
              } else if (contact.includes("t.me")) {
                iconSrc = "img/telegram_logo.svg";
              }
              return `<a class="resume-href" href="${contact}" target="_blank"><img src="${iconSrc}" alt="Иконка" /></a>`;
            })
            .join("")}
        </div>
      </div>
      <div class="control-bar mb-4">
        ${controlBar.create()}
      </div>
    </div>
    <div class="col-lg-9 col-md-8 col-12">
        ${listMagazine.create()}
    </div>
  </div>
</div>
      `;
      ROOT_MAIN.innerHTML = html;
    });
    return ROOT_MAIN.innerHTML;
  }
}

const mainPage = new Main();
