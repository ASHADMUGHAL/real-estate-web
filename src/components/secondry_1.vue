<template>
  <div class="benefits-section">
    <div class="benefits-header">
      <div class="bullet"><span class="bullet-point"></span> OUR BENEFITS</div>
      <h1 class="main-heading">
        RaaP helps property developers and project partners make prefabrication
        viable for multifamily and hospitality projects.
      </h1>
    </div>

    <div class="benefits-content">
      <div class="image-container">
        <img
          :src="benefitsImage"
          alt="Hotel pool with building in background"
          class="benefits-image"
        />
      </div>

      <div class="benefits-list">
        <div class="benefit-item">
          <h2 class="benefit-title">Budget Hotel Developers</h2>
          <p class="benefit-description">
            Gain cost certainty early in the project through effective price
            comparison of options, so you can drive money and time savings.
          </p>
          <a href="#" class="service-link"
            >Service Details <span class="arrow">↗</span></a
          >
        </div>

        <div class="benefit-item">
          <h2 class="benefit-title">Multifamily Housing Developers</h2>
          <div class="divider"></div>
        </div>

        <div class="benefit-item">
          <h2 class="benefit-title">Architects</h2>
          <div class="divider"></div>
        </div>

        <div class="benefit-item">
          <h2 class="benefit-title">Contractors</h2>
          <div class="divider"></div>
        </div>

        <div class="benefit-item">
          <h2 class="benefit-title">Fabricators</h2>
          <div class="divider"></div>
        </div>

        <div class="benefit-item">
          <h2 class="benefit-title">Suppliers</h2>
          <div class="divider"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondry_1",
  data() {
    return {
      benefitsImage: require("../../images/nav_cont.png"),
    };
  },
};
</script>

<style scoped>
.benefits-section {
  padding: 2rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  max-width: 1200px;
  margin: auto;
  cursor: help;
}

.benefits-header {
  margin-bottom: 2rem;
}

.bullet {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #006400;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.bullet-point {
  width: 8px;
  height: 8px;
  background-color: #006400;
  border-radius: 50%;
  margin-right: 0.5rem;
  display: inline-block;
}

.main-heading {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  color: #000;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

.benefits-content {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-end;
}

.image-container {
  flex: 0 0 40%;
  margin-top: 0;
  align-self: flex-end;
}

.benefits-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
}

.benefits-list {
  flex: 0 0 60%;
}

.benefit-item {
  margin-bottom: 1rem;
}

.benefit-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000;
}

.benefit-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  margin-bottom: 1rem;
}

.service-link {
  display: inline-block;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.arrow {
  font-size: 1rem;
  margin-left: 0.25rem;
}

.divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 1rem 0;
}
.image-container:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .benefits-section {
    padding: 3rem 2rem;
  }

  .main-heading {
    font-size: 3rem;
    max-width: 90%;
  }

  .benefits-content {
    flex-direction: row;
    gap: 3rem;
    align-items: flex-end;
  }

  .image-container {
    flex: 0 0 40%;
    margin-top: 0;
  }

  .benefits-list {
    flex: 0 0 60%;
  }
}

@media (max-width: 375px) {
  .container {
    padding: 15px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  .button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .image-container img {
    max-width: 100%;
  }
}
</style>
