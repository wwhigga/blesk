import React from 'react';
import AboutUsContent from '../components/AboutUsContent/AboutUsContent';
import Team from '../components/Team/Team';
import RequestForm from '../components/RequestForm/RequestForm';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const AboutPage = () => {
  return (
    <AnimatedPage>
      <AboutUsContent />
      <Team />
      <RequestForm />
    </AnimatedPage>
  );
};

export default AboutPage; 