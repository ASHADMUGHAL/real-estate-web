<template>
  <div class="standardized-design-container">
    <div class="content-wrapper">
      <div class="image-container">
        <img :src="main_c" alt="Standardized building design" />
      </div>
      <div class="text-container">
        <h2>Leading Partner Ecosystem</h2>
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
  name: "main_c",
  data() {
    return {
      main_c: require("../../images/main_c.png"),
    };
  },
};
</script>

<style scoped>
.standardized-design-container {
  font-family: "Arial", sans-serif;
  padding: 80px;
  background-color: #f9f9f9;
  display: flex;
  padding-bottom: 30px;

  justify-content: center;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  display: flex;
  background-color: white;
  border: white solid 25px;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.05);
}

.image-container {
  width: 65%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.text-container {
  width: 35%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 24px;
  margin: 0 0 20px 0;
  color: #000;
  font-weight: 600;
}

p {
  font-size: 14px;
  line-height: 1.5;
  color: #555;
  margin: 0 0 30px 0;
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
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }

  .image-container,
  .text-container {
    width: 100%;
  }
}
</style>
