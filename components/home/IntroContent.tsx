import styled from 'styled-components';

const Intro = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 600px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;

  li {
    margin-bottom: 1rem;
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;

const IntroContent = () => {
  return (
    <Intro>
      <header>
        <h1>Welcome to Car Pool Calculator</h1>
        <p>
          Your ultimate tool for optimizing your travel plans while saving costs
          and reducing your carbon footprint!
        </p>
      </header>
      <main>
        <section>
          <Spacer />
          <ol>
            <li>
              <strong>Cost Savings:</strong> By sharing rides with others, you
              can significantly reduce your transportation expenses. Our app
              helps you identify the most economical carpooling arrangements,
              allowing you to split fuel costs and tolls among passengers,
              saving you money.
            </li>
            <li>
              <strong>Carbon Savings:</strong> Every carpooling trip contributes
              to a greener planet by reducing the number of vehicles on the road
              and lowering greenhouse gas emissions. With Car Pool Calculator,
              you can actively participate in environmental conservation efforts
              and make a positive impact on the environment.
            </li>
            <li>
              <strong>Efficiency:</strong> Say goodbye to the hassle of
              coordinating travel plans manually. Our app streamlines the
              process of organizing carpools, saving you time and effort.
              Whether you&apos;re planning a weekend getaway or commuting to
              work, Car Pool Calculator ensures smooth and efficient travel
              arrangements.
            </li>
            <li>
              <strong>Customization:</strong> Tailor your carpooling
              arrangements according to your specific requirements. From
              specifying departure and return dates to selecting the number of
              passengers and drivers, our app offers flexibility to meet your
              unique needs.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Our intuitive interface
              makes it easy for users of all levels to navigate the app and
              create carpooling schedules effortlessly. Whether you&apos;re a
              seasoned carpooler or new to the concept, Car Pool Calculator
              simplifies the process for everyone.
            </li>
            <li>
              <strong>Screenshot and share:</strong> Once you have your carpool
              configured, you can take a screenshot and share it with your
              friends, family or coworkers. This way, everyone knows the plan
              and can join in on the fun.
            </li>
            <li>
              <strong>It&apos;s free!</strong>
            </li>
          </ol>
        </section>
      </main>
      <footer>
        <p>
          Join the movement towards sustainable transportation and
          cost-effective travel with Car Pool Calculator. Start optimizing your
          carpooling arrangements today and experience the benefits of
          collaborative commuting. Let&apos;s ride together for a greener and
          more efficient future!
        </p>
      </footer>
      <Spacer />
    </Intro>
  );
};

export default IntroContent;
