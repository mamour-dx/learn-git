const icon = document.getElementById('icon-theme');
const cssFile = document.getElementById('theme-link');

icon.addEventListener('click', () => {
        if(cssFile.getAttribute('href') === "css/light-theme.css"){
                cssFile.setAttribute('href', "css/dark-theme.css");
                icon.setAttribute('src' , "assets/moon.png")
        }else{
                cssFile.setAttribute('href', "css/light-theme.css");
                icon.setAttribute('src' , "assets/sun.png")
        }
});
