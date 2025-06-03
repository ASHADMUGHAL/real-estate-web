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
  .partners-section {
    padding: 40px 20px;
  }

  .partners-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .partners-logos {
    gap: 30px;
  }

  .logo-row {
    gap: 30px;
  }

  .partner-logo {
    max-width: 120px;
  }
}

@media (max-width: 375px) {
  .partners-section {
    padding: 30px 15px;
  }

  .partners-header {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }

  .partners-title {
    font-size: 1.5rem;
    margin-bottom: 25px;
    line-height: 1.3;
  }

  .partners-logos {
    gap: 20px;
  }

  .logo-row {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .partner-logo {
    max-width: 100px;
    margin: 10px;
  }
}
</style>
