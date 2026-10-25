import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-DRu1848-.js
var service_facial_default = "/assets/service-facial-aL2nPBwM.jpg";
var service_hair_spa_default = "/assets/service-hair-spa-D-C9mLtu.jpg";
var service_styling_default = "/assets/service-styling-C0btXW04.jpg";
var service_waxing_default = "/assets/service-waxing-JKXSueIh.jpg";
var img$1 = (query) => `https://images.unsplash.com/${query}?auto=format&fit=crop&w=800&q=70`;
var services = [
	{
		id: "m-haircut",
		name: "Haircut",
		description: "A sharp, tailored cut shaped to your face and hair type.",
		category: "men",
		price: 35,
		durationMinutes: 45,
		imageUrl: img$1("photo-1503951914875-452162b0f3f1"),
		featured: true
	},
	{
		id: "m-beard",
		name: "Beard Trim & Shave",
		description: "Hot towel, straight razor finish and a clean, precise line.",
		category: "men",
		price: 28,
		durationMinutes: 30,
		imageUrl: img$1("photo-1621607512214-68297480165e"),
		featured: true
	},
	{
		id: "m-color",
		name: "Hair Color",
		description: "Natural-looking tone, grey blending and soft dimension.",
		category: "men",
		price: 70,
		durationMinutes: 90,
		imageUrl: img$1("photo-1596728325488-58c87691e9af")
	},
	{
		id: "m-head-massage",
		name: "Head Massage",
		description: "Warm oil pressure-point massage to unwind the scalp.",
		category: "men",
		price: 30,
		durationMinutes: 30,
		imageUrl: service_hair_spa_default
	},
	{
		id: "m-facial",
		name: "Facial",
		description: "Deep cleanse, exfoliation and hydration for all skin types.",
		category: "men",
		price: 55,
		durationMinutes: 60,
		imageUrl: service_facial_default
	},
	{
		id: "m-hair-spa",
		name: "Hair Spa",
		description: "Restorative scalp and strand treatment with a steam finish.",
		category: "men",
		price: 50,
		durationMinutes: 50,
		imageUrl: service_hair_spa_default
	},
	{
		id: "w-haircut",
		name: "Haircut & Styling",
		description: "Consultation, wash, cut and a blow-dry you can recreate.",
		category: "women",
		price: 55,
		durationMinutes: 60,
		imageUrl: service_styling_default,
		featured: true
	},
	{
		id: "w-color",
		name: "Hair Color & Highlights",
		description: "Hand-painted dimension, gloss and soft grown-out blends.",
		category: "women",
		price: 120,
		durationMinutes: 120,
		imageUrl: img$1("photo-1560869713-7d0a29430803"),
		featured: true
	},
	{
		id: "w-facial",
		name: "Facial",
		description: "Brightening deep-cleanse tailored to your skin that week.",
		category: "women",
		price: 60,
		durationMinutes: 60,
		imageUrl: service_facial_default
	},
	{
		id: "w-waxing",
		name: "Waxing",
		description: "Gentle warm wax with soothing aftercare, head to toe.",
		category: "women",
		price: 40,
		durationMinutes: 45,
		imageUrl: service_waxing_default
	},
	{
		id: "w-mani-pedi",
		name: "Manicure & Pedicure",
		description: "Shaping, cuticle care and a long-wearing polish finish.",
		category: "women",
		price: 65,
		durationMinutes: 75,
		imageUrl: img$1("photo-1604654894610-df63bc536371")
	},
	{
		id: "w-bridal",
		name: "Bridal Makeup",
		description: "Trial plus day-of makeup built to last from dawn to dance.",
		category: "women",
		price: 220,
		durationMinutes: 150,
		imageUrl: img$1("photo-1519741497674-611481863552")
	},
	{
		id: "w-hair-spa",
		name: "Hair Spa",
		description: "Deep-conditioning ritual for softness, shine and slip.",
		category: "women",
		price: 55,
		durationMinutes: 50,
		imageUrl: service_hair_spa_default
	}
];
var reviews = [
	{
		id: "r1",
		name: "Mira Alston",
		rating: 5,
		text: "The softest, most thoughtful salon experience I've ever had. My color has never looked this dimensional.",
		service: "Color & Highlights",
		featured: true
	},
	{
		id: "r2",
		name: "Devin Kapoor",
		rating: 5,
		text: "First place that actually listened before picking up the scissors. The hot towel shave alone is worth the trip.",
		service: "Beard & Shave",
		featured: true
	},
	{
		id: "r3",
		name: "Priya Sethi",
		rating: 5,
		text: "Booked a bridal trial and left teary. They matched my skin perfectly and nothing budged for fourteen hours.",
		service: "Bridal Makeup",
		featured: true
	},
	{
		id: "r4",
		name: "Tomas Herrera",
		rating: 4,
		text: "Calm, plant-filled and never rushed. My cut has grown out beautifully over six weeks.",
		service: "Haircut"
	},
	{
		id: "r5",
		name: "Ayesha Rahman",
		rating: 5,
		text: "The hair spa left my scalp genuinely happy. I've stopped shedding the way I was.",
		service: "Hair Spa"
	},
	{
		id: "r6",
		name: "Jonah Feldman",
		rating: 5,
		text: "Head massage after a brutal work week — I nearly fell asleep in the chair. Rebooked on the spot.",
		service: "Head Massage"
	},
	{
		id: "r7",
		name: "Lena Novak",
		rating: 4,
		text: "Lovely manicure, and they were honest that my nails needed a rest week. Appreciated the candour.",
		service: "Manicure & Pedicure"
	},
	{
		id: "r8",
		name: "Samir Odili",
		rating: 5,
		text: "Genuinely unisex — my partner and I book back to back and both leave thrilled.",
		service: "Haircut & Styling"
	}
];
var img = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
var galleryImages = [
	{
		id: "g1",
		src: img("photo-1560066984-138dadb4c035"),
		alt: "Stylist finishing a fresh haircut",
		tall: true
	},
	{
		id: "g2",
		src: img("photo-1521590832167-7bcbfaa6381f"),
		alt: "Bright modern salon interior"
	},
	{
		id: "g3",
		src: img("photo-1562322140-8baeececf3df"),
		alt: "Client having hair washed at the basin"
	},
	{
		id: "g4",
		src: img("photo-1595476108010-b4d1f102b1b1"),
		alt: "Soft balayage colour result",
		tall: true
	},
	{
		id: "g5",
		src: img("photo-1470259078422-826894b933aa"),
		alt: "Salon styling station with mirrors"
	},
	{
		id: "g6",
		src: img("photo-1585747860715-2ba37e788b70"),
		alt: "Barber shaping a beard"
	},
	{
		id: "g7",
		src: img("photo-1516975080664-ed2fc6a32937"),
		alt: "Blow-dry styling in progress",
		tall: true
	},
	{
		id: "g8",
		src: img("photo-1487412947147-5cebf100ffc2"),
		alt: "Finished waves and styling work"
	},
	{
		id: "g9",
		src: img("photo-1540555700478-4be289fbecef"),
		alt: "Calm spa treatment room"
	},
	{
		id: "g10",
		src: img("photo-1559599101-f09722fb4948"),
		alt: "Product shelf and warm salon lighting"
	},
	{
		id: "g11",
		src: img("photo-1552693673-1bf958298935"),
		alt: "Detail of a precision cut",
		tall: true
	},
	{
		id: "g12",
		src: img("photo-1522337660859-02fbefca4702"),
		alt: "Relaxed client after styling"
	}
];
var salonInfo = {
	name: "AK Salon",
	tagline: "Where style is sculpted with softness.",
	address: "1st Floor, Binali Complex, Naranpura, Ahmedabad-380013",
	phone: "+91 9876543210",
	email: "hello@aksalon.com",
	mapEmbedUrl: "https://www.google.com/maps?q=1st%20Floor%2C%20Binali%20Complex%2C%20Naranpura%2C%20Ahmedabad-380013%2C%20Gujarat&output=embed",
	hours: [{
		day: "Monday - Sunday",
		time: "10:00 am - 8:00 pm"
	}]
};
/**
* Data access layer.
*
* Today these read from typed static files in /src/data. Swap the bodies for
* database/CMS calls later — UI components only ever call these functions.
*/
function getServices(category) {
	return category ? services.filter((s) => s.category === category) : services;
}
function getFeaturedServices(limit = 4) {
	return services.filter((s) => s.featured).slice(0, limit);
}
function getReviews() {
	return reviews;
}
function getFeaturedReviews(limit = 3) {
	return reviews.filter((r) => r.featured).slice(0, limit);
}
function getGalleryImages() {
	return galleryImages;
}
function getSalonInfo() {
	return salonInfo;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { getReviews as a, getGalleryImages as i, getFeaturedReviews as n, getSalonInfo as o, getFeaturedServices as r, getServices as s, cn as t };
