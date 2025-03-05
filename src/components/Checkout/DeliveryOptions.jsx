import { useState } from "react";
import AddressSelector from "./AddressSelector";

const addresses = [
    {
        id: "1",
        label: "Standard Delivery | Approx 5 to 7 Days",

    },
    {
        id: "2",
        label: "Express Delivery | Schedule",

    },

];

const DeliveryOptions = () => {
    const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

    return (
        <div className="p-8 ">
            <AddressSelector
                addresses={addresses}
                selectedAddress={selectedAddress}
                onSelect={setSelectedAddress}
                onAddNew={() => alert("Open Add New Address Modal")}
                fieldLabels={{
                    title: "Delivery Options",

                }}
            />
        </div>
    );
};

export default DeliveryOptions;
