class Github {
    constructor() {
      this.client_id = '3d39e0361a5fc9f3dc8b';
      this.client_secret = 'f257ea9d31aea23acd8563fade7c02fe159c03b1';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?
                                  client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
                              per_page=${this.repos_count}&sort=${this.repos_sort}
                              &client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }