let SideBar = document.querySelector(".SideBar");
let SideBarBtn = document.querySelector(".SideBarButton");
SideBarBtn.onclick = () => {
  SideBar.classList.toggle("active");
  console.log("yes");
};
