export default function NewProductShowCase() {
    const image1 = 'https://content.stylitics.com/images/items/8692335?size=xl'
    const image2 = 'https://images-cdn.ubuy.co.id/634f0a05f8d3952b2f0e5cd5-mens-converse-chuck-taylor-all-star-high.jpg'

  return (
    <div className="md:min-h-[80vh] w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3">
        <div className="w-full h-full max-md:max-h-[150px] overflow-hidden bg-gray-100 max-lg:opacity-[70%]">
            <img className="w-full h-full lg:scale-75 object-cover lg:object-contain" src={image1} alt="chucks front view" />
        </div>

        <div className="bg-black text-white col-span-2 lg:col-span-1 grid place-content-center p-8">
            <section className="flex items-center flex-col gap-6 text-xl text-center">
                <h2 className="font-extrabold text-3xl">SLICK BLACK</h2>
                <p className="font-light">
                    Lepaskan sisi liarmu dengan sepasang Chucks baru. Tampil dengan motif macan tutul. Dengan warna netral yang santai membuat sepatumu mudah di-styling, sementara motif bintik leopard memberikan tampilan berani pada penampilanmu dari setiap sudut.
                </p>
                <button className="px-16 py-4 bg-white text-black">
                    Shop Now
                </button>
            </section>
        </div>

        <div className="w-full max-md:max-h-[150px] overflow-hidden bg-gray-100 max-lg:opacity-[70%]">
            <img className="w-full h-full lg:scale-75 object-cover lg:object-contain" src={image2} alt="chucks side view" />
        </div>
    </div>
  )
}
