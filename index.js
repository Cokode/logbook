const dog = {
    name: "collins",
    age:50,
    color:"brown"
}
 
const display = (dog) => {

    return `
        <div class="container">
            <ul>
                <li>Name: ${dog.name}</li>
                <li>Age: ${dog.age}</li>
                <li>Color: ${dog.color}</li>
            </ul>
        </dvi>
    `;
}

console.log(display(dog));

const bod = document.createElement('article');
bod.innerHTML = display(dog);

document.body.appendChild(bod);
document.body.style.backgroundColor = "#f0ece2";

