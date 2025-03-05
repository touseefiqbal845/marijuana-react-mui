import { useState } from "react";
import AddressSelector from "./AddressSelector";
import Modal from "../Modal/Modal";

const addresses = [
  {
    id: "1",
    label: "New Home",
    address: "26, Starts Hollow Colony, Denver, Colorado, United States",
    pincode: "80014",
    phone: "+1 5551855359",
  },
  {
    id: "2",
    label: "Old Home",
    address: "53B, Claire New Street, San Jose, Colorado, United States",
    pincode: "36954",
    phone: "+1 5551855359",
  },
  {
    id: "3",
    label: "Office",
    address: "21B, Row New Street, San Jose, California, United States",
    pincode: "32659",
    phone: "+1 5551855359",
  },
];

const BillingAddress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const countryOptions = ["Austria", "Germany", "France"];
  const stateOptions = ["Argentina/Ch", "California", "Texas"];

  const [formData, setFormData] = useState({
    title: "",
    address: "",
    phone: "",
    country: countryOptions[0],
    state: stateOptions[0],
    city: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    { name: "title", label: "Title", placeholder: "Enter Title" },
    { name: "address", label: "Address", placeholder: "Enter Address" },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter Your Phone Number",
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      options: countryOptions,
    },
    { name: "state", label: "State", type: "select", options: stateOptions },
    { name: "city", label: "City", placeholder: "Enter City" },
    { name: "pincode", label: "PinCode", placeholder: "Enter PinCode" },
  ];
  return (
    <div className="p-8">
      <AddressSelector
        addresses={addresses}
        selectedAddress={selectedAddress}
        onSelect={setSelectedAddress}
        onAddNew={() => setIsModalOpen(true)}

        fieldLabels={{
          title: "Billing Address",
          addNew: "Add Address",
          address: "Street Address",
          pincode: "Postal Code",
          phone: "Contact Number",
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Address"
        fields={fields}
        formData={formData}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BillingAddress;
