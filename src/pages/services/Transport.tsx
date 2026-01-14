import ServiceDetailLayout from "@/components/ServiceDetailLayout";

const Transport = () => {
  return (
    <ServiceDetailLayout
      title="Transport"
      subtitle="Voyagez en toute sérénité au Maroc"
      description="Location de voitures, chauffeur personnel et transferts aéroport."
      longDescription="Voyagez en toute sérénité avec notre flotte de véhicules modernes et nos chauffeurs professionnels. Des transferts aéroport aux circuits privés, nous vous accompagnons partout au Maroc avec ponctualité, confort et professionnalisme. Profitez du paysage sans vous soucier de la route."
      heroImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80"
      galleryImages={[
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
      ]}
      features={[
        "Location de voitures toutes catégories",
        "Chauffeur personnel francophone",
        "Prise en charge et transfert aéroport",
        "Transferts hôtel inter-villes",
        "Circuits privés sur mesure",
        "Service disponible 24h/24, 7j/7",
      ]}
      keyFeatures={[
        {
          title: "Flotte moderne",
          description: "Véhicules récents, climatisés et parfaitement entretenus",
        },
        {
          title: "Chauffeurs expérimentés",
          description: "Conducteurs professionnels, ponctuels et connaissant parfaitement le territoire",
        },
        {
          title: "Flexibilité totale",
          description: "Modification d'itinéraire possible, arrêts photos, pauses selon vos envies",
        },
        {
          title: "Tarifs transparents",
          description: "Devis détaillé sans frais cachés, carburant et péages inclus",
        },
      ]}
      serviceTypes={[
        { name: "Transfert aéroport", description: "Accueil à l'arrivée et dépôt au départ, ponctualité garantie" },
        { name: "Location véhicule", description: "Voitures économiques aux 4x4, avec ou sans chauffeur" },
        { name: "Chauffeur privé", description: "Mise à disposition d'un chauffeur à la journée ou demi-journée" },
        { name: "Circuit privé", description: "Excursions et circuits avec itinéraire personnalisé" },
        { name: "Minibus groupe", description: "Transport de groupes jusqu'à 20 personnes" },
        { name: "VTC premium", description: "Véhicules haut de gamme pour vos déplacements d'affaires" },
      ]}
      faqs={[
        {
          question: "Les chauffeurs parlent-ils français ?",
          answer: "Oui, tous nos chauffeurs sont francophones. Nous proposons également des chauffeurs anglophones, hispanophones ou arabophones sur demande.",
        },
        {
          question: "Les sièges enfants sont-ils disponibles ?",
          answer: "Oui, nous fournissons des sièges auto adaptés à l'âge de vos enfants sans supplément. Précisez le nombre et l'âge des enfants lors de la réservation.",
        },
        {
          question: "Que se passe-t-il en cas de retard d'avion ?",
          answer: "Nous suivons les vols en temps réel. En cas de retard, votre chauffeur vous attendra sans frais supplémentaires. Nous vous contacterons pour vous tenir informé.",
        },
        {
          question: "Peut-on modifier l'itinéraire en cours de route ?",
          answer: "Absolument, nos chauffeurs sont flexibles. Vous pouvez demander des arrêts supplémentaires, modifier la destination ou prolonger la durée selon vos envies.",
        },
      ]}
      amenities={[
        {
          category: "Catégories de véhicules",
          items: [
            { name: "Économique", description: "Citadines idéales pour les déplacements urbains" },
            { name: "Confort", description: "Berlines spacieuses pour les longs trajets" },
            { name: "SUV/4x4", description: "Véhicules adaptés aux pistes et routes de montagne" },
            { name: "Premium", description: "Véhicules haut de gamme pour une expérience luxe" },
          ],
        },
        {
          category: "Services inclus",
          items: [
            { name: "Climatisation", description: "Tous nos véhicules sont climatisés" },
            { name: "Eau fraîche", description: "Bouteilles d'eau à disposition dans le véhicule" },
            { name: "Wi-Fi", description: "Connexion internet mobile sur demande" },
            { name: "Assurance", description: "Assurance tous risques incluse" },
          ],
        },
      ]}
      relatedServices={[
        { title: "Vacances", href: "/services/vacances" },
        { title: "Activités", href: "/services/activites" },
        { title: "Hébergement", href: "/services/hebergement" },
        { title: "Spa", href: "/services/spa" },
      ]}
      tags={["Transport", "Chauffeur", "Location", "Transfert", "Aéroport", "4x4", "VTC", "Privé", "Circuit", "Maroc"]}
    />
  );
};

export default Transport;
