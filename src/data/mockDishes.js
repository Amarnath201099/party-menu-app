export const dishes = [
  // 1. Indian VEG
  {
    id: 1,
    name: "Kadhai Paneer",
    description:
      "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" },
    ],
  },
  {
    id: 2,
    name: "Butter Naan",
    description: "Soft flatbread with a buttery glaze.",
    image: "https://placehold.co/300x200/FDF2E9/6B4F28?text=Butter+Naan",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "1 cup" },
      { name: "Butter", quantity: "2 tbsp" },
    ],
  },
  {
    id: 3,
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in creamy buttery gravy.",
    image: "https://placehold.co/300x200/F6D6A8/3F2E1F?text=Dal+Makhani",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Black Lentils", quantity: "1 cup" },
      { name: "Cream", quantity: "2 tbsp" },
    ],
  },
  {
    id: 4,
    name: "Veg Biryani",
    description: "Fragrant rice with mixed vegetables and Indian spices.",
    image: "https://placehold.co/300x200/DFFFD6/123D1A?text=Veg+Biryani",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Basmati Rice", quantity: "1 cup" },
      { name: "Mixed Veggies", quantity: "1 cup" },
    ],
  },
  {
    id: 5,
    name: "Aloo Tikki",
    description: "Spicy fried potato patties, North Indian style.",
    image: "https://placehold.co/300x200/E3CFA3/453721?text=Aloo+Tikki",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Potatoes", quantity: "2 large" },
      { name: "Spices", quantity: "Varied" },
    ],
  },

  // 6. Indian NON-VEG
  {
    id: 6,
    name: "Chicken Tikka",
    description: "Tender chicken pieces marinated and grilled to perfection.",
    image: "https://placehold.co/300x200/E9A89F/2B1B17?text=Chicken+Tikka",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
    ],
  },
  {
    id: 7,
    name: "Mutton Rogan Josh",
    description: "Kashmiri style red mutton curry.",
    image: "https://placehold.co/300x200/FFB6B6/5C1A1A?text=Mutton+Rogan+Josh",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton", quantity: "300g" },
      { name: "Spices", quantity: "Varied" },
    ],
  },
  {
    id: 8,
    name: "Butter Chicken",
    description: "Classic creamy tomato-based chicken curry.",
    image: "https://placehold.co/300x200/F7C59F/4B2E1E?text=Butter+Chicken",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Butter", quantity: "2 tbsp" },
    ],
  },
  {
    id: 9,
    name: "Fish Curry",
    description: "Tangy and spicy coastal-style fish curry.",
    image: "https://placehold.co/300x200/CDEFFF/0C2F5B?text=Fish+Curry",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Fish", quantity: "200g" },
      { name: "Tamarind", quantity: "1 tbsp" },
    ],
  },
  {
    id: 10,
    name: "Egg Curry",
    description: "Boiled eggs cooked in onion-tomato gravy.",
    image: "https://placehold.co/300x200/F6EFCF/4A2A00?text=Egg+Curry",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Eggs", quantity: "2 boiled" },
      { name: "Gravy", quantity: "1 cup" },
    ],
  },

  // 11. Chinese / Fast Food VEG
  {
    id: 11,
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles with veggies and Indo-Chinese flavor.",
    image: "https://placehold.co/300x200/CFFFD8/2E442E?text=Veg+Hakka+Noodles",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Noodles", quantity: "1 bowl" },
      { name: "Vegetables", quantity: "1 cup" },
    ],
  },
  {
    id: 12,
    name: "Veg Manchurian",
    description: "Fried veg balls in tangy spicy sauce.",
    image: "https://placehold.co/300x200/C9D6FF/1F1E8C?text=Veg+Manchurian",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Vegetables", quantity: "1 cup" },
      { name: "Sauce", quantity: "1/2 cup" },
    ],
  },
  {
    id: 13,
    name: "Spring Rolls",
    description: "Crispy fried rolls filled with vegetables.",
    image: "https://placehold.co/300x200/FFE5B4/4B3621?text=Spring+Rolls",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Wrapper", quantity: "2 pcs" },
    ],
  },
  {
    id: 14,
    name: "French Fries",
    description: "Crispy potato fries, salted and fried.",
    image: "https://placehold.co/300x200/FCE1B2/654321?text=French+Fries",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Potatoes", quantity: "2" },
      { name: "Salt", quantity: "to taste" },
    ],
  },
  {
    id: 15,
    name: "Veg Burger",
    description: "Classic veggie patty in a bun with sauces.",
    image: "https://placehold.co/300x200/D3FFCE/003300?text=Veg+Burger",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Veg Patty", quantity: "1" },
      { name: "Bun", quantity: "1" },
    ],
  },

  // 16. International Dishes NON-VEG (popular in India)
  {
    id: 16,
    name: "Grilled Chicken Sandwich",
    description: "Lightly spiced grilled chicken in whole wheat bun.",
    image: "https://placehold.co/300x200/FFD6C9/612B00?text=Chicken+Sandwich",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "150g" },
      { name: "Bread", quantity: "2 slices" },
    ],
  },
  {
    id: 17,
    name: "Pasta Alfredo",
    description: "Creamy pasta with herbs and cheese.",
    image: "https://placehold.co/300x200/F9E8E3/3A1D1D?text=Pasta+Alfredo",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Pasta", quantity: "1 bowl" },
      { name: "Cream", quantity: "1/2 cup" },
    ],
  },
  {
    id: 18,
    name: "Chicken Quesadilla",
    description: "Mexican stuffed tortillas with spicy chicken.",
    image: "https://placehold.co/300x200/F2D7D5/3E2723?text=Quesadilla",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "150g" },
      { name: "Tortilla", quantity: "1" },
    ],
  },
  {
    id: 19,
    name: "Pizza (Chicken)",
    description: "Thin crust pizza topped with chicken and cheese.",
    image: "https://placehold.co/300x200/FAD2A1/5C2C06?text=Chicken+Pizza",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "100g" },
      { name: "Cheese", quantity: "50g" },
    ],
  },
  {
    id: 20,
    name: "Spaghetti Meatballs",
    description: "Italian pasta with spiced meatballs and tomato sauce.",
    image: "https://placehold.co/300x200/FCE5CD/3D1F00?text=Meatballs+Pasta",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Spaghetti", quantity: "1 bowl" },
      { name: "Meatballs", quantity: "4" },
    ],
  },
];
