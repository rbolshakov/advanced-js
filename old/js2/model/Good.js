import idGenerator from "../utils/idGenerator.js";

export default class Good {
    constructor({ title, size, image, price, color }) {
        this.id = idGenerator();
        this.title = title;
        this.size = size;
        this.image = image;
        this.color = color;
        this._price = price;
        
    }

    getPrice() {
        return this._price;
    }
}