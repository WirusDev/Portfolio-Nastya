import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import About from "@/components/sections/About";
const HomePage = () => {
  return (
    <div>
      <main className=''>
        <div role='tablist' className='tabs tabs-lifted tabs-lg '>
          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab'
            aria-label='About'
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-base-300 rounded-box p-6'
          >
            <About />
          </div>
          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab'
            aria-label='Lebenslauf'
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-base-300 rounded-box p-6'
          >
            <Timeline />
          </div>

          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab'
            aria-label='Projekte'
            defaultChecked
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-base-300 rounded-box p-6 '
          >
            <Projects />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
