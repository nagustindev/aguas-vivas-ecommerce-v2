export default function Login({setLogeadoUser, setLogeadoAdmin, user, admin}) {

    return(
        <div className="flex items-center justify-center">
            <button className="bg-primary hover:bg-primary-hover border rounded-4xl mr-4 p-2" onClick={setLogeadoUser}>{user ? "Cerrar sesion Usuario" : "Loguearse como Usuario"}</button>
            <button className="bg-primary hover:bg-primary-hover border rounded-4xl p-2" onClick={setLogeadoAdmin}>{admin ? "Cerrar sesion Admin" : "Loguearse como Admin"}</button>
        </div>
    )
}