import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const products = [
  {
    title: 'SECVerge AI',
    description:
      'Artificial intelligence platforms, product guidance and administration documentation.',
    link: '/docs/secverge-ai/overview',
  },
  {
    title: 'SECIQ',
    description:
      'IoT, edge security, appliance deployment and operational documentation.',
    link: '/docs/seciq/overview',
  },
  {
    title: 'NeuroSEC',
    description:
      'Security intelligence, architecture and product documentation.',
    link: '/docs/neurosec/overview',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="SECVerge Knowledge Center"
      description="Official SECVerge Technologies documentation, knowledge base and technical blogs.">

      <header
        style={{
          padding: '7rem 1.5rem',
          textAlign: 'center',
          color: '#ffffff',
          background:
            'linear-gradient(120deg, #050b18 0%, #082442 55%, #07505c 100%)',
        }}>

        <div className="container">
          <p
            style={{
              marginBottom: '2rem',
              color: '#62d8ff',
              fontWeight: 700,
              letterSpacing: '0.18em',
            }}>
            SECVERGE TECHNOLOGIES
          </p>

          <Heading
            as="h1"
            style={{
              marginBottom: '1.5rem',
              color: '#ffffff',
              fontSize: 'clamp(2.1rem, 4.9vw, 4.2rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}>

            <span
              style={{
                display: 'inline-block',
                color: 'transparent',
                background:
                  'linear-gradient(90deg, #32b8ff 0%, #4ce2ce 48%, #a56cff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              SECVerge
            </span>

            {' '}Knowledge Center
          </Heading>

          <p
            style={{
              margin: 0,
              color: '#56e2ce',
              fontSize: '1.5rem',
              fontWeight: 600,
            }}>
            Beyond Protection.
          </p>

          <p
            style={{
              maxWidth: '780px',
              margin: '1.5rem auto 0',
              color: '#c1d1df',
              fontSize: '1.15rem',
              lineHeight: 1.7,
            }}>
            Official product documentation, knowledge-base articles,
            troubleshooting resources and technical insights from SECVerge
            Technologies.
          </p>
        </div>
      </header>

      <main className="container margin-vert--xl">
        <section>
          <div className="text--center margin-bottom--xl">
            <Heading as="h2">Explore SECVerge Products</Heading>

            <p>
              Select a product to access its documentation, knowledge base and
              operational guidance.
            </p>
          </div>

          <div className="row">
            {products.map((product) => (
              <div
                className="col col--4 margin-bottom--lg"
                key={product.title}>

                <Link
                  to={product.link}
                  className="card padding--lg"
                  style={{
                    display: 'block',
                    height: '100%',
                    textDecoration: 'none',
                  }}>

                  <Heading as="h3">{product.title}</Heading>

                  <p>{product.description}</p>

                  <strong>Open documentation →</strong>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="margin-vert--xl text--center">
          <Heading as="h2">
            Knowledge Base and Technical Insights
          </Heading>

          <p>
            Access configuration guidance, frequently asked questions,
            troubleshooting procedures, release information and SECVerge
            technical blogs.
          </p>

          <Link
            className="button button--primary margin-right--md"
            to="/docs/intro">
            Browse Documentation
          </Link>

          <Link
            className="button button--secondary"
            to="/blog">
            Read Blogs
          </Link>
        </section>
      </main>
    </Layout>
  );
}