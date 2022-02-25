const URL = "http://numbersapi.com/1..10";

// using Fetch make an API call to the url and return the data in an Array
async function fetchData() {
  try {
    const response = await fetch(URL);
    // Use fetch to call the api with the url
    let data = await response.json();
    console.log(data);
    // Storing data in form of JSON
    return data;
    // add the return for the function
  } catch (e) {
    console.log(e.message);
    return "fail";
  }
}

// fetchData();

// Use another function to show your data in HTML
async function renderData() {
  let numbers = await fetchData();
  // use a variable to store the info for your fetchData Function
  let html = "<ul>";
  // create your <ul> HTML tag
  for (let property in numbers) {
    // iterate Through  your data
    let htmlText = numbers[property];
    let htmlSegment = `<li>${htmlText}</li>`;
    // create a <li> tag for each math fact
    html += htmlSegment;
    // add your <li> tags to your <ul>listıı
  };
  html += "</ul>";

  let container = document.querySelector(".container");
  // grab the container tag that there is in your HTML
  container.innerHTML = html;
  // add your html tags to your container
}

renderData();
