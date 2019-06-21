function enviarForm() {
    const btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", res => {
        res.preventDefault();
        const email = document.getElementById("email").value;
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;

        const tableBody = document.getElementById("tBodyC");
        const row = tableBody.insertRow(0);

        const cellNum = row.insertCell(0);
        const cellNombres = row.insertCell(1);
        const cellApellidos = row.insertCell(2);
        const cellEmail = row.insertCell(3);

        cellNum.innerHTML = "#";
        cellEmail.innerHTML = email;
        cellNombres.innerHTML = nombres;
        cellApellidos.innerHTML = apellidos;
    });
}

enviarForm();
