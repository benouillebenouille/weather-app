export class ButtonComponent {

    constructor(text) {
        this.text = text;
        this.elementSearch = null;
        this.container = null;
    }

    display() {
        this.container = document.createElement("app-button");
        this.elementSearch = document.createElement("button");
        this.elementSearch.setAttribute("type","submit");
        this.elementSearch.appendChild(document.createTextNode(this.text));
        this.container.appendChild(this.elementSearch);
        document.body.appendChild(this.container);
    }

    hide() {
        this.container.parentNode.removeChild(this.container);
    }

}