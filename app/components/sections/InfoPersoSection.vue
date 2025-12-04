<template>
  <section>
    <div class="about-me">
      <div class="photo"><UiPhoto class="photo-profile" /></div>
      <div class="description">
        <h2>Martin Samson</h2>
        <h3>A Propos De Moi</h3>
        <p>
          Actuellement en formation de développeur à Pau (France). Après
          quelques années à jongler entre assiettes et clients dans la
          restauration, j’ai troqué le tablier pour le clavier — moins de
          brûlures, plus de <em>bugs</em> (mais je les dresse bien&nbsp;!).<br />
          J’adore coder, concevoir des applications et transformer des idées en
          projets concrets. Curieux de nature, j’apprends vite, j’expérimente
          beaucoup et j’aime travailler en équipe.<br />
          Quand je ne code pas, on me trouve souvent en train de faire du sport,
          de jouer… ou de planifier mon prochain voyage (avec un tableau Trello
          que même mon GPS respecte).
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-me {
  display: flex;
  height: 75vh;
}

.photo {
  width: 50%;
}

.photo-profile {
  position: absolute;
  top: 55%;
  left: 25%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.description {
  user-select: text;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2% 10% 0 0;
  text-align: justify;
}

h2 {
  font-size: 35px;
}

h3 {
  font-size: 30px;
}
</style>
