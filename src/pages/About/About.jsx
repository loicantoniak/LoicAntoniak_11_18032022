import React from "react";
import Banner from "../../components/Banner/Banner";
import mountain from "../../assets/images/moutain.png";
import Accordion from "../../components/Accordion/Accordion";

export default function About() {
  return (
    <>
      <Banner image={mountain} alt="montagne" variant="big" />
      <div className="section">
        <Accordion title="Fiabilité" variant="big">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Accordion>
        <Accordion title="Respect" variant="big">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Accordion>
        <Accordion title="Service" variant="big">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Accordion>
        <Accordion title="Responsabilité" variant="big">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Accordion>
      </div>
    </>
  );
}
