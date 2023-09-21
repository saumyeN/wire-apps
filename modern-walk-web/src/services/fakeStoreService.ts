import { ItemCategory } from "types/dto";
import { ItemCategoryTitle, ItemCategoryUrlParameter } from "types/enums";

export const fakeStoreService = {
  getCategories,
  getFlashSalesAsync,
  getItemsByCategoryAsync,
};

// Get item categories
function getCategories() {
    //TODO - use api for available categories
  let categories: ItemCategory[] = [
    { name: ItemCategoryUrlParameter.MENS_CLOTHING, title: ItemCategoryTitle.MENS_CLOTHING, tileColor: "#2BD9AF", textColor: "#FFFFFF" },
    { name: ItemCategoryUrlParameter.WOMENS_CLOTHING, title: ItemCategoryTitle.WOMENS_CLOTHING, tileColor: "#FF5E84", textColor: "#FFFFFF" },
    { name: "DEFAULT", title: "", tileColor: "#F98128", textColor: "#FFFFFF" },
  ];

  return categories;
}

// fetch items for flash sale, since there is no such API fetch top 4 items
async function getFlashSalesAsync() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=4");

    if (!response.ok)
      throw new Error("Failed to connect!!");

    const flashSalesData = await response.json();
    return flashSalesData;
  } catch (error) {
    alert("Error retrieving data. Please refresh.");
  }
}

// Fetch items by category
async function getItemsByCategoryAsync(path: string) {
  let category = getCategoryByPath(path);
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);

    if (!response.ok)
      throw new Error("Failed to connect!!");

    const flashSalesData = await response.json();

    return flashSalesData;
  } catch (error) {
    alert("Error retrieving data. Please refresh.");
  }
}

/***** support methods ********/
// Get Category by path
function getCategoryByPath(path: string) {
  switch (path) {
    case "/mens-clothing":
      return ItemCategoryUrlParameter.MENS_CLOTHING;
    case "/womens-clothing":
      return ItemCategoryUrlParameter.WOMENS_CLOTHING;
    default:
      return "";
  }
}