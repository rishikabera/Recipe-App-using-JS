const meals= document.getElementById('meals');

getRandomMeal();

async function getRandomMeal(){
   const getRandom= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

   const dat= await getRandom.json();
    const randomMeal= dat.meals[0];
   console.log(randomMeal);

    addMeal(randomMeal,true);
}
async function getMealById(id){
    const meal=  await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}
async function getMealsBySearch(term){

    const qwmeals= await fetch('www.themealdb.com/api/json/v1/1/search.php?s='+term);
}

function addMeal(mealData, random=false)
{
    const meal= document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML=`
    
                    
                    <div class="meal-header">
                    ${random ?  ` <span class="random">Random recipe</span>` : ''}
    
                   
                       <img src="${mealData.strMealThumb}"
                       alt="${mealData.strMeal}"
                       />
                    </div>
                    <div class="meal-body">
                        <h4>${mealData.strMeal}</h4>
                        <button class="fav-btn"><i class="fas fa-heart"></i></button>

                    </div>
                
    `;
    const favbtn= meal.querySelector(".meal-body .fav-btn");
    favbtn.addEventListener("click",()=>{
       favbtn.classList.toggle("active");
    });
    meals.appendChild(meal);
} 

function addMealToLocalStorage(meal)
{
    


}

function getMealFromLS()
{
    const mealIds= localStorage.getItem('mealIds');
}