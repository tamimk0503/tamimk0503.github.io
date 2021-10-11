let ownerName = "Tamim Kabir"; // update the part BETWEEN the "quotes"
let userName = "tamimk0503"; // same here

document.querySelectorAll("tamimk0503").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
