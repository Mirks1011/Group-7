const body = document.querySelector("body"),
    sidebar =  document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = document.querySelector(".search-box"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text");
/* DARK MODE BUTTON SCRIPT */
    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
    })

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    })