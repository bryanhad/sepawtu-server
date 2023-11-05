import Swal from "sweetalert2"
import ProductAction from "../store/actions/ProductAction"

export default function showStyleDeleteAlert(id, name, dispatch) {
    Swal.fire({
        title: `Are you sure to delete '${name}'?`,
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: 'Delete',
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(ProductAction.deleteStyleById(id))
        }
      })
}