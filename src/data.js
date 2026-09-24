export const themes = [
  { id: 'express', name: 'Menu Express', time: '5–15 min', line: 'Hungry now?', tone: 'red', icon: '⚡' },
  { id: 'medieval', name: 'Medieval', time: '15–30 min', line: 'Worth the wait.', tone: 'gold', icon: '♜' },
  { id: 'buffys', name: "Buffy's", time: '30 min+', line: 'Good food takes time.', tone: 'green', icon: '🍜' },
]

export const venues = [
  {
    id: 'moris-table', name: 'Moris Table', location: 'Moka', cuisine: ['Mauritian', 'Creole'], price: 'Rs Rs', prep: '15–25 min',
    status: 'DEMO', ordering: 'DIRECT_MARIBON', image: '🍛', colour: '#c73531', description: 'Demo venue for testing the MARIBON ordering journey.',
    facilities: ['Delivery', 'Takeaway', 'Dine-in', 'Family friendly', 'Parking'], themes: ['express', 'buffys'], menu: [
      { name: 'Creole lunch bowl', description: 'Demo meal · customisation supported', price: 285, theme: 'buffys', category: 'Mains', prep: 22 },
      { name: 'Street-style dholl puri', description: 'Demo meal · made to order', price: 95, theme: 'express', category: 'Quick bites', prep: 10 },
    ]
  },
  {
    id: 'kfc-reference', name: 'KFC Mauritius', location: 'Moka', cuisine: ['Fried Chicken', 'Fast Food'], price: 'Price to verify', prep: 'To verify',
    status: 'REFERENCE', ordering: 'EXTERNAL_ORDERING', image: '🍗', colour: '#1d4e9a', description: 'Public reference listing only. Details and pricing require partner verification.',
    facilities: ['Takeaway', 'Dine-in'], themes: ['express'], menu: [
      { name: 'Chicken menu selection', description: 'Reference item; official menu and price need verification.', price: null, theme: 'express', category: 'Reference menu', prep: null },
    ]
  },
  {
    id: 'pizza-inn-reference', name: 'Pizza Inn Mauritius', location: 'Saint Pierre', cuisine: ['Pizza', 'Italian'], price: 'Price to verify', prep: 'To verify',
    status: 'REFERENCE', ordering: 'EXTERNAL_ORDERING', image: '🍕', colour: '#e59822', description: 'Public reference listing only. Not a MARIBON partner.',
    facilities: ['Takeaway', 'Dine-in'], themes: ['medieval'], menu: [
      { name: 'Pizza menu selection', description: 'Reference item; official menu and price need verification.', price: null, theme: 'medieval', category: 'Reference menu', prep: null },
    ]
  },
]

export const offers = [
  { title: 'Pilot welcome reward', copy: 'Earn 50 demo points after your first completed demo order.', type: 'DEMO REWARD', colour: '#0d8b62' },
  { title: 'Supplier onboarding', copy: 'Apply now and keep control of your menu, routing and MARIBON profile.', type: 'FOR BUSINESSES', colour: '#214b96' },
]

export const filterVenues = ({ query = '', location = 'All', theme = 'All', delivery = false }) => venues.filter((venue) => {
  const searchable = `${venue.name} ${venue.location} ${venue.cuisine.join(' ')} ${venue.menu.map((i) => i.name).join(' ')}`.toLowerCase()
  return (!query || searchable.includes(query.toLowerCase())) && (location === 'All' || venue.location === location) && (theme === 'All' || venue.themes.includes(theme)) && (!delivery || venue.facilities.includes('Delivery'))
})
