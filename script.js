function showMessage(event) {
    event.preventDefault(); // page reload aagatha stop pannum

    alert("Registration Successful!");

    // form clear panna
    document.querySelector("form").reset();
}