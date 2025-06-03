<template>
  <div class="partners-section">
    <div class="partners-header">
      <span class="bullet-point"></span> WORK WITH US
    </div>
    <h1 class="partners-title">
      Be a part of our growing network of property developers, prefabrication
      subject matter experts, and investors.
    </h1>
    <div class="partners-logos">
      <div class="logo-row" v-for="(row, index) in chunkedLogos" :key="index">
        <img
          v-for="logo in row"
          :key="logo"
          :src="require(`../../images/${logo}`)"
          :alt="logo"
          title="Partner Logo"
          class="partner-logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Secondry_3",
  data() {
    return {
      logos: [
        "modulous.png",
        "manufacton.png",
        "dpr.png",
        "kohler.png",
        "agorus.png",
        "metaloq.png",
        "hilton.png",
        "guerdon.png",
        "khs.png",
        "proset.png",
        "us_modular.png",
        "capsule.png",
      ],
    };
  },
  computed: {
    chunkedLogos() {
      const chunkSize = 6;
      return this.logos.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // Start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);
    },
  },
};
</script>

<style scoped>
.partners-section {
  text-align: center;
  padding: 50px 100px; /* Add more padding on left and right */
  background-color: #f9f9f9;
}

.partners-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: #006400;
  margin-bottom: 20px;
}

.bullet-point {
  width: 8px;
  height: 8px;
  background-color: #006400;
  border-radius: 50%;
  margin-right: 10px;
}

.partners-title {
  font-size: 2.5rem; /* Increase font size */
  font-weight: bold;
  line-height: 1.5;
  color: #000;
  margin-bottom: 40px;
}

.partners-logos {
  display: flex;
  flex-direction: column;
  gap: 40px; /* Increase gap between rows */
}

.logo-row {
  display: flex;
  justify-content: center;
  gap: 50px; /* Increase gap between logos */
}

.partner-logo {
  max-width: 150px; /* Increase logo size */
  height: auto;
  object-fit: contain;
}
.partner-logo:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .partners-logos {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
  }
  .logo-row {
    width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 0;
  }
  .partner-logo {
    flex: 1 1 25%;
    max-width: 25%;
    min-width: 60px;
    margin-bottom: 18px;
    margin-right: 0;
  }
}
</style>
