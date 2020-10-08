const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function catList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catList(cats);

// Question 8

function createCats(cats) {
  let catsHtml = "";

  for (let i = 0; i < cats.length; i++) {
    let defaultAge = "Age unknown";

    if (cats[i].age) {
      defaultAge = cats[i].age;
    }

    catsHtml += `<div>
        <h5>${cats[i].name}</h4>
        <p>Age: ${defaultAge}</p>
    </div>
    `;
  }

  return catsHtml;
}

const catsHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = catsHtml;
