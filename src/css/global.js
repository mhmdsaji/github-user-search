import 'suitcss-base';

export default function global(renderStatic) {
  renderStatic(`
    a {
      color: #269930;
      text-decoration: none;
      transition: color .2s ease;
    }

    a:hover {
      color: #30bc3c;
    }
  `);
}
