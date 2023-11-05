import Swal from "sweetalert2"
import ProductAction from "../store/actions/ProductAction"

export default function showProductDeleteAlert(id, name, img, dispatch) {
    Swal.fire({
        title: `Are you sure to delete '${name}'?`,
        imageUrl: img,
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: `Image of ${name}`,
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: 'Delete',
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(ProductAction.deleteById(id))
            // Swal.fire(`Successfully deleted product`, '', 'success')
        }
      })
}