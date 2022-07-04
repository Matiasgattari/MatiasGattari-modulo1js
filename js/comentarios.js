 let entrada = prompt("Qué querés decirnos?").toLocaleLowerCase();
 console.log(`Comentario 1: ${entrada}`)


 while (entrada != "gracias") {
     for (let i = 2; i < 5; i++) {
         entrada = prompt("Algún otro comentario?");
         console.log(`Comentario ${i}: ${entrada}`);
     }
     break;
 }
 while (entrada === "gracias") {
     alert("Gracias a vos por tu compra, esperamos vuelva pronto.");
     break;
 }
 alert("Nos contactaremos con vos a la brevedad");
 