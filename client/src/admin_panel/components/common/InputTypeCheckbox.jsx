import { Checkbox } from "@chakra-ui/react";

function InputTypeCheckbox({ name, label, required, register, errors }) {
  return (
    <>
      <label>
        <input
          {...register(
            name,
            required && { required: "This field is required!" }
          )}
          name={name}
          type={"checkbox"}
          className="cms-checkbox"
        />
        {label}
      </label>
      {errors && <p>{errors[name]?.message}</p>}
    </>
  );
}

export default InputTypeCheckbox;
