export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  href: string;
};

export const products: Product[] = [
  {
    id: "retatrutide",
    name: "Retatrutide",
    price: 129,
    image: "/valence-reta10.png",
    href: "/shop/retatrutide",
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    price: 89,
    image: "/valence-ghkcu10.png",
    href: "/shop/ghk-cu",
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    price: 79,
    image: "/valence-bpc10.png",
    href: "/shop/bpc-157",
  },
];