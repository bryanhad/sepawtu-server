import { useParams } from "react-router-dom"
import Container from "../components/Container"
import numToIdr from "../helper/numToIdr"
import { useEffect, useState } from "react"
import ImageCarousel from "../components/imageCarousel"
import Explore from "./home/Explore"
import AddToCartButton from "../components/AddToCartButton"
import WishListButton from "../components/WishListButton"
import { useDispatch, useSelector } from "react-redux"
import ProductsAction from "../store/actions/products/actionCreator"

export default function ShoeDetail() {
    const dispatch = useDispatch()
    const {shoesFiltered} = useSelector(store => store.products)
    const { slug } = useParams()

    useEffect(() => {
        dispatch(ProductsAction.fetchShoes({slug, images: true}))
    }, [dispatch, slug])

    const [images, setImages] = useState([])

    useEffect(() => {
        if (shoesFiltered.length && shoesFiltered[0].Images) {
            setImages([{ imgUrl: shoesFiltered[0].mainImg }, ...shoesFiltered[0].Images])
        }
    }, [shoesFiltered])

    return (
        <Container className="flex flex-col gap-4 pt-6">
            <p>INI SHOE DETAIL PAGE</p>
            {!shoesFiltered.length ? (
                <h1>loading...</h1>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {images.length && (
                            <section className="w-full flex justify-center">
                                <div className="max-w-[500px] w-full">
                                    <ImageCarousel
                                        imgArr={images}
                                        className="border-b border-b-slate-300"
                                    />
                                </div>
                            </section>
                        )}
                        <section className="flex md:items-center py-6">
                            <div className="max-md:px-4 flex flex-col gap-4">
                                <section className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="converse-font font-bold">
                                            {shoesFiltered[0].name}
                                        </h1>
                                        <p>{numToIdr(shoesFiltered[0].price)}</p>
                                    </div>
                                    <WishListButton/>
                                </section>
                                <section className="flex flex-col gap-2">
                                    <h2 className="text-xl font-light">
                                        Detail
                                    </h2>
                                    <p className="text-sm md:max-w-[80%]">{shoesFiltered[0].description}</p>
                                </section>
                                <AddToCartButton className='mt-4 lg:max-w-[80%]'/>
                            </div>
                        </section>
                    </div>

                    <Explore className="mt-8" />
                </>
            )}
        </Container>
    )
}
