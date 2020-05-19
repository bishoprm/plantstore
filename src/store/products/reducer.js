const initialState = [
  {
    id: 1,
    description: `Brugmansia suaveolens is a semi-woody shrub or small tree, growing up to 3–5 m (10–16 ft) tall, often with a many-branched trunk. The leaves are oval, to 25 cm (10 in) long by 15 cm (6 in) wide, and even larger when grown in the shade. The flowers, which tend to be white in colour, are remarkably beautiful and sweetly fragrant, about 24–32 cm (9–13 in) long and shaped like trumpets. The corolla body is slightly recurved to 5 main points, but the very peaks in the true species are always curved outwards, never rolled back, and these peaks are short, only 1–2.5 cm (0.4–1.0 in) long. The flowers are usually white but may be yellow or pink and hang downward from fully pendulous up to nearly horizontal.
    The Latin specific epithet suaveolens means “with a sweet fragrance”.`,
    price: 19.99,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71cWn8os7dL._AC_SL1080_.jpg",
    tags: ["full-sun", "poisonous"],
    popularity: 3,
    name: "Angel trumpet",
    latin: "Brugmansia suaveolens",
  },
  {
    id: 2,
    description: `The wild carrot is a herbaceous, somewhat variable biennial plant that grows between 30 and 60 cm (1 and 2 ft) tall, and is roughly hairy, with a stiff, solid stem. The leaves are tripinnate, finely divided and lacy, and overall triangular in shape. The leaves are bristly and alternate in a pinnate pattern that separates into thin segments. The flowers are small and dull white, clustered in flat, dense umbels. The umbels are terminal and approximately 3–4 inches (8–10 cm) wide. They may be pink in bud and may have a reddish or purple flower in the centre of the umbel. The lower bracts are three-forked or pinnate, which distinguishes the plant from other white-flowered umbellifers. As the seeds develop, the umbel curls up at the edges, becomes more congested, and develops a concave surface. The fruits are oval and flattened, with short styles and hooked spines. The fruit is small, dry and bumpy with protective hairs surrounding it. The fruit of Daucus carota has two mericarps, or bicarpellate. The endosperm of the fruit grows before the embryo. The dried umbels detach from the plant, becoming tumbleweeds. The function of the tiny red flower, coloured by anthocyanin, is to attract insects. Wild carrot blooms in summer and fall. It thrives best in sun to partial shade. Daucus carota is commonly found along roadsides and in unused fields.
    Similar in appearance to the deadly poison hemlock, D. carota is distinguished by a mix of tripinnate leaves, fine hairs on its solid green stems and on its leaves, a root that smells like carrots, and occasionally a single dark red flower in the center of the umbel.`,
    price: 14.99,
    img:     "https://www.gardeningknowhow.com/wp-content/uploads/2017/11/queen-annes-lace.jpg",
    tags: ["shade"],
    popularity: 4,
    name: "Wild carrot",
    latin: "Daucus carota",
  },
  {
    id: 3,
    description: `It is an evergreen large shrub or small to medium-sized tree growing to 15 m tall. The leaves are 15–36 cm long, with a conspicuously corrugated surface with impressed veins. Its branches are used to make good firewood. The flowers are large, 15–20 cm diameter, with five white petals and numerous yellow stamens. Its characteristic round fruits are large, greenish yellow, have many seeds and are edible. The fruit is a 5–12 cm diameter aggregate of 15 carpels, each carpel containing five seeds embedded in an edible but fibrous pulp.`,
    price: 21.99,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/714HvBG%2B2EL._AC_SL1400_.jpg",
    tags: ["full-sun", "fragrant"],
    popularity: 5,
    name: "Elephant apple",
    latin: "Dillenia indica",
  },
  {
    id: 4,
    description: `Achillea ptarmica, the sneezewort, sneezeweed, bastard pellitory, European pellitory, fair-maid-of-France, goose tongue, sneezewort yarrow, wild pellitory, or white tansy, is a European species of herbaceous perennial flowering plant in the genus Achillea. It is widespread across most of Europe and naturalized in scattered places in North America.
    Achillea ptarmica has loose clusters of showy white, flower heads that bloom from June to August. Its dark green leaves have finely toothed margins. Like many other plants, the sneezewort's pattern of development displays the Fibonacci sequence.[6]
    The name ptarmica comes from the Greek word ptairo (=sneeze) and means 'causes sneezing'.`,
    price: 9.99,
    img: "https://live.staticflickr.com/1975/31422937778_d1492b5390_b.jpg",
    tags: ["shade", "poisonous"],
    popularity: 1,
    name: "Sneezewort",
    latin: "Achillea ptarmica",
  },
  {
    id: 5,
    description: `It is a seasonal climbing plant, growing high where suitable surfaces (trees, cliffs, walls) are available, and also growing as ground cover where there are no vertical surfaces. It is a perennial vine with tuberous roots and rope-like, dark brown stems to 20 m (65 ft) long. It grows up to 20 metres per year and can achieve a height of 30 metres. It has markedly hairy herbaceous stems.
    Pueraria montana is native to East Asia, primarily subtropical and temperate regions of China, Japan, and Korea, with trifoliate leaves composed of three leaflets. Each leaflet is large and ovate with two to three lobes each and hair on the underside. The species can fix atmospheric nitrogen, which can supply up to 95% of leaf nitrogen to the plant in poor soils. Along the vines are nodes, points at which stems or tendrils can propagate to increase support and attach to structures. As a twining vine, kudzu uses stems or tendrils that can extend from any node on the vine to attach to and climb most surfaces. In addition, the nodes of the kudzu vine have the ability to root when exposed to soil, further anchoring the vine to the ground. The roots are tuberous and are high in starch and water content, and the twining of the plant allows for less carbon concentration in the construction of woody stems and greater concentration in roots, which aids root growth.[8] The roots can account for up to 40% of total plant biomass.
    
    Flowers are reddish-purple and yellow, fragrant, similar to pea flowers, about 20–25 millimetres (0.79–0.98 in) wide and are produced at the leaf axis in elongated racemes about 20 centimetres (7.9 in) long. The flowering period extends from July through October. The fruit is a flat hairy pod about 8 centimetres (3.1 in) long with three seeds.
    Kudzu's primary method of reproduction is asexual vegetative spread (cloning) which is aided by the ability to root wherever a stem is exposed to soil. For sexual reproduction, kudzu is entirely dependent on pollinators.
    Although kudzu prefers forest regrowth and edge habitats with high sun exposure, the plant can survive in full sun or partial shade. These attributes of kudzu made it attractive as an ornamental plant for shading porches in the Southeastern United States, but they facilitated the growth of kudzu as it became a “structural parasite” of the southern states, enveloping entire structures when untreated and often referred to as “the vine that ate the south”.`,
    price: 17.99,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Starr_021012-0014_Pueraria_montana_var._lobata.jpg/1200px-Starr_021012-0014_Pueraria_montana_var._lobata.jpg",
    tags: ["full-sun", "fragrant"],
    popularity: 2,
    name: "Kudzu",
    latin: "Pueraria montana",
  },
  {
    id: 6,
    description: `Black nightshade is a common herb or short-lived perennial shrub, found in many wooded areas, as well as disturbed habitats. It reaches a height of 30 to 120 cm (12 to 47 in), leaves 4.0 to 7.5 cm (1.6 to 3.0 in) long and 2 to 5 cm (1 to 2 in) wide; ovate to heart-shaped, with wavy or large-toothed edges; both surfaces hairy or hairless; petiole 1 to 3 cm (0.5 to 1 in) long with a winged upper portion. The flowers have petals greenish to whitish, recurved when aged and surround prominent bright yellow anthers. The berry is mostly 6 to 8 mm (0.24 to 0.31 in) in diam., dull black or purple-black. In India, another strain is found with berries that turn red when ripe.
    Sometimes S. nigrum is confused for the more toxic deadly nightshade (Atropa belladonna), which is in a different genus within Solanaceae. A comparison of the fruit shows that the black nightshade berries grow in bunches, whereas the deadly nightshade berries grow individually.
    Growth habit
    The suited soil pH value of black nightshade is between 5.5 and 6.5. It is rich in organic matter, water and fertility on the strong soil growth, in the lack of organic matter, poor ventilation clay, its roots will be stunted, plant growth is weak, commodity is poor. It is difficult to grow under the condition of high temperature and high humidity, the plant grows slowly, the tender shoot is easy to aging fiber, and the commodity is poor.`,
    price: 31.99,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41qGUQFHigL._AC_SX450_.jpg",
    tags: ["shade", "poisonous"],
    popularity: 6,
    name: "Black nightshade",
    latin: "Solanum nigrum",
  },
  {
    id: 7,
    description: `Epacris longiflora is an erect to spreading shrub which grows to a height of 50–200 cm (20–80 in) and has stems with prominent short, broad leaf scars. The leaves are egg-shaped, 5.6–17 mm (0.2–0.7 in) long, 3–6.6 mm (0.1–0.3 in) wide with a pointed tip. The leaves are thin, flat and have margins with minute teeth. The flowers are red with a white tip, sometimes all red and have a peduncle up to 2 mm (0.08 in) long. There are five petals which are fused to form a tube with five lobes at the end. The tube is 12–27 mm (0.5–1 in) long, 5–6 mm (0.20–0.24 in) in diameter and the lobes are 2.4–4.4 mm (0.09–0.2 in) long. At the base of the petal tube there are whorls of bracts and five sepals 4.5–6 mm (0.18–0.24 in) long. Within the petal tube there is a central style with the stigma at its tip and an ovary at its base. The stamens are hidden inside the tube. Flowering occurs throughout the year, although there are fewer flowers in summer. The fruits are capsules 3–4 mm (0.1–0.2 in) long containing small, light seeds.`,
    price: 28.99,
    img: "https://live.staticflickr.com/3661/3476063258_1a9b235c09_b.jpg",
    tags: ["full-sun", "fragrant"],
    popularity: 8,
    name: "Fuchsia heath",
    latin: "Epacris longiflora",
  },
  {
    id: 8,
    description: `Allium giganteum, common name giant onion, is an Asian species of onion, native to central and southwestern Asia but cultivated in many countries as a flowering garden plant. It is the tallest species of Allium in common cultivation, growing to 1.5 metres (4.9 ft).
    In early to midsummer, small globes of intense purple umbels appear, followed by attractive fruiting umbels. A popular cultivar, 'Globemaster', is shorter (80 centimetres (31 in)) but produces much larger, deep violet, umbels (15–20 centimetres (5.9–7.9 in)). Both varieties have been granted the Royal Horticultural Society's Award of Garden Merit.
    In nature, the species is found in Iran, Afghanistan, Turkey, Turkmenistan, Tajikistan, and Uzbekistan.`,
    price: 23.99,
    img:
      "https://i.pinimg.com/originals/d4/67/ee/d467ee7c9e9b1c09fbb2acd0bc9154e9.jpg",
    tags: ["shade"],
    popularity: 7,
    name: "Giant onion",
    latin: "Allium giganteum",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
