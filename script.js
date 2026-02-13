const dailyCombos = [
  {
    id: 1,
    title: "Energía mañanera",
    price: 9.5,
    courses: ["Cappuccino", "Tostado de jamón y queso"],
  },
  {
    id: 2,
    title: "Pausa mediodía",
    price: 12.0,
    courses: ["Latte", "Avocado toast", "Muffin"],
  },
];

dailyCombos.forEach((item) => {
  renderCombo(item.title, item.price, item.courses);
});

const menuItems = [
  {
    id: 1,
    title: "Cappuccino",
    description:
      "El clásico italiano. Partes iguales de espresso, leche y espuma densa.",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1462917882517-e150004895fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Latte",
    description:
      "Espresso suave con abundante leche vaporizada y una fina capa de crema.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1550948309-0d8983dbdcc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Vanilla latte",
    description:
      "Espresso doble con leche vaporizada y un toque de jarabe de vainilla.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Avocado toast",
    description:
      "Pan de masa madre tostado, aguacate fresco, semillas y huevo pochado.",
    price: 7.5,
    image:
      "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Tostado de jamón y queso",
    description: "Sándwich tostado clásico con jamón cocido y queso.",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Muffin",
    description: "Muffin esponjoso horneado cada mañana con arándanos frescos.",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80",
  },
];

menuItems.forEach((item) => {
  renderCard(item.title, item.description, item.price, item.image);
});
