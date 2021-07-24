// Initial State
const initialState = [
  {
    "name": "Weapon: The LZ54 Flamethrower",
    "price": "1299.99",
    "details": "Compact flamethrower for everyday use",
    "description": "Aliens will run in fear as they see their friends burned alive for trying to attack your capsule with the LZ54 Flamethrower keeping you safe",
    "images": '',
    "category": ["self-defense"],
    "itemWeight": 20,
    "quantity": 175
  }, {
    "name": "Weapon: The X7 Laser Turret System",
    "price": "6499.99",
    "details": "At-home, self-targeting turret defense system",
    "description": "Constant alien and local wildlife attacks? Defend your entire home base with the fully automated X4 Laser Turret System",
    "images": '',
    "category": ["self-defense"],
    "itemWeight": 85,
    "quantity": 100
  },
  {
    "name": "Weapon: Atomic Bouncer Bombs",
    "price": "299.99",
    "details": "Compact and easy to throw, high intensity explosives",
    "description": "No longer do you have to get face to face with your alien adversary. Toss a single Atomic Bouncer Bomb and watch the fireworks keep you safe and secure",
    "images": '',
    "category": ["self-defense"],
    "itemWeight": 3,
    "quantity": 800
  },
  {
    "name": "Weapon: Freeze-O-Matic 5000",
    "price": "299.99",
    "details": "Hand-held freeze ray",
    "description": "Need to cool something down in a hurry? Blast it with a frigid ray of frost from the Freeze-O-Matic 5000. Perfect for a moment where you need to buy a little extra time",
    "images": '',
    "category": ["self-defense"],
    "itemWeight": 8,
    "quantity": 275
  },
]


// Reducer Function
// action is an object with: type and payload
export default function reducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case "CATEGORY":
      // filter the state by the payload
      console.log(payload)
      if (!payload) { return initialState }
      let listByCategory = initialState.filter(item => item.category === payload)
      return listByCategory
    case "ADD":
      return state;
    default:
      return state;
  }

}

// Action Creators
export function switchCategory(category) {
  return {
    type: "CATEGORY",
    payload: category
  }
}


// maybe this could get a person?
export function get(role) {
  return {
    type: "GET",
    payload: role
  }
}