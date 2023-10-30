export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="bg-black">
                <section
                    className={`max-w-[1280px] w-full mx-auto flex justify-between text-white p-4`}
                >
                    <span className="flex items-center gap-4">
                        <img
                            src="https://flagsapi.com/ID/flat/32.png"
                            alt="indonesian flag"
                        />
                        <p className="font-semibold">ID</p>
                    </span>
                    <p>&copy;2023 Sepawtu</p>
                </section>
            </div>
        </footer>
    )
}
