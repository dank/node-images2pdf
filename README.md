# node-images2pdf
> Package multiple images into a single PDF.

## Installation
    npm install --save node-images2pdf

## Usage

### Initialization

    const Converter = require('node-images2pdf');
    const pdf = new Converter(options);

**Options**

| Name | Description | Type | Default | Optional |
| --- | --- | --- | --- | --- |
| column | Number of images per column | number | | false |
| row | Number of images per row | number | | false |
| margin  | Margin around the page in pixels | number | `72` | true |
| minPaddingX | Minimum padding between images on the horizontal plane | number | `36` | true |
| minPaddingY | Minimum padding between images on the vertical plane | number | `36` | true |
| page.pageSize | Page size [(Refer to this guide)](https://github.com/devongovett/pdfkit/blob/master/docs/paper_sizes.coffee.md) | string | `letter` | true |
| page.layout | Page layout | `portrait`, `landscape` | `portrait` | true |
| image.imgSize | Auto image sizing options | `fit` | `fit`, `stretch` | true |

### Methods

- `convert([images], output)`

Given an array of image paths and the output path this function will generate a PDF output and return a Promise.

## Example

```javascript
const Converter = require('node-images2pdf');

const pdf = new Converter({column: 2, row: 3, margin: 0, page: {pageSize: 'A4'}, image: {imgSize: 'stretch'});

pdf.convert(['./images/img1.png', './images/img1.jpg', './images/img2.png', './images/img3.png', './images/img4.jpg'], './output.pdf')
  .then(console.log)
  .catch(console.error);
```

