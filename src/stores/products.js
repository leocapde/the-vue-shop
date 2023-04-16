import { defineStore } from "pinia";
import iphone14 from "../assets/products/iphone-14-min.jpeg";
import macbookpro14 from "../assets/products/macbookpro14-min.jpeg";
import ipad from "../assets/products/ipad-min.jpeg";
import studioDisplay from "../assets/products/studio-display-min.jpeg";
import galaxyBook3 from "../assets/products/galaxyBook3-min.jpeg";
import viewFinity from "../assets/products/viewfinity-min.jpeg";
import galaxyTabS8 from "../assets/products/galaxyTabS8-min.jpeg";
import galaxyS23 from "../assets/products/galaxyS23-min.png";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    filter: "all",
    trending: [],
    product: {},
    products: [
      {
        id: 1,
        name: "MacBook Pro 14",
        price: 2399,
        categorie: "pc",
        trending: true,
        description:
          "Boosté par la puce M2 Pro, le MacBook Pro offre une puissance et une efficacité énergétique inédites. Ses performances sont exceptionnelles, qu’il soit branché ou non. Et il offre désormais une autonomie encore plus longue. Ajoutez à cela un sublime écran Liquid Retina XDR et tous les ports dont vous avez besoin, et vous obtenez un ordinateur portable pro définitivement sans égal.",
        specs: {
          Marque: "Apple",
          "Taille d'écran": '14,2"',
          Stockage: "512 Go",
          Ram: "16 Go",
          Processeur: "Puce Apple M2 Pro",
          Garantie: "2 ans",
        },
        img: macbookpro14,
      },
      {
        id: 2,
        name: "iPhone 14",
        price: 1019,
        categorie: "smartphones",
        trending: true,
        description:
          "La haute résolution et la précision des couleurs offrent une netteté et un réalisme à couper le souffle.",
        specs: {
          Marque: "Apple",
          "Taille d'écran": '6,1"',
          Stockage: "128 Go",
          Garantie: "2 ans",
        },
        img: iphone14,
      },
      {
        id: 3,
        name: "Studio Display",
        price: 1749,
        categorie: "moniteurs",
        trending: true,
        description:
          "Fenêtre grande ouverte sur de nouveaux horizons, le Studio Display captive au premier regard. Son design tout écran, tout en finesse, invite à puiser dans un ensemble de fonctionnalités phénoménal. Tout ce que vous faites prend vie là, sous vos yeux, dans une explosion de couleurs et de détails spectaculaires.",
        specs: {
          Marque: "Apple",
          Taille: '27"',
          Résolution: "5120 x 2880 pixels",
          Définition: "5K",
          "Pixels par pouce": "218ppp",
          Luminosité: "600 nits",
          Garantie: "2 ans",
        },
        img: studioDisplay,
      },
      {
        id: 4,
        name: "iPad",
        price: 589,
        categorie: "tablettes",
        trending: true,
        description:
          "Le tout dernier iPad tout en couleur se réinvente pour être plus performant, plus intuitif et encore plus fun. Avec son nouvel écran bord à bord Liquid Retina de 10,9 pouces et quatre superbes finitions, il vous permet d’en faire plus, de garder le contact et de donner libre cours à votre créati­vité1. Et grâce aux acces­soires conçus spécialement pour lui, les possibilités sont infinies.",
        specs: {
          Marque: "Apple",
          "Taille d'écran": '10,9"',
          Processeur: "Puce A14 Bionic",
          Stockage: "64 Go",
          Garantie: "2 ans",
        },
        img: ipad,
      },
      {
        id: 5,
        name: "Galaxy Book3 Ultra",
        price: 3299,
        categorie: "pc",
        trending: false,
        description:
          "Exprimez toute votre créativité pour faire naître vos meilleurs projets grâce à la carte graphique NVIDIA® GeForce RTX™ et à la rapidité du processeur Intel® Core™ H de 13e génération1. Cette combinaison ultime vous offre une puissance à la hauteur de vos projets. De votre imagination à la réalité il n'y a qu'un pas : le Galaxy Book3 Ultra2,3.",
        specs: {
          Marque: "Samsung",
          "Taille d'écran": '16"',
          Stockage: "1 To",
          Ram: "32 Go",
          Processeur: "Intel Core i7-13700H",
          Garantie: "2 ans",
        },
        img: galaxyBook3,
      },
      {
        id: 6,
        name: 'Écran PC 24" Professionnel ViewFinity S60U',
        price: 199,
        categorie: "moniteurs",
        trending: true,
        description: `Ultra-polyvalent, l'écran PC S60U s'adapte à tous les environnements et besoins professionnels. Une colorimétrie améliorée et un angle de vision de 178°, horizontalement et verticalement, pour une expérience visuelle optimale quel que soit l'angle. La dalle IPS ( VA sur le 32") préserve la vivacité et la clarté des couleurs, sur chaque pixel de l'écran et sans aucune distorsion.`,
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
        img: viewFinity,
      },
      {
        id: 7,
        name: "Galaxy Tab S8",
        price: 980,
        categorie: "tablettes",
        trending: false,
        description:
          "Les Galaxy Tab S8 Series sont disponibles en trois tailles différentes, pour que vous puissiez choisir le modèle qui vous correspond le mieux.",
        specs: {
          Marque: "Samsung",
          Stockage: "128 Go",
          Garantie: "2 ans",
        },
        img: galaxyTabS8,
      },
      {
        id: 8,
        name: "Galaxy S23",
        price: 1019,
        categorie: "smartphones",
        trending: false,
        description:
          "Les Galaxy S23 et Galaxy 23+ incarnent un changement majeur pour Samsung, en intégrant des matériaux recyclés. Les faces avant et arrière en verre intègrent en effet du verre recyclé, tandis que leur châssis embarque des composants en plastique recyclé. Leur emballage, enfin, est fait de carton entièrement recyclé.",
        specs: {
          Marque: "Samsung",
          Stockage: "256 Go",
          Garantie: "2 ans",
        },
        img: galaxyS23,
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
    getProduct(id) {
      const index = this.products.findIndex((product) => product.id === id);
      this.product = this.products[index];
    },
    getTrending() {
      this.trending = this.products.filter((item) => item.trending);
    },
    getFirstItem(categorie) {
      this.products.find((product) => product.categorie === categorie);
    },
  },
});
