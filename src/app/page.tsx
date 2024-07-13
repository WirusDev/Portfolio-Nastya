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
            className='tab [--tab-border-color:#fd62d9]'
            aria-label='About'
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-200 border-primary md:w-[60%]  rounded-box p-6'
          >
            <About />
          </div>
          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab [--tab-border-color:#fd62d9]'
            aria-label='Lebenslauf'
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-primary rounded-box p-6'
          >
            <Timeline />
          </div>

          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab [--tab-border-color:#fd62d9]'
            aria-label='Projekte'
            defaultChecked
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-primary rounded-box p-6 '
          >
            <Projects />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
