katrina.vue
<form 
id="app"
@submit="checkForm"
action="#backupservervalidation"
method=post
>
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
 <p>
    <label for="age">How many years old are you?</label>
    <input
      id="age"
      v-model="age"
      type="text"
      name="age"
    >
  </p>
     <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
