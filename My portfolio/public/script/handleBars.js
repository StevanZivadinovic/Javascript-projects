var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
  list: [
    {
      nameProject: "Movebaby app",
      technologies: "React native & Expo Go & nativewind",
      // address:"https://shindiri-task.vercel.app/",
      code: "https://github.com/StevanZivadinovic/teki_gallery_app",
      image: "./img/movebaby.png",
    },
    {
      nameProject: "Rick & Morty website",
      technologies: "React.js & Tailwind CSS & React query & Axios",
      address:"https://shindiri-task.vercel.app/",
      code: "https://github.com/StevanZivadinovic/shindiri_task",
      image: "./img/rick_morty.png",
    },
   
    {
      nameProject: "Admin-control-panel app",
      technologies: "Next.js 14 & mongoDB & Tailwind CSS",
      address:"https://admin-dashboard-dxne14es1-stevans-projects-ee9d9ffe.vercel.app/",
      code: "https://github.com/StevanZivadinovic/admin_dashboard_app",
      image: "./img/admin_dashboard.png",
    },
    {
      nameProject: "Travel-Map app",
      technologies: "NodeJS & React.js",
      address:"https://mappin-fe.onrender.com/",
      code: "https://github.com/StevanZivadinovic/mappin",
      image: "./img/map_marker_app.png",
    },
    {
      nameProject: "Netflix clone",
      technologies: "HTML & Tailwind CSS & React & Typescript",
      address: "https://netflix-clone-website-3bc7f.web.app/",
      code:"https://github.com/StevanZivadinovic/React.js-and-Vue.js/tree/main/netflix-clone-reactjs",
      image: "./img/netflix_clone.png",
    },
    {
      nameProject: "Website Graxpo",
      technologies: "HTML & SASS & javaScript & masonry plugin",
      address: "https://graxpo-6c872.web.app/",
      code:"https://github.com/StevanZivadinovic/Ingsoftware-internship/tree/main/Graxpo",
      image: "./img/Graxpo.png",
    },
    {
      nameProject: "Website Birra",
      technologies: "HTML & SASS & javaScript & Bootstrap",
      address: "https://brewery-website-34605.web.app/",
      code:"https://github.com/StevanZivadinovic/Ingsoftware-internship/tree/main/Birra",
      image: "./img/Birra.png",
    },
    {
      nameProject: "Website Countries presentation app",
      technologies: "ReactJS & TypeScript",
      address: "https://countries-presentation-a-ca18f.web.app/",
      code:"https://github.com/StevanZivadinovic/Ingsoftware-internship/tree/main/countries-presentation-app",
      image: "./img/CountriesPresentation.png",
    },
    {
      nameProject: "Tax calculator",
      technologies: "ReactJS & Tailwind",
      address: "https://salestrakker-app.firebaseapp.com/",
      code:"https://github.com/StevanZivadinovic/React.js-and-Vue.js/tree/main/Salestrakker",
      image: "./img/Tax_calculator.png",
    },
    {
      nameProject: "Pravoslavne ikone",
      technologies: "ReactJS project",
      address: "https://pravoslavne-ikone-new.web.app/",
      code:"https://github.com/StevanZivadinovic/React.js-and-Vue.js/tree/main/pravoslavne-ikone",
      image: "./img/pravoslavne-ikone.png",
    },
    {
      nameProject: "Travel website",
      technologies: "JS && CSS && Bootstrap",
      address:"https://travel-website-js.vercel.app/",
      code: "https://github.com/StevanZivadinovic/travel_website_js/tree/main",
      image: "./img/travel_turist_js.png",
    },
    {
      nameProject: "Express.js website",
      technologies: "NodeJS & Express.js",
      address: "https://github.com/StevanZivadinovic/React.js-and-Vue.js/tree/main/node_simple_blog",
      code:"https://github.com/StevanZivadinovic/React.js-and-Vue.js/tree/main/node_simple_blog",
      image: "./img/bloge_node_image.png",
    },
    {
      nameProject: "Next.js website",
      technologies: "NextJS & Tailwind",
      address: "https://react-js-and-vue-js.vercel.app/",
      image: "./img/Next.jsWebsite.png",
    },
    {
      nameProject: "Huddle",
      technologies: "ReactJS & Styled components",
      address: "https://huddle-79c33.web.app/",
      image: "./img/Huddle.png",
    },
    
    {
      nameProject: "Asymmetry website",
      technologies: "HTML & SASS project",
      address: "https://asymmetry-website.web.app/",
      code:"https://github.com/StevanZivadinovic/JavaScript-2nd/tree/main/Asymmetry%20website",
      image: "./img/Asymmetry.png",
    },
    {
      nameProject: "Prime hiring",
      technologies: "HTML & SASS & javaScript project",
      address: "https://prime-hiring-3b462.web.app/",
      code:"https://github.com/StevanZivadinovic/JavaScript-2nd/tree/main/Prime%20Hiring",
      image: "./img/primeHiring.png",
    },
    {
      nameProject: "Rent a car",
      technologies: "JavaScript project",
      address: "https://rent-a-car-ddd10.web.app/",
      code:"https://github.com/StevanZivadinovic/Javascript-projects/tree/master/Rent-a-car",
      image: "./img/rent-a-car.png",
    },
    {
      nameProject: "Natours website",
      technologies: "HTML & SASS project",
      address: "https://natours-e9cff.web.app/",
      code:"https://github.com/StevanZivadinovic/JavaScript-2nd/tree/main/Noctour%20website",
      image: "./img/Natours.png",
    },
    {
      nameProject: "CryptoTrack App",
      technologies: "JavaScript project",
      address: "https://criptotrackapp.web.app",
      code:"https://github.com/StevanZivadinovic/JavaScript-2nd/tree/main/CriptoTrackApp",
      image: "./img/CryptoTrackApp.png",
    },
    {
      nameProject: "Japanese watch",
      technologies: "JavaScript project",
      address: "https://japanese-watch.web.app/",
      code:"https://github.com/StevanZivadinovic/Javascript-projects/tree/master/Japanese%20watch",
      image: "./img/japanese-watch.png",
    },
    {
      nameProject: "Zanimljiva geografija",
      technologies: "JavaScript project",
      address: "https://zgeografija-c4387.web.app/#",
      image: "./img/zanimljiva-geografija.png",
    },
   
    {
      nameProject: "Todo app",
      technologies: "JavaScript project",
      address: "https://todo-app-5d45e.web.app/",
      image: "./img/todo-app.png",
    },
    {
      nameProject: "Chat app",
      technologies: "JavaScript project",
      address: "https://real-time-chat-app-42d7c.web.app/",
      image: "./img/chat-app.png",
    },
    {
      nameProject: "Slack-chat-app",
      technologies: "React project",
      address: "https://slack-chat-app-ba4de.web.app",
      image: "./img/slack-chat-app.png",
    },
    {
      nameProject: "Strawberry website",
      technologies: "HTML & SASS project",
      address: "https://sass-strowberry-website.web.app/",
      image: "./img/strawberrySassWebsite.png",
    },
 
   
   
  ],
};
document.querySelector(".all-projects").innerHTML = template(context);

