const Converter = require('../app');

const pdf = new Converter({column: 2, row: 2, page: {pageSize: 'A4'}});

pdf.convert(['./images/workplace.jpg', './images/pulpitrock.jpg', './images/img_girl.jpg', './images/img_chania.jpg'], './output.pdf')
  .then(console.info)
  .catch(console.error);