class Magazine {
  create() {
    const posts = `
      <div class="container d-flex justify-content-end">
          <div class="col-md-12 col-lg-9">
              ${DATA_POSTS.map(
                ({
                  header,
                  img,
                  description,
                  viewersImg,
                  viewers,
                  commentImg,
                  comments,
                }) => {
                  return `
                      <div class="card mb-4" style="width: 100%;">
                          <img src="${img}" class="card-img-top" alt="Фото поста">
                          <div class="card-body">
                              <h5 class="card-title">${header}</h5>
                              <p class="card-text">${description}</p>
                          </div>
                          <div class="card-footer d-flex justify-content-between">
                              <div class="d-flex align-items-center">
                                  <img src="${viewersImg}" class="me-2" alt="Иконка зрителей" style="width: 24px; height: 24px;">
                                  <span>${viewers}</span>
                              </div>
                              <div class="d-flex align-items-center">
                                  <img src="${commentImg}" class="me-2" alt="Иконка комментов" style="width: 24px; height: 24px;">
                                  <span>${comments}</span>
                              </div>
                          </div>
                      </div>
                  `;
                }
              ).join("")}
          </div>
      </div>
    `;
    return posts;
  }
}

const listMagazine = new Magazine();
