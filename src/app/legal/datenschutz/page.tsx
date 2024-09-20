import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Datenschutz</h1>
        <div className='prose'>
          <p>
            Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ich
            behandle Ihre personenbezogenen Daten vertraulich und entsprechend
            der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p>
            Die Nutzung meiner Website ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf meinen Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </p>
          <br />
          <h2 className='text-lg'>Server-Log-Files</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Log Files, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp/ Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p>
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu
            prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige
            Nutzung bekannt werden.
          </p>
          <br />
          <h2 className='text-lg'>Cookies</h2>
          <p>
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
            richten auf Ihrem Rechner keinen Schaden an und enthalten keine
            Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
            effektiver und sicherer zu machen. Cookies sind kleine Textdateien,
            die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>
          <p>
            Die meisten der von uns verwendeten Cookies sind so genannte
            „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
            gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis
            Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser
            beim nächsten Besuch wiederzuerkennen.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
            Cookies informiert werden und Cookies nur im Einzelfall erlauben,
            die Annahme von Cookies für bestimmte Fälle oder generell
            ausschließen sowie das automatische Löschen der Cookies beim
            Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies
            kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <br />
          <h2 className='text-lg'>Auskunft, Löschung, Sperrung</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an mich wenden.
          </p>
          <br />
          <h2 className='text-lg'>Widerspruch Werbe-Mails</h2>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen. Die
            Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
            im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-E-Mails, vor.
          </p>
        </div>
        <Link href='/' className='btn btn-accent mt-4'>
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
