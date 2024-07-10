// let lists = document.querySelectorAll('li');
let li0 = document.querySelector('.li0');
let li1 = document.querySelector('.li1');
let li2 = document.querySelector('.li2');
let li20 = document.querySelector('.container2 .li0');
let li21 = document.querySelector('.container2 .li1');
let li22 = document.querySelector('.container2 .li2');
let container2 = document.querySelector('.container2');
let main = document.querySelector('main');
let header = document.querySelector('.container2 .header');
let content = document.querySelector('.container2 .content');
let link = document.querySelector('.container2 a');

// for(i = 0; i < lists.length; i++){
//     lists[i].addEventListener('click', function(e){
//         console.log(e)
//     })
// }

li0.addEventListener("click", function(){
    main.classList.add("active");
    link.setAttribute('href', 'https://elhefeelvis1.github.io/Discord-Landing-page/')
    link.textContent = "Visit Site";
    header.textContent = projectArr.li0[0];
    content.textContent = projectArr.li0[1];
})
li1.addEventListener("click", function(){
    main.classList.add("active");
    link.setAttribute('href', 'https://elhefeelvis1.github.io/Upwork-Landing-Page/')
    link.textContent = "Visit Site";
    header.textContent = projectArr.li1[0];
    content.textContent = projectArr.li1[1];
})
li2.addEventListener("click", function(){
    main.classList.add("active");
    link.setAttribute('href', 'https://elhefeelvis1.github.io/Simon-Game/')
    link.textContent = "Visit Site";
    header.textContent = projectArr.li2[0];
    content.textContent = projectArr.li2[1];
})
li20.addEventListener("click", function(){
    link.setAttribute('href', 'https://elhefeelvis1.github.io/Discord-Landing-page/')
    link.textContent = "Visit Site";
    header.textContent = projectArr.li0[0];
    content.textContent = projectArr.li0[1];
})
li21.addEventListener("click", function(){
    link.setAttribute('href', 'https://elhefeelvis1.github.io/Upwork-Landing-Page/')
    link.textContent = "Visit Site";
    header.textContent = projectArr.li1[0];
    content.textContent = projectArr.li1[1];
})
li22.addEventListener("click", function(){
    link.setAttribute('href', 'https://elhefeelvis1.github.io/Simon-Game/')
    link.textContent = "Visit Site";
    header.textContent = projectArr.li2[0];
    content.textContent = projectArr.li2[1];
})

let projectArr = {
    "li0": ["Discord landing page replica", 
    "A Discord landing page is designed to introduce and attract new users to the platform, highlighting its key features, benefits, and overall appeal."],
    "li1": ["Upwork landing page replica", 
    "Upwork is the go-to platform for finding the best freelance talent and remote work opportunities worldwide. Whether you're a business looking to hire professionals for your project or a freelancer seeking exciting gigs, Upwork is the ideal marketplace to connect, collaborate, and create."],
    "li2": ["Simon's Game",
     "Simon's Game, often known simply as 'Simon,' is an electronic memory game first launched in the late 1970s by Milton Bradley. The game is named after the children's game 'Simon Says,' and it challenges players' memory and attention skills."]
}