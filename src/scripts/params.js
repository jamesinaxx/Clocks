const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("clock")) {
  document
    .getElementById("clock-style")
    .setAttribute(
      "href",
      document
        .getElementById("clock-style")
        .getAttribute("href")
        .replace("basic", urlParams.get("clock"))
    );
  console.log("Set the clock to " + urlParams.get("clock"));
}