import ServiceDetailLayout from "@/components/ServiceDetailLayout";

const Activites = () => {
  return (
    <ServiceDetailLayout
      title="Activités"
      subtitle="Aventures et expériences uniques au cœur du Maroc"
      description="Excursions, sports et expériences authentiques pour tous les goûts."
      longDescription="Plongez au cœur de l'aventure marocaine avec notre sélection d'activités uniques. Quad dans le désert, balades à dos de dromadaire, vols en montgolfière, ateliers artisanaux et cours de cuisine... Chaque expérience est une invitation à l'émerveillement et à la découverte."
      heroImage="https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg"
      galleryImages={[
        "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80",
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
        "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1200&q=80",
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=1200&q=80",
      ]}
      features={[
        "Excursions en quad et buggy dans le désert",
        "Balades à dos de dromadaire au coucher du soleil",
        "Vols en montgolfière au-dessus de Marrakech",
        "Cours de cuisine marocaine authentique",
        "Ateliers artisanaux traditionnels",
        "Dîners spectacles avec musique live",
      ]}
      keyFeatures={[
        {
          title: "Encadrement professionnel",
          description: "Toutes nos activités sont encadrées par des professionnels expérimentés",
        },
        {
          title: "Équipement fourni",
          description: "Matériel de qualité inclus pour chaque activité",
        },
        {
          title: "Flexibilité horaire",
          description: "Activités disponibles matin, après-midi ou en soirée selon vos préférences",
        },
        {
          title: "Groupes ou privé",
          description: "Options pour petits groupes ou expériences privées exclusives",
        },
      ]}
      serviceTypes={[
        { name: "Quad & Buggy", description: "Sensations fortes dans le désert d'Agafay ou la palmeraie" },
        { name: "Dromadaire", description: "Balade paisible au coucher du soleil dans les dunes" },
        { name: "Montgolfière", description: "Survol magique de Marrakech et ses environs à l'aube" },
        { name: "Atelier culinaire", description: "Apprenez à préparer tajines, couscous et pâtisseries" },
        { name: "Spectacle fantasia", description: "Dîner traditionnel avec spectacle équestre" },
        { name: "Randonnée", description: "Treks guidés dans les vallées de l'Atlas" },
      ]}
      faqs={[
        {
          question: "Les activités sont-elles adaptées aux enfants ?",
          answer: "Oui, nous proposons des activités adaptées à tous les âges. Les enfants peuvent profiter des balades à dos de dromadaire, des ateliers cuisine et de nombreuses autres expériences. Nous indiquons l'âge minimum recommandé pour chaque activité.",
        },
        {
          question: "Faut-il réserver à l'avance ?",
          answer: "Nous recommandons de réserver au moins 48h à l'avance, surtout en haute saison. Certaines activités comme la montgolfière nécessitent une réservation plus anticipée.",
        },
        {
          question: "Que comprend le prix des activités ?",
          answer: "Le prix inclut généralement le transport aller-retour depuis votre hébergement, l'équipement nécessaire, l'encadrement professionnel et les collations/rafraîchissements selon l'activité.",
        },
        {
          question: "Peut-on annuler une réservation ?",
          answer: "Annulation gratuite jusqu'à 24h avant l'activité. Au-delà, des frais peuvent s'appliquer. En cas de mauvaises conditions météo, nous proposons un report sans frais.",
        },
      ]}
      amenities={[
        {
          category: "Activités aventure",
          items: [
            { name: "Quad", description: "Circuit de 2h dans le désert d'Agafay avec pause thé" },
            { name: "Buggy", description: "Aventure tout-terrain avec pilotage ou passager" },
            { name: "Parapente", description: "Vol en tandem au-dessus de la vallée de l'Ourika" },
            { name: "Rafting", description: "Descente des rapides de l'Oued Ourika" },
          ],
        },
        {
          category: "Expériences culturelles",
          items: [
            { name: "Cours de cuisine", description: "3h d'atelier avec visite du marché et dégustation" },
            { name: "Atelier poterie", description: "Initiation avec un maître artisan de Tamegroute" },
            { name: "Henné", description: "Séance de tatouage traditionnel au henné" },
            { name: "Calligraphie", description: "Découverte de l'art de l'écriture arabe" },
          ],
        },
      ]}
      relatedServices={[
        { title: "Vacances", href: "/services/vacances" },
        { title: "Hébergement", href: "/services/hebergement" },
        { title: "Transport", href: "/services/transport" },
        { title: "Spa", href: "/services/spa" },
      ]}
      tags={["Activités", "Aventure", "Quad", "Dromadaire", "Montgolfière", "Cuisine", "Culture", "Sport", "Excursion", "Marrakech"]}
    />
  );
};

export default Activites;
