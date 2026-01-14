import { motion } from "framer-motion";
import { Truck, Shield, Package, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: "sculpture-tigre",
    title: "Sculpture de Tigre",
    description: "Patiné pour créer des nuances de couleur profondes, cette sculpture de tigre ajoute une touche sauvage et captivante.",
    price: "1 200€",
    promoPrice: "950€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_446105775_1447896869153270_1767624893679144948_n.jpg",
  },
  {
    id: "sculpture-francaise",
    title: "Décor Rustique Français",
    description: "Une pièce d'artisanat qui apporte une touche de caractère français et une allure rustique raffinée.",
    price: "2 100€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_405526959_2086872588329838_7097565981473782259_n.jpg",
  },
  {
    id: "masque-fer",
    title: "Masque en Fer",
    description: "Symbolise la force, la permanence et la protection. Véhicule des émotions et messages spécifiques.",
    price: "400€",
    promoPrice: "300€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_404625983_918108063167758_456017404151619637_n.jpg",
  },
  {
    id: "sculpture-love",
    title: "Sculpture 'Love'",
    description: "Bien plus qu'un simple mot, c'est un signe universel de connexion profonde et d'affection sincère.",
    price: "1 200€",
    promoPrice: "1 000€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_426362713_1416635565605604_5737235251505988302_n.jpg",
  },
  {
    id: "sculpture-coeur",
    title: "Cœur en Métal",
    description: "Une œuvre d'art unique combinant la symbolique de l'amour avec la robustesse du métal.",
    price: "350€",
    promoPrice: "250€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_363397227_1276068149703332_8660124873249972597_n.jpg",
  },
  {
    id: "musicien-traditionnel",
    title: "Musicien Traditionnel",
    description: "Fusionne la richesse culturelle de la musique folklorique avec l'élégance du métal.",
    price: "1 200€",
    promoPrice: "950€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_366468486_1336392386950978_4583135099507275873_n.jpg",
  },
  {
    id: "sculpture-poulpe",
    title: "Sculpture de Poulpe",
    description: "Célébration de la beauté naturelle et de la créativité artistique, transformant un être marin en œuvre d'art.",
    price: "600€",
    promoPrice: "500€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_336314321_949159476214796_2713949355795524875_n.jpg",
  },
  {
    id: "moto-classique",
    title: "Moto Classique en Fer",
    description: "Capture l'essence de l'âge d'or des deux-roues avec la solidité et la durabilité du métal.",
    price: "600€",
    promoPrice: "480€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_340175591_1218518492113323_5604309101263040371_n.jpg",
  },
  {
    id: "danseuse",
    title: "Danseuse en Métal",
    description: "Capture le moment suspendu d'une danseuse en pleine performance, travail artistique du métal.",
    price: "1 200€",
    promoPrice: "950€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_350855543_821640626376442_2563639300462206681_n.jpg",
  },
  {
    id: "chevaux-coeur",
    title: "Chevaux en Cœur",
    description: "Deux chevaux en fer entrelacés formant un cœur, symbolisant l'amour et l'harmonie.",
    price: "600€",
    promoPrice: "490€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_352742043_832002301777708_1043833392189585069_n.jpg",
  },
  {
    id: "aloe-vera",
    title: "Aloe Vera en Fer",
    description: "Représente la résilience et la pérennité, associant la guérison à la force du métal.",
    price: "1 200€",
    promoPrice: "950€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_356247948_218060877792856_870404231871872033_n.jpg",
  },
  {
    id: "chien-gardien",
    title: "Chien Gardien",
    description: "Sculpture de chien en fer incarnant la force, la protection et la vigilance.",
    price: "1 000€",
    promoPrice: "900€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_332804900_190977726888807_420786158872697835_n.jpg",
  },
  {
    id: "chien-majestueux",
    title: "Chien Majestueux",
    description: "Magnifique sculpture de chien fabriquée à partir de pièces métalliques recyclées.",
    price: "600€",
    promoPrice: "490€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_333191225_182544461143385_1641709296420581110_n.jpg",
  },
  {
    id: "table-fer",
    title: "Table en Fer Forgé",
    description: "Touche industrielle chic, combine fonctionnalité et design raffiné.",
    price: "600€",
    promoPrice: "490€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_333083288_763474918538476_7013887538194844501_n.jpg",
  },
  {
    id: "cheval-metallique",
    title: "Cheval Métallique",
    description: "Fusion unique entre force brute et élégance, forgée à partir de pièces mécaniques.",
    price: "600€",
    promoPrice: "480€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_334185902_197191692912242_6089816500759657632_n.jpg",
  },
  {
    id: "gorille-rouge",
    title: "Gorille en Fer Rouge",
    description: "Symbolique de force et de protection, pièce artistique imposante de 1,8m.",
    price: "600€",
    promoPrice: "490€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_323841078_716556763318356_5348694906768779134_n.jpeg",
  },
  {
    id: "fee-sculpture",
    title: "Fée en Fer",
    description: "Symbole de grâce et de résilience, chef-d'œuvre alliant force et beauté féerique.",
    price: "3 500€",
    promoPrice: "3 000€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_323937554_465605432447126_2009281168850065877_n.jpeg",
  },
  {
    id: "lion-majestueux",
    title: "Lion Majestueux",
    description: "Touche de grandeur incarnant la puissance et la noblesse du roi des animaux.",
    price: "2 500€",
    promoPrice: "2 200€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_327563158_162827876502835_3674423743897636290_n.jpg",
  },
  {
    id: "cactus-bleu",
    title: "Cactus Figue de Barbarie",
    description: "Symbole de résilience et d'art contemporain, touche unique en métal bleu.",
    price: "600€",
    promoPrice: "480€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_324393054_203940202118371_5761780136401158672_n.jpeg",
  },
  {
    id: "cactus-artistique",
    title: "Cactus Artistique",
    description: "Sculpture décorative inspirée de la nature, allie élégance et robustesse.",
    price: "600€",
    promoPrice: "460€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_324070855_199349772650401_5703573515266047967_n.jpeg",
  },
  {
    id: "coeur-recycle",
    title: "Cœur en Pièces Auto",
    description: "Sculpture 'Love' en pièces auto recyclées, symbolisant l'amour et la connexion.",
    price: "2 000€",
    promoPrice: "1 500€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_323953202_218768757254423_4496043203147168358_n.jpeg",
  },
];

const Boutique = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-atlas-gold/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-atlas-gold font-medium mb-4 block">Artisanat Marocain</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Sculptures en <span className="text-primary">Fer Forgé</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez notre collection unique de sculptures en fer, créées par des artisans 
              marocains talentueux. Chaque pièce est une œuvre d'art authentique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Livraison Internationale", description: "Expédition sécurisée partout dans le monde" },
              { icon: Shield, title: "Garantie Qualité", description: "Pièces uniques faites à la main" },
              { icon: Package, title: "Emballage Sécurisé", description: "Protection optimale pour le transport" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.promoPrice && (
                    <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Promo
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    {product.promoPrice ? (
                      <>
                        <span className="text-primary font-bold text-lg">{product.promoPrice}</span>
                        <span className="text-muted-foreground line-through text-sm">{product.price}</span>
                      </>
                    ) : (
                      <span className="text-primary font-bold text-lg">{product.price}</span>
                    )}
                  </div>

                  <Button asChild className="w-full" size="sm">
                    <Link to="/contact">
                      Commander
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Art & <span className="text-primary">Artisanat</span> Marocain
              </h2>
              <p className="text-muted-foreground mb-6">
                Nos sculptures en fer sont créées par des artisans marocains passionnés qui 
                perpétuent un savoir-faire ancestral. Chaque pièce est unique, façonnée à la main 
                avec soin et précision.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Pièces uniques fabriquées à la main",
                  "Fer recyclé et éco-responsable",
                  "Livraison internationale sécurisée",
                  "Emballage professionnel anti-choc",
                  "Accompagnement pour les formalités douanières",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_334185902_197191692912242_6089816500759657632_n.jpg"
                alt="Artisanat"
                className="rounded-2xl aspect-[3/4] object-cover"
              />
              <img
                src="https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_327563158_162827876502835_3674423743897636290_n.jpg"
                alt="Sculpture"
                className="rounded-2xl aspect-[3/4] object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Envie d'une pièce unique ?
            </h2>
            <p className="text-white/80 mb-8">
              Contactez-nous pour des commandes personnalisées, des devis de livraison 
              internationale ou toute question sur nos œuvres.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Boutique;
