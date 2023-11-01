import Container from "./Container";

export default function Footer({className}) {
    return (
        <footer className={`flex flex-col ${className}`}>
            <div className="bg-black text-white">
                <Container>
                    <div className='flex justify-between p-4'>
                        <span className="flex items-center gap-4">
                            <img
                                src="https://flagsapi.com/ID/flat/32.png"
                                alt="indonesian flag"
                            />
                            <p className="font-semibold">ID</p>
                        </span>
                        <p>&copy;2023 Sepawtu</p>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
