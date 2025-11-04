const scriptURL = "https://script.google.com/macros/s/AKfycbwD3v8DBbjL7NYxYLf3jh5UblQvD0q8zZtP38rfccxtHgCeFFaxbmmE8Aki0YGl3JlG3A/exec";

document.getElementById("projectForm").addEventListener("submit", e => {
    e.preventDefault();

    const formData = {
        ime: document.getElementById("ime").value,
        prezime: document.getElementById("prezime").value,
        datum: document.getElementById("datum").value,
        telefon: document.getElementById("telefon").value,
        email: document.getElementById("email").value
    };

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(() => {
        alert("Hvala! Podaci su uspešno poslati.");
        document.getElementById("projectForm").reset();
    })
    .catch(err => alert("Greška pri slanju podataka: " + err.message));
});
