<template>
  <div class="standardized-design-container">
    <div class="content-wrapper">
      <div class="image-container">
        <img :src="main_a" alt="Standardized building design" />
      </div>
      <div class="text-container">
        <h2>Standardized Designs</h2>
        <p>
          Design prototypes optimized for modular prefabrication with expedited
          massing, layouts, finishes and options. 80% factory permit set to save
          design cost and time.
        </p>
        <button class="cta-button">
          Schedule a call
          <span class="arrow-icon">→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main_a",
  data() {
    return {
      main_a: require("../../images/main_a.png"),
    };
  },
};
</script>

<style scoped>
.standardized-design-container {
  font-family: "Arial", sans-serif;
  padding: 40px 20px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  display: flex;
  background-color: white;
  border: white solid 15px;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.05);
  flex-direction: column;
}

.image-container {
  width: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.text-container {
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 22px;
  margin: 0 0 15px 0;
  color: #000;
  font-weight: 600;
}

p {
  font-size: 14px;
  line-height: 1.5;
  color: #555;
  margin: 0 0 25px 0;
}

.cta-button {
  background-color: #2a6c3b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  width: fit-content;
}

.arrow-icon {
  margin-left: 8px;
}

.image-container:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .standardized-design-container {
    padding: 80px;
  }

  .content-wrapper {
    flex-direction: row;
    border: white solid 25px;
  }

  .image-container {
    width: 65%;
  }

  .text-container {
    width: 35%;
    padding: 40px 30px;
  }

  h2 {
    font-size: 24px;
    margin: 0 0 20px 0;
  }

  p {
    margin: 0 0 30px 0;
  }
}

@media (max-width: 375px) {
  .standardized-design-container {
    padding: 20px 15px;
  }

  .content-wrapper {
    border: white solid 10px;
  }

  .text-container {
    padding: 20px 15px;
  }

  h2 {
    font-size: 20px;
    margin: 0 0 12px 0;
  }

  p {
    font-size: 13px;
    margin: 0 0 20px 0;
  }

  .cta-button {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>
