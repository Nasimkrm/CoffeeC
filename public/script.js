

const menuSale = [
    {
        id: 1,
        price: 9.5,
        category: "TARTINE",
        items: [{
            name: "SMASHED AVO",
            description: "Pain toasté, avocat écrasé, feta, dukkah, jus de citron vert",
            notes: "Supplement: Jambon serrano / 3",
        },
        ]
    },
    {
        id: 2,
        category: "GAUFRES",
        price: 9.5,
        items: [
            {
                name: "Salmon | Cream cheese",
                description: "Saumon fumé, philadelphia aux herbes, aneth, graines, sur une gaufre toastée",
                notes: ""
            },
            {
                name: "Serrano | Parmesan",
                description: "Jambon serrano, parmesan, pesto maison, chimichurri, sur une gaufre toastée",
                notes: ""

            }
        ]

    },

]

const menuSucre = [{
    id: 3,
    category: "TARTINE",
    price: 7.5,
    items: [{ name: "PB DELIGHT", description: "Pain toasté, beurre de cacahuète,banane, amandes, miel, cannelle", notes: "" }
    ]
}
    ,
{
    id: 4,
    category: "PORRIDGE BOWLS",
    price: 8.9,
    items: [{ name: "ORIGINAL GANGSTER", description: "Flacons d'avoine,banane, praliné, beurre de cacahuète & caramel,graines de courage, sirop d'érable", notes: "" },
{
    name:"APPLEY EVER AFTER",
    description:"Flacons d'avoine, lait d'avoine, pommes à la cannelle, granola, amandes, pépites de chocolat noir, sirop d'érable", notes:" ",
}]
}
]

const coffeeMenu = [
    {
        id:3,
        title:"Coffee.",
        price:"", 
        items: [
            {name:"ESPRESSO",price:"1.8 / 2.5"},
            {name:"AMERICANO",price: "1.8 / 2.5"},
            {name:"MACCIATO",price:"2 / 2.7"},
            {name:"PICCOLO",price:"2.8"},
            {name:"CAPPUCCINO",price:"3.8 / 4.5"},
            {name:"LATTE",price:"3.8 / 4.5"},
            {name:"FLAT WHITE",price:"3.8 / 4.3"},
            {name:"MOCHA",price:"4 / 4.7"},
]}, 
    {
        id:4,
        title:"Tea & Infusions.", 
        price:2.9,
        items:[{name:"EARL GREY | VERT CITRUS & ALOE VERA | GUARANA, POMME & PECHE | CITRON & GINGEMBRE | HIBISCUS & FRUITS ROUGES | ROOIBOS CREME CARAMEL",price:""}]
    },
    {
        id:5,
        title:"Specials.", 
        price:"",
        items:[
            {name:"RED HOT CHILI MOCHA",price:5},
            {name:"PUMPKIN LATTE", price:5},
            {name:"GINGERBREAD LATTE", price:5},
            {name:"DIRTY CHAI",price:5} 
                ]
    },

    {
        id:6,
        title:"Not Coffee But Delicious.",
        price:"",
        items:[
            {name:"MATCHA LATTE",price:5,desc:""}, 
            {name:"CHAI LATTE",price:4.5,desc:""}, 
            {name:"CHOCOLAT CHAUD", price:4.5,desc:""},
            {name:"GOLDEN LATTE", price:5,desc:""},
            {name:"HUG IN A MUG", price:4.5, desc:"GINGEMBRE, ORANGE, MIEL, CITRON VERT, CANNELLE"}]

    },

// {
//     id:7,
//     title:"Laits végétaux.",
//     price:0.5,
//     desc:"Avoine | Amande | Noix de coco",
// },
// {
//     id:8,
//     title:"Sirops Bio.",
//     price:0.5,
//     desc:"Vanille| Caramel | Noix de Coco | Noisette"
// }
    
]



const sectionSale = document.querySelector(".menu-sale");
const sectionSucre = document.querySelector(".menu-sucre");
const cafeMenu = document.querySelector(".coffee-menu");

window.addEventListener("DOMContentLoaded", function () {
    const displayMenu = (menu) => {
        return (
            menu.map(function (item) {
                return `
                <article class="menu-item">
        <div class="item-info">
            <header class="header-items">
                <h4>${item.category}</h4>
                <h4 class="price">${item.price}</h4>
            </header>

            ${item.items.map(function (dish) {
                    return `<h4>${dish.name}</h4>
                <p>${dish.description}</p>
                <h5>${dish.notes}</h5>`
                }).join("")}
            
        </div>
    </article>

    `
            }))
    };

    const displaySale = displayMenu(menuSale).join(" ");
    console.log(displaySale);
    const displaySucre = displayMenu(menuSucre).join(" ");
    sectionSale.innerHTML = displaySale;
    sectionSucre.innerHTML = displaySucre;
    // const displayCoffee = displayMenu(coffeeMenu).join(" ");
    // cafeMenu.innerHTML = displayCoffee;

});

window.addEventListener("DOMContentLoaded",function() {
    const showMenu = (menu) => {
        return (menu.map(function(item) {

            return `
           
        <div class="menu-section">
            <header class="heading">
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
            </header>
                    
                    ${item.items.map(function(type){
                    return `<div><div class="coffee-type">
                            <p>${type.name}</p>
                            <p>${type.price}</p>
                            
                            </div>
                            <p class="coffee-desc">${type.desc ? type.desc : ""}</p>
                            </div>`
            }).join(" ")}
            </div>`

            
        }))
    };

    const displayCoffee = showMenu(coffeeMenu).join(" ");
    console.log(displayCoffee);
    cafeMenu.innerHTML = displayCoffee;
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("review-box");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}