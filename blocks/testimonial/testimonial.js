export default function decorate(block) {
  if (!block.children.length) {
    const samples = [
      ['The service made our workflow much faster.', 'Priya Sharma, Product Manager'],
      ['We launched in half the time and finally had room to think bigger.', 'Marcus Lee, Founder'],
      ['It feels like the whole team is moving with the same clear rhythm.', 'Elena Rossi, Design Lead'],
    ];

    samples.forEach(([quoteContent, attributionContent]) => {
      const row = document.createElement('div');
      const quote = document.createElement('div');
      const quoteText = document.createElement('p');
      const attribution = document.createElement('div');
      const attributionText = document.createElement('p');

      row.className = 'testimonial-item testimonial-text-only';
      quote.className = 'testimonial-quote';
      quoteText.textContent = quoteContent;
      attribution.className = 'testimonial-attribution';
      attributionText.textContent = attributionContent;

      quote.append(quoteText);
      attribution.append(attributionText);
      row.append(quote, attribution);
      block.append(row);
    });
  }

  [...block.children].forEach((row) => {
    row.className = 'testimonial-item';
    let hasImage = false;
    [...row.children].forEach((cell, index) => {
      if (cell.querySelector('picture, img')) {
        cell.className = 'testimonial-image';
        hasImage = true;
      } else if (index === 0) {
        cell.className = 'testimonial-quote';
      } else {
        cell.className = 'testimonial-attribution';
      }
    });
    if (!hasImage) row.classList.add('testimonial-text-only');
  });
}
