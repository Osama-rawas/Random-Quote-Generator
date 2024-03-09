const newQuotebtn = document.getElementById("New-Quote");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");
const apiUrl = "https://api.quotable.io/random";
const contentDiv = document.querySelector(".content");

getQuete();
newQuotebtn.onclick = getQuete;
async function getQuete() {
  newQuotebtn.innerHTML = "Loading Quote...";
  newQuotebtn.classList.add("loading");
  const resp = await fetch("https://api.quotable.io/random");
  const respData = await resp.json();
  await addQuote(respData);
}
async function addQuote(respData = "") {
  contentDiv.innerHTML = ` <div class="quote-area">
    <i class="fas fa-quote-left"> </i>
    <p class="quote">
      ${respData.content}
    </p>
    <i class="fas fa-quote-right"> </i>
    </div>
    <div class="author">
    <span>__</span>
    <span class="name">${respData.author}</span>
    </div>
    </div>`;
  text = respData.content;
  newQuotebtn.innerHTML = "New Quote";
  newQuotebtn.classList.remove("loading");

  copy(respData);
  tweet(respData);
}

function copy(respData) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(respData.content);
  });
}
function tweet(respData) {
  twitterBtn.addEventListener("click", () => {
    const twitterUrl =
      "https://twitter.com/intent/tweet?url=" + respData.content;
    window.open(twitterUrl, " _blank");
  });
}
