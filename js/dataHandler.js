export default {
  _url: "/project/api/v1/",

  getCatalog(errorCallback) {
    fetch(`${this._url}catalogData.json`)
      .then((response) => {
        if (response.ok) {
          return response.data;
        } else {
          return errorCallback();
        }
      })
      .catch((error) => {
        return errorCallback();
      });
  },

  getCart(errorCallback) {
    fetch(`${this._url}getCart.json`)
      .then((response) => {
        if (response.ok) {
          return response.data;
        } else {
          return errorCallback();
        }
      })
      .catch((error) => {
        return errorCallback(error);
      });
  },

  addToCart(errorCallback, data) {
    return fetch(`${url}addToCart`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          return true;
        } else {
          return errorCallback();
        }
      })
      .catch((error) => {
        return errorCallback(error);
      });
  },

  deleteFromCart(errorCallback, id) {
    return fetch(`${url}deleteFromCart`, {
      method: "DELETE",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          return true;
        } else {
          return errorCallback();
        }
      })
      .catch((error) => {
        return errorCallback(error);
      });
  },
};

// const x = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(ok);
//   }, 2000);
// }).then((data) => {
//   console.log(data);
// });
// console.log(x);
