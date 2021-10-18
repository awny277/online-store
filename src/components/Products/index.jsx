export class Products_items {
  constructor(_id, _name, _brand, _color, _description, _price, _incrementPrice, _discountPrice, _saving, _img, _discount, _reviews, _count, _incart, _wish) {
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
    this.description = _description;
    this.reviews = _reviews;
    this.color = _color;
    this.wish = _wish;
    this.saving = _saving
  }
}

export let Male_Products = [
  new Products_items(1, "Men's Watches Ultra", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 34, 34, 500, 300, "1.jpg", 19, 3, 1, false, false),
  new Products_items(2, "Men's Cool T-shirt", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 44, 44, 500, 300, "2.jpg", 17, 3, 1, false, false),
  new Products_items(3, "Men's Awesome Suit", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 99, 99, 500, 300, "3.jpg", 20, 3, 1, false, false),
  new Products_items(4, "Men's Leather Belt", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 20, 20, 500, 300, "4.jpg", 5, 3, 1, false, false),
  new Products_items(5, "Men's Classic Suit Pants", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 25, 25, 500, 300, "2.jpg", 15, 3, 1, false, false),
  new Products_items(6, "Men's Sports Shoes", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 30, 30, 500, 300, "6.jpg", 20, 3, 1, false, false),
  new Products_items(7, "Men's Half Boots", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 34, 34, 500, 300, "7.jpg", 19, 3, 1, false, false),
];

export let Female_Products = [
  new Products_items(8, "Women's Colored Dress", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 36, 36, 500, 300, "8.jpg", 21, 3, 1, false, false),
  new Products_items(9, "Women's Black-White Dress", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 30, 36, 500, 300, "9.jpg", 22, 3, 1, false, false),
  new Products_items(10, "Women's Summer Sandals", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 35, 35, 500, 300, "10.jpg", 12, 3, 1, false, false),
  new Products_items(11, "Women's Watches Ultra", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 34, 34, 500, 300, "11.jpg", 17, 3, 1, false, false),
  new Products_items(12, "Women's Fascinating Dress", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 60, 60, 500, 300, "12.jpg", 25, 3, 1, false, false),
  new Products_items(13, "Women's Evening Dresses", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 80, 80, 500, 300, "13.jpg", 10, 3, 1, false, false),
  new Products_items(14, "Women's Hand Bag Collection", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 50, 50, 500, 300, "14.jpg", 50, 3, 1, false, false),
];

export let babys_products = [
  new Products_items(15, "Babys red Outfit ", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 15, 15, 500, 300, "18.jpg", 19, 3, 1, false, false),
  new Products_items(16, "Babys Red-White Outfit", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 19, 19, 500, 300, "19.jpg", 19, 3, 1, false, false),
  new Products_items(17, "Babys Green Outfit", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 19, 19, 500, 300, "20.jpg", 19, 3, 1, false, false),
  new Products_items(18, "Kids Jeans Pants", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 20, 20, 500, 300, "21.jpg", 19, 3, 1, false, false),
  new Products_items(19, "Kids Little Shoes Ultra", "barnd", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 24, 24, 500, 300, "22.jpg", 19, 3, 1, false, false),
];

export let AllProducts = Male_Products.concat(Female_Products, babys_products);
