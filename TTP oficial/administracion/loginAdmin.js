function loginAdmin() 
{
    // Codigo para validar los datos de un administrador
    var N_ADMIN = "admin", P_ADMIN = "admin123" // Cambiar en el futuro porfa xD
    var adm_username, adm_password
    
    adm_username = document.getElementById("adm_username").value
    adm_password = document.getElementById("adm_password").value

    if (adm_username == N_ADMIN && adm_password == P_ADMIN)
    {
        alert("Login con éxito")
        window.location = "menuAdministracion.html"
    }
    else
    {
        alert("Contraseña o nombre de usuario incorrecto.")
    }
}