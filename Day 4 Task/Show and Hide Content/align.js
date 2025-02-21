function toggleContent(id, button) {
    let content = document.getElementById(id);
    let allContents = document.querySelectorAll('.content-box');
    let allButtons = document.querySelectorAll('.btn');

    allContents.forEach((el) => {
        if (el.id !== id) {
            el.style.display = "none";
        }
    });

    allButtons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove("active");
        }
    });

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.classList.add("active");
    } else {
        content.style.display = "none";
        button.classList.remove("active");
    }
}
