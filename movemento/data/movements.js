const movements = 
[
  {
    id: 1,
    name: 'Badminton',
    slug: 'badminton',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 2,
    name: 'Barre',
    slug: 'barre',
    category: 'mind_body',
    isOutdoor: false
  },
  {
    id: 3,
    name: 'Baseball',
    slug: 'baseball',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 4,
    name: 'Basketball',
    slug: 'basketball',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 5,
    name: 'Bowling',
    slug: 'bowling',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 6,
    name: 'Boxing',
    slug: 'boxing',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 7,
    name: 'Climbing',
    slug: 'climbing',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 8,
    name: 'Core Training',
    slug: 'core-training',
    category: 'strength',
    isOutdoor: false
  },
  {
    id: 9,
    name: 'Cricket',
    slug: 'cricket',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 10,
    name: 'Cross Training',
    slug: 'cross-training',
    category: 'mixed',
    isOutdoor: false
  },
  {
    id: 11,
    name: 'Curling',
    slug: 'curling',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 12,
    name: 'Dance',
    slug: 'dance',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 13,
    name: 'Elliptical',
    slug: 'elliptical',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 14,
    name: 'Fencing',
    slug: 'fencing',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 15,
    name: 'Football',
    slug: 'football',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 16,
    name: 'Golf',
    slug: 'golf',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 17,
    name: 'Gymnastics',
    slug: 'gymnastics',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 18,
    name: 'Handball',
    slug: 'handball',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 19,
    name: 'HIIT',
    slug: 'hiit',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 20,
    name: 'Hike',
    slug: 'hike',
    category: 'cardio',
    isOutdoor: true
  },
  {
    id: 21,
    name: 'Hockey',
    slug: 'hockey',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 22,
    name: 'Indoor Cycle',
    slug: 'indoor-cycle',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 23,
    name: 'Indoor Run',
    slug: 'indoor-run',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 24,
    name: 'Indoor Walk',
    slug: 'indoor-walk',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 25,
    name: 'Kickboxing',
    slug: 'kickboxing',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 26,
    name: 'Lacrosse',
    slug: 'lacrosse',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 27,
    name: 'Martial Arts',
    slug: 'martial-arts',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 28,
    name: 'Meditation',
    slug: 'meditation',
    category: 'mind_body',
    isOutdoor: false
  },
  {
    id: 29,
    name: 'Open Water Swim',
    slug: 'open-water-swim',
    category: 'water',
    isOutdoor: true
  },
  {
    id: 30,
    name: 'Outdoor Cycle',
    slug: 'outdoor-cycle',
    category: 'cardio',
    isOutdoor: true
  },
  {
    id: 31,
    name: 'Outdoor Run',
    slug: 'outdoor-run',
    category: 'cardio',
    isOutdoor: true
  },
  {
    id: 32,
    name: 'Outdoor Walk',
    slug: 'outdoor-walk',
    category: 'cardio',
    isOutdoor: true
  },
  {
    id: 33,
    name: 'Pickleball',
    slug: 'pickleball',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 34,
    name: 'Pilates',
    slug: 'pilates',
    category: 'mind_body',
    isOutdoor: false
  },
  {
    id: 35,
    name: 'Pool Swim',
    slug: 'pool-swim',
    category: 'water',
    isOutdoor: false
  },
  {
    id: 36,
    name: 'Racquetball',
    slug: 'racquetball',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 37,
    name: 'Rowing',
    slug: 'rowing',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 38,
    name: 'Rugby',
    slug: 'rugby',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 39,
    name: 'Skiing',
    slug: 'skiing',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 40,
    name: 'Soccer',
    slug: 'soccer',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 41,
    name: 'Softball',
    slug: 'softball',
    category: 'sports',
    isOutdoor: true
  },
  {
    id: 42,
    name: 'Stair Climber',
    slug: 'stair-climber',
    category: 'cardio',
    isOutdoor: false
  },
  {
    id: 43,
    name: 'Strength Training',
    slug: 'strength-training',
    category: 'strength',
    isOutdoor: false
  },
  {
    id: 44,
    name: 'Stretching',
    slug: 'stretching',
    category: 'mobility',
    isOutdoor: false
  },
  {
    id: 45,
    name: 'Surfing',
    slug: 'surfing',
    category: 'water',
    isOutdoor: true
  },
  {
    id: 46,
    name: 'Tennis',
    slug: 'tennis',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 47,
    name: 'Volleyball',
    slug: 'volleyball',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 48,
    name: 'Water Fitness',
    slug: 'water-fitness',
    category: 'water',
    isOutdoor: false
  },
  {
    id: 49,
    name: 'Wrestling',
    slug: 'wrestling',
    category: 'sports',
    isOutdoor: false
  },
  {
    id: 50,
    name: 'Yoga',
    slug: 'yoga',
    category: 'mind_body',
    isOutdoor: false
  }
]

export default movements;