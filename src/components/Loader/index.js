import util from '../../lib/util';

export  default {
  data() {
    return {
      logo: '',
    };
  },
  created() {
    // this.logo = require('/src/assets/logo.png');
    const logo = require('../../assets/logo.png');
    this.name = util.get('name');
    console.log('loader');
  },
};