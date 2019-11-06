/* Create cats: Instead of creating cats in html(index), we create cats here, where we can loop into them, which is not possible in html file.  We have five cats*/

const andy = {
  name: "Andy",
  img: "./img/andy.jpg",
  clicks: 0
};

const bob = {
  name: "Bob",
  img: "./img/bob.jpg",
  clicks: 0
};

const charlie = {
  name: "Charlie",
  img: "./img/charlie.jpg",
  clicks: 0
};

const david = {
  name: "David",
  img: "./img/david.jpg",
  clicks: 0
};

const effy = {
  name: "effy",
  img: "./img/effy.jpeg",
  clicks: 0
};

// Creating an array of cats(all together) using the const name(variable name created above).

const cats = [andy, bob, charlie, david, effy];

// As we want cats to be in a list(ul), we select the empty list placeholder we created in html file to hold the list of cats.

const ul = document.querySelector("ul");

// The big part is here: "Render cats into html"

for (cat of cats) {
  //here we create a list item
  const li = document.createElement("li");
  //then we create the content and add class to "li"
  li.textContent = cat.name;
  li.classList.add("list-group-item");
  //Then the complicated eventListener with a function to execute.
  li.addEventListener(
    "click",
    (catCopy => {
      return () => {
        renderCat(catCopy);
      };
    })(cat)
  );
  ul.appendChild(li);
}

// Select display area
const display = document.querySelector("#display");

function renderCat(cat) {
  // reset display area
  display.innerHTML = " ";
  // create name, image and clicks;
  const name = document.createElement("h3");
  name.textContent = cat.name;

  const image = document.createElement("img");
  image.src = cat.img;
  image.addEventListener("click", () => {
    cat.clicks++;
    clicks.textContent = `clicks: ${cat.clicks}`;
  });

  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${cat.clicks}`;

  // append into display
  display.appendChild(name);
  display.appendChild(image);
  display.appendChild(clicks);
}
