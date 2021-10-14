export class Products_items {
  constructor(_id, _name, _brand, _price, _incrementPrice, _discountPrice, _img, _discount, _count, _incart) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.image = _img;
    this.count = _count;
    this.discount = _discount;
    this.incart = _incart;
    this.brand = _brand;
    this.discountprice = _discountPrice
    this.incrementPrice = _incrementPrice;
  }
}

export let Male_Products = [
  new Products_items(1, "Men's Watches Ultra", "barnd", 34, 34, 500, "1.jpg", 19, 0, false),
  new Products_items(2, "Men's Cool T-shirt", "barnd", 44, 44, 500, "2.jpg", 17, 0, false),
  new Products_items(3, "Men's Awesome Suit", "barnd", 99, 99, 500, "3.jpg", 20, 0, false),
  new Products_items(4, "Men's Leather Belt", "barnd", 20, 20, 500, "4.jpg", 5, 0, false),
  new Products_items(5, "Men's Classic Suit Pants", "barnd", 25, 25, 500, "2.jpg", 15, 0, false),
  new Products_items(6, "Men's Sports Shoes", "barnd", 30, 30, 500, "6.jpg", 20, 0, false),
  new Products_items(7, "Men's Half Boots", "barnd", 34, 34, 500, "7.jpg", 19, 0, false),
];

export let Female_Products = [
  new Products_items(8, "Women's Colored Dress", "barnd", 36, 36, 500, "8.jpg", 21, 0, false),
  new Products_items(9, "Women's Black-White Dress", "barnd", 30, 36, 500, "9.jpg", 22, 0, false),
  new Products_items(10, "Women's Summer Sandals", "barnd", 35, 35, 500, "10.jpg", 12, 0, false),
  new Products_items(11, "Women's Watches Ultra", "barnd", 34, 34, 500, "11.jpg", 17, 0, false),
  new Products_items(12, "Women's Fascinating Dress", "barnd", 60, 60, 500, "12.jpg", 25, 0, false),
  new Products_items(13, "Women's Evening Dresses", "barnd", 80, 80, 500, "13.jpg", 10, 0, false),
  new Products_items(14, "Women's Hand Bag Collection", "barnd", 50, 50, 500, "14.jpg", 50, 0, false),
];

export let babys_products = [
  new Products_items(15, "Babys red Outfit ", "barnd", 15, 15, 500, "18.jpg", 2, 0, false),
  new Products_items(16, "Babys Red-White Outfit", "barnd", 19, 19, 500, "19.jpg", 4, 0, false),
  new Products_items(17, "Babys Green Outfit", "barnd", 19, 19, 500, "20.jpg", 4, 0, false),
  new Products_items(18, "Kids Jeans Pants", "barnd", 20, 20, 500, "21.jpg", 5, 0, false),
  new Products_items(19, "Kids Little Shoes Ultra", "barnd", 24, 24, 500, "22.jpg", 8, 0, false),
];
export let AllProducts = Male_Products.concat(Female_Products, babys_products);
