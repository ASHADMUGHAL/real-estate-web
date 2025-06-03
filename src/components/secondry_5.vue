<template>
  <div class="blog-section">
    <div class="blog-container">
      <div class="blog-header">
        <div class="blog-tag">
          <div class="dot"></div>
          <span>OUR BLOGS</span>
        </div>
        <h2 class="blog-main-title">
          Insights, Trends, and Innovations<br />
          in Modern Architecture
        </h2>
      </div>

      <div class="blog-cards">
        <div class="blog-card">
          <div class="blog-image">
            <img
              :src="require('../../images/blog_1.png')"
              alt="Modern golden architectural detail"
            />
          </div>
          <div class="blog-meta">
            <span class="blog-reading-time">Read time 4 min</span>
            <span class="blog-date">May 01, 2025</span>
          </div>
          <h3 class="blog-title">
            The morphogenesis approach to sustainable architecture
          </h3>
          <div class="blog-link">
            <a href="#" class="read-article">
              Read Article
              <span class="arrow-icon">↗</span>
            </a>
          </div>
        </div>

        <div class="blog-card">
          <div class="blog-image">
            <img
              :src="require('../../images/blog_2.png')"
              alt="Modern building exterior"
            />
          </div>
          <div class="blog-meta">
            <span class="blog-reading-time">Read time 5 min</span>
            <span class="blog-date">April 27, 2025</span>
          </div>
          <h3 class="blog-title">
            Innovative materials shaping the future of construction
          </h3>
          <div class="blog-link">
            <a href="#" class="read-article">
              Read Article
              <span class="arrow-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondry_5",
};
</script>

<style scoped>
.blog-section {
  padding: 80px 0;
  background: #fff;
  display: flex;
  justify-content: center;
}

.blog-container {
  width: 90%;
  max-width: 1300px;
}

.blog-header {
  margin-bottom: 40px;
}

.blog-tag {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #4b7c40;
  border-radius: 50%;
  margin-right: 10px;
}

.blog-tag span {
  color: #4b7c40;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.blog-main-title {
  font-size: 42px;
  font-weight: 700;
  color: #111;
  line-height: 1.2;
  margin: 0;
}

/* Changed from grid to flex */
.blog-cards {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.blog-card {
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  max-width: 48%;
  min-width: 300px;
}

.blog-image {
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  height: 300px;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-image:hover img {
  transform: scale(1.03);
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #555;
}

.blog-title {
  font-size: 24px;
  font-weight: 600;
  color: #111;
  line-height: 1.3;
  margin: 0 0 20px 0;
}

.blog-link {
  margin-top: auto;
}

.read-article {
  display: inline-flex;
  align-items: center;
  color: #111;
  /* font-weight: 600; */
  text-decoration: none;
  font-size: 16px;
  border-bottom: 2px solid #111;
  padding-bottom: 2px;
  transition: all 0.2s ease;
}

.arrow-icon {
  margin-left: 6px;
  font-size: 18px;
}

.read-article:hover {
  color: #4b7c40;
  border-color: #4b7c40;
}

@media (max-width: 900px) {
  .blog-main-title {
    font-size: 36px;
  }

  .blog-cards {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .blog-section {
    padding: 60px 0;
  }

  .blog-cards {
    flex-direction: column;
    gap: 40px;
  }

  .blog-card {
    max-width: 100%;
    min-width: 0;
  }

  .blog-main-title {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .blog-main-title {
    font-size: 28px;
  }

  .blog-image {
    height: 240px;
  }

  .blog-title {
    font-size: 20px;
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
