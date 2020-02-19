const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: ''
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault();

      this.errors = [];

      if (this.name === '') {
        this.errors.push('Product name is required.');
      } else {
        fetch(apiUrl + encodeURIComponent(this.name))
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            this.errors.push(res.error);
          } else {
            // redirect to a new URL, or do something on success
            alert('okay!');
          }
        });
      }
    }
  }
})
