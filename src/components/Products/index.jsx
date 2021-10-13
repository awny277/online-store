export class Products_items {
  constructor(_id, _name, _price, _img, _discount, _count, _incart) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.image = _img;
    this.count = _count;
    this.discount = _discount;
    this.incart = _incart;
  }
}

export let Male_Products = [
  new Products_items(1, "Mens Watches Ultra", 34, "1.jpg", 19, 0, false),
  new Products_items(2, "Mens Watches Ultra", 34, "2.jpg", 19, 0, false),
  new Products_items(3, "Mens Watches Ultra", 34, "3.jpg", 19, 0, false),
  new Products_items(4, "Mens Watches Ultra", 34, "4.jpg", 19, 0, false),
  new Products_items(5, "Mens Watches Ultra", 34, "5.jpg", 19, 0, false),
  new Products_items(6, "Mens Watches Ultra", 34, "6.jpg", 19, 0, false),
  new Products_items(7, "Mens Watches Ultra", 34, "7.jpg", 19, 0, false),
];

export let Female_Products = [
  new Products_items(8, "Mens Watches Ultra", 34, "8.jpg", 19, 0, false),
  new Products_items(9, "Mens Watches Ultra", 34, "9.jpg", 19, 0, false),
  new Products_items(10, "Mens Watches Ultra", 34, "10.jpg", 19, 0, false),
  new Products_items(11, "Mens Watches Ultra", 34, "11.jpg", 19, 0, false),
  new Products_items(12, "Mens Watches Ultra", 34, "12.jpg", 19, 0, false),
  new Products_items(13, "Mens Watches Ultra", 34, "13.jpg", 19, 0, false),
  new Products_items(14, "Mens Watches Ultra", 34, "14.jpg", 19, 0, false),
];

export let babys_products = [
  new Products_items(15, "Mens Watches Ultra", 34, "18.jpg", 19, 0, false),
  new Products_items(16, "Mens Watches Ultra", 34, "19.jpg", 19, 0, false),
  new Products_items(17, "Mens Watches Ultra", 34, "20.jpg", 19, 0, false),
  new Products_items(18, "Mens Watches Ultra", 34, "21.jpg", 19, 0, false),
  new Products_items(19, "Mens Watches Ultra", 34, "22.jpg", 19, 0, false),
];
export let AllProducts = Male_Products.concat(Female_Products, babys_products);
