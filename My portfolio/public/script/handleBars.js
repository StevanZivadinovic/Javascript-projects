var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
  list: [
      {
          nameProject:'Pravoslavne ikone',
          technologies:'ReactJS project',
          address:"https://pravoslavne-ikone-new.web.app/",
          image:"./img/pravoslavne-ikone.png"
      },
      {
        nameProject:'Zanimljiva geografija',
        technologies:'JavaScript project',
        address:"https://zgeografija-c4387.web.app/#",
        image:"./img/zanimljiva-geografija.png"
    },
    {
      nameProject:'Japanese watch',
      technologies:'JavaScript project',
      address:"https://japanese-watch.web.app/",
      image:"./img/japanese-watch.png"
  },
  {
    nameProject:'Todo app',
    technologies:'JavaScript project',
    address:"https://todo-app-5d45e.web.app/",
    image:"./img/todo-app.png"
},
{
  nameProject:'Rent a car',
  technologies:'JavaScript project',
  address:"https://rent-a-car-ddd10.web.app/",
  image:"./img/rent-a-car.png"
},
{
  nameProject:'Chat app',
  technologies:'JavaScript project',
  address:"https://real-time-chat-app-42d7c.web.app/",
  image:"./img/chat-app.png"
},
{
  nameProject:'Slack-chat-app',
  technologies:'React project',
  address:"https://slack-chat-app-ba4de.web.app",
  image:"./img/slack-chat-app.png"
},
{
  nameProject:'Strawberry website',
  technologies:'HTML & SASS project',
  address:"https://sass-strowberry-website.web.app/",
  image:"./img/strawberrySassWebsite.png"
},
{
  nameProject:'CryptoTrack App',
  technologies:'JavaScript project',
  address:"https://criptotrackapp.web.app",
  image:"./img/CryptoTrackApp.png"
},
{
  nameProject:'Natours website',
  technologies:'HTML & SASS project',
  address:"https://natours-e9cff.web.app/",
  image:"./img/Natours.png"
},
{
  nameProject:'Asymmetry website',
  technologies:'HTML & SASS project',
  address:"https://asymmetry-website.web.app/",
  image:"./img/Asymmetry.png"
},
{
  nameProject:'Prime hiring',
  technologies:'HTML & SASS & javaScript project',
  address:"https://prime-hiring-3b462.web.app/",
  image:"./img/primeHiring.png"
},
{
  nameProject:'Website Graxpo',
  technologies:'HTML & SASS & javaScript & masonry plugin',
  address:"https://graxpo-6c872.web.app/",
  image:"./img/Graxpo.png"
},
{
  nameProject:'Website Birra',
  technologies:'HTML & SASS & javaScript & Bootstrap',
  address:"https://brewery-website-34605.web.app/",
  image:"./img/Birra.png"
},
{
  nameProject:'Website Countries presentation app',
  technologies:'ReactJS & TypeScript',
  address:"https://countries-presentation-a-ca18f.web.app/",
  image:"./img/CountriesPresentation.png"
},

  ]
};
document.querySelector(".all-projects").innerHTML = template(context);
console.log('haj')