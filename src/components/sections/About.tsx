import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className='container mx-auto '>
      <Image
        src='/images/Anastasia_2.jpg'
        alt='Anastasia Cozarevici'
        className='rounded-lg my-1 w-full mask mask-squircle sm:hidden'
        width={200}
        height={200}
      />
      <h1 className='text-2xl font-bold mb-4'>Hallo!</h1>
      <p>Ich bin Anastasia, Grafikdesignerin und Content-Creator.</p>
      <br />
      <div className='prose'>
        <p>
          Ich habe meine Ausbildung zur Grafikdesignerin an der Designschule in
          Schwerin abgeschlossen, wo ich umfassende Kenntnisse und praktische
          Fähigkeiten in verschiedenen Bereichen des Designs erworben habe. Mein
          Ausbildungsweg war voller Projekte und Aufgaben, die mir geholfen
          haben, kreatives Denken und technische Fähigkeiten zu entwickeln.
        </p>
        <br />
        <h2 className='text-2xl'>Meine Fähigkeiten und Kenntnisse:</h2>
        <ul>
          <li>
            <strong>Corporate Design:</strong> Erstellung einzigartiger und
            einprägsamer Marken, Entwicklung von Logos, Corporate Identity und
            Werbematerialien.
          </li>
          <li>
            <strong>Plakatdesign:</strong> Gestaltung attraktiver und
            informativer Plakate für verschiedene Veranstaltungen und
            Werbekampagnen.
          </li>
          <li>
            <strong>Webdesign:</strong> Erstellung moderner und
            benutzerfreundlicher Websites, einschließlich der Arbeit mit
            WordPress und dem Elementor-Plugin.
          </li>
          <li>
            <strong>Editorial Design:</strong> Gestaltung von Magazinen, Büchern
            und anderen Printpublikationen.
          </li>
          <li>
            <strong>Motion Design:</strong> Erstellung von Animationen und
            Videoeffekten mit Adobe After Effects.
          </li>
        </ul>
        <br />
        <h2 className='text-2xl'>Technische Fähigkeiten:</h2>
        <ul>
          <li>
            <strong>Adobe Creative Suite:</strong> Professionelle Beherrschung
            von Photoshop, Illustrator, InDesign und After Effects.
          </li>
          <li>
            <strong>Figma:</strong> Entwicklung von Prototypen und Interfaces.
          </li>
          <li>
            <strong>WordPress:</strong> Erstellung und Verwaltung von Websites
            mit Elementor.
          </li>
        </ul>
        <br />
        <h2 className='text-2xl'>Über mich:</h2>
        <p>
          Ich bin eine kommunikative Person, die leicht eine Verbindung zu
          anderen Menschen findet. Meine Kollegen schätzen meine harte Arbeit
          und mein Engagement für die kontinuierliche Weiterentwicklung meiner
          Fähigkeiten. Für mich ist kreative Arbeit nicht nur ein Beruf, sondern
          eine Lebensweise. Ich strebe danach, eine echte Expertin zu werden und
          einen Beitrag zur Entwicklung des Unternehmens zu leisten, in dem ich
          arbeite.
        </p>
        <p>
          Ich habe immer viele Ideen und liebe es, diese in die Realität
          umzusetzen. Ich bin überzeugt, dass die Vereinigung von Ideen im Team
          zu etwas wirklich Genialem führen kann. Ich bin bereit für neue
          Herausforderungen und freue mich darauf, mit Ihnen zusammenzuarbeiten.
        </p>
        <br />
      </div>
    </div>
  );
}
