import InputOptions from "../../components/form/InputOptions"
import InputPrice from "../../components/form/InputPrice"
import InputText from "../../components/form/InputText"

export default function RegularInputs({
    formInputs,
    handleChange,
    form,
    errors,
}) {
    return (
        <div className="flex flex-col gap-4">
            {formInputs.map((input) => {
                switch (input.type) {
                    case "text":
                        return (
                            <>
                                <InputText
                                    key={input.id}
                                    id={input.id}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                    onChange={handleChange}
                                    value={form[input.id]}
                                    required={true}
                                />
                                {errors.find(
                                    (err) => err.inputName === input.id
                                ) && (
                                    <p className="text-error text-sm">
                                        {
                                            errors.find(
                                                (err) =>
                                                    err.inputName === input.id
                                            ).message
                                        }
                                    </p>
                                )}
                            </>
                        )
                    case "textArea":
                        return (
                            <>
                                <InputText
                                    key={input.id}
                                    id={input.id}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                    onChange={handleChange}
                                    value={form[input.id]}
                                    required={true}
                                />
                                {errors.find(
                                    (err) => err.inputName === input.id
                                ) && (
                                    <p className="text-error text-sm">
                                        {
                                            errors.find(
                                                (err) =>
                                                    err.inputName === input.id
                                            ).message
                                        }
                                    </p>
                                )}
                            </>
                        )
                    case "number":
                        return (
                            <>
                                <InputPrice
                                    key={input.id}
                                    id={input.id}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                    onChange={handleChange}
                                    value={form[input.id]}
                                    required={true}
                                />
                                {errors.find(
                                    (err) => err.inputName === input.id
                                ) && (
                                    <p className="text-error text-sm">
                                        {
                                            errors.find(
                                                (err) =>
                                                    err.inputName === input.id
                                            ).message
                                        }
                                    </p>
                                )}
                            </>
                        )
                    case "select":
                        return (
                            <>
                                <InputOptions
                                    key={input.id}
                                    id={input.id}
                                    label={input.label}
                                    onChange={handleChange}
                                    optionsArr={input.options}
                                    defaultValue={input.defaultValue}
                                    required={true}
                                />
                                {errors.find(
                                    (err) => err.inputName === input.id
                                ) && (
                                    <p className="text-error text-sm">
                                        {
                                            errors.find(
                                                (err) =>
                                                    err.inputName === input.id
                                            ).message
                                        }
                                    </p>
                                )}
                            </>
                        )
                }
            })}
        </div>
    )
}
