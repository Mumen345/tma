<script setup>
import FeaturesView from './FeaturesView.vue';
import HeroSection from './HeroSection.vue';
import OurServices from './OurServices.vue';
import SecondSection from './SecondSection.vue';
import TrustedView from './TrustedView.vue';
import ProjectsView from './ProjectsView.vue';
import FooterView from './FooterView.vue';
import BaseFooter from './BaseFooter.vue';


</script>

<template>
  <div>
    <HeroSection />
    <SecondSection />
    <OurServices id="Services" />
    <TrustedView />
    <FeaturesView id="Pricing" />
    <ProjectsView id="Projects" />
    <FooterView />
    <BaseFooter />
  </div>
</template>


