function showMessage(event) {
    event.preventDefault(); // page reload aagatha stop pannum

    alert("Registration Successful!");

    // form clear panna
    document.querySelector("form").reset();
}
function showEvents() {

    let category = document.getElementById("category").value;
    let eventDropdown = document.getElementById("events");

    eventDropdown.innerHTML = "";

    if (category === "tech") {

        let techEvents = [
            "Paper Presentation",
            "Project Expo",
            "Codethon",
            "Hackathon",
            "Coding Contest",
            "Debugging"
        ];

        techEvents.forEach(event => {
            let option = document.createElement("option");
            option.text = event;
            eventDropdown.add(option);
        });

    }

    else if (category === "nontech") {

        let nonTechEvents = [
            "E-Sports",
            "Treasure Hunt",
            "IPL Mini Auction",
            "Dance",
            "Singing",
            "Drama"
        ];

        nonTechEvents.forEach(event => {
            let option = document.createElement("option");
            option.text = event;
            eventDropdown.add(option);
        });

    }
}