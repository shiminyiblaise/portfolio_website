const mobile_menu = document.getElementById("mobile_menu");
mobile_menu.addEventListener("click", function(){
  const desktop_menu = document.getElementById("desktop_menu");
  desktop_menu.classList.toggle("active");
  mobile_menu.classList.toggle("active");
})
//object to store card properties
const projectCards = [
{
  image: "./assets/images/snapshoot Portfolio.png",
  title: "Multi-Post Stories Gain+Glory",
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  description: "A platform to share and celebrate stories through multiple posts. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  githunLink: "#",
  liveLink: "#",
  link: "#"
},

{
  image: "./assets/images/snapshoot Portfolio desktop.png",
  title: "Multi-Post Stories Gain+Glory",
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  description: "A platform to share and celebrate stories through multiple posts. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  githunLink: "#",
  liveLink: "#",
  link: "#"
},

{
  image: "#",
  title: "Multi-Post Stories Gain+Glory",
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  description: "A customised blog platform with edtiting and blog features",
  githunLink: "#",
  liveLink: "#",
  link: "#"
},

{
  image: "#",
  title: "Multi-Post Stories Gain+Glory",
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  description: "A platform to share and celebrate stories through multiple posts.",
  githunLink: "#",
  liveLink: "#",
  link: "#"
},

{
  image: "#",
  title: "Multi-Post Stories Gain+Glory",
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  description: "A platform to share and celebrate stories through multiple posts.",
  githunLink: "#",
  liveLink: "#",
  link: "#"
},

{
  image: "#",
  title: "Multi-Post Stories Gain+Glory",
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  description: "A platform to share and celebrate stories through multiple posts.",
  githunLink: "#",
  liveLink: "#",
  link: "#"
}
]

//function to create a card
function createProjectCards(project){
  const card = document.createElement("div");
  card.classList.add("project_card");
  const picture = document.createElement("img");
  picture.src = project.image;
  picture.alt = project.title;
  card.appendChild(picture);
  const titre = document.createElement("h3");
  titre.innerHTML = project.title;
  card.appendChild(titre);
  const list = document.createElement("ul");
  project.technologies.forEach(element => {
  const listItem = document.createElement("li");
  listItem.innerHTML = element;
  list.appendChild(listItem);
})
  card.appendChild(list);
  const cardButton = document.createElement("button");
  cardButton.innerHTML = "See Project";
  cardButton.type = "button";
  cardButton.addEventListener("click", () => openModal(project));
  card.appendChild(cardButton);
  return card;
}
//function to render project card
function renderProjectCard(){
  const projectCardsContainer = document.querySelector(".projects_cards");
  projectCards.forEach(project => {
    const projectCard = createProjectCards(project);
    projectCardsContainer.appendChild(projectCard);
  });
}
document.addEventListener("DOMContentLoaded", renderProjectCard);

//popup-window to view projects
function openModal(project){
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = "project_modal";

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal_content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("close_btn")
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click",  closeModal);
  modalContent.appendChild(closeButton);

  const modalImage = document.createElement("img");
  modalImage.classList.add("modal_image");
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalContent.appendChild(modalImage);

  const modalTitle = document.createElement("h1");
  modalTitle.textContent = project.title;
  modalContent.appendChild(modalTitle);

  const list = document.createElement("ul");
  list.id = "modaltechnologies";
  project.technologies.forEach(tech => {
  const listItem = document.createElement("li");
  listItem.innerHTML = tech;
  list.appendChild(listItem);})
  modalContent.appendChild(list);

  const modalDescription = document.createElement("p")
  modalDescription.classList.add("modal_description")
  modalDescription.textContent = project.description;
  modalContent.appendChild(modalDescription);
  modal.appendChild(modalContent)
  document.body.appendChild(modal)
  modal.style.display="flex"

  const modalLinks = document.createElement("div");
  modalLinks.classList.add("modal_links");
  const githubLink = document.createElement("a");
  githubLink.classList.add("abt_btn");
  githubLink.textContent = "See Source";
  githubLink.href = project.githubLink;
  githubLink.target = "#"
  modalLinks.appendChild(githubLink);

  const liveLink = document.createElement("a");
  liveLink.classList.add("abt_btn");
  liveLink.textContent = "See Live";
  liveLink.href = project.liveLink;
  liveLink.target = "#"
  modalLinks.appendChild(liveLink);
  modalContent.appendChild(modalLinks);
}

//function for the close button on the modal
function closeModal(){
  const modal = document.getElementById("project_modal");
  if(modal){
    modal.remove()
    window.removeEventListener("click", outsideClick);
  }
}
function outsideClick(event){
  const modal = document.getElementById("project_modal");
  if(event.target === modal){
    closeModal()
  }
}

//object to store about card properties
const aboutCards = [
  {
    image: "./assets/images/Icon Langguage.svg",
    heading: "Languages",
    language:['Javascript', 'Ruby on Rails', 'HTML', 'CSS'],
  },
  {
    image: "./assets/images/icon-frameworks.svg",
    heading: "Frameworks",
    language:['React.js', 'Ruby on Rails', 'RSpec', 'Capybara', 'Selenium'],
  },
  {
    image: "./assets/images/icon-skills.svg",
    heading: "Skills",
    language:['Database Management', 'Version Control', 'CLI', 'Web Development', 'API Design'],
  },
]
//function to create card
function createAboutCards(about){
  const cards = document.createElement("div");
  cards.classList.add("about_card");
  const pics = document.createElement("img");
  pics.src = about.image;
  pics.alt = about.heading;
  cards.appendChild(pics);
  const head = document.createElement("h3");
  head.innerHTML = about.heading;
  cards.appendChild(head);
  const lists = document.createElement("ul");
  about.language.forEach(content => {
    const listsItems = document.createElement("li");
    listsItems.innerHTML = content;
    lists.appendChild(listsItems);
  })
  cards.appendChild(lists);
  return cards;
}
//function to render About card
function renderaboutCards(){
  const abtCard = document.querySelector(".about_cards");
  aboutCards.forEach(about => {
    const aboutCard = createAboutCards(about);
    abtCard.appendChild(aboutCard);
  });
}
document.addEventListener("DOMContentLoaded", renderaboutCards);