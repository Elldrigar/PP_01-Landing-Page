const navLinks = document.getElementsByClassName('navigation__link');
const checkBox = document.getElementById('navi-toggle');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = () => {
        checkBox.checked = false;

    }
};