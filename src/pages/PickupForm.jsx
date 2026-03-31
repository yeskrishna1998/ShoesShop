import { useState } from "react";

function PickupForm() {

  const [selectedType, setSelectedType] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    file: null,
    preview: null
  });

  // 📸 FILE HANDLE
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setForm({
      ...form,
      file,
      preview: URL.createObjectURL(file)
    });
  };

  // 🚀 SUBMIT
 const handleSubmit = async () => {
  try {
    if (!form.name || !form.phone || !form.address || !form.file) {
      alert("Please fill all fields");
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("phone", form.phone);
    data.append("address", form.address);
    data.append("file", form.file);

    // 🔥 yahi main logic hai
    let apiUrl = "";

    if (selectedType === "pickup") {
      apiUrl = "https://shoes-backend-1lip.onrender.com/pickup";
    } else if (selectedType === "delivery") {
      apiUrl = "https://shoes-backend-1lip.onrender.com/delivery";
    } else {
      alert("Please select Pickup or Delivery");
      return;
    }

    await fetch(apiUrl, {
      method: "POST",
      body: data
    });

    alert(`✅ ${selectedType} submitted successfully`);

    // reset
    setForm({
      name: "",
      phone: "",
      address: "",
      file: null,
      preview: null
    });

    setSelectedType("");

  } catch (err) {
    console.error(err);
    alert("❌ Error submitting");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <div className="mb-4 text-center">

  <p className="text-sm text-red-500 font-semibold">
    ⚠️ This page is only for Pickup & Delivery Staff
  </p>

  <p className="text-xs text-gray-500 mt-1">
    Please fill correct customer details and upload photo
  </p>

</div>

        {/* STEP 1 → PICKUP / DELIVERY */}
        {!selectedType && (


          <div className="flex gap-3 mb-4">

            <button
              onClick={() => setSelectedType("pickup")}
              className="flex-1 bg-blue-600 text-white py-2 rounded"
            >
               Pickup
            </button>

            <button
              onClick={() => setSelectedType("delivery")}
              className="flex-1 bg-green-600 text-white py-2 rounded"
            >
               Delivery
            </button>

          </div>
        )}

        {/* STEP 2 → FORM */}
        {selectedType && (
          <>
            <h1 className="text-xl font-bold mb-4 text-center">
              {selectedType === "delivery"
                ? "Delivery Form"
                : " Pickup Form"}
            </h1>

            <input
              placeholder="Name"
              className="w-full border p-2 mb-3 rounded"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />

            <input
              placeholder="Mobile Number"
              className="w-full border p-2 mb-3 rounded"
              value={form.phone}
              onChange={(e)=>setForm({...form,phone:e.target.value})}
            />

            <input
              placeholder="Address"
              className="w-full border p-2 mb-3 rounded"
              value={form.address}
              onChange={(e)=>setForm({...form,address:e.target.value})}
            />

            {/* 📸 CAMERA + UPLOAD */}
            <div className="mb-3 flex gap-2">

         <label className="flex-1 bg-blue-600 text-white py-2 rounded text-center cursor-pointer">
  📸 Take Photo
  <input
    type="file"
    accept="image/*"
    capture="environment"
    onChange={handleFile}
    style={{ display: "none" }}
  />
</label>

              {/* UPLOAD */}
              <label className="flex-1 bg-gray-600 text-white py-2 rounded text-center cursor-pointer">
                📁 Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFile}
                />
              </label>

            </div>

            {/* PREVIEW */}
            {form.preview && (
              <img
                src={form.preview}
                alt="preview"
                className="w-full h-40 object-cover mb-3 rounded"
              />
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Submit
            </button>

            {/* BACK */}
            <button
              onClick={() => setSelectedType("")}
              className="w-full mt-2 text-gray-500"
            >
              ← Back
            </button>
          </>
        )}

      </div>

    </div>
  );
}

export default PickupForm;