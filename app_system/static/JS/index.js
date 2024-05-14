

document.getElementById("lockWindows").addEventListener("click", function() {
    fetch("/lock", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Az eszköz sikeresen lezárva!")
        } else {
            alert("Az eszközt nem sikerült lezárni!")
        }
    })
});




document.getElementById("restart").addEventListener("click", function() {
    fetch("/restart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Az eszköz 5 másodperc múlva újraindul!")
        } else {
            alert("Az újraindítás nem sikerült")
        }
    })
})


document.getElementById("shutdown").addEventListener("click", function() {
    fetch("/shutdown", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Az eszköz 5 másodperc múlva leáll!")
        } else {
            alert("A leállítás nem sikerült!")
        }
    })
})