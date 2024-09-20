import Link from "next/link";

const Impressum = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-base-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Impressum</h1>
        <div className='prose'>
          <h2 className='text-lg'>Angaben gemäß § 5 TMG</h2>
          <p>
            Anastasia Cozarevici
            <br />
            19057 Schwerin
          </p>
          <br />
          <h2 className='text-lg'>Kontakt</h2>
          <p>
            <br />
            E-Mail:{" "}
            <a
              href='mailto:contact@an-co-design.de'
              className='text-blue-500 underline'
            >
              contact@an-co-design.de
            </a>
          </p>
        </div>
        <br />
        <Link href='/' className='btn btn-accent mt-4'>
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default Impressum;
