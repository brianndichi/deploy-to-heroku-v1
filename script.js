document
  .getElementById("deployForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const githubLink = document.getElementById("githubLink").value.trim();
    const baseDeployUrl = "https://www.heroku.com/deploy/?template=";

    if (githubLink) {
      const fullDeployUrl = baseDeployUrl + encodeURIComponent(githubLink);
      window.open(fullDeployUrl, "_blank");
    } else {
      alert("Please enter a valid GitHub link.");
    }
  });
