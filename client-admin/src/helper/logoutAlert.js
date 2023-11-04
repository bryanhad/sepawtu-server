import Swal from "sweetalert2"

export default function logoutAlert(navigate) {
    Swal.fire({
        title: "Are you sure?",
        text: "We will miss you :(",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yeap, log me out",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Logout Successful", "You have been logged out", "success")
            localStorage.removeItem('user')
            navigate('/login')
        }
    })
}
