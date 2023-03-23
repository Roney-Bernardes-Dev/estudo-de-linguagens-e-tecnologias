class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("Contet")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        const newsImage = document.createElement("img");
        newsImage.src= this.getAttribute("photo") || "./assets/img/photo-default.jpg"
        newsImage.alt = "Foto da naticia"
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
            }

            .darthVaderImg {
                width: 200px;
                height: 200px;
              }

              .card {
                width: 720px;
                display: flex;
                flex-direction: row; 
            }

            .card_left, .card_right {
                margin-top: 15px;
                flex-basis: auto;
                padding-left: 15px;
            }

            .card_right {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .card_left > span {
                font-weight: 400;
            }

            .card_left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }

            .card_left > p {
                color: rgb(155, 151, 151);
            }

        `
        return style;
    }
}

customElements.define('card-news', CardNews)