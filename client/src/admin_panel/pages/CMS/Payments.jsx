import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputTypeCheckbox from "../../components/common/InputTypeCheckbox";

function Payments() {
  const {
    register: registerNew,
    handleSubmit: handleNewSubmit,
    formState: { errors: errorsNew },
  } = useForm();
  return (
    <div className="container">
      <h3 className="mb-4 text-center">Payment Settings</h3>
      <div className="half-section">
        <form>
          <div className="form-group cms-form-group">
            <label
              style={{ textDecoration: "underline" }}
              className="form-label"
            >
              Payment Type:
            </label>
            <div className="d-flex align-items-center">
              <InputTypeCheckbox
                name="COD"
                label="COD"
                register={registerNew}
              />
              <InputTypeCheckbox
                name="online-payment"
                label="Online Payment"
                register={registerNew}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payments;
