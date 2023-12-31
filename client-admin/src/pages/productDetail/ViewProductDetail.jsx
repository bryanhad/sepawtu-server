import Button from "../../components/Button"
import StringToDate from "../../components/StringToDate"
import numToIdr from "../../helper/numToIdr"

export default function ViewProductDetail({ shoeDetail, toggleIsEditing }) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <p>{shoeDetail.name}</p>
                <p>{shoeDetail.description}</p>
                <p>{numToIdr(shoeDetail.price)}</p>
                <p>{shoeDetail.gender}</p>
                <p>{shoeDetail.Style.name}</p>
                <StringToDate
                    label="Created at:"
                    strDate={shoeDetail.createdAt}
                />
                <StringToDate
                    label="Last Updated at:"
                    strDate={shoeDetail.updatedAt}
                />
            </div>
            <Button
                onClick={toggleIsEditing}
                color={"primary"}
                className="py-3"
            >
                Edit
            </Button>
        </>
    )
}
