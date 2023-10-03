import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Jouez tous ensemble',
    Svg: require('@site/static/img/users-solid.svg').default,
    description: (
      <>
        Jouez tous ensemble, même avec votre pote sur
        nintendo switch et celui qui a crack le jeu (le thug).
      </>
    ),
  },
  {
    title: 'Un serveur qui tient la route',
    Svg: require('@site/static/img/server-solid.svg').default,
    description: (
      <>
        Contrairement à l'anné dernière, on a un serveur qui tient
        vraiment la route. Et 10 joueurs.
      </>
    ),
  },
  {
    title: 'Avec plein de trucs nouveaux',
    Svg: require('@site/static/img/puzzle-piece-solid.svg').default,
    description: (
      <>
        Comme des biomes customs, des nouveau minerais, une
        dynamp, du voice chat, des villes. Que faire de plus ?
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
