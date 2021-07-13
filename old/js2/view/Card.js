export default class Card {
    constructor(good) {
        this._data = good;
    }

    getHtml() {
        return `<div class="cart-left__unit">
        <div class="cart-left__unit-inside">
          <img src="${this._data.image}" alt="manpicture" class="cart-left__unit-img">
          <div class="cart-left__unit-descr">
            <div class="cart-left__unit-title">${this._data.title}</div>
            <div class="cart-left__unit-price">Price: <span>$${this._data.getPrice()}</span></div>
            <div class="cart-left__unit-color">Color: ${this._data.color}</div>
            <div class="cart-left__unit-size">Size: ${this._data.size}</div>
            <div class="cart-left__unit-quantity">
              Quantity:
              <input type="text" value="2">
            </div>
          </div>
        </div>
      </div>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHtml());
    }
}

