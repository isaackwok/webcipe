import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Blog',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        什麼都寫
      </>
    ),
  },
  {
    title: 'Tech Notes',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        針對技術實作內容的筆記
      </>
    ),
  },
  {
    title: 'Anything Else',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        為了放滿三張圖，只好留下這一塊，但是不知道要寫什麼
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
