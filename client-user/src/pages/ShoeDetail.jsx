import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Container from "../components/Container"
import numToIdr from "../helper/numToIdr"
import { useEffect, useState } from "react"
import ImageCarousel from "../components/imageCarousel"

export default function ShoeDetail() {
    const { slug } = useParams()
    const [images, setImages] = useState([])

    const { data: shoe, isLoading } = useFetch(
        `http://localhost:3000/products?slug=${slug}&_embed=images`
    )
    useEffect(() => {
        if (shoe.length) {
            setImages([{ imgUrl: shoe[0].mainImg }, ...shoe[0].images])
        }
    }, [shoe])

    return (
        <Container className="flex flex-col">
            {isLoading ? (
                <h1>loading...</h1>
            ) : (
                <>
                    <h1 className="converse-font font-bold">{shoe[0].name}</h1>
                    <p>{numToIdr(shoe[0].price)}</p>
                    <div>
                        {images.length && <ImageCarousel imgArr={images} />}
                    </div>
                </>
            )}
        </Container>
    )
}
