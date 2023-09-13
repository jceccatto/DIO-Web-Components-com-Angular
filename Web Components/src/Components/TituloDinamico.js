class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do component:      <h1>Ceccatto</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
        h1{color: red;}
        `;

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }   
}

//importatnte sempre colocar um hifen no nome para diferenciar da base
customElements.define('titulo-dinamico', TituloDinamico);