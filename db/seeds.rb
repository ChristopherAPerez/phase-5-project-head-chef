puts "🏕 Seeding users..."

gordon_ramsey = User.create(username: "gordon_ramsey", password: "master chef", bio: "“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”", profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQxsk8FXtaFHxBhj0fD0VQSLWLy5ZQ2gZEg&usqp=CAU")

julia_child = User.create(username: "julia_child", password: "butter", bio: "I watch cooking change the cook, just as it transforms the food. I know once people get connected to real food, they never change back.", profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQxsk8FXtaFHxBhj0fD0VQSLWLy5ZQ2gZEg&usqp=CAU")

guy_fieri = User.create(username: "guy_fieri", password: "food", bio: "Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.", profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQxsk8FXtaFHxBhj0fD0VQSLWLy5ZQ2gZEg&usqp=CAU")

puts "🏕 Seeding recipes..."

breakfast_1 = Recipe.create(recipe_name: "Very Vanilla Fruit Salad", meal: "Breakfast", description: "Refreshing fruit salad is welcome anytime serve at brunch, at dessert or snack time, or bring to a potluck.", calories: 450, prep_time: 15, ingredients: ["Strawberries", "Blueberries", "Pineapples", "Cantoloupe", "Kiwis"], steps: ["Mix fruit and vanilla in large bowl. Cover.", "Refrigerate 1 hour or until ready to serve."], recipe_pic: "https://images-cdn.welcomesoftware.com/Zz1jY2Y2ZTA5MTkyODcxMWViYWIzODAzNTRkN2ZmODZlZQ==", user_id: gordon_ramsey.id)
breakfast_2 = Recipe.create(recipe_name: "Tropical Acai Bowl", meal: "Breakfast", description: "some extra fruit into your day with one of the most refreshing ways we know how an acai smoothie bowl. Blended, served in a bowl and topped with blueberries, chopped nuts, shredded coconut and more, these smoothie bowls make a filling breakfast and are so easy to customize for everyone at the table!", calories: 250, prep_time: 10, ingredients: ["frozen unsweetened pure acai berry puree ", "frozen banana slices", "frozen pineapple chunks", " Thai Kitchen Gluten Free Unsweetened Coconut Milk", " McCormick® All Natural Pure Vanilla Extract"], steps: ["Place acai puree, banana, pineapple, coconut milk and vanilla in blender container; cover. Blend on high speed until smooth.", "Transfer mixture to serving bowls and top with optional fruit and garnishes, as desired. "], recipe_pic: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2021/06/THUMB-LINK-2020-2-1200x675.jpg", user_id: julia_child.id)
breakfast_3 = Recipe.create(recipe_name: "Spinach & Shallot Egg Clouds", meal: "Breakfast", description: "Today's breakfast forecast? Sunny with a side of egg clouds. It's the perfect dish for whatever leafy greens abound at the farmers market this week. Whip up egg whites to make clouds, then top with seasonal greens (kale, spinach, chard) before the yolk goes back in. Prepare to be wowed. This breakfast really is as delicious as it looks!", calories: 960, prep_time: 30, ingredients: ["shallot", "baby spinach", "red wine vinegar", "McCormick Gourmet™ Organic Thyme Leaves"], steps: ["Heat oil in large skillet on medium-high heat. Add shallot; cook and stir about 5 minutes or until tender. Add spinach, vinegar, 1/4 teaspoon of the thyme and salt; cook and stir about 1 minute or until spinach is wilted. Remove spinach mixture from pan. Set aside.", "Meanwhile, break eggs to separate the yolks and whites, adding all the egg whites into large bowl while keeping each yolk in separate small bowls or leaving each yolk inside the shell; set aside. Beat egg whites and remaining 1/4 teaspoon thyme with wire whisk until soft peaks form. (This should take about 5 minutes.)", "Spoon egg white mixture into 4 mounds in same skillet on medium-high heat. Make an indentation in the center of each egg white mound using the back of a spoon. Sprinkle spinach mixture over egg whites. Place an egg yolk into each indentation. Cover skillet. Cook 3 to 5 minutes or until egg yolks are to desired consistency."], recipe_pic: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2021/06/THUMB-LINK-2020-2-1200x675.jpg", user_id: guy_fieri.id)

lunch_1 = Recipe.create(recipe_name: "One-Pot Lemon Garlic Shrimp Pasta", meal: "Lunch", description: "This easy 30-minute pasta recipe transforms ingredients that you already have in your kitchen into a posh, seafood dish you’ll want to serve at your next dinner party. And since the whole dish is made in a single pot, clean-up is easy. Don’t be surprised if this becomes your favorite quick go-to.", calories: 450, prep_time: 25, ingredients: ["Linguine", "Olive Oil", "Garlic Cloves", "baby spinach", "Parmesan Cheese", "Lemon Jouice"], steps: ["In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.", "Drain and set pasta aside.", "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.", "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.", "Add oregano and spinach, cook until wilted.", "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.", "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot.", "Enjoy!"], recipe_pic: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2021/06/THUMB-LINK-2020-2-1200x675.jpg", user_id: gordon_ramsey.id)
lunch_2 = Recipe.create(recipe_name: "Taco Soup", meal: "Lunch", description: "This quick and easy taco soup is made entirely in one pot and in less than 30 minutes. Topped with cheese, avocado, and all the fixin's, this simple soup makes the perfect weeknight dinner that'll please just about everyone.", calories: 650, prep_time: 20, ingredients: ["Ground Beef", "Chicken Broth", "Tortillas", "Peppers", "Cilantro"], steps: ["In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.", "Drain and set pasta aside.", "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.", "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.", "Add oregano and spinach, cook until wilted.", "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.", "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot.", "Enjoy!"], recipe_pic: "", user_id: julia_child.id)
lunch_3 = Recipe.create(recipe_name: "Chicken & Veggie Stir-Fry", meal: "Lunch", description: "Getting take-out is a crave-worthy indulgence. And with our easy chicken veggie stir fry recipe, you can recreate the magic of a Chinese takeout right in your very own kitchen. Feel free to mix up the protein or vegetables depending on what you have in your fridge. The simple sauce packs a flavor punch that will bring the dish together, no matter what.", calories: 500, prep_time: 10, ingredients: ["Linguine", "Olive Oil", "Garlic Cloves", "baby spinach", "Parmesan Cheese", "Lemon Jouice"], steps: ["In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.", "Drain and set pasta aside.", "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.", "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.", "Add oregano and spinach, cook until wilted.", "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.", "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot.", "Enjoy!"], recipe_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE0E9hZmsYkpQx8BA9uVi8Jrtd6NHJBAE2Q&usqp=CAU", user_id: gordon_ramsey.id)

dinner_1 = Recipe.create(recipe_name: "One-Pot Lemon Garlic Shrimp Pasta", meal: "Dinner", description: "This easy 30-minute pasta recipe transforms ingredients that you already have in your kitchen into a posh, seafood dish you’ll want to serve at your next dinner party. And since the whole dish is made in a single pot, clean-up is easy. Don’t be surprised if this becomes your favorite quick go-to.", calories: 525, prep_time: 35, ingredients: ["Linguine", "Olive Oil", "Garlic Cloves", "baby spinach", "Parmesan Cheese", "Lemon Jouice"], steps: ["In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.", "Drain and set pasta aside.", "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.", "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.", "Add oregano and spinach, cook until wilted.", "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.", "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot.", "Enjoy!"], recipe_pic: "data:image/jpeg;base64,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", user_id: gordon_ramsey.id)
dinner_2 = Recipe.create(recipe_name: "Taco Soup", meal: "Dinner", description: "This quick and easy taco soup is made entirely in one pot and in less than 30 minutes. Topped with cheese, avocado, and all the fixin's, this simple soup makes the perfect weeknight dinner that'll please just about everyone.", calories: 650, prep_time: 20, ingredients: ["Ground Beef", "Chicken Broth", "Tortillas", "Peppers", "Cilantro"], steps: ["In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.", "Drain and set pasta aside.", "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.", "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.", "Add oregano and spinach, cook until wilted.", "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.", "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot.", "Enjoy!"], recipe_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE0E9hZmsYkpQx8BA9uVi8Jrtd6NHJBAE2Q&usqp=CAU", user_id: julia_child.id)
dinner_3 = Recipe.create(recipe_name: "Chicken & Veggie Stir-Fry", meal: "Dinner", description: "Getting take-out is a crave-worthy indulgence. And with our easy chicken veggie stir fry recipe, you can recreate the magic of a Chinese takeout right in your very own kitchen. Feel free to mix up the protein or vegetables depending on what you have in your fridge. The simple sauce packs a flavor punch that will bring the dish together, no matter what.", calories: 910, prep_time: 80, ingredients: ["Linguine", "Olive Oil", "Garlic Cloves", "baby spinach", "Parmesan Cheese", "Lemon Jouice"], steps: ["In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.", "Drain and set pasta aside.", "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.", "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.", "Add oregano and spinach, cook until wilted.", "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.", "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot.", "Enjoy!"], recipe_pic: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2021/06/THUMB-LINK-2020-2-1200x675.jpg", user_id: gordon_ramsey.id)


puts "🏕 Seeding reviews..."

review_1 = Review.create(rating: 1, comment: "Food was overall enjoyable.  It was particularly impressive, with the stuffed mushrooms being a standout. However, the main dishes were a bit hit or miss, with some being excellent and others lacking in flavor. The service was attentive and friendly, although at times it did feel a bit slow. The atmosphere was pleasant and relaxed, with a cozy interior and dim lighting. Overall, while there were some ups and downs in terms of the food, the experience was enjoyable and the restaurant is worth a visit.", username: gordon_ramsey.username, recipe_id: breakfast_1.id, user_id: gordon_ramsey.id)

review_2 = Review.create(rating: 3, comment: "Food was overall enjoyable.  It was particularly impressive, with the stuffed mushrooms being a standout. However, the main dishes were a bit hit or miss, with some being excellent and others lacking in flavor. The service was attentive and friendly, although at times it did feel a bit slow. The atmosphere was pleasant and relaxed, with a cozy interior and dim lighting. Overall, while there were some ups and downs in terms of the food, the experience was enjoyable and the restaurant is worth a visit.", username: julia_child.username, recipe_id: breakfast_1.id, user_id: julia_child.id)

review_3 = Review.create(rating: 2, comment: "Food was overall enjoyable.  It was particularly impressive, with the stuffed mushrooms being a standout. However, the main dishes were a bit hit or miss, with some being excellent and others lacking in flavor. The service was attentive and friendly, although at times it did feel a bit slow. The atmosphere was pleasant and relaxed, with a cozy interior and dim lighting. Overall, while there were some ups and downs in terms of the food, the experience was enjoyable and the restaurant is worth a visit.", username: guy_fieri.username, recipe_id: breakfast_1.id, user_id: guy_fieri.id)

review_4 = Review.create(rating: 5, comment: "Food was overall enjoyable.  It was particularly impressive, with the stuffed mushrooms being a standout. However, the main dishes were a bit hit or miss, with some being excellent and others lacking in flavor. The service was attentive and friendly, although at times it did feel a bit slow. The atmosphere was pleasant and relaxed, with a cozy interior and dim lighting. Overall, while there were some ups and downs in terms of the food, the experience was enjoyable and the restaurant is worth a visit.", username: gordon_ramsey.username, recipe_id: breakfast_1.id, user_id: gordon_ramsey.id)

review_5 = Review.create(rating: 3, comment: "Food was overall enjoyable.  It was particularly impressive, with the stuffed mushrooms being a standout. However, the main dishes were a bit hit or miss, with some being excellent and others lacking in flavor. The service was attentive and friendly, although at times it did feel a bit slow. The atmosphere was pleasant and relaxed, with a cozy interior and dim lighting. Overall, while there were some ups and downs in terms of the food, the experience was enjoyable and the restaurant is worth a visit.", username: julia_child.username, recipe_id: breakfast_1.id, user_id: julia_child.id)

review_6 = Review.create(rating: 2, comment: "Food was overall enjoyable.  It was particularly impressive, with the stuffed mushrooms being a standout. However, the main dishes were a bit hit or miss, with some being excellent and others lacking in flavor. The service was attentive and friendly, although at times it did feel a bit slow. The atmosphere was pleasant and relaxed, with a cozy interior and dim lighting. Overall, while there were some ups and downs in terms of the food, the experience was enjoyable and the restaurant is worth a visit.", username: guy_fieri.username, recipe_id: breakfast_1.id, user_id: guy_fieri.id)

puts "🏕 Seeding menus..."

menu = Menu.create(menu_date: "Thur 2/15/2023", user_id: gordon_ramsey.id, publish: true)

menu_two = Menu.create(menu_date: "Fri 2/16/2023", user_id: gordon_ramsey.id, publish: false)

puts "🏕 Seeding menu_to_recipes..."

menu_to_recipes_1 = MenuToRecipe.create(name: breakfast_1.recipe_name, description: breakfast_1.description, calories: breakfast_1.calories, prep_time: breakfast_1.prep_time, menu_id: menu.id, recipe_id: breakfast_1.id)

menu_to_recipes_2 = MenuToRecipe.create(name: breakfast_3.recipe_name, description: breakfast_3.description, calories: breakfast_3.calories, prep_time: breakfast_3.prep_time, menu_id: menu.id, recipe_id: breakfast_3.id)


menu_to_recipes_3 = MenuToRecipe.create(name: dinner_1.recipe_name, description: dinner_1.description, calories: dinner_1.calories, prep_time: dinner_1.prep_time, menu_id: menu.id, recipe_id: dinner_1.id)


puts "🏕 Seeding friendships..."

friendship = Friendship.create(user_id: gordon_ramsey.id, friend_id: julia_child.id)
