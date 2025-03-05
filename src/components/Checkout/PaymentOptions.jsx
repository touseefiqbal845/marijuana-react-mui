import { useState } from "react";
import AddressSelector from "./AddressSelector";

const addresses = [
    { id: "1", label: "CASH ON DELIVERY" },
    { id: "2", label: "PAYPAL" },
    { id: "3", label: "STRIPE" },
    { id: "4", label: "SSLCOMMERZ" },
    { id: "5", label: "FLUTTERWAVE" },
    { id: "6", label: "PAYSTACK" },
    { id: "7", label: "MOLLIE" },
    { id: "8", label: "BANK TRANSFER" },
    { id: "9", label: "BKASH" },
    { id: "10", label: "CCAVENUE" },
    { id: "11", label: "PHONEPE" },
    { id: "12", label: "INSTAMOJO" },
];

console.log(addresses);


const PaymentOption = () => {
    const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

    return (
        <div className="p-8 ">
            <AddressSelector
                addresses={addresses}
                selectedAddress={selectedAddress}
                onSelect={setSelectedAddress}
                onAddNew={() => alert("Open Add New Address Modal")}
                fieldLabels={{
                    title: "Payment Options",

                }}
            />
        </div>
    );
};

export default PaymentOption;
