var elTitle = document.querySelector(".title");
var elText = document.querySelector(".text");

var userName = prompt("Ismingizni kiriting: ", "Sotvoldi");
var userPrice = prompt("Pulingizni kiriting: ", 12000000);

var dollarCourse = 11225;
var euroCourse = 11686;
var ticketPrice = 500;
var hotelPrice = 250;
var museumPrice = 120 * euroCourse;
var totalSum = museumPrice + (ticketPrice + hotelPrice) * dollarCourse;

if (totalSum >= 10000000) {
  elTitle.textContent += userName;
  elText.textContent = `Sizga oq yo'l ${userName}. Safaringiz behatar bo'lsin:)`;
  console.log(`${elTitle.textContent}\n${elText.textContent}`);
} else {
  elTitle.textContent += userName;
  elText.textContent = `Ozgina sabr qilasiz ekan ${userName}. Puldan muammo bor:)`;
  console.log(`${elTitle.textContent}\n${elText.textContent}`);
}
