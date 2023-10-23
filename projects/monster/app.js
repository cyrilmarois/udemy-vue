function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      counter: 0,
    };
  },
  computed: {
    monsterHealthBarClass() {
      return { jarvis: true };
    },
    hittedClass() {
      return {
        'health-rotated': true,
      };
    },
    monsterHealthBarStyle() {
      return { width: this.monsterHealth + '%' };
    },
    playerHealthBarStyle() {
      return { width: this.playerHealth + '%' };
    },
    unlockSpecialAttack() {
      return this.counter % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 12); // hit between 5 and 12
      this.monsterHealth -= damage;
      this.attackPlayer();

      // increment counter to unlock special attack
      this.counter++;
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15); // hit between 8 and 15
      this.playerHealth -= damage;
    },
    specialAttack() {
      const damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.attackPlayer();

      // increment counter to unlock special attack
      this.counter++;
    },

    healPlayer() {
      const healing = getRandomValue(8, 20);
      if (this.playerHealth + healing > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healing;
      }
    },
  },
});

app.mount('#game');
