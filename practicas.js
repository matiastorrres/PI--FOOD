// data= {
//     results: [
//       {
//         vegetarian: true,
//         vegan: true,
//         glutenFree: true,
//         dairyFree: true,
//         veryHealthy: true,
//         cheap: false,
//         veryPopular: true,
//         sustainable: false,
//         lowFodmap: false,
//         weightWatcherSmartPoints: 4,
//         gaps: 'no',
//         preparationMinutes: -1,
//         cookingMinutes: -1,
//         aggregateLikes: 3689,
//         healthScore: 76,
//         creditsText: 'Full Belly Sisters',
//         license: 'CC BY-SA 3.0',
//         sourceName: 'Full Belly Sisters',
//         pricePerServing: 112.39,
//         id: 716426,
//         title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
//         readyInMinutes: 30,
//         servings: 8,
//         sourceUrl: 'http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html',
//         openLicense: -1,
//         image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
//         imageType: 'jpg',
//         summary: 'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
//         cuisines: [Array],
//         dishTypes: [Array],
//         diets: [Array],
//         occasions: [],
//         analyzedInstructions: [Array],
//         spoonacularSourceUrl: 'https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426'
//       }
//     ],
//     offset: 0,
//     number: 1,
//     totalResults: 5220
//   }
//   const pepe = data.results.map(e=>{
//     return {
//         vegetarian: e.vegetarian,
//         vegan: e.vegan,
//         summary:e .summary        
//     }
//   })
//   // console.log(pepe)

//   const  matu = {
//     vegetarian: true,
//     vegan: true,
//     glutenFree: true,
//     dairyFree: "aca",
//     veryHealthy: "pepe",
//     cheap: false,
//     veryPopular: true,
//     sustainable: false,
//     lowFodmap: false,
//     weightWatcherSmartPoints: 4,
//     gaps: 'no',}


//    const mati = {
//     vegan: matu.vegan,
//     glutenFree: matu.glutenFree,
//     dairyFree: matu.dairyFree,
//     veryHealthy: matu.veryHealthy,
//   }
//   console.log(mati)

// const mati = [{title : "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//   id: "c91f28de-fb3e-4781-afaa-64fc5b3444f1",
//   img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//   diets: [{name: "vegan"},{name: "paleolithic"}]},{title : "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//   id: "c91f28de-fb3e-4781-afaa-64fc5b3444f1",
//   img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//   diets: [{name: "vegan"},{name: "paleolithic"}]}
// ]


// console.log(res)

 let diets= [{name: "vegan"},{name: "paleolithic"}]

 console.log(diets[0].name)