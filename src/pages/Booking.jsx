import { useState } from "react";
import { useNavigate } from "react-router-dom";

const shoeNames = [
  "Other",
  "Nike Air Max", "Nike Air Force 1", "Nike Blazer", "Nike Revolution", "Nike Flex", "Nike SB", "Nike Cortez",
  "Adidas Ultraboost", "Adidas NMD", "Adidas Superstar", "Adidas Stan Smith", "Adidas Gazelle", "Adidas ZX", "Adidas Originals",
  "Puma RS-X", "Puma Suede", "Puma Basket", "Puma Future", "Puma Thunder", "Puma Drift",
  "Skechers Go Walk", "Skechers Memory Foam", "Skechers Ultra", "Skechers D'Lites",
  "Campus Shoooz", "Campus Shoes", "Campus Formal",
  "Reebok Classic", "Reebok Nano", "Reebok Pump", "Reebok Zigtech",
  "New Balance 990", "New Balance 574", "New Balance 327", "New Balance Fresh Foam",
  "Converse Chuck Taylor", "Converse CTAS Pro", "Converse One Star",
  "Vans Old Skool", "Vans Authentic", "Vans Slip-On", "Vans Era",
  "ASICS Gel-Lyte", "ASICS Gel-Kayano", "ASICS Gel-Nimbus",
  "Saucony Jazz", "Saucony Grid", "Saucony Kinvara",
  "Formal Shoes", "Sports Sneakers", "Running Shoes", "Basketball Shoes",
  "Leather Boots", "Canvas Shoes", "Sandals", "Loafers", "Flip Flops"
];

const shoeSizes = [
  "3", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8",
  "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13",
  "13.5", "14", "15", "16"
];

const commonIssues = [
  "Worn out sole",
  "Broken heel",
  "Sole separation",
  "Torn upper",
  "Damaged leather",
  "Broken laces",
  "Torn stitching",
  "Wrinkled leather",
  "Stains/discoloration",
  "Odor removal needed",
  "Polish required",
  "Deep cleaning needed",
  "Broken zipper",
  "Water damage",
  "Sole replacement needed",
  "Heel replacement",
  "Scuff marks",
  "Color fading",
  "Torn mesh",
  "Rubber separation",
  "Sole buffing",
  "Leather conditioning",
  "Professional restoration",
  "Other issue"
];

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shoeSearch, setShoeSearch] = useState("");
  const [showShoeDropdown, setShowShoeDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    shoeType: "",
    customShoeType: "",
    shoeSize: "",
    issueDescription: "",
    date: "",
    time: "",
  });

  const filteredShoes = shoeNames.filter(shoe =>
    shoe.toLowerCase().includes(shoeSearch.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.address) {
        alert("Please fill all required fields");
        return;
      }
    }
    if (step === 2) {
      const shoeTypeToCheck = formData.shoeType === "Other" ? formData.customShoeType : formData.shoeType;
      if (!shoeTypeToCheck || !formData.shoeSize || !formData.issueDescription) {
        alert("Please fill all shoe details");
        return;
      }
    }
    if (step === 3) {
      if (!formData.date || !formData.time) {
        alert("Please select date and time");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setShowSuccess(true);
    console.log("Booking confirmed:", formData);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Quick Booking</span>
          </h1>
          <p className="text-gray-600 text-lg">Fill your details and schedule pickup</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  s <= step ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg" : "bg-gray-300 text-gray-600"
                }`}>
                  {s}
                </div>
                <p className="text-sm mt-2 font-semibold">{["Details", "Shoes", "Schedule", "Review"][s-1]}</p>
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all`} style={{width: `${(step/4)*100}%`}}></div>
          </div>
        </div>

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-8">Step 1: Your Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
              />
              <input
                type="text"
                name="address"
                placeholder="Delivery Address *"
                value={formData.address}
                onChange={handleInputChange}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
              />
            </div>
          </div>
        )}

        {/* Step 2: Shoe Details */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-8">Step 2: Shoe Details</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Searchable Shoe Name Dropdown */}
              <div>
                <label className="block text-sm font-bold mb-2">Shoe Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search shoe name..."
                    value={shoeSearch}
                    onChange={(e) => setShoeSearch(e.target.value)}
                    onFocus={() => setShowShoeDropdown(true)}
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  />
                  {shoeSearch && formData.shoeType && (
                    <div className="mt-2 px-4 py-2 bg-purple-50 rounded-lg text-sm text-gray-700">
                      Selected: <strong>{formData.shoeType}</strong>
                    </div>
                  )}
                  
                  {showShoeDropdown && (
                    <div className="absolute z-50 w-full mt-1 bg-white border-2 border-purple-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredShoes.length > 0 ? (
                        filteredShoes.map((shoe, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, shoeType: shoe });
                              setShoeSearch("");
                              setShowShoeDropdown(false);
                            }}
                            className={`px-6 py-3 cursor-pointer transition ${
                              shoe === "Other"
                                ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold hover:from-purple-500 hover:to-pink-500"
                                : formData.shoeType === shoe
                                ? "bg-purple-100 text-purple-900 font-semibold"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {shoe}
                          </div>
                        ))
                      ) : (
                        <div className="px-6 py-3 text-gray-500">No shoes found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Shoe Size Dropdown */}
              <div>
                <label className="block text-sm font-bold mb-2">Shoe Size *</label>
                <select
                  name="shoeSize"
                  value={formData.shoeSize}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  style={{ direction: "ltr" }}
                >
                  <option value="">Select Size</option>
                  {shoeSizes.map((size, idx) => (
                    <option key={idx} value={size}>{size} UK</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Show custom shoe name input if "Other" is selected */}
            {formData.shoeType === "Other" && (
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Enter Shoe Name *</label>
                <input
                  type="text"
                  name="customShoeType"
                  placeholder="Enter your shoe name/brand"
                  value={formData.customShoeType}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
                />
              </div>
            )}

            {/* Issue Dropdown - with proper positioning */}
            <div className="relative z-40">
              <label className="block text-sm font-bold mb-2">Issue with Your Shoes *</label>
              <select
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleInputChange}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
              >
                <option value="">Select Issue</option>
                {commonIssues.map((issue, idx) => (
                  <option key={idx} value={issue}>{issue}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-8">Step 3: Schedule Pickup</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Pickup Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
                >
                  <option value="">Select Time Slot</option>
                  <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                  <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                  <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                  <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-8">Step 4: Review Your Booking</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent rounded">
                <h3 className="font-bold text-lg mb-3 text-purple-600">Personal Details</h3>
                <p className="text-gray-700 mb-2"><strong>Name:</strong> {formData.name}</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> {formData.email}</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> {formData.phone}</p>
                <p className="text-gray-700"><strong>Address:</strong> {formData.address}</p>
              </div>

              <div className="border-l-4 border-pink-600 pl-6 py-4 bg-gradient-to-r from-pink-50 to-transparent rounded">
                <h3 className="font-bold text-lg mb-3 text-pink-600">Shoe Details</h3>
                <p className="text-gray-700 mb-2"><strong>Shoe Name:</strong> {formData.shoeType === "Other" ? formData.customShoeType : formData.shoeType}</p>
                <p className="text-gray-700 mb-2"><strong>Size:</strong> {formData.shoeSize} UK</p>
                <p className="text-gray-700"><strong>Issue:</strong> {formData.issueDescription}</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6 py-4 bg-gradient-to-r from-green-50 to-transparent rounded">
                <h3 className="font-bold text-lg mb-3 text-green-600">Pickup Schedule</h3>
                <p className="text-gray-700 mb-2"><strong>Date:</strong> {formData.date}</p>
                <p className="text-gray-700"><strong>Time:</strong> {formData.time}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-8 py-3 rounded-full border-2 border-gray-400 text-gray-700 font-bold transform transition hover:-translate-y-1 hover:shadow-lg"
            >
              Back
            </button>
          )}
          
          {step < 4 ? (
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold transform transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold transform transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/50 ml-auto text-lg"
            >
              Complete Booking
            </button>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-bounce">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              Booking Confirmed!
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              Thank you for using our service! 🎉
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6">
              <p className="text-gray-600 text-sm">
                We've received your booking for <strong>{formData.shoeType === "Other" ? formData.customShoeType : formData.shoeType}</strong> (Size {formData.shoeSize}). Our team will contact you shortly at <strong>{formData.phone}</strong> to confirm the pickup details.
              </p>
            </div>

            <div className="text-gray-500 text-sm">
              <p>Redirecting you to home page...</p>
              <div className="mt-4 flex justify-center gap-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
