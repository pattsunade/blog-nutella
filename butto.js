document.querySelector('.btn').addEventListener('click', tryNutella);

function tryNutella() {
    let name = prompt('what is you name?');
    if (name.length) {
        alert(`Thanks, ${name} , we will be in touch. Meanwhile, have a lot of Nutella!`);
    } else {
        alert(`no name, no nutella for you!`);
    }
   
}
