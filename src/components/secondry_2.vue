<!-- filepath: c:\Users\My PC\OneDrive\Desktop\my-vue2-project\src\components\secondry_2.vue -->
<template>
  <div class="testimonial-section">
    <div class="testimonial-content">
      <div class="testimonial-header">
        <span class="bullet-point"></span> WHAT PARTNERS SAY
      </div>
      <h1 class="testimonial-title">
        As the US's preeminent modular logistics and settings company
      </h1>
      <p class="testimonial-description">
        We have worked with leading fabricators and GCs to complete our projects
        on time and with the highest quality. RaaP's platform extends this
        capability to the entire prefabrication construction process to drive
        greater savings in time and money.
      </p>
      <div class="testimonial-author">
        <div class="author-name">Scott Bridger</div>
        <div class="author-title">Principal ProSet Modular</div>
      </div>
      <div class="testimonial-navigation">
        <button class="nav-button">←</button>
        <button class="nav-button">→</button>
      </div>
    </div>
    <div class="testimonial-image">
      <img :src="testimonialImage" alt="Testimonial Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Secondry_2",
  data() {
    return {
      testimonialImage: require("../../images/nav-cont-2.jpg"), // Replace with the actual image path
    };
  },
};
</script>

<style scoped>
.testimonial-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #fff;
}

.testimonial-content {
  max-width: 50%;
}

.testimonial-header {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: green;
  margin-bottom: 20px;
}

.bullet-point {
  width: 8px;
  height: 8px;
  background-color: green;
  border-radius: 50%;
  margin-right: 10px;
}

.testimonial-title {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #000;
}

.testimonial-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
}

.testimonial-author {
  margin-bottom: 30px;
}

.author-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
}

.author-title {
  font-size: 1rem;
  color: #666;
}

.testimonial-navigation {
  display: flex;
  gap: 10px;
}

.nav-button {
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;

  transition: all 1s ease;
}

.nav-button:hover {
  background-color: #000;
  color: #fff;
}

.testimonial-image {
  max-width: 40%;
}

.testimonial-image img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.testimonial-image img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
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
