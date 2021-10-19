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
  new Products_items(1, "Men's Watches Ultra", "Glam Closet", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 450, 450, 650, 200, "1.jpg", 31, 20, 1, false, false),
  new Products_items(2, "Men's Cool T-shirt", "Double Trouble Fashion", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 170, 170, 200, 30, "2.jpg", 15, 15, 1, false, false),
  new Products_items(3, "Men's Awesome Suit", "Suit Up!", "blue", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 650, 650, 800, 150, "3.jpg", 19, 18, 1, false, false),
  new Products_items(4, "Men's Leather Belt", "The Fashion Mall", "brown", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 81, 81, 100, 19, "4.jpg", 19, 30, 1, false, false),
  new Products_items(6, "Men's Sports Shoes", "Sock it to me!", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 220, 220, 250, 30, "6.jpg", 12, 44, 1, false, false),
  new Products_items(7, "Men's Half Boots", "Glamour Clothes", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 260, 260, 300, 40, "7.jpg", 13, 16, 1, false, false),
];

export let Female_Products = [
  new Products_items(8, "Women's Colored Dress", "Queen of Apparel", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 400, 400, 700, 300, "8.jpg", 43, 17, 1, false, false),
  new Products_items(9, "Women's Black-White Dress", "Crazy Outfitters", "black", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 500, 500, 800, 300, "9.jpg", 38, 16, 1, false, false),
  new Products_items(10, "Women's Summer Sandals", "Fast Fashion Island", "gold", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 150, 150, 200, 50, "10.jpg", 25, 21, 1, false, false),
  new Products_items(11, "Women's Watches Ultra", "Threads in Time", "silver", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 300, 300, 450, 150, "11.jpg", 33, 22, 1, false, false),
  new Products_items(12, "Women's Fascinating Dress", "Fashion Grab", "steelblue", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 470, 470, 630, 160, "12.jpg", 25, 35, 1, false, false),
  new Products_items(13, "Women's Evening Dresses", "Material Girl", "royalblue", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 750, 750, 950, 200, "13.jpg", 21, 42, 1, false, false),
  new Products_items(14, "Women's Hand Bag Collection", "Fashion Forward", "silver", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 320, 320, 460, 140, "14.jpg", 30, 28, 1, false, false),
];

export let babys_products = [
  new Products_items(15, "Babys red Outfit ", "Funky Kids Clothes", "palevioletred", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 90, 90, 120, 30, "18.jpg", 25, 24, 1, false, false),
  new Products_items(16, "Babys Red-White Outfit", "Funky Kids Clothes", "maroon", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 90, 90, 120, 30, "19.jpg", 25, 31, 1, false, false),
  new Products_items(17, "Babys Green Outfit", "Funky Kids Clothesr", "darkcyan", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 90, 90, 120, 30, "20.jpg", 25, 28, 1, false, false),
  new Products_items(18, "Kids Jeans Pants", "barnd", "Street Wear", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 110, 110, 150, 40, "21.jpg", 33, 44, 1, false, false),
  new Products_items(19, "Kids Little Shoes Ultra", "A New Me", "crimson", "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.", 80, 80, 90, 10, "22.jpg", 11, 51, 1, false, false),
];

export let AllProducts = Male_Products.concat(Female_Products, babys_products);
