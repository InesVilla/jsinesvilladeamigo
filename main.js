function askToJoinCommunity() {
    let joinCommunity = confirm("Do you want to be part of the community?");

    if (joinCommunity) {
        window.location.href = "https://www.instagram.com/latinabeach.au";
    } else {
        alert("Enjoy our website !!");
    }
}

// Llama a la función cuando se carga el script
askToJoinCommunity();