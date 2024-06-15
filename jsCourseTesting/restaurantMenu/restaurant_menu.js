const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

document.getElementById('breakfastTotalItems').innerText = breakfastMenu.length;
document.getElementById('maincourseTotalItems').innerText = mainCourseMenu.length;
document.getElementById('dessertTotalItems').innerText = dessertMenu.length;
const breakfastMenuItemsHTML = breakfastMenu.map(
  (item, index) => `<p>Item ${index + 1}: ${item}</p>`
).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseMenuItemsHTML = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseMenuItemsHTML += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

const dessertMenuItemsHTML = dessertMenu.map(
    (item, index) => `<p>Item ${index+1}: ${item}</p>`
).join('');
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;
