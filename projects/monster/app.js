function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      winner: '',
      playerHealth: 100,
      monsterHealth: 100,
      counter: 0,
      logs: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // draw case
        this.winner = 'draw';
      } else if (value > 0 && this.monsterHealth <= 0) {
        this.winner = 'player';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // draw case
        this.winner = 'draw';
      } else if (value > 0 && this.playerHealth <= 0) {
        this.winner = 'monster';
      }
    },
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
      if (this.monsterHealth <= 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerHealthBarStyle() {
      if (this.playerHealth <= 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    unlockSpecialAttack() {
      return this.counter % 3 !== 0 || this.winner !== '';
    },
    lockButtons() {
      return this.winner !== '';
    },
  },
  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 12); // hit between 5 and 12
      this.monsterHealth -= damage;
      this.attackPlayer();

      // increment counter to unlock special attack
      this.counter++;

      this.pushLogMessage('player', 'attack', damage);
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15); // hit between 8 and 15
      this.playerHealth -= damage;
      this.pushLogMessage('monster', 'attack', damage);
    },
    specialAttack() {
      const damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.attackPlayer();

      // increment counter to unlock special attack
      this.counter++;
      this.pushLogMessage('player', 'special attack', damage);
    },
    healPlayer() {
      const healing = getRandomValue(8, 20);
      if (this.playerHealth + healing > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healing;
      }

      // increment counter to unlock special attack
      this.counter++;
      this.pushLogMessage('player', 'heal', healing);
    },
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.counter = 0;
      this.winner = '';
      this.logs = [];
    },
    surrender() {
      this.winner = 'monster';
    },

    pushLogMessage(origin, content, value) {
      this.logs.unshift({
        origin: origin,
        type: content,
        value: value,
      });
    },
  },
});

app.mount('#game');
