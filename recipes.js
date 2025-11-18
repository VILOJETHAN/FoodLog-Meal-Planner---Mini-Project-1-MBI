// recipes.js

// ====== Shared Recipe Data ======
const RECIPES = [
    {
        id: "r1",
        name: "Grilled Chicken Salad",
        calories: 350,
        image: "./Assets/recipieImages/Grilled Chicken Salad.jpg",
        ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Olive oil", "Lemon", "Salt", "Pepper"],
        instructions: "Grill seasoned chicken, toss with greens and dressing. Serve chilled."
    },

    {
        id: "r2",
        name: "Oats + Banana Bowl",
        calories: 220,
        image: "./Assets/recipieImages/Oats + Banana Bowl.jpg",
        ingredients: ["Rolled oats", "Milk / water", "Banana", "Honey", "Cinnamon"],
        instructions: "Cook oats in milk or water, top with banana and honey."
    },

    {
        id: "r3",
        name: "Paneer Wrap (Veg)",
        calories: 420,
        image: "./Assets/recipieImages/Paneer Wrap (Veg).avif",
        ingredients: ["Paneer", "Chapati / Tortilla", "Cucumber", "Onion", "Mint chutney"],
        instructions: "Saute paneer, fill wrap with veggies and chutney."
    },

    {
        id: "r4",
        name: "Veg Bowl (Quinoa & Veggies)",
        calories: 310,
        image: "./Assets/recipieImages/Veg Bowl (Quinoa & Veggies).jpg",
        ingredients: ["Quinoa", "Broccoli", "Bell pepper", "Beans", "Olive oil", "Spices"],
        instructions: "Cook quinoa and saute vegetables together."
    },

    {
        id: "r5",
        name: "Egg & Avocado Toast",
        calories: 290,
        image: "./Assets/recipieImages/Egg & Avocado Toast.jpg",
        ingredients: ["Bread", "Egg", "Avocado", "Salt", "Pepper"],
        instructions: "Toast bread, add mashed avocado and top with egg."
    },

    {
        id: "r6",
        name: "Protein Smoothie",
        calories: 180,
        image: "./Assets/recipieImages/Protein Smoothie.jpg",
        ingredients: ["Milk", "Banana", "Protein powder", "Spinach"],
        instructions: "Blend everything until smooth."
    },

    {
        id: "r7",
        name: "Chickpea Buddha Bowl",
        calories: 380,
        image: "./Assets/recipieImages/Chickpea Buddha Bowl.jpg",
        ingredients: ["Chickpeas", "Quinoa", "Avocado", "Spinach", "Lemon", "Olive oil"],
        instructions: "Roast chickpeas, mix with quinoa and veggies, drizzle lemon-olive oil dressing."
    },
    {
        id: "r8",
        name: "Fruit & Yogurt Parfait",
        calories: 190,
        image: "./Assets/recipieImages/Fruit & Yogurt Parfait.jpg",
        ingredients: ["Greek yogurt", "Berries", "Honey", "Granola"],
        instructions: "Layer yogurt, fruits, and granola. Serve chilled."
    },
    {
        id: "r9",
        name: "Vegetable Stir Fry",
        calories: 260,
        image: "./Assets/recipieImages/Vegetable Stir Fry.jpg",
        ingredients: ["Carrots", "Broccoli", "Bell pepper", "Soy sauce", "Garlic", "Oil"],
        instructions: "Stir fry veggies, add soy-garlic sauce and serve hot."
    },
    {
        id: "r10",
        name: "Chicken Rice Bowl",
        calories: 420,
        image: "./Assets/recipieImages/Chicken Rice Bowl.jpg",
        ingredients: ["Chicken", "Rice", "Carrots", "Beans", "Pepper", "Salt"],
        instructions: "Grill chicken, serve on warm rice with veggies."
    },
    {
        id: "r11",
        name: "Avocado Pasta",
        calories: 450,
        image: "./Assets/recipieImages/Avocado Pasta.jpg",
        ingredients: ["Pasta", "Avocado", "Garlic", "Lemon", "Olive oil"],
        instructions: "Blend avocado sauce and mix with cooked pasta."
    },
    {
        id: "r12",
        name: "Tomato Basil Soup",
        calories: 150,
        image: "./Assets/recipieImages/Tomato Basil Soup.jpg",
        ingredients: ["Tomatoes", "Basil", "Garlic", "Onion", "Salt"],
        instructions: "Cook all ingredients and blend to smooth consistency."
    },
    {
        id: "r13",
        name: "Veg Sandwich",
        calories: 230,
        image: "./Assets/recipieImages/Veg Sandwich.jpg",
        ingredients: ["Bread", "Tomato", "Cucumber", "Mint chutney"],
        instructions: "Layer veggies between bread and toast lightly."
    },
    {
        id: "r14",
        name: "Chicken Wrap",
        calories: 390,
        image: "./Assets/recipieImages/Chicken Wrap.jpg",
        ingredients: ["Tortilla", "Chicken", "Lettuce", "Mayonnaise"],
        instructions: "Fill tortilla with chicken and veggies. Roll tightly."
    },
    {
        id: "r15",
        name: "Spinach Omelette",
        calories: 210,
        image: "./Assets/recipieImages/Spinach Omelette.jpg",        
        ingredients: ["Eggs", "Spinach", "Onion", "Salt", "Pepper"],
        instructions: "Beat eggs with spinach, cook on pan until firm."
    },
    {
        id: "r16",
        name: "Peanut Butter Toast",
        calories: 260,
        image: "./Assets/recipieImages/Peanut Butter Toast.jpg",
        ingredients: ["Bread", "Peanut butter", "Banana slices"],
        instructions: "Toast bread, spread peanut butter, top with bananas."
    },
    {
        id: "r17",
        name: "Caesar Salad",
        calories: 330,
        image: "./Assets/recipieImages/Caesar Salad.jpg",
        ingredients: ["Lettuce", "Croutons", "Chicken", "Caesar dressing"],
        instructions: "Toss all ingredients together and serve fresh."
    },
    {
        id: "r18",
        name: "Mixed Vegetable Soup",
        calories: 140,
        image: "./Assets/recipieImages/Mixed Vegetable Soup.jpg",
        ingredients: ["Carrot", "Peas", "Corn", "Salt", "Water"],
        instructions: "Boil vegetables and blend partially for texture."
    },
    {
        id: "r19",
        name: "Banana Smoothie",
        calories: 180,
        image: "./Assets/recipieImages/Banana Smoothie.jpg",
        ingredients: ["Milk", "Banana", "Honey"],
        instructions: "Blend all ingredients until smooth."
    },
    {
        id: "r20",
        name: "Idli & Sambar",
        calories: 300,
        image: "./Assets/recipieImages/Idli & Sambar.jpg",
        ingredients: ["Idli", "Sambar", "Coriander"],
        instructions: "Serve soft idlis with hot sambar."
    },
    {
        id: "r21",
        name: "Masala Dosa",
        calories: 420,
        image: "./Assets/recipieImages/Masala Dosa.jpg",
        ingredients: ["Dosa batter", "Potato masala", "Oil"],
        instructions: "Spread batter, fill with masala, fold and serve."
    },
    {
        id: "r22",
        name: "Upma",
        calories: 280,
        image: "./Assets/recipieImages/Upma.jpg",
        ingredients: ["Rava", "Onion", "Mustard", "Vegetables"],
        instructions: "Cook rava with sautéed spices and vegetables."
    },
    {
        id: "r23",
        name: "Poha",
        calories: 250,
        image: "./Assets/recipieImages/Poha.jpg",
        ingredients: ["Flattened rice", "Onion", "Peanuts", "Lemon"],
        instructions: "Sauté onions, add washed poha, cook lightly."
    },
    {
        id: "r24",
        name: "Chicken Biryani",
        calories: 480,
        image: "./Assets/recipieImages/Chicken Biryani.jpg",
        ingredients: ["Rice", "Chicken", "Spices", "Curd"],
        instructions: "Cook chicken with spices, layer with rice, steam."
    },
    {
        id: "r25",
        name: "Curd Rice",
        calories: 320,
        image: "./Assets/recipieImages/Curd Rice.jpg",
        ingredients: ["Rice", "Curd", "Mustard", "Curry leaves"],
        instructions: "Mix rice with curd and temper with spices."
    },
    {
        id: "r26",
        name: "Vegetable Pulao",
        calories: 330,
        image: "./Assets/recipieImages/Vegetable Pulao.jpg",
        ingredients: ["Rice", "Carrot", "Beans", "Peas", "Spices"],
        instructions: "Cook rice with vegetables and aromatic spices."
    },
    {
        id: "r27",
        name: "Grilled Fish",
        calories: 280,
        image: "./Assets/recipieImages/Grilled Fish.jpg",
        ingredients: ["Fish", "Garlic", "Lemon", "Pepper"],
        instructions: "Grill marinated fish until golden."
    },
    {
        id: "r28",
        name: "Mushroom Fried Rice",
        calories: 420,
        image: "./Assets/recipieImages/Mushroom Fried Rice.jpg",
        ingredients: ["Rice", "Mushroom", "Soy sauce", "Spring onion"],
        instructions: "Stir fry mushrooms and mix with rice."
    },
    {
        id: "r29",
        name: "Veg Pasta",
        calories: 350,
        image: "./Assets/recipieImages/Veg Pasta.jpg",
        ingredients: ["Pasta", "Tomato", "Capsicum", "Olive oil"],
        instructions: "Cook pasta, toss with sautéed veggies and sauce."
    },
    {
        id: "r30",
        name: "Fruit Salad",
        calories: 160,
        image: "./Assets/recipieImages/Fruit Salad.jpg",
        ingredients: ["Apple", "Banana", "Grapes", "Honey"],
        instructions: "Cut fruits and drizzle honey."
    },
    {
        id: "r31",
        name: "Lemon Rice",
        calories: 280,
        image: "./Assets/recipieImages/Lemon Rice.jpg",
        ingredients: ["Rice", "Lemon", "Turmeric", "Peanuts"],
        instructions: "Mix rice with lemon seasoning."
    },
    {
        id: "r32",
        name: "Veg Omelette",
        calories: 230,
        image: "./Assets/recipieImages/Veg Omelette.jpg",
        ingredients: ["Eggs", "Capsicum", "Onion", "Salt"],
        instructions: "Beat eggs with veggies, cook on low flame."
    },
    {
        id: "r33",
        name: "Chicken Grill Sandwich",
        calories: 410,
        image: "./Assets/recipieImages/Chicken Grill Sandwich.jpg",
        ingredients: ["Chicken", "Bread", "Lettuce", "Onion"],
        instructions: "Assemble grilled chicken between toasted bread."
    },
    {
        id: "r34",
        name: "Rava Kesari",
        calories: 300,
        image: "./Assets/recipieImages/Rava Kesari.jpg",
        ingredients: ["Rava", "Sugar", "Ghee", "Cardamom"],
        instructions: "Cook rava with sugar and ghee until thick."
    },
    {
        id: "r35",
        name: "Peanut Chaat",
        calories: 210,
        image: "./Assets/recipieImages/Peanut Chaat.jpg",
        ingredients: ["Peanuts", "Onion", "Tomato", "Lemon"],
        instructions: "Mix roasted peanuts with chopped veggies."
    },
    {
        id: "r36",
        name: "Veg Burrito Bowl",
        calories: 430,
        image: "./Assets/recipieImages/Veg Burrito Bowl.jpg",
        ingredients: ["Rice", "Beans", "Corn", "Lettuce", "Salsa"],
        instructions: "Combine all ingredients in a bowl and serve."
    }

];
