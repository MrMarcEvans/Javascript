const destinations = [
  "Paris",
  "Tokyo",
  "New York",
  "Sydney",
  "Rio de Janeiro",
  "Cape Town",
  "Rome",
  "Bangkok"
];

function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!input) return;

  const filtered = destinations.filter(dest =>
    dest.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>No destinations found.</p>";
  } else {
    const list = document.createElement("ul");
    filtered.forEach(dest => {
      const item = document.createElement("li");
      item.textContent = dest;
      list.appendChild(item);
    });
    resultsDiv.appendChild(list);
  }
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
}
