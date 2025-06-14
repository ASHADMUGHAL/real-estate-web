<template>
  <div class="main-container">
    <div class="content-wrapper">
      <div class="hero-content">
        <h1 class="main-heading">
          Transforming Hotel<br />and Housing Construction
        </h1>

        <p class="subheading">
          Design prototypes and a marketplace with firm pricing that saves time
          and money on hotel and multifamily housing projects.
        </p>

        <div class="cta-button-container">
          <button class="cta-button">
            Schedule a call
            <span class="arrow-icon">→</span>
          </button>
        </div>
      </div>

      <div class="stats-image-container">
        <img class="header-image" :src="headerImage" alt="Hotel Building" />

        <div class="stats-banner">
          <div class="stats-banner-header">We're investing since 1990</div>
          <div class="stats-content">
            <div class="stat-item">
              <div class="stat-number">250</div>
              <div class="stat-label">Projects</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">18</div>
              <div class="stat-label">Awards</div>
            </div>
          </div>
        </div>
      </div>

      <div class="explore-card">
        <div class="card-content">
          <div class="card-text">
            Transforming Hotel and <br />Housing Construction
          </div>
          <div class="explore-link">
            Explore <span class="arrow-icon">→</span>
          </div>
        </div>
        <div class="card-dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelConstruction",
  data() {
    return {
      headerImage: require("../../images/header-1.png"),
    };
  },
};
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
    2100deg,
    rgba(13, 28, 64, 0.9),
    rgba(18, 44, 92, 0.8),
    rgba(26, 58, 106, 0.7)
  );
  font-family: "Arial", sans-serif;
  overflow: hidden;
}

.content-wrapper {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  color: white;
}

.hero-content {
  padding-top: 80px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.main-heading {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subheading {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  padding: 0 15px;
}

.cta-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #1b5e20;
}

.arrow-icon {
  font-size: 1.2rem;
}

.stats-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  position: relative;
  margin-left: 0;
}

.header-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  position: relative;
  margin-left: 0;
}

.stats-banner {
  background-color: #1e3a6a;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 350px;
  margin-top: 20px;
}

.stats-banner-header {
  background-color: #1a5128;
  padding: 15px 20px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-left: 0;
}

.stats-content {
  background-color: #eae8e8;
  color: #000;
  display: flex;
  padding: 20px;
  gap: 40px;
  justify-content: center;
  margin-left: 0;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
}

.explore-card {
  position: relative;
  bottom: auto;
  right: auto;
  margin: 30px auto;
  background-color: rgba(30, 58, 106, 0.8);
  padding: 15px;
  border-radius: 10px;
  width: 90%;
  max-width: 300px;
  display: flex;
  border: 0.1px solid white;
  align-items: center;
  gap: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgb(194, 194, 194);
}

.explore-link {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bolder;
  cursor: pointer;
}

.card-dot {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
}

.header-image:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .hero-content {
    padding-top: 120px;
  }

  .main-heading {
    font-size: 3.5rem;
  }

  .subheading {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  .stats-image-container {
    flex-direction: row;
    align-items: flex-end;
    margin-top: 50px;
    margin-left: -50px;
  }

  .header-image {
    width: 250px;
    border-radius: 10px 0 0 10px;
    position: absolute;
    margin-left: -150px;
  }

  .stats-banner {
    border-radius: 0 10px 0px 0;
    margin-top: 96px;
  }

  .stats-banner-header {
    margin-left: 20px;
  }

  .stats-content {
    margin-left: 87px;
  }

  .stat-number {
    font-size: 3rem;
  }

  .explore-card {
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 200px;
    margin: 0;
  }
}

@media (max-width: 375px) {
  .main-heading {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1rem;
    padding: 0 10px;
  }

  .cta-button {
    padding: 10px 25px;
    font-size: 0.9rem;
  }

  .stats-banner {
    margin-top: 15px;
  }

  .stats-content {
    padding: 15px;
    gap: 20px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }

  .explore-card {
    width: 95%;
    padding: 12px;
  }

  .card-text {
    font-size: 0.8rem;
  }
}
</style>
