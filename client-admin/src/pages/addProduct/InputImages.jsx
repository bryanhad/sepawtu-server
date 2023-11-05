import InputImageUrl from "../../components/form/InputImageUrl"
import { useState } from "react"
import Button from "../../components/Button"
import Label from "../../components/form/Label"
import { BsTrash } from "react-icons/bs"

export default function InputImages({ onChange, setForm, error }) {
    const [inputImageAmount, setInputImageAmount] = useState(2)

    function handleAdditionalImages(e) {
        setForm((prev) => {
            prev.images[e.target.name] = { imgUrl: e.target.value }
            return { ...prev }
        })
    }

    function handleIncreaseInputAmount() {
        if (inputImageAmount === 6) return
        setInputImageAmount((prev) => prev + 1)
    }
    function handleDecreaseInputAmount() {
        if (inputImageAmount === 2) return
        setInputImageAmount((prev) => prev - 1)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="mainImg" required={true}>
                    Product&apos;s thumbnail
                </Label>
                <InputImageUrl id="mainImg" onChange={onChange} />
                {error && <p className="text-error text-sm">{error.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label>
                        Additional Images
                        <span className="ml-2 text-slate-400">(atleast 2)</span>
                    </label>
                    <Button
                        color="success"
                        type="button"
                        className="px-4  text-sm"
                        onClick={handleIncreaseInputAmount}
                    >
                        +
                    </Button>
                </div>
                {[...Array(inputImageAmount).keys()].map((i) => (
                    <div key={i} className="relative flex gap-2">
                        <InputImageUrl
                            id={i}
                            required={i < 2}
                            onChange={handleAdditionalImages}
                        />
                        {i >= 2 && (
                            <button
                                type="button"
                                onClick={handleDecreaseInputAmount}
                                className="text-slate-400"
                            >
                                <BsTrash />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
