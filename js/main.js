// let userList = [
//     {
//         id:1,
//         name:"Qalqonbek",
//         surname:"Sayfullayev",
//         age:16
//     },
//     {
//         id:2,
//         name:"Shahboz",
//         surname:"Subhanov",
//         age:21
//     },
//     {
//         id:3,
//         name:"Yusufbek",
//         surname:"Abdullayev",
//         age:17
//     },
//     {
//         id:4,
//         name:"Hojiakbar",
//         surname:"Mehmonov",
//         age:15
//     },
// ]
// let newNum = prompt("enter id")
// function deleteArr(userList){
    
//     userList.filter(item=> {
//         if(item.id != newNum){
//             console.log(item);
            
//         }
//     })
// }
// deleteArr(userList)




/* <div class="header">
    <div class="header__logo-link">
        <img class="header__logo-img" src="" alt="">
    </div>
    <ul class="header__list">
        <li class="header__item">
            <a class="header__link" href=""></a>
        </li>
        <li class="header__item">
            <a class="header__link" href=""></a>
        </li>
        <li class="header__item">
            <a class="header__link" href=""></a>
        </li>
        <li class="header__item">
           <a class="header__link" href=""></a>
        </li>
    </ul>
    <a class="header__btn" href="">Login</a>
</div> */


let navbarItems = [ "Home", "Product", "About", "Contact"]

let elSiteHeader = document.querySelector(".site-header")
let elContainer = document.createElement("div") //  container 
let elHeaderInner = document.createElement("div") // header
let elLogoLink = document.createElement("a") // header__logo-link
let elLogoImg = document.createElement('img') // header__logo-img

let elHeaderList = document.createElement("ul") // header__list
let elHeaderBtn = document.createElement("a") // header__btn

let elSiteMain =document.querySelector(".site-main")
let elHeroSection = document.querySelector(".hero-section")
let elHeroTitleBox = document.createElement("div")
let elSectionTitle = document.createElement("h1")
let elHeroTextBox = document.createElement("div")
let elSectionText = document.createElement("p")
let elSectionDivBtn = document.createElement("div")

let wrapperBtn = ["Try For Free", "Learn More"]

let elImgSection = document.querySelector(".img-section")
let elImgBackground = document.createElement("img")

elContainer.classList.add("container")
elHeaderInner.classList.add("header")

elLogoLink.classList.add("header__logo-link")
elLogoLink.href = "/"

elLogoImg.classList.add("header__logo-img")
elLogoImg.src = "./images/header-logo-img.svg"
elLogoImg.width = "206"
elLogoImg.height = "78"
elLogoImg.alt = "Site Logo"

elHeaderList.classList.add("header__list")
elHeaderBtn.classList.add("header__btn")
elHeaderBtn.href = "/"
elHeaderBtn.textContent = "Login"

navbarItems.forEach(item => {
    let elHeaderItem =document.createElement("li") // header__item
    let elHeaderLink =document.createElement("a") // header__link

    elHeaderItem.classList.add("header__item") 
    elHeaderLink.classList.add("header__link") 
    elHeaderLink.href = "/"
    elHeaderLink.textContent = item

    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderLink)
})
elHeroTitleBox.classList.add("hero__contant-title")
elSectionTitle.classList.add("hero__title")
elSectionTitle.textContent = "Work at the speed of thought"
elHeroTextBox.classList.add("hero__contant-text")
elSectionText.classList.add("hero__text")
elSectionText.textContent = "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
elSectionDivBtn.classList.add("hero__contant-btn")

wrapperBtn.forEach(item =>{
    let elHeroBtn = document.createElement("a")

    elHeroBtn.classList.add("hero__btn")
    elHeroBtn.href = "/"
    elHeroBtn.textContent = item

    elSectionDivBtn.appendChild(elHeroBtn)
})

elImgBackground.classList.add("img__background")
elImgBackground.src = "./images/img.png"

elImgBackground.height = "841"

elSiteHeader.appendChild(elContainer)
elContainer.appendChild(elHeaderInner)
elHeaderInner.append(elLogoLink , elHeaderList , elHeaderBtn)
elLogoLink.appendChild(elLogoImg)

elSiteMain.append(elHeroSection , elImgSection)
elHeroSection.appendChild(elContainer)
elContainer.append(elHeroTitleBox , elHeroTextBox , elSectionDivBtn)
elHeroTitleBox.appendChild(elSectionTitle)
elHeroTextBox.appendChild(elSectionText)
elImgSection.appendChild(elImgBackground)