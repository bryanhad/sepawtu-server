import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductAction from "../store/actions/ProductAction"
import Container from "../components/Container"
import TitlePage from "../components/TitlePage"
import ImageCarousel from "../components/ImageCarousel"
import MiniProfile from "../components/MiniProfile"
import ViewProductDetail from "./productDetail/ViewProductDetail"
import EditProductDetail from "./productDetail/EditProductDetail"
import Button from "../components/Button"

export default function ProductDetail() {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [images, setImages] = useState([])
    const { id } = useParams()
    const { shoeDetail } = useSelector((store) => store.product)

    useEffect(() => {
        dispatch(ProductAction.getById(id))
        dispatch(ProductAction.fetchAllStyles())
    }, [dispatch, id])

    useEffect(() => {
        if (shoeDetail.Images) {
            setImages([{ imgUrl: shoeDetail.mainImg }, ...shoeDetail.Images])
        }
    }, [shoeDetail])
    return (
        <>
            <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-2">
                <TitlePage className="text-center">Product Detail</TitlePage>
                {shoeDetail.User && (
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <p className="text-slate-500">Author:</p>
                        <MiniProfile
                            name={shoeDetail.User.username}
                            profilePicture={shoeDetail.User.profilePicture}
                            email={shoeDetail.User.email}
                        />
                    </div>
                )}
            </Container>
            <Container className="flex-[1] grid grid-cols-1 lg:grid-cols-2 gap-4">
                {images.length && (
                    <>
                        <ImageCarousel
                            imgArr={images}
                            className="max-h-[200px] lg:max-h-[300px]"
                        />
                        <div className="flex flex-col gap-3">
                            {isEditing ? (
                                <EditProductDetail shoeDetail={shoeDetail} />
                            ) : (
                                <ViewProductDetail shoeDetail={shoeDetail} />
                            )}
                            {!isEditing ? (
                                <Button
                                    onClick={() =>
                                        setIsEditing((current) => !current)
                                    }
                                    color={"primary"}
                                    className="py-3"
                                >
                                    Edit
                                </Button>
                            ) : (
                                <div className="flex gap-4">
                                    <Button color="success" className="w-full ">
                                        SUBMIT
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setIsEditing((current) => !current)
                                        }
                                        className="w-full py-3"
                                    >
                                        CANCEL
                                    </Button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </Container>
        </>
    )
}
