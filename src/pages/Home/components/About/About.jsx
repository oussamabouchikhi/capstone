import { Heading, Stack } from '../../../../components';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading>Little Lemon</Heading>
            <p>Oran</p>
          </Stack.Item>

          <p>
          Welcome to Little Lemon, your destination for authentic Algerian cuisine. 
          Inspired by the rich culinary heritage of Algeria, we bring you traditional 
          dishes crafted with love and served with pride. From the flaky layers of {' '}
          <strong>Mhadjeb</strong> to the comforting warmth of Rechta and the flavorful 
          garlic-infused goodness of <strong>Mtewem</strong>, our menu is a celebration 
          of Algeria’s diverse and vibrant food culture.
          </p>
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src="https://i.ytimg.com/vi/x3iesX8AYko/maxresdefault.jpg"
                style={{ objectFit: 'cover', height: '150%' }}
                alt="Little Lemon - Mhadjeb"
              />
            </div>
            <div id="about-second-image">
              <img
                src="https://i.pinimg.com/736x/f2/50/1a/f2501a238f4766024809c1f40d233a10.jpg"
                style={{ objectFit: 'cover' }}
                alt="Little Lemon - Rechta"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
