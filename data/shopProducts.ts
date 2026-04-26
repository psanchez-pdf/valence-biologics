export type ShopProduct = {
  name: string;
  slug: string;
  size: string;
  image: string;
  price?: number;
  category: string;
  summary: string;
  researchHighlights: string[];
  researchNote: string;
};

export const shopProducts: ShopProduct[] = [
  {
    name: "Tirzepatide",
    slug: "tirzepatide",
    size: "10 mg",
    image: "/valence-tirz10.png",
    price: 90,
    category: "Metabolic Research",
    summary:
      "Tirzepatide is a dual GIP and GLP-1 receptor agonist studied in metabolic research models involving glucose regulation, insulin response, appetite signaling, and body-weight-related endpoints.",
    researchHighlights: [
      "Studied as a dual incretin receptor agonist targeting GIP and GLP-1 pathways.",
      "Published clinical research has evaluated effects on glycemic control and body-weight-related outcomes.",
      "Commonly discussed in metabolic research involving insulin sensitivity, appetite regulation, and energy balance.",
    ],
    researchNote:
      "Tirzepatide is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "Retatrutide",
    slug: "retatrutide",
    size: "10 mg",
    image: "/valence-reta10.png",
    price: 120,
    category: "Metabolic Research",
    summary:
      "Retatrutide is an investigational triple receptor agonist studied across GIP, GLP-1, and glucagon receptor pathways in metabolic and body-weight-related research.",
    researchHighlights: [
      "Studied as a triple agonist involving GIP, GLP-1, and glucagon receptor signaling.",
      "Published research has evaluated retatrutide in metabolic and body-weight-related endpoints.",
      "Commonly discussed in research involving energy expenditure, appetite signaling, and incretin biology.",
    ],
    researchNote:
      "Retatrutide is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "BPC-157",
    slug: "bpc-157",
    size: "5 mg",
    image: "/valence-bpc5.png",
    price: 40,
    category: "Repair & Recovery Research",
    summary:
      "BPC-157 is a peptide commonly studied in preclinical research models related to tissue response, inflammatory pathways, angiogenesis, and gastrointestinal protection.",
    researchHighlights: [
      "Evaluated in preclinical models related to soft tissue and connective tissue response.",
      "Discussed in research involving angiogenesis, inflammation, and gastrointestinal protection pathways.",
      "Commonly presented in laboratory settings focused on repair and recovery-associated mechanisms.",
    ],
    researchNote:
      "BPC-157 is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "BPC-157 + TB-500",
    slug: "bpc-tb-500",
    size: "5 mg + 5 mg",
    image: "/valence-bpctb5.png",
    price: 100,
    category: "Repair & Recovery Research",
    summary:
      "This research blend combines two peptides commonly discussed in models involving tissue remodeling, cellular migration, repair signaling, and recovery-associated pathways.",
    researchHighlights: [
      "BPC-157 is commonly studied in preclinical tissue response and inflammatory pathway models.",
      "TB-500 is commonly discussed in connection with actin regulation, cellular migration, and tissue remodeling.",
      "Presented for research settings where repair-associated peptide pathways are being evaluated.",
    ],
    researchNote:
      "This blend is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "TB-500",
    slug: "tb-500",
    size: "10 mg",
    image: "/valence-tb10.png",
    price: 140,
    category: "Repair & Recovery Research",
    summary:
      "TB-500 is commonly discussed in research involving thymosin beta-4-related pathways, actin regulation, cellular migration, and tissue remodeling.",
    researchHighlights: [
      "Studied in research contexts related to cell migration and actin-binding biology.",
      "Commonly discussed in tissue remodeling and recovery-associated laboratory models.",
      "Often presented in research settings focused on repair signaling and cellular movement.",
    ],
    researchNote:
      "TB-500 is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "GHK-Cu",
    slug: "ghk-cu",
    size: "50 mg",
    image: "/valence-ghkcu50.png",
    price: 40,
    category: "Skin & Cellular Research",
    summary:
      "GHK-Cu is a naturally occurring copper peptide studied in connection with skin remodeling, collagen-related pathways, wound-healing models, and copper peptide biology.",
    researchHighlights: [
      "Published research has evaluated GHK-Cu in skin and wound-healing-related models.",
      "Commonly discussed in connection with collagen, extracellular matrix, and tissue remodeling pathways.",
      "Studied for copper peptide activity and cellular signaling related to skin research.",
    ],
    researchNote:
      "GHK-Cu is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, cosmetic use, or therapeutic use.",
  },
  {
    name: "NAD+",
    slug: "nad",
    size: "500 mg",
    image: "/valence-nad500.png",
    price: 45,
    category: "Cellular & Longevity Research",
    summary:
      "NAD+ is a central coenzyme studied for its role in cellular metabolism, mitochondrial function, redox biology, DNA repair pathways, and age-associated cellular processes.",
    researchHighlights: [
      "Widely studied in cellular metabolism and mitochondrial function research.",
      "Involved in redox biology and enzymatic pathways related to cellular energy.",
      "Commonly discussed in research involving aging biology, cellular stress, and repair pathways.",
    ],
    researchNote:
      "NAD+ is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "Glutathione",
    slug: "glutathione",
    size: "1200 mg",
    image: "/valence-glu1200.png",
    price: 75,
    category: "Cellular & Longevity Research",
    summary:
      "Glutathione is a major intracellular antioxidant studied in research involving oxidative stress response, redox balance, detoxification pathways, and cellular defense systems.",
    researchHighlights: [
      "Studied as a key antioxidant involved in redox balance and oxidative stress response.",
      "Commonly discussed in cellular defense, detoxification, and metabolic pathway research.",
      "Evaluated in laboratory contexts involving oxidative damage and cellular resilience.",
    ],
    researchNote:
      "Glutathione is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "CJC-1295 + Ipamorelin",
    slug: "cjc-1295-ipamorelin",
    size: "5 mg - 5 mg",
    image: "/valence-cjcipa5.png",
    price: 90,
    category: "Growth Hormone Research",
    summary:
      "This research blend is commonly discussed in relation to growth hormone secretagogue pathways, GHRH analog activity, ghrelin receptor signaling, and pulsatile growth hormone models.",
    researchHighlights: [
      "CJC-1295 is commonly discussed as a growth hormone-releasing hormone analog.",
      "Ipamorelin is studied as a selective growth hormone secretagogue.",
      "The blend is presented for research involving growth hormone signaling and endocrine pathway models.",
    ],
    researchNote:
      "This blend is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "Ipamorelin",
    slug: "ipamorelin",
    size: "10 mg",
    image: "/valence-ipa10.png",
    price: 75,
    category: "Growth Hormone Research",
    summary:
      "Ipamorelin is a growth hormone secretagogue studied in research involving ghrelin receptor activity, endocrine signaling, and growth hormone release pathways.",
    researchHighlights: [
      "Studied as a selective growth hormone secretagogue.",
      "Commonly discussed in relation to ghrelin receptor activity.",
      "Evaluated in research settings involving growth hormone release and endocrine pathway signaling.",
    ],
    researchNote:
      "Ipamorelin is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "Tesamorelin",
    slug: "tesamorelin",
    size: "10 mg",
    image: "/valence-tesa10.png",
    price: 140,
    category: "Growth Hormone Research",
    summary:
      "Tesamorelin is a growth hormone-releasing hormone analog studied in endocrine and metabolic research settings involving growth hormone axis signaling.",
    researchHighlights: [
      "Studied as a synthetic analog of growth hormone-releasing hormone.",
      "Published research has evaluated tesamorelin in endocrine and metabolic contexts.",
      "Commonly discussed in research involving the growth hormone axis and related metabolic endpoints.",
    ],
    researchNote:
      "Tesamorelin is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
  {
    name: "AOD9604",
    slug: "aod9604",
    size: "5 mg",
    image: "/valence-aod5.png",
    price: 80,
    category: "Metabolic Research",
    summary:
      "AOD9604 is a modified fragment of human growth hormone studied in research involving lipolysis-related pathways, metabolic signaling, and fat metabolism models.",
    researchHighlights: [
      "Studied as a modified fragment of human growth hormone.",
      "Commonly discussed in research involving lipolysis and fat metabolism pathways.",
      "Presented for laboratory settings focused on metabolic signaling models.",
    ],
    researchNote:
      "AOD9604 is presented here strictly for laboratory research use and is not intended for human consumption, clinical use, diagnostic use, or therapeutic use.",
  },
];

export function getShopProduct(slug: string) {
  return shopProducts.find((product) => product.slug === slug);
}
