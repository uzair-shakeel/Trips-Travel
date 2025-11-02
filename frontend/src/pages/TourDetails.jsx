import React, { useContext, useEffect, useRef, useState } from "react";
import fallbackTourImg from "../assets/images/gallery-01.jpg";
import { useParams } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";
import { FaStar, FaMapPin, FaCity, FaDollarSign } from "react-icons/fa";
import CalculateAvg from "../utils/CalculateAvg";
import Booking from "../components/Booking/Booking";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const tripTypes = [
{ value: "adventure", label: "Adventure" },
{ value: "history", label: "History" },
{ value: "foodie", label: "Foodie" },
{ value: "family", label: "Family" },
{ value: "relax", label: "Relaxation" },
];

function generateItinerary(type) {
switch (type) {
case "adventure":
return [
{
day: "DAY 01",
activities: [
"08:00 Morning hike",
"12:00 Lunch at local eatery",
"14:00 Biking tour",
"18:00 Evening campfire",
"20:00 Dinner outdoors",
],
},
{
day: "DAY 02",
activities: [
"09:00 Kayaking",
"13:00 Lunch by the water",
"15:00 Rock climbing",
"19:00 Sunset",
"21:00 Dinner at local tavern",
],
},
{
day: "DAY 03",
activities: [
"10:00 Nature walk",
"12:30 Museum (optional)",
"15:00 Local shopping",
"20:00 Farewell dinner",
],
},
];
case "history":
return [
{
day: "DAY 01",
activities: [
"08:00 Heritage walk",
"11:30 Lunch at historic cafe",
"14:00 Museum visit",
"18:00 Art gallery",
"20:00 Dinner at traditional restaurant",
],
},
{
day: "DAY 02",
activities: [
"09:00 Market tour",
"13:00 Lunch",
"15:00 Historic monument",
"19:00 Cultural event",
"21:00 Dinner",
],
},
{
day: "DAY 03",
activities: [
"10:00 Religious site visit",
"13:00 Lunch at local eatery",
"15:00 Photo walk",
"20:00 Farewell dinner",
],
},
];
case "foodie":
return [
{
day: "DAY 01",
activities: [
"08:00 Breakfast tasting",
"11:00 Food market tour",
"13:00 Cooking class",
"18:00 Gourmet dinner",
],
},
{
day: "DAY 02",
activities: [
"09:00 Bakery tour",
"12:00 Lunch at famous restaurant",
"14:00 Dessert crawl",
"19:00 Street food dinner",
],
},
{
day: "DAY 03",
activities: [
"11:00 Brunch",
"13:00 Farmers’ market",
"16:00 Brewery visit",
"20:00 Farewell dinner",
],
},
];
case "family":
return [
{
day: "DAY 01",
activities: [
"08:00 Zoo visit",
"11:30 Picnic brunch",
"13:00 Kids museum",
"18:00 Park games",
"20:00 Family dinner",
],
},
{
day: "DAY 02",
activities: [
"09:00 Theme park",
"12:00 Lunch",
"15:00 Aquarium",
"19:00 Casual dinner",
],
},
{
day: "DAY 03",
activities: [
"11:00 Botanical garden",
"13:00 Family shopping",
"16:00 Playground",
"20:00 Farewell pizza",
],
},
];
default:
return [
{
day: "DAY 01",
activities: [
"09:00 Late breakfast",
"11:00 Spa session",
"13:00 Lunch",
"15:00 Reading",
"18:00 Evening walk",
"20:00 Dinner",
],
},
{
day: "DAY 02",
activities: [
"09:00 Yoga session",
"12:00 Lunch",
"14:00 Garden walk",
"17:00 Relax at hotel",
"20:00 Dinner",
],
},
{
day: "DAY 03",
activities: [
"10:00 Brunch",
"12:00 Shopping",
"15:00 Leisure activity",
"20:00 Farewell dinner",
],
},
];
}
}

const TourDetails = () => {
const { user } = useContext(AuthContext);
const reviewMsgRef = useRef();
const [tourRating, setTourRating] = useState();
const { id } = useParams();
// Customization state for both normal and personalized
const [selectedAddons, setSelectedAddons] = useState({
guideHalfDay: false,
guideFullDay: false,
activities: [],
cabAirport: false,
cabLocal: false,
});
const [showPersonalize, setShowPersonalize] = useState(false);
const [tripPreferences, setTripPreferences] = useState({ type: "" });
const [bookingPersonalized, setBookingPersonalized] = useState(false);

const addonPrices = {
guideHalfDay: 1000,
guideFullDay: 1800,
cabAirport: 900,
cabLocal: 1500,
activityCityTour: 700,
activityMuseum: 400,
activityAdventure: 1200,
};

useEffect(() => {
window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

const { apiData: tour, error } = useFetch(`${BASE_URL}/tour/${id}`, { method: "GET" });
const {
title = "",
photo = "",
desc = "",
price = "",
reviews = "",
city = "",
distance = "",
maxGroupSize = "",
address = "",
} = tour || {};

// Compute only add-on price (doesn't include base tour price)
const addonsTotal =
(selectedAddons.guideHalfDay ? addonPrices.guideHalfDay : 0) +
(selectedAddons.guideFullDay ? addonPrices.guideFullDay : 0) +
(selectedAddons.cabAirport ? addonPrices.cabAirport : 0) +
(selectedAddons.cabLocal ? addonPrices.cabLocal : 0) +
((Array.isArray(selectedAddons.activities) && selectedAddons.activities.length
? selectedAddons.activities.reduce((acc, act) => acc + (addonPrices[act] || 0), 0)
: 0));

const effectivePrice =
(bookingPersonalized || !showPersonalize) // default booking (either normal or just loaded page)
? Number(price || 0) + addonsTotal
: 0;

const reviewsArray = Array.isArray(reviews) ? reviews : [];
const { avgRating } = CalculateAvg(reviewsArray);
const options = { day: "numeric", month: "long", year: "numeric" };

const toggleAddon = (key) => {
setSelectedAddons((prev) => ({ ...prev, [key]: !prev[key] }));
};
const toggleActivity = (key) => {
setSelectedAddons((prev) => {
const list = new Set(prev.activities || []);
if (list.has(key)) list.delete(key);
else list.add(key);
return { ...prev, activities: Array.from(list) };
});
};

const handleSubmit = async (e) => {
e.preventDefault();
const reviewText = reviewMsgRef.current.value;
try {
if (user) {
const reviewData = {
username: user.username,
reviewText,
rating: tourRating,
};
const response = await fetch(`${BASE_URL}/review/${id}`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(reviewData),
});
const result = await response.json();
if (response.ok) window.location.reload();
else toast.error(result.message);
}
if (!user) toast.error("Please Sign In first");
} catch (err) {
toast.error("Server not responding");
}
};

const normalItinerary = [
{
day: "DAY 01",
activities: [
"08:00 Breakfast at a local cafe",
"11:00 City orientation and beach/park time",
"13:15 Traditional lunch",
"16:30 Evening at a popular spot",
"18:00 Sunset viewpoint",
"20:00 Dinner at a recommended restaurant",
],
},
{
day: "DAY 02",
activities: [
"08:00 Full-day tour or excursion",
"10:00 Snorkeling/park/museum depending on destination",
"13:00 Lunch during excursion",
"15:30 Explore highlights or relax",
"19:00 Sunset activity",
"21:00 Return and dinner",
],
},
{
day: "DAY 03",
activities: [
"09:00 Heritage walk or local markets",
"11:30 Museum or cultural site",
"13:00 Lunch at a local eatery",
"16:30 Free time and shopping",
"20:30 Farewell dinner",
],
},
];

const personalizedItinerary = generateItinerary(tripPreferences.type);

return (
<section className="my-4 px-12 w-full">
<div>
<div>
<div className="flex flex-col gap-4">
<div>
{/* Tour Image */}
<div className="max-w-3xl max-h-[400px] rounded-md overflow-hidden">
<img
src={
title && /discover saudi arabia/i.test(title)
? fallbackTourImg
: photo && !/black|placeholder|default|no-image/i.test(photo)
? photo
: fallbackTourImg
}
alt={title}
onError={(e) => {
e.currentTarget.src = fallbackTourImg;
e.currentTarget.onerror = null;
}}
/>
</div>
{/* Description and Map */}
<div className="my-6 overflow-hidden border-solid border-[1px] shadow-sm border-gray-200 rounded-md space-y-3 px-3 py-3 md:px-6 md:py-6 mx-auto">
<h2 className="text-[25px] md:text-[40px] font-bold mb-4 text-center md:text-start text-BaseColor">{title}</h2>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<div className="flex items-center gap-2">
<i><FaStar /></i>
<span>{avgRating} ({reviewsArray.length})</span>
</div>
<div className="flex items-center gap-2">
<i><FaMapPin /></i>
<span>{address}</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<div className="flex items-center gap-2">
<i><FaCity /></i>
<span>{city}</span>
</div>
<div className="flex items-center gap-2">
<i><FaLocationDot /></i>
<span>{distance}</span>
</div>
<div className="flex items-center gap-2">
<i><FaDollarSign /></i>
<span>Rs. {price}/per head</span>
</div>
<div className="flex items-center gap-2">
<i><FaPeopleGroup /></i>
<span>{maxGroupSize}</span>
</div>
</div>
<h3 className="text-[20px] text-center md:text-start md:text-[26px]">Description</h3>
<p className="mobpara md:para">{desc}</p>
</div>
{/* Google Map */}
<div className="w-full flex flex-col items-center my-8">
<h3 className="text-xl font-bold mb-3 text-red-800">Location Map</h3>
<div className="rounded-lg overflow-hidden shadow-md w-full max-w-2xl">
<iframe
title="Location Map"
width="100%"
height="340"
style={{ border: "2px solid #a41010", borderRadius: "12px", minWidth: "320px" }}
src={`https://www.google.com/maps?q=${encodeURIComponent(address || city || title)}&output=embed`}
allowFullScreen=""
loading="lazy"
></iframe>
</div>
</div>
{/* --- Itinerary --- */}
<div className="my-6 overflow-hidden border-solid border-[1px] shadow-sm border-gray-200 rounded-md space-y-3 px-3 py-3 md:px-6 md:py-6 mx-auto">
<h2 className="text-2xl font-bold mb-8">3-Day Itinerary</h2>
{!showPersonalize ? (
<>
{normalItinerary.map((dayObj) => (
<div className="border rounded p-3 mb-4" key={dayObj.day}>
<div className="text-xs font-bold text-gray-600">{dayObj.day}</div>
<ul className="mt-2 text-sm list-disc pl-5 space-y-1">
{dayObj.activities.map((act, idx) => (
<li key={idx}>{act}</li>
))}
</ul>
</div>
))}
<button className="bg-red-700 text-white px-6 py-3 rounded-md mt-4 font-bold" onClick={() => { setShowPersonalize(true); setBookingPersonalized(false); }}>
Do you want to personalize your trip?
</button>
</>
) : (
<>
<div className="mb-4">
<label className="font-semibold mr-2">Trip Type: </label>
<select
value={tripPreferences.type}
onChange={(e) => setTripPreferences({ ...tripPreferences, type: e.target.value })}
className="border rounded p-2"
>
<option value="">Select...</option>
{tripTypes.map((opt) => (
<option key={opt.value} value={opt.value}>
{opt.label}
</option>
))}
</select>
</div>
{tripPreferences.type &&
<>
<h2 className="text-lg font-bold mb-4 text-red-700">Your Personalized 3-Day Itinerary</h2>
{personalizedItinerary.map((dayObj) => (
<div className="border rounded p-3 mb-4" key={dayObj.day}>
<div className="text-xs font-bold text-gray-600">{dayObj.day}</div>
<ul className="mt-2 text-sm list-disc pl-5 space-y-1">
{dayObj.activities.map((act, idx) => (
<li key={idx}>{act}</li>
))}
</ul>
</div>
))}
<div className="flex gap-4">
<button className="bg-gray-300 text-gray-900 px-5 py-2 rounded font-bold" onClick={() => { setShowPersonalize(false); setBookingPersonalized(false); }}>
Back to normal itinerary
</button>
<button className="bg-green-700 text-white px-8 py-2 rounded font-bold" onClick={() => setBookingPersonalized(true)}>
Book this Personalized Itinerary
</button>
</div>
</>
}
</>
)}
</div>
{/* Customization: only seen when not personalized booking, or when booking personalized itinerary */}
{(bookingPersonalized || !showPersonalize) && (
<div className="my-6 overflow-hidden border-solid border-[1px] shadow-sm border-gray-200 rounded-md space-y-3 px-3 py-3 md:px-6 md:py-6 mx-auto">
<h3 className="text-[22px] md:text-[28px] font-semibold mt-6">Customize Your Trip</h3>
<div className="grid md:grid-cols-3 gap-4">
<div className="border rounded px-3 py-2">
<p className="font-semibold mb-2 text-sm">Guide Options</p>
<label className="flex items-center gap-3 cursor-pointer mb-2">
<input type="checkbox" checked={selectedAddons.guideHalfDay} onChange={() => toggleAddon("guideHalfDay")} />
<span className="text-sm">Half-day guide (+Rs. {addonPrices.guideHalfDay})</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox" checked={selectedAddons.guideFullDay} onChange={() => toggleAddon("guideFullDay")} />
<span className="text-sm">Full-day guide (+Rs. {addonPrices.guideFullDay})</span>
</label>
</div>
<div className="border rounded px-3 py-2">
<p className="font-semibold mb-2 text-sm">Activities</p>
<label className="flex items-center gap-3 cursor-pointer mb-2">
<input type="checkbox" checked={(selectedAddons.activities || []).includes("activityCityTour")} onChange={() => toggleActivity("activityCityTour")} />
<span className="text-sm">City tour (+Rs. {addonPrices.activityCityTour})</span>
</label>
<label className="flex items-center gap-3 cursor-pointer mb-2">
<input type="checkbox" checked={(selectedAddons.activities || []).includes("activityMuseum")} onChange={() => toggleActivity("activityMuseum")} />
<span className="text-sm">Museum entry (+Rs. {addonPrices.activityMuseum})</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox" checked={(selectedAddons.activities || []).includes("activityAdventure")} onChange={() => toggleActivity("activityAdventure")} />
<span className="text-sm">Adventure activity (+Rs. {addonPrices.activityAdventure})</span>
</label>
</div>
<div className="border rounded px-3 py-2">
<p className="font-semibold mb-2 text-sm">Cab Service</p>
<label className="flex items-center gap-3 cursor-pointer mb-2">
<input type="checkbox" checked={selectedAddons.cabAirport} onChange={() => toggleAddon("cabAirport")} />
<span className="text-sm">Airport transfer (+Rs. {addonPrices.cabAirport})</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox" checked={selectedAddons.cabLocal} onChange={() => toggleAddon("cabLocal")} />
<span className="text-sm">Local cab 8hrs/80km (+Rs. {addonPrices.cabLocal})</span>
</label>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<p className="text-base">
Base Price: <span className="font-semibold">Rs. {(bookingPersonalized || !showPersonalize) ? price : 0}</span>
</p>
<p className="text-base">
Add-ons: <span className="font-semibold">Rs. {addonsTotal}</span>
</p>
<p className="text-lg">
Your Price: <span className="font-bold">Rs. {(bookingPersonalized || !showPersonalize) ? Number(price || 0) + addonsTotal : addonsTotal}</span>
</p>
</div>
</div>
)}

{/* Booking Section */}
{bookingPersonalized ? (
<Booking
title={`${title} (Personalized Itinerary)`}
price={Number(price || 0) + addonsTotal}
avgRating={avgRating}
reviewsArray={reviewsArray}
tripPreferences={tripPreferences}
/>
) : (
<Booking
title={title}
price={Number(price || 0) + addonsTotal}
avgRating={avgRating}
reviewsArray={reviewsArray}
/>
)}

{/* Reviews Section */}
<div>
<h3 className="text-[25px] md:text-[35px] font-bold mb-4 text-center md:text-start ">
Reviews ({reviewsArray.length} reviews)
</h3>
<form onSubmit={handleSubmit}>
<div className="flex gap-1 my-2 ">
{[1, 2, 3, 4, 5].map((star) => (
<span
key={star}
className={
tourRating === star
? "cursor-pointer text-orange-800"
: "cursor-pointer text-orange-500 hover:text-orange-800"
}
onClick={() => setTourRating(star)}
>
<i>
<FaStar />
</i>
</span>
))}
</div>
<div className="flex my-8 overflow-hidden gap-4 w-full border-BaseColor border-[1px] rounded-full">
<input
type="text"
ref={reviewMsgRef}
placeholder="Share your thoughts"
className="focus:outline-none w-2/3 flex-1 py-2 px-4"
/>
<button
className="bg-BaseColor hover:bg-BHoverColor animate-fade-in duration-300 py-2 hover:px-6 px-4 my-1 mx-1 text-white rounded-full"
type="submit"
>
Submit
</button>
</div>
</form>
<div>
{reviewsArray?.map((review) => (
<div className="py-3 px-4" key={review._id}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-black border-[1px] overflow-hidden">
<img src={avatar} alt="" />
</div>
<div>
<h5 className="text-lg font-semibold">{review.username}</h5>
<p className="text-gray-700 text-sm">
{new Date(review.createdAt).toLocaleDateString("en-US", options)}
</p>
</div>
</div>
<div className="flex items-center py-3 px-12 justify-between">
<h5 className="text-lg">{review.reviewText}</h5>
<span className="flex items-center gap-1">
{review.rating}
<i>
<FaStar className="text-BaseColor" />
</i>
</span>
</div>
</div>
))}
</div>
</div>
{/* End Reviews */}
</div>
</div>
</div>
</div>
</section>
);
};

export default TourDetails;