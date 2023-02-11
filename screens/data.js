export const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: require('../assets/spaghetti.jpg'),
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        author: {
            profilePic: require('../assets/chefs/profile-4.jpg'),
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: require('../assets/ingredients/pasta.png'),
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: require('../assets/ingredients/oil.png'),
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: require('../assets/ingredients/shrimp.png'),
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: require('../assets/ingredients/tomato.png'),
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: require('../assets/ingredients/salt.png'),
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: require('../assets/ingredients/pepper.png'),
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ]
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image:  require('../assets/chicken.jpg'),
        duration: "50 mins",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: require('../assets/chefs/profile-2.png'),
            name: "Mandy",
        },
        ingredients: [
            {
                id: 1,
                icon: require('../assets/ingredients/chicken.png'),
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: require('../assets/ingredients/lemongrass.png'),
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: require('../assets/ingredients/onion.png'),
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: require('../assets/ingredients/garlic.png'),
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: require('../assets/ingredients/coriander.png'),
                description: "Coriander",
                quantity: "1 tsp"
            },

        ]
    },
    {
        id: 3,
        name: "Sandwich",
        image:  require('../assets/sandwich.jpg'),
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: require('../assets/chefs/profile-3.jpg'),
            name: "Jessie",
        },
        ingredients: [
            {
                id: 1,
                icon: require('../assets/ingredients/garlic.png'),
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: require('../assets/ingredients/lemongrass.png'),
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: require('../assets/ingredients/egg.png'),
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: require('../assets/ingredients/shrimp.png'),
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: require('../assets/ingredients/shallot.png'),
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: require('../assets/ingredients/pasta.png'),
                description: "vermicelli",
                quantity: "100g"
            },


        ]
    },
    {
        id: 4,
        name: "Magwinya",
        image:  require('../assets/magwinya.webp'),
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: require('../assets/chefs/profile-1.jpg'),
            name: "Ali Baba",
        },
        ingredients: [
            {
                id: 1,
                icon: require('../assets/ingredients/chilli.png'),
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: require('../assets/ingredients/garlic.png'),
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: require('../assets/ingredients/egg.png'),
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: require('../assets/ingredients/rice.png'),
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: require('../assets/ingredients/anchovy.png'),
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ]
    },

]