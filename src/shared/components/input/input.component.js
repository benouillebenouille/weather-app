    export class InputComponent {

        constructor() {
            this.container=null;
            this.city = null;
        }
        

        display() {
            this.city=document.createElement("input");
            this.container=document.createElement("div");
            this.container.appendChild(this.city);
            document.body.appendChild(this.container);
        
        }

        hide() {
            this.container.parentNode.removeChild(this.container);
        }

        }
