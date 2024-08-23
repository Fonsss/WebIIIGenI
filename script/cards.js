console.log("Cards cargado");


const dataCards= [
    {
        "title": "Adidas",
        "url_image": "./images/Adidas_logo.png",
        "cta": "Ir al sitio Web",
        "link": "https://www.adidas.com/us/la"
    },
    {
        "title": "Nike",
        "url_image": "./images/Nike.webp",
        "cta": "Ir al sitio Web",
        "link": "https://www.nike.com/us/es/"
    },
    {
        "title": "New Balance",
        "url_image": "./images/NewB.png",
        "cta": "Ir al sitio Web",
        "link": "https://www.newbalance.com"
    }


];

(function (){
    let CARD={
        init: function(){
            let _self=this;
            //Llamar a la función
            this.insertData(_self);

        },

        insertData: function(_self){
            dataCards.map(function (item, index){
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));


            });

            
        },
        tplCardItem: function (item, index){
            return(`<div class='card-item' id="card-number-${index}">
                <img src="${item.url_image}"/>
                <div class='card-info'>
                    <p class= 'card-title'>${item.title}</p>
                    <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>
            </div> ` 
         )
        }
    }
    CARD.init();

})();
