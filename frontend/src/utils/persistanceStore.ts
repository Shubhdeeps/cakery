import { Dish } from "../models/Cake";

const storage = "persist-items";

export type CartItem = Dish & { count: number };
export function addItemsToCart(item: Dish) {
  const previousItems = window.localStorage.getItem(storage);
  if (!previousItems) {
    const firstItem = JSON.stringify([item]);
    window.localStorage.setItem(storage, firstItem);
    return;
  }
  const prevItemsParsed = JSON.parse(previousItems) as CartItem[];

  //check if this new item is already exist in the cart
  const doesNewItemAlreadyExistInCart = prevItemsParsed.find(
    (dish) => dish.id === item.id
  );
  if (!!doesNewItemAlreadyExistInCart) {
    const newCount = doesNewItemAlreadyExistInCart.count + 1;
    const newItem = {
      ...item,
      count: newCount,
    };

    //remove newItem from prevItems
    const filterOutCurrentItemFromList = prevItemsParsed.filter(
      (dish) => dish.id !== item.id
    );

    //add items to storage
    window.localStorage.setItem(
      storage,
      JSON.stringify([...filterOutCurrentItemFromList, newItem])
    );
    return;
  }
  //if item does not exist in the storage already then add it to stoage

  const newItems = [...prevItemsParsed, { ...item, count: 1 }];
  window.localStorage.setItem(storage, JSON.stringify(newItems));
}

export function getCartItems() {
  const previousItems = window.localStorage.getItem(storage);
  if (!previousItems) {
    return [];
  }
  const items = JSON.parse(previousItems) as CartItem[];
  return items;
}

export function removeItemsFromCart(itemId: string) {
  // can't be null
  const previousItems = window.localStorage.getItem(storage) as string;
  const items = JSON.parse(previousItems) as CartItem[];
  const newItems = items.filter((item) => item.id !== itemId);
  window.localStorage.setItem(storage, JSON.stringify(newItems));
  return newItems;
}

export function clearCart() {
  window.localStorage.removeItem(storage);
  return [];
}
