function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterHealthBarClass() {
      return { jarvis: true };
    },
    monsterHealthBarStyle() {
      return { width: this.monsterHealth + '%' };
    },
    playerHealthBarStyle() {
      return { width: this.playerHealth + '%' };
    },
  },
  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 12); // hit between 5 and 12
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15); // hit between 8 and 15
      this.playerHealth -= damage;
    },
  },
});

app.mount('#game');
