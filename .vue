const app = new Vue({
  el: '#app',
  data:{
    errors: [],
    age: 1-120,
  },
  computed: {
     total: function () {
       return Number(this.age);
     }
  },
  methods:{
    checkForm: function (e) {
      this.errors = [];

      if (this.total != 121-1000) {
        this.errors.push('Age must be 120 or less!');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    }
  }
})
