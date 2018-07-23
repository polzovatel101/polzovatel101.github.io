document.addEventListener('DOMContentLoaded', function () {
  let parentBlock = $('.flexbox__parent');
  let childBlock = $('.selected-box');
  let alignItems = $('[name]');

  alignItems.click((event) => {
    const valueOfProperty = event.currentTarget.id.split(' ')[1]
      ? event.currentTarget.id.split(' ')[1]
      : event.currentTarget.id.split(' ')[0];
    if (event.currentTarget.className != 'for-child') {
      parentBlock.css(event.currentTarget.name, valueOfProperty);
    } else {
      childBlock.css(event.currentTarget.name, valueOfProperty);
    }
  });
});
