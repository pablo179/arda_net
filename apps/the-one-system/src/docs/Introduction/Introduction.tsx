import React from 'react';
import styles from './_introduction.module.css';
import IntroImg from '../../assets/intro.png';
import oneLogo from '../../assets/theOneLogo.svg';

const Introduction = () => {
  return (
    <div className="container mx-auto flex w-5/6 h-full items-center overflow-hidden">
      <div className="container__col w-7/12">
        <img className={styles.oneLogo} src={oneLogo} alt="The One System" />
        <div className="p-8">
          <p className="mt-2 text-pretty text-lg ">
            "One system to rull them all, one system to find them, one system to
            bring them all, and in the legacy bind them."
          </p>
        </div>
        <div className="flex justify-end gap-6">
          <button>Hola</button>
          <button>Otro</button>
        </div>
      </div>
      <div className="center container__col w-5/12">
        <img className={styles.introImg} src={IntroImg} alt="The One System" />
      </div>
    </div>
  );
};

export default Introduction;
