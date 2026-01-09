
export interface CoffeeProduct {
  id: number;
  name: string;
  type: "Arabica" | "Robusta";
  process: "Washed" | "Unwashed";
  Area: string;
  ScreenSize: string;
  FlavorProfile: string[];
  image: string;
}

export interface CoffeeCategory {
  title: string;
  type: "Arabica" | "Robusta";
  products: CoffeeProduct[];
}

export const coffeeCategories: CoffeeCategory[] = [
  {
    "title": "Unwashed Arabica",
    "type": "Arabica",
    "products": [
      {
        "id": 1,
        "name": " Cherry AA",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "Mellow",
          "Earthy",
          "Chocolatey"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-aa.avif"
      },
      {
        "id": 2,
        "name": " Cherry A",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "17 (6.65mm)",
        "FlavorProfile": [
          "Caramel",
          "Fruity",
          "Floral"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-a.avif"
      },
      {
        "id": 3,
        "name": " Cherry AB",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "Cocoa",
          "Spice",
          "Mild fruit"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-ab.avif"
      },
      {
        "id": 4,
        "name": " Cherry PB",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "Cocoa",
          "Dried fruit",
          "Floral"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-pb.avif"
      },
      {
        "id": 5,
        "name": " Cherry C",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "Rustic",
          "Mild chocolatey",
          "Woody"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-c.avif"
      }
    ]
  },
  {
    "title": "Washed Arabica",
    "type": "Arabica",
    "products": [
      {
        "id": 6,
        "name": "Mysore Nuggets",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "19 (7.50mm)",
        "FlavorProfile": [
          "Nutty", "Woody", "Earthy notes"
        ],
        "image": "/Beans/Arabica/Washed/mysore-nuggets.avif"
      },
      {
        "id": 7,
        "name": "Plantation AA",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "Fruity",
          "Floral"
        ],
        "image": "/Beans/Arabica/Washed/plantation-aa.avif"
      },
      {
        "id": 8,
        "name": "Plantation A",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "17 (6.65mm)",
        "FlavorProfile": [
          "Melon",
          "Indian spice",
          "Chocolatey"
        ],
        "image": "/Beans/Arabica/Washed/plantation-a.avif"
      },
      {
        "id": 9,
        "name": "Plantation B",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "Citrus",
          "Caramel",
          "Nutty"
        ],
        "image": "/Beans/Arabica/Washed/plantation-b.avif"
      },
      {
        "id": 10,
        "name": "Plantation PB",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "Chocolatey",
          "Nutty",
          "Indian spices"
        ],
        "image": "/Beans/Arabica/Washed/plantation-pb.avif"
      },
      {
        "id": 11,
        "name": "Plantation C",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "Chocolatey",
          "Nutty"
        ],
        "image": "/Beans/Arabica/Washed/plantation-c.avif"
      }
    ]
  },
  {
    "title": "Unwashed Robusta",
    "type": "Robusta",
    "products": [
      {
        "id": 12,
        "name": "Cherry AAA",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "19 (7.50mm)",
        "FlavorProfile": [
          "Dark chocolate",
          "Nutty",
          "Spice notes"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-aaa.avif"
      },
      {
        "id": 13,
        "name": "Cherry AA",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "Earthy",
          "Nutty",
          "Dark cocoa"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-aa.avif"
      },
      {
        "id": 14,
        "name": "Cherry A",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "17 (6.65mm)",
        "FlavorProfile": [
          "Woody",
          "Mild spiciness"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-a.avif"
      },
      {
        "id": 15,
        "name": "Cherry AB",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "Earthy",
          "Woody",
          "Chocolatey"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-ab.avif"
      },
      {
        "id": 16,
        "name": "Cherry PB",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "Strong",
          "Bitter",
          "Peppery",
          "Cocoa"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-pb.avif"
      }
    ]
  },
  {
    "title": "Washed Robusta",
    "type": "Robusta",
    "products": [
      {
        "id": 17,
        "name": " Kaapi Royale",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "19 (7.50mm)",
        "FlavorProfile": [
          "Chocolatey",
          "Dark cocoa",
          "Woody",
          "Earthy"
        ],
        "image": "/Beans/Robusta/Washed/kaapi-royale.avif"
      },
      {
        "id": 18,
        "name": "Parchment AA",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "Cocoa",
          "Nutty",
          "Mild spice"
        ],
        "image": "/Beans/Robusta/Washed/parchment-aa.avif"
      },
      {
        "id": 19,
        "name": "Parchment AB",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "Dark chocolate",
          "Woody",
          "Nutty tones"
        ],
        "image": "/Beans/Robusta/Washed/parchment-ab.avif"
      },
      {
        "id": 20,
        "name": "Parchment C",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "Rustic",
          "Woody",
          "Earthy"
        ],
        "image": "/Beans/Robusta/Washed/parchment-c.avif"
      },
      {
        "id": 21,
        "name": "Parchment PB",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "Bitter-sweet cocoa",
          "Earthy"
        ],
        "image": "/Beans/Robusta/Washed/parchment-pb.avif"
      }
    ]
  }
];