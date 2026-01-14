import ServiceDetailLayout from "@/components/ServiceDetailLayout";

const Hebergement = () => {
  return (
    <ServiceDetailLayout
      title="Hébergement"
      subtitle="Séjournez dans les plus beaux établissements du Maroc"
      description="Sélection des meilleurs hébergements : riads, hôtels, villas et appartements."
      longDescription="Nous sélectionnons pour vous les meilleurs établissements du Maroc, alliant authenticité marocaine et confort moderne. Des riads traditionnels de la médina aux villas privées avec piscine, en passant par les camps de luxe dans le désert, chaque hébergement est choisi pour vous offrir une expérience unique."
      heroImage="https://atlasforevents.com/wp-content/uploads/2024/08/419760597_677102024567035_474413547800764016_n.jpg"
      galleryImages={[
        "https://atlasforevents.com/wp-content/uploads/2024/08/419760597_677102024567035_474413547800764016_n.jpg",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
      ]}
      features={[
        "Riads traditionnels dans les médinas historiques",
        "Hôtels de charme et boutique-hôtels",
        "Villas privées avec piscine et personnel",
        "Appartements équipés pour familles",
        "Camps de luxe dans le désert du Sahara",
        "Kasbahs authentiques dans les montagnes",
      ]}
      keyFeatures={[
        {
          title: "Sélection rigoureuse",
          description: "Chaque établissement est personnellement visité et validé par notre équipe",
        },
        {
          title: "Rapport qualité-prix",
          description: "Les meilleurs tarifs négociés grâce à nos partenariats privilégiés",
        },
        {
          title: "Services personnalisés",
          description: "Demandes spéciales prises en compte : décoration, surprises, régimes alimentaires",
        },
        {
          title: "Localisation stratégique",
          description: "Emplacements idéaux pour profiter au maximum de chaque destination",
        },
      ]}
      serviceTypes={[
        { name: "Riad", description: "Maison traditionnelle avec patio central, ambiance intimiste" },
        { name: "Hôtel de charme", description: "Établissements boutique alliant confort et caractère" },
        { name: "Villa privée", description: "Résidences avec piscine, jardin et personnel de maison" },
        { name: "Camp désert", description: "Tentes de luxe au cœur des dunes avec confort moderne" },
        { name: "Kasbah", description: "Forteresses traditionnelles rénovées en hôtels d'exception" },
        { name: "Appartement", description: "Logements indépendants idéaux pour les longs séjours" },
      ]}
      faqs={[
        {
          question: "Quels équipements sont disponibles dans les riads ?",
          answer: "La plupart des riads offrent climatisation, Wi-Fi, petit-déjeuner inclus, terrasse, et parfois piscine ou spa. Nous vérifions les équipements selon vos besoins spécifiques.",
        },
        {
          question: "Peut-on réserver pour un groupe ?",
          answer: "Oui, nous gérons les réservations de groupe et pouvons privatiser des riads ou villas entières. Nous proposons également des tarifs négociés pour les groupes.",
        },
        {
          question: "Les hébergements acceptent-ils les animaux ?",
          answer: "Certains établissements acceptent les animaux de compagnie. Précisez-le lors de votre demande et nous trouverons l'hébergement adapté.",
        },
        {
          question: "Comment fonctionne le petit-déjeuner ?",
          answer: "Le petit-déjeuner marocain traditionnel est généralement inclus : msemen, beghrir, confitures maison, jus d'orange frais, thé à la menthe. Des options occidentales sont souvent disponibles.",
        },
      ]}
      amenities={[
        {
          category: "Équipements standards",
          items: [
            { name: "Climatisation", description: "Système de climatisation réversible dans les chambres" },
            { name: "Wi-Fi", description: "Connexion internet haut débit gratuite" },
            { name: "Coffre-fort", description: "Coffre individuel pour vos objets de valeur" },
            { name: "Room service", description: "Service en chambre disponible sur demande" },
          ],
        },
        {
          category: "Services premium",
          items: [
            { name: "Piscine", description: "Piscine privée ou partagée selon l'établissement" },
            { name: "Spa", description: "Accès hammam et soins bien-être" },
            { name: "Conciergerie", description: "Service de conciergerie pour vos demandes" },
            { name: "Chef privé", description: "Option de chef à domicile pour vos repas" },
          ],
        },
      ]}
      relatedServices={[
        { title: "Vacances", href: "/services/vacances" },
        { title: "Activités", href: "/services/activites" },
        { title: "Transport", href: "/services/transport" },
        { title: "Spa", href: "/services/spa" },
      ]}
      tags={["Hébergement", "Riad", "Hôtel", "Villa", "Kasbah", "Désert", "Marrakech", "Fès", "Luxe", "Authentique"]}
    />
  );
};

export default Hebergement;
