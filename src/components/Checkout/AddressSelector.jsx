import { FiPlus, FiCheckCircle } from "react-icons/fi";
import { IoIosRadioButtonOn } from "react-icons/io";

const AddressSelector = ({
  addresses,
  selectedAddress,
  onSelect,
  onAddNew,
  config = {},
  fieldLabels = {
    label: "Label",
    address: "Address",
    pincode: "Pin Code",
    phone: "Phone",
    title: "Shipping Address",
    addNew: "Add New",
  },
}) => {
  const {
    containerStyle = "bg-primary p-6 rounded-lg shadow-lg",
    titleStyle = "tracking-primary ",
    addButtonStyle = "text-secondary font-bold flex items-center hover:underline",
    addressBoxStyle = "cursor-pointer  p-4 rounded-lg transition-all",
    selectedBoxStyle = " text-heading shadow-md bg-white",
    unselectedBoxStyle = " bg-white",
    labelStyle = "font-bold !mt-0",
    textStyle = "text-small",
    radioIconSize = "text-small",
    showIcons = true,
  } = config;

  return (
    <div className={containerStyle}>
      {(fieldLabels.title || onAddNew) && (
        <div className="flex justify-between items-center mb-4">
          {fieldLabels.title && (
            <h3 className={titleStyle}>{fieldLabels.title}</h3>
          )}
          {onAddNew && fieldLabels.addNew && (
            <button onClick={onAddNew} className={addButtonStyle}>
              <FiPlus className="mr-1" /> {fieldLabels.addNew}
            </button>
          )}
        </div>
      )}

      <hr className="border-paragraph mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <label
            key={address.id}
            className={`${addressBoxStyle} ${selectedAddress === address.id
                ? selectedBoxStyle
                : unselectedBoxStyle
              }`}
          >
            <input
              type="radio"
              name="shippingAddress"
              value={address.id}
              checked={selectedAddress === address.id}
              onChange={() => onSelect(address.id)}
              className="hidden"
            />
            <div className="flex items-start">
              {showIcons && (
                <div className="mr-3 mt-1">
                  {selectedAddress === address.id ? (
                    <IoIosRadioButtonOn
                      className={`text-secondary ${radioIconSize}`}
                    />
                  ) : (
                    <div className="w-4 h-4 border border-text rounded-full"></div>
                  )}
                </div>
              )}
              <div>
                <h4 className={labelStyle}>{address.label}</h4>
                {fieldLabels.address && (
                  <h4 className={textStyle}>
                    <strong>{fieldLabels.address}:</strong> {address.address}
                  </h4>
                )}
                {fieldLabels.pincode && (
                  <h4 className={textStyle}>
                    <strong>{fieldLabels.pincode}:</strong> {address.pincode}
                  </h4>
                )}
                {fieldLabels.phone && (
                  <h4 className={textStyle}>
                    <strong>{fieldLabels.phone}:</strong> {address.phone}
                  </h4>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AddressSelector;
