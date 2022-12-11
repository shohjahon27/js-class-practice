// window.addEventListener("DOMContentLoaded", () => {
//   class MenuCard {
//     constructor(src, alt, title, desc, price, parentSelector, ...classes) {
//       this.src = src;
//       this.alt = alt;
//       this.title = title;
//       this.desc = desc;
//       this.price = price;
//       this.classes = classes;
//       this.parent = document.querySelector(parentSelector);
//       this.transfer = 11.5;
//       this.changeToUSD();
//     }
//     changeToUSD() {
//       this.price = this.price * this.transfer;
//     }
//     render() {
//       const element = document.createElement("div");

//       if (this.classes.length === 0) {
//         this.classes = "menu__item";
//         element.classList.add(this.classes);
//       } else {
//         this.classes.forEach((className) => element.classList.add(className));
//       }

//       element.innerHTML = `
//            <div class="menu__item">
//                     <img src="${this.src}" alt="${this.alt}">
//                     <h3 class="menu__item-subtitle">${this.title}</h3>
//                     <div class="menu__item-descr">${this.desc}</div>
//                     <div class="menu__item-divider"></div>
//                     <div class="menu__item-price">
//                         <div class="menu__item-cost">Цена:</div>
//                         <div class="menu__item-total"><span>${this.price}</span> $</div>
//                     </div>
//                 </div>
//           `;

//       this.parent.append(element);
//     }
//   }

//   new MenuCard(
//     "icons/facebook.svg",
//     "audi",
//     "AUDI",
//     "dffdfffffffdffffffffffffffffffdddddddfdfdddd",
//     10000,
//     ".menu .container"
//   ).render();

// } );

// //  function Apple(type) {
// //    this.type = type;
// //    this.color = "red";
// //    this.getInfo = getAppleInfo;
// //  }

// //  function getAppleInfo() {
// //    return this.color + " " + this.type + " apple";
// //  }

// //  var apple = new Apple("macintosh");
// //  apple.color = "reddish";
// // alert( apple.getInfo() );

// const seriesDb = {
//   series: {},
//   genre: [],
//   private: false,
// };

// function writeGenres() {
//   for ( let i = 0; i <= 2;  i++){
//     const genre = prompt( `yaxshi ko'rgan janringiz? ${i + 1}` );
//     seriesDb.genre[ i ] = genre;
//   }
// }
// console.log(writeGenres());
