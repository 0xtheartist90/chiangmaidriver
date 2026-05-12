'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
    ArrowRight,
    CarFront,
    ChevronDown,
    Mail,
    HeartHandshake,
    Phone,
    Sparkles,
    Star,
    Trees
} from 'lucide-react';

import { Button } from '@/registry/new-york-v4/ui/button';

const whatsappLink = 'https://wa.me/66931246329';

const highlights = [
    {
        title: 'Private tours',
        description: 'No group bus. Your pace.',
        icon: Sparkles
    },
    {
        title: 'Friendly local help',
        description: 'Ask about food, temples, and stops.',
        icon: HeartHandshake
    },
    {
        title: 'Comfortable travel',
        description: 'Pickup, planning, and a calm route.',
        icon: CarFront
    },
    {
        title: 'Scenic local routes',
        description: 'Quiet roads and mountain views.',
        icon: Trees
    }
];

type ItineraryItem = {
    time?: string;
    title: string;
    text: string;
};

type Trip = {
    title: string;
    price: string;
    description: string;
    meta: string;
    accent: string;
    image?: string;
    subtitle?: string;
    itinerary: ItineraryItem[];
    note?: string;
};

type TripGroup = {
    title: string;
    intro: string;
    trips: Trip[];
};

const tripGroups: TripGroup[] = [
    {
        title: 'Chiang Mai Tours',
        intro: 'Temple days, waterfalls, city highlights, and easy local routes close to Chiang Mai.',
        trips: [
            {
                title: 'Create your own trip',
                price: 'From 1000 Thai Baht',
                description:
                    'A flexible private route for travelers who already have places in mind or want May to help shape a custom Chiang Mai day.',
                subtitle: 'A private route shaped around your timing, interests, and travel style.',
                meta: 'Custom Chiang Mai route',
                accent: 'from-[#3a4f61]/52 via-[#7b8a92]/25 to-[#d0a46a]/48',
                image: '/images/Tours/createyourowntrip.webp',
                itinerary: [],
                note: 'Send me your ideas, travel style, timing, and must-see places, and I can help shape a comfortable custom route.'
            },
            {
                title: 'Full Day Doi Suthep and Sticky Waterfall',
                price: 'From 2400 Thai Baht',
                description:
                    'A balanced full day of temple visits, waterfall scenery, and one of Chiang Mai’s most fun natural adventures.',
                subtitle: 'Temple views, hidden stops, and one of Chiang Mai’s most playful waterfalls.',
                meta: 'Chiang Mai day trip',
                accent: 'from-[#1b4864]/50 via-[#3f7a7c]/40 to-[#d89f57]/50',
                image: '/images/Tours/Full Day Doi Suthep.jpg',
                itinerary: [
                    { time: '08:30 - 09:00', title: 'Hotel pickup', text: 'I pick you up from your hotel at the time we agree in advance.' },
                    { title: 'Secret temple by the waterfall', text: 'Explore a quieter hidden temple in a beautiful natural setting.' },
                    { title: 'Doi Suthep Temple', text: 'Visit Chiang Mai’s most famous temple and enjoy the cultural atmosphere and city views.' },
                    { time: '12:00 - 13:00', title: 'Lunch or coffee break', text: 'Relax at a local restaurant or cafe. Food and drinks are not included.' },
                    { title: 'Drive to Sticky Waterfall', text: 'Continue to the limestone waterfall that is one of the area’s most unique places.' },
                    { title: 'Climb and enjoy the waterfall', text: 'Spend time walking, climbing, and enjoying the natural surroundings.' },
                    { time: '16:30 - 17:30', title: 'Return to hotel', text: 'Head back after a full and memorable day.' }
                ],
                note: 'This schedule offers a balanced mix of cultural exploration, natural beauty, and adventure.'
            },
            {
                title: 'Half Day Mountain Temple Tour',
                price: 'From 1200 Thai Baht',
                description:
                    'A shorter temple and waterfall route for travelers who want culture, scenery, and a relaxed half-day experience.',
                subtitle: 'A lighter route with temple views, nature, and a relaxed local pace.',
                meta: 'Chiang Mai half day',
                accent: 'from-[#28495f]/50 via-[#5a8270]/35 to-[#c9914f]/50',
                image: '/images/Tours/Half Day Mountain Temple Tour.webp',
                itinerary: [
                    { time: '08:30 - 09:30', title: 'Hotel pickup', text: 'I pick you up from your hotel and we begin the trip at an easy pace.' },
                    { title: 'Doi Suthep Temple', text: 'Visit the iconic mountain temple and take in the wide views over Chiang Mai.' },
                    { title: 'Secret temple on the waterfall', text: 'Stop at a quieter hidden spot with water, greenery, and a peaceful local feel.' },
                    { title: 'Enjoy the waterfall', text: 'Take your time in nature. You can relax, dip your toes, or climb a little if you like.' },
                    { time: '14:00 - 15:00', title: 'Drop off', text: 'Return to your hotel or stop at a nice local restaurant or coffee shop.' }
                ],
                note: 'This route blends culture, nature, and a relaxed half-day pace.'
            },
            {
                title: 'Full Day Sky, Water & Land',
                price: 'From 2400 Thai Baht',
                description:
                    'A full day that mixes temples, local food, and time on the Ping River for travelers who want variety in one trip.',
                subtitle: 'City temples, local flavors, and a calm river moment in one varied day.',
                meta: 'Chiang Mai highlights',
                accent: 'from-[#2e6171]/45 via-[#7aa1a2]/28 to-[#d3a25d]/50',
                image: '/images/Tours/Full Day Chiang Mai Sky, Water & Land.jpg',
                itinerary: [
                    { time: '08:30 - 09:00', title: 'Hotel pickup', text: 'I pick you up from your hotel and we start the day in comfort.' },
                    { title: 'Doi Suthep Temple', text: 'Enjoy the spiritual atmosphere and panoramic views from Chiang Mai’s best-known temple.' },
                    { title: 'City temple visits', text: 'Explore some of the city’s most loved temples and see a different side of Chiang Mai.' },
                    { title: 'Local lunch', text: 'Stop for a well-known local meal and enjoy Chiang Mai’s famous khao soi with a drink.' },
                    { title: 'Ping River experience', text: 'Take a calm kayak or boat ride and enjoy the river at a slower pace.' },
                    { title: 'More city highlights', text: 'Continue the afternoon with more temples and interesting places around the city.' },
                    { time: '16:00 - 17:30', title: 'Drop off at hotel', text: 'Finish the day with a comfortable return to your hotel.' }
                ]
            },
            {
                title: 'Huay Tung Tao Lake',
                price: 'From 1300 Thai Baht',
                description:
                    'A nature-focused option with trekking, lake scenery, waterfall time, and a relaxed local lunch.',
                subtitle: 'Trekking, lake views, waterfall time, and an easy nature-filled escape.',
                meta: 'Nature route',
                accent: 'from-[#334b4c]/50 via-[#6d8d63]/30 to-[#c78b48]/45',
                image: '/images/Tours/Half or Full Day Trekking and Lunch.avif',
                itinerary: [
                    { title: 'Option 1: Full day', text: 'A slower nature day with temple, lake, lunch, and trekking.' },
                    { time: '08:30 - 09:30', title: 'Hotel pickup', text: 'I pick you up from your hotel and we head toward the countryside.' },
                    { title: 'Secret temple and waterfall', text: 'Visit a peaceful temple area beside the waterfall before continuing into nature.' },
                    { title: 'Huay Tung Tao Lake', text: 'Enjoy the scenery around the lake and take in a more local side of Chiang Mai.' },
                    { title: 'Lunch by the lake', text: 'Relax over a local lunch with beautiful views and fresh air.' },
                    { title: 'Trek to the waterfall', text: 'Walk through nature and discover a hidden waterfall near the lake area.' },
                    { time: '16:30 - 17:30', title: 'Return to hotel', text: 'Head back after a peaceful and active full day.' },
                    { title: 'Option 2: Half day', text: 'A shorter version focused on trekking, lake views, and lunch.' },
                    { time: '08:30 - 09:30', title: 'Hotel pickup', text: 'Start the half-day route with pickup from your hotel.' },
                    { title: 'Trek and lake time', text: 'Walk to the waterfall, then relax and enjoy Huay Tung Tao Lake.' },
                    { title: 'Lunch by the lake', text: 'Enjoy a simple local lunch before heading back.' },
                    { time: '12:30 - 13:30', title: 'Return to hotel', text: 'Finish the half-day trip with a comfortable return.' }
                ],
                note: 'These options offer time in nature, adventurous trekking, and a chance to enjoy local food in a peaceful setting.'
            }
        ]
    },
    {
        title: 'Doi Inthanon Tours',
        intro: 'Mountain scenery, waterfalls, pagodas, hill tribe culture, and Thailand’s highest peak.',
        trips: [
            {
                title: 'Full Day Doi Inthanon Active Trekking',
                price: 'From 3200 Thai Baht',
                description:
                    'A full mountain day for travelers who want viewpoints, pagodas, waterfalls, and active trekking trails.',
                subtitle: 'High mountain views, waterfalls, pagodas, and scenic trails all in one day.',
                meta: 'Doi Inthanon active day',
                accent: 'from-[#36544a]/55 via-[#628d73]/32 to-[#c48a4b]/45',
                image: '/images/Tours/Full Day Doi Inthanon Active Trekking.jpg',
                itinerary: [
                    { time: '07:30 - 08:00', title: 'Pick up from hotel', text: 'Begin the day with pickup from your hotel at the agreed time.' },
                    { title: 'Journey to Doi Inthanon National Park', text: 'Enjoy the scenic drive to Thailand’s highest mountain and one of the country’s most beautiful national parks.' },
                    { title: 'Explore the highest peak', text: 'Stop at the summit area and enjoy the fresh air and mountain surroundings.' },
                    { title: 'Kew Mae Pan Nature Trail', text: 'Walk through one of the park’s best-known trails and take in the changing landscape.' },
                    { title: 'Visit Twin Pagodas', text: 'Explore the beautiful royal pagodas and their gardens.' },
                    { title: 'Lunch at a local restaurant', text: 'Enjoy a relaxing lunch with authentic Thai food.' },
                    { title: 'Pha Dok Siew Nature Trail trek', text: 'Spend around 1.5 hours trekking through rice fields and mountain scenery toward a hill tribe village, with mountain coffee and local culture along the way.' },
                    { title: 'Visit Wachirathan Waterfall', text: 'Finish the outing at one of Doi Inthanon’s most impressive waterfalls.' },
                    { time: '18:00 - 19:00', title: 'Return to hotel', text: 'Head back to Chiang Mai after a full and active mountain day.' }
                ]
            },
            {
                title: 'Full Day Doi Inthanon Relax',
                price: 'From 3200 Thai Baht',
                description:
                    'A slower-paced mountain route with the highest peak, pagodas, and two beautiful waterfalls.',
                subtitle: 'A gentler mountain day with cool air, pagodas, and beautiful waterfalls.',
                meta: 'Doi Inthanon relaxed day',
                accent: 'from-[#34535f]/52 via-[#7397a0]/28 to-[#d1a56a]/48',
                image: '/images/Tours/Full Day Doi Inthanon Relax.jpg',
                itinerary: [
                    { time: '07:30 - 08:00', title: 'Pick up from hotel', text: 'Begin the day with a prompt pickup from your hotel.' },
                    { title: 'Journey to Doi Inthanon National Park', text: 'Enjoy the scenic drive to Thailand’s highest mountain.' },
                    { title: 'Explore the highest peak', text: 'Take in the panoramic views and cool mountain atmosphere.' },
                    { title: 'Visit Twin Pagodas', text: 'Enjoy the architecture, gardens, and calm surroundings.' },
                    { title: 'Lunch at a local restaurant', text: 'Savor authentic Thai cuisine in a relaxed setting.' },
                    { title: 'Visit Wachirathan Waterfall', text: 'Stop at one of the park’s most striking waterfalls.' },
                    { title: 'Journey to Mae Ya Waterfall', text: 'Continue to one of Thailand’s most beautiful waterfalls, known for its wide cascading curtain of water.' },
                    { time: '18:00 - 19:00', title: 'Return to hotel', text: 'Return after a scenic and restful day in the mountains.' }
                ]
            },
            {
                title: 'Full Day Doi Inthanon Hilltribe',
                price: 'From 3200 Thai Baht',
                description:
                    'A cultural mountain route that combines major Inthanon highlights with a hill tribe village visit.',
                subtitle: 'Mountain scenery, local culture, and a hill tribe village in one route.',
                meta: 'Doi Inthanon cultural day',
                accent: 'from-[#43594b]/55 via-[#7c8f63]/28 to-[#b78354]/48',
                image: '/images/Tours/Full Day Doi Inthanon Hilltribe.jpg',
                itinerary: [
                    { time: '07:30 - 08:00', title: 'Pick up from hotel', text: 'Begin the day with pickup from your hotel.' },
                    { title: 'Journey to Doi Inthanon National Park', text: 'Enjoy the scenic drive toward Thailand’s highest mountain.' },
                    { title: 'Explore the highest peak', text: 'Stop at the summit area and enjoy the mountain setting.' },
                    { title: 'Visit Twin Pagodas', text: 'Explore the beautiful pagodas and their quiet surroundings.' },
                    { title: 'Lunch at a local restaurant', text: 'Take a break and enjoy authentic Thai cuisine.' },
                    { title: 'Visit hill tribe at Ban Mae Klang Luang', text: 'Experience local village life and learn more about the traditions of the community.' },
                    { title: 'Visit Wachirathan Waterfall', text: 'Finish with one of Inthanon’s most beautiful waterfalls.' },
                    { time: '18:30 - 20:00', title: 'Return to hotel', text: 'Return to Chiang Mai after a full cultural and scenic day.' }
                ]
            }
        ]
    },
    {
        title: 'Chiang Rai Tours',
        intro: 'Longer day trips for temples, art spaces, parks, and iconic landmarks in Chiang Rai.',
        trips: [
            {
                title: 'White Temple and Big Buddha',
                price: 'From 3400 Thai Baht',
                description:
                    'A classic Chiang Rai day with the White Temple, Big Buddha, and a hot spring stop on the way.',
                subtitle: 'Chiang Rai’s best-known landmarks with an easy scenic route from Chiang Mai.',
                meta: 'Chiang Rai full day',
                accent: 'from-[#314f69]/52 via-[#6e93ad]/28 to-[#d3ae79]/45',
                image: '/images/Tours/Chiang Rai White Temple and Big Buddha.jpg',
                itinerary: [
                    { time: '07:30 - 08:00', title: 'Departure from hotel', text: 'Leave Chiang Mai in the morning for the drive to Chiang Rai Province.' },
                    { title: 'Mae Khachan Hot Spring', text: 'Enjoy a short stop and stretch in the peaceful surroundings.' },
                    { title: 'Rong Khun Temple (White Temple)', text: 'Explore the famous White Temple, known for its striking white design and artistic detail.' },
                    { title: 'Lunch break', text: 'Enjoy lunch at a local restaurant before continuing the day.' },
                    { title: 'Wat Huay Pla Kang (Big Buddha)', text: 'Visit the impressive temple complex and giant Buddha statue with wide surrounding views.' },
                    { title: 'Return journey to Chiang Mai', text: 'Begin the drive back after the main visits are complete.' },
                    { time: '18:00 - 18:30', title: 'Return to hotel', text: 'Arrive back at your hotel in Chiang Mai.' }
                ]
            },
            {
                title: 'Chiang Rai White & Blue Temple & Black House',
                price: 'From 3400 Thai Baht',
                description:
                    'A rich Chiang Rai route covering three of the province’s most striking and creative landmarks.',
                subtitle: 'A bold art-and-temple day across Chiang Rai’s most distinctive sites.',
                meta: 'Chiang Rai highlights',
                accent: 'from-[#224e67]/55 via-[#4d85aa]/28 to-[#d1a16a]/48',
                image: '/images/Tours/Chiang Rai White & Blue Temple & Black House.jpg',
                itinerary: [
                    { time: '07:30', title: 'Departure from hotel', text: 'Leave Chiang Mai in the morning for the approximately 3-hour drive to Chiang Rai.' },
                    { title: 'Mae Khachan Hot Spring', text: 'Enjoy a short break before continuing north.' },
                    { title: 'Visit Rong Khun Temple (White Temple)', text: 'Explore one of Thailand’s most iconic contemporary temples.' },
                    { title: 'Lunch at a local restaurant', text: 'Enjoy authentic Thai cuisine and a midday break.' },
                    { title: 'Visit Blue Temple', text: 'Explore Wat Rong Suea Ten, known for its intense blue and gold details.' },
                    { title: 'Visit Black House', text: 'Discover Baan Dam Museum and its dramatic collection of buildings and artwork.' },
                    { title: 'Return to Chiang Mai', text: 'Depart Chiang Rai and begin the drive back south.' },
                    { time: '18:00 - 18:30', title: 'Return to hotel', text: 'Arrive back at your hotel in Chiang Mai.' }
                ]
            },
            {
                title: 'White Temple & Singha Park',
                price: 'From 3400 Thai Baht',
                description:
                    'A scenic Chiang Rai day combining the White Temple with a more open countryside experience in Singha Park.',
                subtitle: 'An easy blend of iconic temple architecture and open countryside scenery.',
                meta: 'Temple and park day',
                accent: 'from-[#30566d]/50 via-[#7b9f7f]/25 to-[#d3a66a]/48',
                image: '/images/Tours/Chiang Rai White Temple & Singha Park.webp',
                itinerary: [
                    { time: '07:30 - 08:00', title: 'Departure from hotel', text: 'Leave Chiang Mai in the morning for the drive to Chiang Rai.' },
                    { title: 'Mae Khachan Hot Spring', text: 'Enjoy a short break and take in the surroundings.' },
                    { time: '10:30 - 12:30', title: 'Rong Khun Temple (White Temple)', text: 'Explore the famous White Temple and enjoy its unique design and atmosphere.' },
                    { title: 'Lunch at Singha Park', text: 'Enjoy North Thai cuisine surrounded by the park’s scenic landscape.' },
                    { title: 'Visit Singha Park', text: 'Explore the park and, if you like, rent a bicycle or take the park bus through the grounds.' },
                    { title: 'Return journey to Chiang Mai', text: 'Begin the drive back after your afternoon at the park.' },
                    { time: '18:00 - 18:30', title: 'Return to hotel', text: 'Arrive back at your hotel in Chiang Mai.' }
                ]
            }
        ]
    },
    {
        title: 'Special Destinations',
        intro: 'A few different full-day ideas beyond the classic temple routes.',
        trips: [
            {
                title: 'Explore Amazing Lampang',
                price: 'From 2500 Thai Baht',
                description:
                    'A longer scenic day to Lampang with mountain temple views, waterfall time, and hot springs.',
                subtitle: 'Temples, local culture, scenic views, and a full-day guided experience.',
                meta: 'Full day Lampang',
                accent: 'from-[#4f5b46]/52 via-[#83946f]/28 to-[#cb9357]/45',
                image: '/images/Tours/Full Day Explore Amazing Lampang .jpg',
                itinerary: [
                    { time: '08:00', title: 'Pick up from your hotel', text: 'Pickup from your hotel at the agreed time.' },
                    { title: 'Wat Chalermprakiat Phrachomklao Rachanuson', text: 'After around 2.5 hours of driving, visit the temple and take in its striking mountain setting.' },
                    { title: 'Lunch break', text: 'Enjoy lunch and recharge for the afternoon.' },
                    { title: 'Chae Son Waterfall and hot spring', text: 'Explore the waterfall and relax in the hot spring area.' },
                    { title: 'Return journey to Chiang Mai', text: 'Prepare for the drive back after enjoying Lampang’s natural beauty.' },
                    { time: '18:00 - 18:30', title: 'Arrive at your hotel', text: 'Return to Chiang Mai in the evening.' }
                ]
            },
            {
                title: 'Elephant and Waterfall Experience',
                price: 'From 2300 Thai Baht',
                description:
                    'A hands-on elephant experience that can stay half-day or continue into a full day with a waterfall visit.',
                subtitle: 'A warm elephant encounter with the option to extend into waterfall time.',
                meta: 'Elephant experience',
                accent: 'from-[#5b5f3c]/50 via-[#8e9359]/25 to-[#c99053]/44',
                image: '/images/Tours/Elephant and Waterfall Experience .webp',
                itinerary: [
                    { title: 'Pick up from your hotel in Chiang Mai', text: 'Begin your journey at the agreed time.' },
                    { title: 'Arrival at Elephant Home', text: 'Reach the elephant home after around 45 minutes of driving.' },
                    { title: 'Elephant home experience', text: 'Change into Karen Mahout clothing, learn about elephant care and behavior, feed the elephants, walk with them, and help with bathing and brushing in the river.' },
                    { title: 'Food at the Elephant Home', text: 'Enjoy food provided after the activities.' },
                    { title: 'Half-day return or full-day extension', text: 'You can return directly to Chiang Mai or continue to Mae Sa Waterfall or Sticky Waterfall for a longer day.' }
                ]
            },
            {
                title: 'Grand Canyon',
                price: 'From 1500 Thai Baht',
                description:
                    'A playful waterpark day for families, couples, or groups who want something active and different.',
                subtitle: 'A fun active day with water, adventure, and easy group-friendly energy.',
                meta: 'Waterpark day',
                accent: 'from-[#245b72]/52 via-[#4fa2bc]/26 to-[#d1a66e]/42',
                image: '/images/Tours/Chiang Mai Grand Canyon.jpg',
                itinerary: [
                    { title: 'Pick up from your hotel in Chiang Mai', text: 'I can arrange pickup at a time that works best for you.' },
                    { title: 'Arrival at Grand Canyon Waterpark', text: 'Arrive and get ready for a fun day of activities.' },
                    { title: 'Enjoy waterpark activities', text: 'Spend the day enjoying ziplining, wakeboarding, swimming, cliff jumping, and more.' },
                    { title: 'Departure from Grand Canyon Waterpark', text: 'Leave whenever you are ready after your time at the park.' },
                    { title: 'Drop off at your hotel', text: 'Return to your hotel in Chiang Mai.' }
                ]
            },
            {
                title: 'Night Safari',
                price: 'From 2500 Thai Baht',
                description:
                    'A fun family-friendly day or evening with animals, tram rides, shows, and a magical safari atmosphere.',
                subtitle: 'A relaxed family outing with animals, shows, and a memorable evening feel.',
                meta: 'Family destination',
                accent: 'from-[#314146]/56 via-[#6c7c65]/24 to-[#bd8a55]/44',
                image: '/images/Tours/Chiang Mai Night Safari.jpg',
                itinerary: [
                    { title: 'Morning or evening schedule', text: 'Pick up from your hotel at your preferred time for a noon or evening visit.' },
                    { title: 'Arrival at Chiang Mai Night Safari', text: 'Choose the timing that best suits your day.' },
                    { title: 'Night Safari experience', text: 'Explore the park, enjoy animal encounters, safari tram rides, shows, and interactive activities.' },
                    { title: 'Lunch or dinner break', text: 'Take a meal break at one of the restaurants inside the safari complex.' },
                    { title: 'Continue exploring', text: 'Enjoy more attractions, photography, and wildlife observation at your own pace.' },
                    { title: 'Departure and return', text: 'Leave when you are ready and return to your hotel in Chiang Mai.' }
                ]
            }
        ]
    }
];

const reviews = [
    {
        quote: 'May made our Chiang Mai trip feel relaxed and personal. We never felt rushed, and the whole day was easy.',
        author: 'Family from Singapore'
    },
    {
        quote: 'Very warm, very helpful, and great local suggestions. We saw the highlights but the day still felt natural.',
        author: 'Couple from Australia'
    },
    {
        quote: 'If you want a friendly local guide instead of a touristy experience, May is a lovely choice.',
        author: 'Traveler from the UK'
    }
];

const tourMarqueeImages = [
    '/images/marquee/pexels-daciana-cristina-visan-2149801141-32514143.jpg',
    '/images/marquee/pexels-sandro-sandrone-lazzarini-15116771-6333432.jpg',
    '/images/marquee/pexels-jean-papillon-28600264.jpg',
    '/images/marquee/pexels-kirandeepsingh-17371721.jpg',
    '/images/marquee/pexels-ton-sanitprem-3503969-5233858.jpg'
];

const reviewMarqueeImages = [
    '/images/Tours/Full Day Doi Suthep.jpg',
    '/images/Tours/Half Day Mountain Temple Tour.webp',
    '/images/Tours/Full Day Chiang Mai Sky, Water & Land.jpg',
    '/images/Tours/Elephant and Waterfall Experience .webp',
    '/images/Tours/Half or Full Day Trekking and Lunch.avif'
];

const steps = [
    {
        title: 'Message me',
        text: 'Tell me your dates, hotel area, and the places you would like to visit.'
    },
    {
        title: 'I help plan the route',
        text: 'I can suggest a comfortable trip that fits your time and travel style.'
    },
    {
        title: 'Enjoy your day in Chiang Mai',
        text: 'I will pick you up and help your travel day feel smooth, relaxed, and enjoyable.'
    }
];

const patternedLight = {
    backgroundImage:
        "linear-gradient(180deg, rgba(248,246,239,0.9) 0%, rgba(255,252,247,0.93) 100%), url('/images/cxbackground.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
} as const;

const beigeSection = {
    backgroundColor: '#f1e5d2',
    backgroundImage: "linear-gradient(180deg, rgba(241,229,210,0.9), rgba(241,229,210,0.94)), url('/images/beigebg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
} as const;

const beigeBackgroundLayer = {
    backgroundImage: "linear-gradient(180deg, rgba(241,229,210,0.9), rgba(241,229,210,0.94)), url('/images/beigebg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
} as const;

const howItWorksSection = {
    backgroundImage:
        "linear-gradient(180deg, rgba(244,234,217,0.68), rgba(244,234,217,0.78)), url('/images/how it works .webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
} as const;

const getTripCategoryLabel = (trip: Trip) => {
    const lowerTitle = trip.title.toLowerCase();

    if (lowerTitle.includes('custom')) return 'CUSTOM TOUR';
    if (lowerTitle.includes('half or full day')) return 'FLEXIBLE TOUR';
    if (lowerTitle.includes('half day')) return 'HALF DAY TOUR';
    if (lowerTitle.includes('night safari')) return 'FAMILY EXPERIENCE';
    if (lowerTitle.includes('elephant')) return 'NATURE EXPERIENCE';

    return 'FULL DAY TOUR';
};

const formatTripPrice = (price: string) =>
    price.replace('Thai Baht', 'THB').replace('Baht', 'THB').replace(/\s+/g, ' ').trim();

const formatTripProgress = (index: number, total: number) =>
    `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

const getTripDisplayTitle = (trip: Trip) => {
    const category = getTripCategoryLabel(trip);

    if (category === 'FULL DAY TOUR') {
        return trip.title.replace(/^Full Day\s+/i, '');
    }

    if (category === 'HALF DAY TOUR') {
        return trip.title.replace(/^Half Day\s+/i, '');
    }

    if (category === 'FLEXIBLE TOUR') {
        return trip.title.replace(/^Half or Full Day\s+/i, '');
    }

    return trip.title;
};

const HomePage = () => {
    const [activeTripGroup, setActiveTripGroup] = useState(tripGroups[0]?.title ?? '');
    const [activeTripIndex, setActiveTripIndex] = useState(0);
    const [openTrip, setOpenTrip] = useState<string | null>(null);
    const [activeReviewIndex, setActiveReviewIndex] = useState(0);
    const [mobileTripMenuOpen, setMobileTripMenuOpen] = useState(false);
    const selectedTripGroup = tripGroups.find((group) => group.title === activeTripGroup) ?? tripGroups[0];
    const selectedTrip = selectedTripGroup.trips[activeTripIndex] ?? selectedTripGroup.trips[0];
    const selectedTripKey = `${selectedTripGroup.title}-${selectedTrip.title}`;
    const isTripOpen = openTrip === selectedTripKey;

    useEffect(() => {
        if (reviews.length <= 1) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setActiveReviewIndex((current) => (current + 1) % reviews.length);
        }, 4500);

        return () => window.clearInterval(intervalId);
    }, []);

    const moveTrip = (direction: 'previous' | 'next') => {
        setOpenTrip(null);
        setMobileTripMenuOpen(false);
        setActiveTripIndex((current) => {
            const total = selectedTripGroup.trips.length;
            if (direction === 'previous') {
                return current === 0 ? total - 1 : current - 1;
            }

            return current === total - 1 ? 0 : current + 1;
        });
    };

    return (
        <main
            id='top'
            className='bg-[#f8f3ea] text-slate-900'>
            <header className='sticky top-0 z-20 border-b border-[#e8dcc8]/80 bg-[rgba(250,246,239,0.86)] backdrop-blur-xl'>
                <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
                    <Link href='#top' className='flex items-center'>
                        <img
                            alt='Chiang Mai Driver logo'
                            className='h-11 w-auto sm:h-12'
                            src='/images/cxlogo topnav.png'
                        />
                    </Link>
                    <nav className='hidden items-center gap-6 text-sm text-slate-600 md:flex'>
                        <Link className='transition hover:text-[#173247]' href='#trips'>
                            Tours
                        </Link>
                        <Link className='transition hover:text-[#173247]' href='#about'>
                            About May
                        </Link>
                        <Link className='transition hover:text-[#173247]' href='#reviews'>
                            Reviews
                        </Link>
                        <Link className='transition hover:text-[#173247]' href='#contact'>
                            Contact
                        </Link>
                    </nav>
                    <Button
                        asChild
                        className='rounded-full border border-[#d9b27a] bg-[#c97932] px-5 text-white shadow-sm hover:bg-[#b46c2e]'>
                        <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
                            Plan My Trip
                        </Link>
                    </Button>
                </div>
            </header>

            <section className='relative isolate min-h-[92svh] overflow-hidden'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    src='/images/Cx Hero.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                />
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,32,0.22)_0%,rgba(8,22,32,0.48)_45%,rgba(8,22,32,0.72)_100%)]' />
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,196,125,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(83,150,176,0.18),transparent_26%)]' />

                <div className='relative mx-auto flex min-h-[92svh] max-w-6xl items-end justify-center px-4 pb-14 pt-24 text-center sm:items-center sm:px-6 sm:py-24 lg:px-8'>
                    <div className='mx-auto flex max-w-4xl flex-col items-center text-white'>
                        <img
                            alt='Chiang Mai Driver hero logo'
                            className='mb-8 h-48 w-auto scale-150 sm:h-52 lg:h-72'
                            src='/images/cxlogo.png'
                        />
                        <h1 className='travel-display mt-6 text-5xl leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl'>
                            Explore Chiang Mai with May.
                        </h1>
                        <p className='mt-5 max-w-2xl text-lg leading-8 text-white/82'>
                            Private day trips and driver service for a warm, easy, and personal experience in northern Thailand.
                        </p>

                        <div className='mt-8 flex flex-row items-center justify-center gap-3'>
                            <Button
                                asChild
                                size='lg'
                                className='rounded-full border border-[#e4be88] bg-[#d08238] px-6 text-white hover:bg-[#bc7230]'>
                                <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
                                    Chat with May
                                    <ArrowRight className='size-4' />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size='lg'
                                variant='outline'
                                className='rounded-full border-white/25 bg-white/10 px-6 text-white hover:bg-white/18 hover:text-white'>
                                <a href='#trips'>
                                    Explore Tours
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-9 sm:py-10' style={patternedLight}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
                        <div className='overflow-hidden rounded-lg border border-[#d8c3a3] bg-white/70 shadow-sm'>
                            <img
                                alt='Welcome to Chiang Mai'
                                className='h-auto w-full'
                                src='/images/welcometocx.jpg'
                            />
                        </div>

                        <div className='max-w-2xl'>
                            <p className='text-sm font-semibold tracking-[0.24em] text-[#a1612a] uppercase'>
                                Welcome to Chiang Mai
                            </p>
                            <h2 className='travel-display mt-2 text-3xl text-[#173247] sm:text-4xl'>
                                A calm, personal way to explore northern Thailand
                            </h2>
                            <p className='mt-3 text-base leading-7 text-slate-700'>
                                If you would like a friendly local driver instead of a busy tour group, I can help you enjoy
                                Chiang Mai at your own pace. Some guests want famous temples, some want mountain views and
                                waterfalls, and some want a little of everything in one easy day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative border-y border-[#e5d6c0] py-8' style={beigeSection}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
                        {highlights.map(({ title, description, icon: Icon }) => (
                            <div
                                key={title}
                                className='flex min-h-36 flex-col items-center justify-center rounded-lg border border-[#dfcfb4] bg-[#fffaf2]/82 px-4 py-5 text-center shadow-sm backdrop-blur-sm sm:min-h-32 sm:px-5'>
                                <span className='flex size-12 items-center justify-center rounded-md bg-[#f2dfc4] text-[#b56f2d] shadow-[inset_0_0_0_1px_rgba(181,111,45,0.14)]'>
                                    <Icon className='size-5' />
                                </span>
                                <span className='mt-4 text-base font-semibold text-[#173247]'>{title}</span>
                                <span className='mt-2 text-sm leading-6 text-slate-600'>{description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-label='Chiang Mai travel photos' className='overflow-hidden bg-[#173247]'>
                <div className='chiang-mai-marquee flex w-max'>
                    {[...tourMarqueeImages, ...tourMarqueeImages].map((image, index) => (
                        <img
                            key={`${image}-${index}`}
                            alt=''
                            aria-hidden='true'
                            className='chiang-mai-marquee-image block h-[190px] w-[280px] flex-none object-cover sm:h-[240px] sm:w-[360px] lg:h-[300px] lg:w-[450px]'
                            src={image}
                        />
                    ))}
                </div>
            </section>

            <section id='trips' className='relative py-16' style={patternedLight}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='max-w-3xl'>
                        <p className='text-sm font-semibold tracking-[0.24em] text-[#a1612a] uppercase'>Popular Tours</p>
                        <h2 className='travel-display mt-3 text-4xl text-[#173247] sm:text-5xl'>
                            A better way to choose a day trip
                        </h2>
                    </div>

                    <div className='relative z-30 mt-6'>
                        <div className='relative z-30 rounded-lg border border-[#dcc6a5] bg-white/70 p-2 shadow-sm backdrop-blur-sm'>
                            <div className='relative z-20 md:hidden'>
                                <button
                                    type='button'
                                    aria-expanded={mobileTripMenuOpen}
                                    aria-controls='trip-group-mobile-menu'
                                    onClick={() => setMobileTripMenuOpen((current) => !current)}
                                    className='flex w-full items-center justify-between rounded-md border border-[#dcc6a5] bg-white px-4 py-3 text-left text-sm font-medium text-[#173247] transition'>
                                    <span>{selectedTripGroup.title}</span>
                                    <ChevronDown
                                        className={`size-4 transition-transform ${mobileTripMenuOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {mobileTripMenuOpen ? (
                                    <div
                                        id='trip-group-mobile-menu'
                                        className='absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 rounded-md border border-[#dcc6a5] bg-white p-2 shadow-xl'>
                                        <div className='grid gap-1'>
                                            {tripGroups.map((group) => {
                                                const isActive = group.title === selectedTripGroup.title;

                                                return (
                                                    <button
                                                        key={group.title}
                                                        type='button'
                                                        onClick={() => {
                                                            setActiveTripGroup(group.title);
                                                            setActiveTripIndex(0);
                                                            setOpenTrip(null);
                                                            setMobileTripMenuOpen(false);
                                                        }}
                                                        className={`rounded-md px-3 py-3 text-left text-sm font-medium transition ${
                                                            isActive
                                                                ? 'bg-[#1d4d5f] text-white'
                                                                : 'text-slate-700 hover:bg-[#f7efe3]'
                                                        }`}>
                                                        {group.title}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : null}
                            </div>

                            <div className='hidden gap-2 md:grid md:grid-cols-4'>
                                {tripGroups.map((group) => {
                                    const isActive = group.title === selectedTripGroup.title;

                                    return (
                                        <button
                                            key={group.title}
                                            type='button'
                                            onClick={() => {
                                                setActiveTripGroup(group.title);
                                                setActiveTripIndex(0);
                                                setOpenTrip(null);
                                                setMobileTripMenuOpen(false);
                                            }}
                                            className={`rounded-md border px-4 py-3 text-sm font-medium transition ${
                                                isActive
                                                    ? 'border-[#1d4d5f] bg-[#1d4d5f] text-white shadow-sm'
                                                    : 'border-transparent bg-white/78 text-slate-700 hover:border-[#dfc39d] hover:bg-white'
                                            }`}>
                                            {group.title}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='relative z-0 mt-5'>
                            <article className='relative z-0 overflow-hidden rounded-lg border border-[#dfcfb4] bg-white shadow-sm'>
                                <div className='relative min-h-[74svh] overflow-hidden sm:min-h-[520px]'>
                                    <img
                                        alt={selectedTrip.title}
                                        className='absolute inset-0 h-full w-full object-cover object-center'
                                        src={selectedTrip.image ?? '/images/cxbackground.png'}
                                    />
                                    <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,35,0.8)_0%,rgba(10,25,35,0.64)_24%,rgba(10,25,35,0.28)_48%,rgba(10,25,35,0.08)_70%,rgba(10,25,35,0.02)_100%)]' />
                                    <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,35,0.04)_0%,rgba(10,25,35,0.08)_42%,rgba(10,25,35,0.42)_100%)]' />

                                    {isTripOpen ? (
                                        <div className='relative flex min-h-[74svh] flex-col p-5 text-white sm:min-h-[520px] sm:p-8'>
                                            <div className='flex items-start justify-between gap-4'>
                                                <div>
                                                    <p className='text-sm font-semibold tracking-[0.2em] text-white/78 uppercase'>Day Plan</p>
                                                    <h4 className='travel-display mt-2 text-3xl leading-tight sm:text-5xl'>
                                                        {getTripDisplayTitle(selectedTrip)}
                                                    </h4>
                                                </div>
                                                <button
                                                    type='button'
                                                    onClick={() => setOpenTrip(null)}
                                                    className='rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/18'>
                                                    Back
                                                </button>
                                            </div>

                                            <div className='mt-6 min-h-0 flex-1 overflow-y-auto pr-1'>
                                                {selectedTrip.itinerary.length ? (
                                                    <div className='grid gap-3 md:grid-cols-2'>
                                                        {selectedTrip.itinerary.map((item) => (
                                                            <div
                                                                key={`${item.title}-${item.time ?? item.text}`}
                                                                className='rounded-md border border-white/14 bg-white/88 p-3 text-[#173247] shadow-sm'>
                                                                <p className='text-sm font-semibold'>{item.title}</p>
                                                                {item.time ? (
                                                                    <span className='mt-2 inline-flex w-fit rounded-md bg-[#f7ead8] px-2 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-[#9b622d] uppercase'>
                                                                        {item.time}
                                                                    </span>
                                                                ) : null}
                                                                <p className='mt-2 text-xs leading-5 text-slate-600'>{item.text}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : selectedTrip.note ? (
                                                    <p className='rounded-md border border-white/14 bg-white/88 p-4 text-sm leading-7 text-slate-700'>
                                                        {selectedTrip.note}
                                                    </p>
                                                ) : null}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='relative min-h-[74svh] p-5 text-white sm:min-h-[520px] sm:p-8'>
                                            <div className='flex flex-wrap items-start justify-between gap-4'>
                                                <div className='rounded-full border border-white/15 bg-black/18 px-3 py-1 text-[0.68rem] font-medium tracking-[0.18em] uppercase text-white/88 backdrop-blur-sm'>
                                                    {getTripCategoryLabel(selectedTrip)}
                                                </div>
                                                <div className='rounded-full bg-[#f5e8d5] px-4 py-2 text-sm font-semibold text-[#173247] shadow-sm'>
                                                    {formatTripPrice(selectedTrip.price)}
                                                </div>
                                            </div>

                                            <div className='absolute inset-x-5 bottom-5 sm:left-8 sm:right-8 sm:bottom-8'>
                                                <h4 className='travel-display text-4xl leading-[0.95] sm:text-6xl'>
                                                    {getTripDisplayTitle(selectedTrip)}
                                                </h4>
                                                {selectedTrip.subtitle ? (
                                                    <p className='mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base'>
                                                        {selectedTrip.subtitle}
                                                    </p>
                                                ) : null}

                                                <div className='mt-6 sm:hidden'>
                                                    <div className='flex flex-col gap-3'>
                                                        <a
                                                            className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d08238] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#bc7230]'
                                                            href={whatsappLink}
                                                            target='_blank'
                                                            rel='noopener noreferrer'>
                                                            Ask May on WhatsApp
                                                            <ArrowRight className='size-4' />
                                                        </a>
                                                        <div className='grid grid-cols-3 gap-2'>
                                                            <button
                                                                type='button'
                                                                onClick={() => setOpenTrip(selectedTripKey)}
                                                                className='col-span-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/18'>
                                                                <span>
                                                                    {selectedTrip.itinerary.length ? 'View day plan' : 'Plan with May'}
                                                                </span>
                                                                <span className='flex size-6 items-center justify-center rounded-full bg-white text-[#a1612a] shadow-sm'>
                                                                    <ChevronDown className='size-4' />
                                                                </span>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                onClick={() => moveTrip('previous')}
                                                                className='rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/18'>
                                                                Previous
                                                            </button>
                                                            <div className='flex flex-col items-center justify-center gap-1 text-center'>
                                                                <span className='text-sm font-semibold tracking-[0.18em] text-white/82'>
                                                                    {formatTripProgress(activeTripIndex, selectedTripGroup.trips.length)}
                                                                </span>
                                                                <span className='h-px w-full bg-white/45' />
                                                            </div>
                                                            <button
                                                                type='button'
                                                                onClick={() => moveTrip('next')}
                                                                className='rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/18'>
                                                                Next
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-6 hidden flex-wrap items-center gap-3 sm:flex'>
                                                    <a
                                                        className='inline-flex items-center gap-2 rounded-full bg-[#d08238] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#bc7230]'
                                                        href={whatsappLink}
                                                        target='_blank'
                                                        rel='noopener noreferrer'>
                                                        Ask May on WhatsApp
                                                        <ArrowRight className='size-4' />
                                                    </a>
                                                    <button
                                                        type='button'
                                                        onClick={() => setOpenTrip(selectedTripKey)}
                                                        className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/18'>
                                                        <span>
                                                            {selectedTrip.itinerary.length ? 'View day plan' : 'Plan with May'}
                                                        </span>
                                                        <span className='flex size-6 items-center justify-center rounded-full bg-white text-[#a1612a] shadow-sm'>
                                                            <ChevronDown className='size-4' />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='absolute right-8 bottom-8 hidden flex-col items-end gap-3 sm:flex'>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-sm font-semibold tracking-[0.18em] text-white/82'>
                                                        {formatTripProgress(activeTripIndex, selectedTripGroup.trips.length)}
                                                    </span>
                                                    <span className='h-px w-32 bg-white/45' />
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <button
                                                        type='button'
                                                        onClick={() => moveTrip('previous')}
                                                        className='rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/18'>
                                                        Previous
                                                    </button>
                                                    <button
                                                        type='button'
                                                        onClick={() => moveTrip('next')}
                                                        className='rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/18'>
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section id='about' className='relative overflow-hidden bg-[#f1e5d2] py-14 sm:py-16'>
                <div aria-hidden='true' className='absolute inset-0 scale-x-[-1]' style={beigeBackgroundLayer} />
                <div className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden rounded-lg border border-[#d8c3a3] bg-white/70 shadow-sm backdrop-blur-sm'>
                        <div className='grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch'>
                            <div className='relative min-h-[300px] lg:min-h-[390px]'>
                                <img
                                    alt='May in Chiang Mai'
                                    className='absolute inset-0 h-full w-full object-cover'
                                    src='/images/nattayamay 1.png'
                                />
                            </div>

                            <div className='px-6 py-8 sm:px-8 sm:py-10'>
                                <p className='text-sm font-semibold tracking-[0.24em] text-[#a1612a] uppercase'>About May</p>
                                <h2 className='travel-display mt-3 max-w-2xl text-3xl text-[#173247] sm:text-4xl'>
                                    I want your trip to feel welcoming, smooth, and full of good memories.
                                </h2>
                                <p className='mt-4 max-w-2xl text-base leading-8 text-slate-700'>
                                    Some travelers want the famous places. Some want mountain air, waterfalls, and a slower
                                    route. Some just want a kind local person to help make the day easy. I enjoy listening
                                    to what you like and helping shape a trip that feels right for you.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section aria-label='Northern Thailand travel photos' className='overflow-hidden bg-[#173247]'>
                <div className='chiang-mai-marquee flex w-max'>
                    {[...reviewMarqueeImages, ...reviewMarqueeImages].map((image, index) => (
                        <img
                            key={`${image}-${index}`}
                            alt=''
                            aria-hidden='true'
                            className='chiang-mai-marquee-image block h-[190px] w-[280px] flex-none object-cover sm:h-[240px] sm:w-[360px] lg:h-[300px] lg:w-[450px]'
                            src={image}
                        />
                    ))}
                </div>
            </section>

            <section id='reviews' className='relative py-12' style={patternedLight}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='hidden gap-5 lg:grid lg:grid-cols-3'>
                        {reviews.map((review) => (
                            <div
                                key={review.author}
                                className='rounded-lg border border-[#dfcfb4] bg-white px-6 py-6 shadow-sm'>
                                <div className='flex gap-1 text-[#d89541]'>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star key={index} className='size-4 fill-current' />
                                    ))}
                                </div>
                                <p className='mt-4 text-base leading-8 text-slate-700'>&ldquo;{review.quote}&rdquo;</p>
                                <div className='mt-5 flex items-center justify-between gap-4'>
                                    <p className='text-sm font-medium text-[#173247]'>{review.author}</p>
                                    <span className='text-xs font-semibold tracking-[0.16em] text-[#a1612a] uppercase'>Google</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mx-auto max-w-3xl overflow-hidden lg:hidden'>
                        <div
                            className='flex transition-transform duration-700 ease-out'
                            style={{ transform: `translateX(-${activeReviewIndex * 100}%)` }}>
                            {reviews.map((review) => (
                                <div key={review.author} className='w-full flex-none px-1'>
                                    <div className='rounded-lg border border-[#dfcfb4] bg-white px-6 py-6 shadow-sm'>
                                        <div className='flex gap-1 text-[#d89541]'>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Star key={index} className='size-4 fill-current' />
                                            ))}
                                        </div>
                                        <p className='mt-4 text-base leading-8 text-slate-700'>&ldquo;{review.quote}&rdquo;</p>
                                        <div className='mt-5 flex items-center justify-between gap-4'>
                                            <p className='text-sm font-medium text-[#173247]'>{review.author}</p>
                                            <span className='text-xs font-semibold tracking-[0.16em] text-[#a1612a] uppercase'>Google</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-5 flex justify-center gap-2 lg:hidden'>
                        {reviews.map((review, index) => (
                            <button
                                key={review.author}
                                type='button'
                                aria-label={`Show review ${index + 1}`}
                                onClick={() => setActiveReviewIndex(index)}
                                className={`h-2.5 rounded-full transition ${
                                    index === activeReviewIndex ? 'w-8 bg-[#1d4d5f]' : 'w-2.5 bg-[#d8c3a3]'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative py-14' style={howItWorksSection}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8'>
                        <div className='max-w-xl'>
                            <p className='text-sm font-semibold tracking-[0.24em] text-[#a1612a] uppercase'>How It Works</p>
                            <h2 className='travel-display mt-3 text-4xl text-[#173247] sm:text-5xl'>
                                A very easy way to arrange your day
                            </h2>
                            <p className='mt-4 text-base leading-8 text-slate-700'>
                                Send me your idea, I help shape the route, and we keep the day comfortable from pickup to drop-off.
                            </p>

                            <Button
                                asChild
                                size='lg'
                                className='mt-6 hidden rounded-md border border-[#d9b27a] bg-[#173247] px-6 text-white hover:bg-[#102434] sm:w-auto lg:inline-flex'>
                                <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
                                    Message May on WhatsApp
                                    <ArrowRight className='size-4' />
                                </Link>
                            </Button>
                        </div>

                        <div className='relative pt-1 sm:pt-2'>
                            <div className='absolute top-3 bottom-20 left-[1rem] w-px bg-[#d4bb95]/90 sm:bottom-3 sm:left-[1.15rem]' aria-hidden='true' />

                            <div className='relative grid max-w-[34rem] gap-5'>
                            {steps.map((step, index) => (
                                <div
                                    key={step.title}
                                    className='grid grid-cols-[2rem_1fr] items-start gap-3 sm:grid-cols-[2.3rem_1fr] sm:gap-4'>
                                    <div className='relative z-10 flex justify-center pt-0.5'>
                                        <div className='flex size-8 items-center justify-center rounded-full border border-[#d7bb93] bg-[#fbf6ee] text-[0.64rem] font-semibold tracking-[0.18em] text-[#173247] shadow-[0_3px_10px_rgba(23,50,71,0.06)] sm:size-9'>
                                            0{index + 1}
                                        </div>
                                    </div>
                                    <div className='rounded-2xl border border-white/35 bg-[rgba(255,251,245,0.44)] px-4 py-3 shadow-[0_6px_18px_rgba(23,50,71,0.04)] backdrop-blur-[1px]'>
                                        <h3 className='text-[1.05rem] font-semibold text-[#173247] sm:text-[1.12rem]'>{step.title}</h3>
                                        <p className='mt-1.5 text-sm leading-7 text-slate-600'>{step.text}</p>
                                    </div>
                                </div>
                            ))}
                            </div>

                            <Button
                                asChild
                                size='lg'
                                className='mt-6 w-full rounded-md border border-[#d9b27a] bg-[#173247] px-6 text-white hover:bg-[#102434] sm:w-auto lg:hidden'>
                                <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
                                    Message May on WhatsApp
                                    <ArrowRight className='size-4' />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='relative bg-[#102f43] py-8 text-white sm:py-9'>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
                        <div>
                            <img
                                alt='Chiang Mai Driver logo'
                                className='h-12 w-auto'
                                src='/images/cxlogo footer.png'
                            />
                            <h2 className='travel-display mt-3 max-w-sm text-lg leading-snug text-white sm:text-xl'>
                                Travel days should feel easy, personal, and full of lovely memories.
                            </h2>
                        </div>

                        <div className='grid gap-5 sm:grid-cols-[1fr_auto]'>
                            <div>
                                <p className='text-sm font-semibold tracking-[0.18em] text-[#e4be88] uppercase'>Contact</p>
                                <div className='mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/78'>
                                    <a
                                        className='flex items-center gap-3 transition hover:text-white'
                                        href='mailto:travel@chiang-mai-driver.com'>
                                        <span className='flex size-8 items-center justify-center rounded-md bg-white/10 text-[#e4be88]'>
                                            <Mail className='size-4' />
                                        </span>
                                        <span>travel@chiang-mai-driver.com</span>
                                    </a>
                                    <a
                                        className='flex items-center gap-3 transition hover:text-white'
                                        href='tel:+66931246329'>
                                        <span className='flex size-8 items-center justify-center rounded-md bg-white/10 text-[#e4be88]'>
                                            <Phone className='size-4' />
                                        </span>
                                        <span>+66931246329</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className='text-sm font-semibold tracking-[0.18em] text-[#e4be88] uppercase'>Social</p>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    <a
                                        className='flex size-9 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition hover:bg-white/18'
                                        href='https://www.instagram.com/drivercnx?igsh=azhqeDY2d2gzcjlx'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label='Instagram'>
                                        <svg
                                            aria-hidden='true'
                                            className='size-4'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <rect x='3.5' y='3.5' width='17' height='17' rx='5' stroke='currentColor' strokeWidth='1.8' />
                                            <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='1.8' />
                                            <circle cx='17.2' cy='6.8' r='1.1' fill='currentColor' />
                                        </svg>
                                    </a>
                                    <a
                                        className='flex size-9 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition hover:bg-white/18'
                                        href='https://www.facebook.com/profile.php?id=61558679162233'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label='Facebook'>
                                        <svg
                                            aria-hidden='true'
                                            className='size-4'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.9v1.9H8.2V14h2.3v7h3z' />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default HomePage;
