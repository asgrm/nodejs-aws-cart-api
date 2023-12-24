import { Client } from 'pg'
import 'dotenv/config';

export const products = [
  {
    description: "Fun Stacking Blocks",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 12,
    title: "Stacking Blocks Set",
  },
  {
    description: "Interactive Robot Friend",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 25,
    title: "RoboBuddy",
  },
  {
    description: "Colorful Play Dough Kit",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 18,
    title: "Dough Delight Kit",
  },
  {
    description: "Educational Puzzle Game",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    title: "Brainy Puzzler",
  },
  {
    description: "Remote Control Car",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 30,
    title: "Speedy Racer",
  },
  {
    description: "Creative Art Set",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 20,
    title: "Artistic Wonders Kit",
  },
  {
    description: "Plush Teddy Bear",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a4",
    price: 22,
    title: "Cuddly Companion",
  },
  {
    description: "Building Blocks City",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a5",
    price: 28,
    title: "Blocktopia",
  },
  {
    description: "Dinosaur Explorer Kit",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a6",
    price: 35,
    title: "Dino Discovery Set",
  },
  {
    description: "Fairy Tale Castle Playset",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a7",
    price: 40,
    title: "Enchanted Castle",
  },
  {
    description: "Magic Wand and Spellbook",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a8",
    price: 15,
    title: "Wizard's Kit",
  },
  {
    description: "Miniature Tea Party Set",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a9",
    price: 10,
    title: "Tea Time Fun",
  },
  {
    description: "Space Explorer Helmet",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b0",
    price: 18,
    title: "Galactic Helmet",
  },
  {
    description: "Colorful Jigsaw Puzzle",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b1",
    price: 12,
    title: "Rainbow Puzzle",
  },
  {
    description: "Superhero Cape and Mask",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b2",
    price: 20,
    title: "Heroic Duo Set",
  },
  {
    description: "Pirate Adventure Playset",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b3",
    price: 30,
    title: "Pirate's Cove Set",
  },
  {
    description: "Animal Safari Figurines",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b4",
    price: 15,
    title: "Wildlife Expedition",
  },
  {
    description: "Toy Doctor Kit",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b5",
    price: 25,
    title: "Dr. Playwell's Kit",
  },
  {
    description: "Mini Racing Cars Set",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b6",
    price: 18,
    title: "Speedy Racers Pack",
  },
  {
    description: "Glow-in-the-Dark Stars",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b7",
    price: 8,
    title: "Starry Night Set",
  },
  {
    description: "Princess Dress-Up Kit",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b8",
    price: 22,
    title: "Royal Attire Set",
  },
  {
    description: "Toy Kitchen Playset",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80b9",
    price: 35,
    title: "Little Chef's Kitchen",
  },
  {
    description: "Construction Truck Set",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80c0",
    price: 28,
    title: "Hard Hat Crew",
  },
  {
    description: "Dollhouse with Furniture",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80c1",
    price: 45,
    title: "Dream Dollhouse",
  },
  {
    description: "Musical Instruments Set",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80c2",
    price: 15,
    title: "Melody Makers",
  },
  {
    description: "Remote-Controlled Drone",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80c3",
    price: 40,
    title: "Sky Surfer Drone",
  },
];

async function init() {
  const client = new Client({
    user: process.env.DATABASE_USERNAME || '',
    host: process.env.DATABASE_HOST || '',
    database: process.env.DATABASE_NAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    port: +process.env.DATABASE_PORT || 5432,
  });

  let queryStr = 'INSERT INTO product (id, description, price, title) VALUES ';
  let params = [];
  const valueTemplates = []

  products.forEach((product, index) => {
    const offset = index * 4;
    valueTemplates.push(`($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4})`)
    params.push(product.id, product.description, product.price, product.title);
  });
  queryStr += valueTemplates.join(', ');

  await client.connect();
  console.log('creating query');
  const productQuery = {
    text: queryStr,
    values: params,
  };

  const cartQuery = {
    text: 'INSERT INTO cart(id, user_id, status) VALUES ($1, $2, $3)',
    values: ['f45a8638-7c94-45b4-87d5-40fee1bd2f11', 'test_user_1', 'OPEN']
  }

  const cartItemQuery = {
    text: 'INSERT INTO cart_item(id, count, product_id, cart_id) VALUES ($1, $2, $3, $4)',
    values: [
      '6e587908-cd1b-410e-8ca1-bdce6b68f181',
      6,
      '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
      'f45a8638-7c94-45b4-87d5-40fee1bd2f11'
    ]
  };

  console.log('productQuery', productQuery);
  console.log('cartQuery', cartQuery);
  console.log('cartItemQuery', cartItemQuery);

  console.log('running query');
  await client.query(productQuery);
  await client.query(cartQuery);
  await client.query(cartItemQuery);

  console.log('query executed');
  await client.end();
}

init();