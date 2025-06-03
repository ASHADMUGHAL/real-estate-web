<template>
  <div class="hotel-gallery-section">
    <div class="hotel-gallery">
      <div class="gallery-item">
        <img
          :src="require('../../images/sec_1.png')"
          alt="Modern blue hotel building"
        />
      </div>
      <div class="gallery-item">
        <img
          :src="require('../../images/sec_2.png')"
          alt="White curved hotel buildings with palm trees"
        />
      </div>
      <div class="gallery-item">
        <img
          :src="require('../../images/sec_3.png')"
          alt="Historic hotel with balcony"
        />
      </div>
      <div class="gallery-item">
        <img :src="require('../../images/sec_4.png')" alt="Waterfront resort" />
      </div>
      <div id="abc" class="gallery-item">
        <img
          :src="require('../../images/sec_5.png')"
          alt="Park Hotel tall building"
        />
      </div>
      <div class="gallery-item">
        <img
          :src="require('../../images/sec_6.png')"
          alt="City skyline hotels"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelGallerySection",
};
</script>

<style scoped>
.hotel-gallery-section {
  background: #f6f8fa;
  padding: 32px 0 40px 0;
  display: flex;
  justify-content: center;
}

.hotel-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 95vw;
  max-width: 1300px;
  background: transparent;
}

.gallery-item {
  flex: 1 1 calc(33.333% - 21.33px);
  max-width: calc(33.333% - 21.33px);
  box-sizing: border-box;
  /* border-radius: 8px; */
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

@media (max-width: 768px) {
  .hotel-gallery {
    gap: 20px;
  }

  .gallery-item {
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
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
