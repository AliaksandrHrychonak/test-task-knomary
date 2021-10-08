class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _handleResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getCourse() {
    return fetch(`${this._baseUrl}/education.json`, {
      method: 'GET',
      headers: this._headers,  
    })
    .then(this._handleResponce);
  }
  getNews() {
    return fetch(`${this._baseUrl}/news.json`, {
      method: 'GET',
      headers: this._headers,  
    })
    .then(this._handleResponce);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/user.json`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._handleResponce);
  }
}

export const api = new Api({
  baseUrl: process.env.PUBLIC_URL + "/data",
  headers: {
    "content-type": "application/json",
    authorization: "112132-12323-23322321-435454",
  },
});