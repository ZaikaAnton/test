class Loading {
  create() {
    const loading = `
      <div id="loading-screen" class="d-flex justify-content-center align-items-center my-loading">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Загрузка...</span>
        </div>
      </div>
    `;
    return loading;
  }
}

const elementLoading = new Loading();
