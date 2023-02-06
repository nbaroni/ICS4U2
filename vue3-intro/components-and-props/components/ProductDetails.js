app.component('product-details', {
    props: {
      details: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
  })

  //totally not me breaking down and fixing everything because of the cart