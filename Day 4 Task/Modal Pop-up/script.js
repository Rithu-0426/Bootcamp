
setTimeout(() => {
    let myModal = new bootstrap.Modal(document.getElementById('travelModal'));
    myModal.show();
}, 5000);

document.getElementById('travelModal').addEventListener('shown.bs.modal', function () {
    console.log("Modal is now open!");
});

document.getElementById('travelModal').addEventListener('hidden.bs.modal', function () {
    console.log("Modal has been closed.");
});
