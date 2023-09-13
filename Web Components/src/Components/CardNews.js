class Cardnews extends HTMLElement{
    // constructor é aquilo que será executado primeiro
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    //Build será o que vai construir os elementos
    build(){    
              
        //Criando a div class que tera dentro dela os cards left e right
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        //Criando e estruturando o cardleft
        const cardleft = document.createElement("div");
        cardleft.setAttribute("class", "cardleft");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");


        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardleft.appendChild(autor);
        cardleft.appendChild(linkTitle);
        cardleft.appendChild(newsContent);

        //Criando e estruturando o cardright
        const cardright = document.createElement("div");
        cardright.setAttribute("class", "cardright");

        const newsimg = document.createElement("img");
        newsimg.src = this.getAttribute("photo") || "./assets/foto-default.jpg"
        newsimg.alt = "foto da noticia";
        cardright.appendChild(newsimg);
        
        //Chamando os componentes de ambos os cards
        componentRoot.appendChild(cardleft);
        componentRoot.appendChild(cardright);
        
        return componentRoot;
    }

    //aplicar os estilos
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .cardleft{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .cardleft a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .cardleft p{
            color: darkgray;
        }
        
        .cardleft span{
            font-weight: 400;
        }    
        
        .cardright img{
            border-radius: 10% / 10%;
            padding: 1px 1px 1px;
            width: 200px;
            height: 200px;
        }
        `
        return style;

    }
}

customElements.define("card-news", Cardnews);