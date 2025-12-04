<template>
  <div class="card">
    <div class="content">
      <div class="back">
        <div class="back-content">
          <Icon :name="skill.icon" class="icon" />
        </div>
      </div>
      <div class="front">
        <div class="img">
          <div class="circle"></div>
          <div class="circle" id="right"></div>
          <div class="circle" id="bottom"></div>
        </div>

        <div class="front-content">
          <small class="badge">{{ skill.name }}</small>
          <div class="description">
            <div class="title">
              <p class="title">
                <strong>{{ skill.descr }}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ skill: Object });
</script>

<style scoped>
.card {
  overflow: visible;
  width: 28vh;
  height: 33vh;
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  border-radius: 5px;
}

.front,
.back {
  background-color: #252233;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: " ";
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--btn-primary),
    var(--btn-primary),
    var(--btn-primary),
    var(--btn-primary),
    transparent
  );
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #252233;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
}

.title {
  font-size: 16px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.title p {
  width: 85%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--btn-primary);
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: var(--btn-primary);
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: var(--btn-four);
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.icon {
  font-size: 80px;
}
</style>
