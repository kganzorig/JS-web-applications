class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    const repoImageEl = document.querySelector('#repo-image');

    // This section adds the contents
    repoNameEl.textContent = repoData.full_name;
    repoDescriptionEl.textContent = repoData.description;

    // To add img element
    const imgEl = document.createElement('img');
    imgEl.src = repoData.organization.avatar_url;

    // Append the img element to the container
    repoImageEl.appendChild(imgEl);

  }

  }

module.exports = GithubView;