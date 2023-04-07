import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    filter: "all",
    product: {},
    products: [
      {
        id: 1,
        name: "MacBook Pro 14",
        price: 2399,
        categorie: "pc",
        trending: true,
      },
      {
        id: 2,
        name: "iPhone 14",
        price: 1019,
        categorie: "smartphones",
        trending: true,
      },
      {
        id: 3,
        name: "Studio Display",
        price: 1749,
        categorie: "moniteurs",
        trending: true,
      },
      {
        id: 4,
        name: "iPad",
        price: 589,
        categorie: "tablettes",
        trending: true,
      },
      {
        id: 5,
        name: "Galaxy Book3 Ultra",
        price: 3299,
        categorie: "pc",
        trending: false,
      },
      {
        id: 6,
        name: 'Écran PC 24" Professionnel ViewFinity S60U',
        price: 199,
        categorie: "moniteurs",
        trending: false,
        specs: {
          Marque: "Samsung",
          Taille: '24"',
          Résolution: "2560 x 1440 pixels",
          Définition: "QHD",
          "Type de dalle": "IPS",
          "Fréquence de balayage": "75 Hz",
          "Temps de réponse": "5 ms",
          Garantie: "2 ans",
        },
      },
      {
        id: 7,
        name: "Galaxy Tab S8",
        price: 980,
        categorie: "tablettes",
        trending: false,
        specs: {
          Garantie: "2 ans",
        },
      },
      {
        id: 8,
        name: "Galaxy S23",
        price: 1019,
        categorie: "smartphones",
        trending: false,
      },
    ],
  }),
  actions: {
    toggleFilter(filter) {
      this.filter = filter;
    },
    resetFilter() {
      this.filter = "all";
    },
    async getProduct(id) {
      const index = this.products.findIndex((product) => product.id === id);
      this.product = this.products[index];
    },
  },
});
