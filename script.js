// Sample property data (we'll replace this later with JSONBin.io)
const properties = [
  { id: 1, title: "Cozy Apartment", price: "$1,200", location: "New York" },
  { id: 2, title: "Beach House", price: "$2,500", location: "Miami" }
];

function loadProperties() {
  const container = document.getElementById("properties-container");
  container.innerHTML = properties.map(property => `
    <div class="property-card">
      <h3>${property.title}</h3>
      <p>${property.price} | ${property.location}</p>
    </div>
  `).join('');
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", loadProperties);
