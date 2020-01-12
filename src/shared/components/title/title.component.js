export class TitleComponent {

    constructor(text) {
        this.text = text;
        this.element = null;
    }

    display() {
        this.element = document.createElement("app-title");
        const title = document.createElement("h1");
        this.element.appendChild(title);
        title.appendChild(document.createTextNode(this.text));
        document.body.appendChild(this.element);
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }

}