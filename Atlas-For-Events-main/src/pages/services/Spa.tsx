import ServiceDetailLayout from "@/components/ServiceDetailLayout";

const Spa = () => {
  return (
    <ServiceDetailLayout
      title="Spa"
      subtitle="Détente et bien-être à la marocaine"
      description="Hammam traditionnel et soins de bien-être authentiques."
      longDescription="Offrez-vous une parenthèse de sérénité avec nos soins spa exclusifs. Hammam traditionnel marocain, gommage au savon noir, massages relaxants à l'huile d'argan... Ressourcez-vous dans les meilleurs spas du Maroc et découvrez les rituels de beauté ancestraux transmis de génération en génération."
      heroImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80"
      galleryImages={[
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80",
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&q=80",
      ]}
      features={[
        "Hammam traditionnel marocain authentique",
        "Gommage au savon noir et ghassoul",
        "Massages à l'huile d'argan bio",
        "Soins du visage aux produits naturels",
        "Rituels de beauté ancestraux",
        "Bains aromatiques aux huiles essentielles",
      ]}
      keyFeatures={[
        {
          title: "Produits naturels",
          description: "Utilisation exclusive de produits naturels et locaux : argan, rose, ghassoul",
        },
        {
          title: "Praticiens experts",
          description: "Soins prodigués par des professionnels formés aux techniques traditionnelles",
        },
        {
          title: "Cadre authentique",
          description: "Spas sélectionnés pour leur ambiance et leur respect des traditions",
        },
        {
          title: "Sur mesure",
          description: "Programmes personnalisés selon vos besoins et préférences",
        },
      ]}
      serviceTypes={[
        { name: "Hammam traditionnel", description: "Bain de vapeur suivi d'un gommage au savon noir et ghassoul" },
        { name: "Massage relaxant", description: "Massage corps complet à l'huile d'argan ou d'amande" },
        { name: "Soin visage", description: "Nettoyage, gommage et masque aux produits naturels" },
        { name: "Rituel complet", description: "Forfait combinant hammam, gommage, massage et soin visage" },
        { name: "Soin des mains", description: "Manucure traditionnelle avec henné en option" },
        { name: "Enveloppement", description: "Soin corps au rhassoul ou à l'argile du désert" },
      ]}
      faqs={[
        {
          question: "Que comprend un hammam traditionnel ?",
          answer: "Le hammam traditionnel comprend une séance dans le bain de vapeur, suivie d'un gommage vigoureux au savon noir avec le gant kessa, puis un masque au ghassoul. L'expérience dure environ 1h30.",
        },
        {
          question: "Les soins sont-ils mixtes ?",
          answer: "Nous proposons des créneaux séparés ou des espaces dédiés pour les hommes et les femmes. Des séances en couple sont également possibles dans certains établissements.",
        },
        {
          question: "Faut-il apporter quelque chose ?",
          answer: "Tout est fourni sur place : serviettes, peignoirs, chaussons et produits de soin. Nous recommandons simplement d'apporter un maillot de bain.",
        },
        {
          question: "Ces soins conviennent-ils aux peaux sensibles ?",
          answer: "Oui, nos praticiens adaptent l'intensité des soins et les produits utilisés selon votre type de peau. Signalez toute allergie ou sensibilité lors de la réservation.",
        },
      ]}
      amenities={[
        {
          category: "Soins du corps",
          items: [
            { name: "Gommage", description: "Exfoliation au savon noir et gant kessa traditionnel" },
            { name: "Massage", description: "Techniques relaxantes ou dynamisantes selon vos besoins" },
            { name: "Enveloppement", description: "Soins détoxifiants à l'argile ou aux algues" },
            { name: "Hydrothérapie", description: "Bains aux huiles essentielles et sels minéraux" },
          ],
        },
        {
          category: "Soins beauté",
          items: [
            { name: "Visage", description: "Nettoyage profond et hydratation aux actifs naturels" },
            { name: "Henné", description: "Art du tatouage temporaire traditionnel" },
            { name: "Coiffure", description: "Soins capillaires à l'huile d'argan" },
            { name: "Manucure", description: "Soins des mains et des ongles" },
          ],
        },
      ]}
      relatedServices={[
        { title: "Vacances", href: "/services/vacances" },
        { title: "Activités", href: "/services/activites" },
        { title: "Hébergement", href: "/services/hebergement" },
        { title: "Transport", href: "/services/transport" },
      ]}
      tags={["Spa", "Hammam", "Massage", "Bien-être", "Détente", "Argan", "Beauté", "Relaxation", "Traditionnel", "Naturel"]}
    />
  );
};

export default Spa;
