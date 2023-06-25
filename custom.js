//Nav JS Start

//Nav Js End

//News Top Slider
let text = document.querySelector('#sliderText');
let prevBtn= document.querySelector('.prev_carousel');
let nextBtn = document.querySelector('.next_carousel');
let textNum=0;
//let play=true;
let textArray=
[
    'National Herald case: Rahul Gandhi makes late night visit to hospital ahead of ED questioning',
    'Jan Mohammad Lone, LeT terrorist involved in bank managers murder, killed in encounter in Shopian',
    'Home Ministry begins process of central government recruitment for 10 lakh vacancies',
    'Shraddha Kapoors brother Siddhanth Kapoor claims his friends gave him drinks laced with drugs'
];
prevBtn.addEventListener('click',function()
{
if(textNum===0)
{
textNum=textArray.length-1;
}else{
    textNum--;
}
text.innerText=textArray[textNum];
});
nextBtn.addEventListener('click',function()
{
if(textNum===textArray.length-1)
{
textNum=0;
}else{
    textNum++;
}
text.innerText=textArray[textNum];
});
var playing = true;
var pauseButton = document.querySelector('#toggleCarousel');
//Auto slide code
let i=0;
let myInterval;
function testInterval() {
        myInterval = setInterval(animateText, 2000);
}
function animateText(){
    let text = document.querySelector('#sliderText');
    if(textArray.length - 1 == i)
    {
        i=0;
    }
    text.innerText=textArray[i];
    text.removeAttribute('class');
    text.setAttribute('class','animate__animated animate__fadeInRight')
    i++;
}
testInterval();
function pauseSlideshow(){
    btn=document.querySelector('#sBtn');
    btn.setAttribute('class','carousel-play');
    playing = false;
    clearInterval(myInterval);
}
function playSlideshow(){
    btn=document.querySelector('#sBtn');
    btn.setAttribute('class','carousel-pause');
    playing = true;
    testInterval();
}
pauseButton.addEventListener('click',function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
});
//News Top Slider End

//Index Js Start
LdData = [
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2324349-cong-dna.png",
    headline:
      "National Herald case: Rahul Gandhi quizzed by ED for 3rd straight day, more Congress workers detained amid protests",
    category: "photos",
    subCategory: "large",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2322900-5g-dna.png",
    headline:
      "5G rollout in India: Cabinet approves auction of 5G Spectrum, speed 10 times higher than 4G services",
    category: "photos",
    subCategory: "small",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2325744-untitled-design-2022-06-15t160034.725.jpg",
    headline:
      "Assam: ACP of Guwahati city police injured during Congress protest",
    category: "photos",
    subCategory: "small",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2326054-monkeypox-virus-reuters.jpg",
    headline: "Monkeypox virus to be given a new name, here's why",
    category: "photos",
    subCategory: "small",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2325532-brahmastra-srk.jpg",
    headline:
      "Brahmastra: Shah Rukh Khan's cameo appearance in larger than life avatar impresses netizens",
    category: "photos",
    subCategory: "small",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2326096-oppo.jpg",
    headline:
      "Presidential polls: Which parties are attending Mamata Banerjee's Opposition meet?",
    category: "photos",
    subCategory: "small",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2325701-stet.jpg",
    headline:
      "STET Exam 2022: Why did Bihar cancel the recruitment exam this year?",
    category: "photos",
    subCategory: "small",
  },
];
let homePageData = [
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2299017-modi-dna.png",
    headline:
      "Good news! Central government to recruit 10 lakh people over next 1.5 years, announces PMO",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2298748-sharadpawar-dna.png",
    headline:
      "Congress, opposition pushes for Sharad Pawar as presidential candidate, know what NCP chief said",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2297667-ajay-kothiyal-ani-image.jpg",
    headline:
      "Big blow for AAP as Uttarakhand party Chief Deepak Bali resigns after Ajay Kothiyal",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2298004-vhp-dna.png",
    headline:
      "Nupur Sharma row: VHP calls for mass recitation of Hanuman Chalisa in Delhi as protest against Friday violence",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2298035-mumbai-covid-ians.jpg",
    headline:
      "Covid 4th wave: Mumbai reports 3 cases of BA.4 and one of BA.5, 38% less infection",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2297563-ipl-media-rights.jpg",
    headline: `IPL Media Rights: What's in store on day 3 after TV, digital fetch combined value of Rs 44,075 crore`,
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2297977-sushant-final.jpg",
    headline:
      "Sushant Singh Rajput death anniversary: Chaar Kadam, Qaafirana, famous songs of late actor",
    category: "latestNews",
  },
];

let landByID = LdData.filter(filterByID);

function filterByID(item) {
  if (item.category == "photos") {
    return true;
  } else {
    return false;
  }
}

let displayMainNewsData = function (mainNewsData) {
  mainNewsData.forEach(function (elem, index) {
    let h2 = document.createElement("h2");
    if (index === 0) {
      if (elem.category === "latestNews") {
        let hr = document.createElement("hr");
        cont = document.createElement("div");
        let Image = document.createElement("img");
        Image.setAttribute("src", elem.img);
        let dis = document.createElement("h3");
        dis.innerText = elem.headline;
        cont.append(h2, hr, Image, dis);
        document.querySelector("#lnd").append(cont);
      } else {
        h2.innerText = elem.category.toUpperCase();
        let hr = document.createElement("hr");
        hr.style.marginBottom = "20px";
        cont = document.createElement("div");
        let Image = document.createElement("img");
        Image.setAttribute("src", elem.img);
        let dis = document.createElement("h3");
        dis.innerText = elem.headline;
        cont.append(h2, hr, Image, dis);
        document.querySelector("#lnd").append(cont);
      }
    } else {
      let cont = document.createElement("div");
      let Image = document.createElement("img");
      cont.style.display = "flex";
      cont.style.padding = "10px";
      cont.style.boxSizing = "border-box";
      cont.style.borderRadius = "5px";
      Image.setAttribute("src", elem.img);
      Image.style.height = "100px";
      Image.style.width = "25%";
      let dis = document.createElement("h3");
      dis.innerText = elem.headline;
      dis.style.display = "inline";
      dis.style.fontSize = "15px";
      dis.style.fontWeight = "400";
      dis.style.lineHeight = "18px";
      dis.style.color = "#4c4c4c";
      // dis.style = "hover:backGround:#8b9fc3";
      let button = document.createElement("button");
      button.innerText = `MORE ${elem.category.toUpperCase()} NEWS`;
      cont.append(Image, dis);
      document.querySelector("#lnd").append(cont);
    }
  });
};

let displayButtomNewsData = function (bottomNewsData) {
  let h2 = document.createElement("h2");
  h2.setAttribute("id", "indHead");
  let takeText;
  bottomNewsData.forEach(function (elem, index) {
    if (index === 0) {
      h2.innerText = elem.category.toUpperCase();
      let hr = document.createElement("hr");
      // hr.style.marginBottom = "20px";
      // hr.style.backgroundColor = "red";
      cont = document.createElement("div");
      let Image = document.createElement("img");
      // Image.style.width = "100%";
      Image.setAttribute("src", elem.img);
      let dis = document.createElement("h3");
      dis.innerText = elem.headline;
      cont.append(h2, hr, Image, dis);
      document.querySelector("#main-bottom-news").append(cont);
    } else {
      let cont = document.createElement("div");
      let Image = document.createElement("img");
      cont.style.display = "flex";
      cont.style.padding = "10px";
      cont.style.boxSizing = "border-box";
      cont.style.borderRadius = "5px";
      Image.setAttribute("src", elem.img);
      Image.style.height = "100px";
      Image.style.width = "25%";
      let dis = document.createElement("h3");
      dis.innerText = elem.headline;
      dis.style.display = "inline";
      dis.style.fontSize = "15px";
      dis.style.fontWeight = "400";
      dis.style.lineHeight = "18px";
      dis.style.color = "#4c4c4c";

      let button = document.createElement("button");
      takeText = elem.category.toUpperCase();
      cont.append(Image, dis);
      document.querySelector("#main-bottom-news").append(cont);
    }
  });
  let button = document.createElement("button");
  button.innerText = `MORE ${takeText} NEWS`;
  document.querySelector("#main-bottom-news").append(button);
};

// displayPage(landByID);

// Main

let mainSort = homePageData.filter(function (item) {
  if (item.category == "latestNews") {
    return true;
  } else {
    return false;
  }
});

let mainArr = [];
for (let i = 0; i <= 6; i++) {
  mainArr.push(mainSort[i]);
}

console.log(mainArr);
displayMainNewsData(mainArr);

//India

let indiaSort = homePageData.filter(function (item) {
  if (item.category == "india") {
    return true;
  } else {
    return false;
  }
});

let indiaArr = [];
for (let i = 0; i < 3; i++) {
  indiaArr.push(indiaSort[i]);
}

displayButtomNewsData(indiaArr);

//Entertainment

let entertainmentSort = homePageData.filter(function (item) {
  if (item.category == "entertainment") {
    return true;
  } else {
    return false;
  }
});

let entertainmentArr = [];
for (let i = 0; i < 3; i++) {
  entertainmentArr.push(entertainmentSort[i]);
}

displayButtomNewsData(entertainmentArr);

// Sport

let sportSort = homePageData.filter(function (item) {
  if (item.category == "sports") {
    return true;
  } else {
    return false;
  }
});

let sportArr = [];
for (let i = 0; i < 3; i++) {
  sportArr.push(sportSort[i]);
}

displayButtomNewsData(sportArr);

//Health

let healthSort = homePageData.filter(function (item) {
  if (item.category == "health") {
    return true;
  } else {
    return false;
  }
});
console.log(healthSort);

let healthArr = [];
for (let i = 0; i < 3; i++) {
  healthArr.push(healthSort[i]);
}

console.log(healthArr);
displayButtomNewsData(healthArr);

//LifeStyle

let lifeStyleSort = homePageData.filter(function (item) {
  if (item.category == "lifeStyle") {
    return true;
  } else {
    return false;
  }
});

let lifeStyleArr = [];
for (let i = 0; i < 3; i++) {
  lifeStyleArr.push(lifeStyleSort[i]);
}

displayButtomNewsData(lifeStyleArr);

//World

let worldSort = homePageData.filter(function (item) {
  if (item.category == "world") {
    return true;
  } else {
    return false;
  }
});

let worldArr = [];
for (let i = 0; i < 3; i++) {
  worldArr.push(worldSort[i]);
}

displayButtomNewsData(worldArr);

// Sliding img

let slideimg1 = [
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/10/2227966-untitled-design-2022-06-10t135810.780.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/10/2227788-rashtrapati-bhavan-new.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/10/2214033-rs-polls.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/08/2183816-new-project-32.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/07/2156754-untitled-design-2022-06-06t231358.719.jpg",
];
let slideimgdesc1 = [
  "In Pic: Indian Air Force's formidable fighter jet fleet: Sukhoi, Tejas, Migs and More",
  "In pics: Rashtrapati Bhavan, spread over 2 lakh square feet awaits new President",
  "Rajya Sabha Elections on June 10: All you need to know",
  "Shocking photos of Delhi Metro parking fire: 90 vehicles gutted",
  "In Pics: Check out the transport fleet of the Indian Air Force",
];
function slidingimage(slideimg, slideimgdesc, text) {
  let i = 0;
  let j = 1;
  let outerContainer = document.createElement("div");
  outerContainer.setAttribute("id", "outCon");

  let button = document.createElement("button");

  let container = document.createElement("div");
  container.setAttribute("id", "container");

  let subheading = document.createElement("h4");
  subheading.innerText = text;
  subheading.setAttribute("id", "carolHead");
  button.innerText = `MORE ${text}`;
  let hr = document.createElement("hr");

  let slidingshow = document.createElement("div");
  slidingshow.setAttribute("id", "slidingshow ");
  slidingshow.style.display = "flex";

  let indi1 = document.createElement("div");

  let indi2 = document.createElement("div");
  let image = document.createElement("img");
  image.style.width = "90%";
  image.style.margin = "5px";
  let imagedesc = document.createElement("h6");
  let image2 = document.createElement("img");
  image2.style.width = "90%";
  image2.style.margin = "5px";
  let image2desc = document.createElement("h6");
  setInterval(function () {
    if (slideimg.length == j) {
      i = 0;
      j = 1;
    }
    image.src = slideimg[i];
    indi1.append(image);
    imagedesc.innerText = slideimgdesc[i];
    indi1.append(imagedesc);

    image2.src = slideimg[j];
    indi2.append(image2);
    image2desc.innerText = slideimgdesc[j];
    indi2.append(image2desc);
    i++;
    j++;

    slidingshow.append(indi1, indi2);
    container.append(subheading, hr, slidingshow);
    outerContainer.append(container, button);

    document.querySelector("#main-carosol").append(outerContainer);
    document.querySelector("#main-carosol").style.width = "100%";
    document.querySelector("#main-carosol").style.margin = "auto";
  }, 10000);
}
slidingimage(slideimg1, slideimgdesc1, "PHOTOS");

let slideimg2 = [
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2301209-fb476beb-441f-4801-a79b-bda00bca84aa.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300771-1655189641-00000003.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300931-80608893-39f8-46f9-b31b-c246387b9140.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2301240-8d8dbf26-f661-4709-a8b4-a7ac1b056e1d.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300757-1655189582-00000003.jpg",
];
let slideimgdesc2 = [
  `DNA: Gandhi families' 'satyagraha politics' in ED's inquiry`,
  "DNA: Congress turns ED inquiry into a 'political celebration",
  "DNA: Rahul Gandhi misuses 'satyagraha' in today's politics?",
  "DNA: Herald Case -- Is Rahul Gandhi really a descendant of Mahatma Gandhi?",
  "National Herald case: Congress will continue this fight tomorrow, says Harish Rawat",
];
slidingimage(slideimg2, slideimgdesc2, "VIDEO");
//Index js End

// left side bar js start
window.onscroll = function () {
  scrolli();
};

// Get the sidepanel
let sidepaneleffect = document.getElementById("sidebar");

// Get the offset position of the sidepanel
let sticky = sidepaneleffect.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrolli() {
  if (window.pageYOffset >= sticky) {
    sidepaneleffect.classList.add("sticky");
    document.getElementById("main-data").style.marginLeft = "25%";
  } else {
    sidepaneleffect.classList.remove("sticky");
    document.getElementById("main-data").style.marginLeft = "0%";
  }
}