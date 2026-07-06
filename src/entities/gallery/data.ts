export interface GalleryItem {
  src: string;
  alt: string;
}

/** Фотографии заведения и блюд для секции «Атмосфера» и лайтбокса. */
export const gallery: GalleryItem[] = [
  '/images/gallery/19xj5PaY.jpeg',
  '/images/gallery/2S1svOpE.jpg',
  '/images/gallery/2txqoPfp.jpeg',
  '/images/gallery/6xxwCU0b.jpeg',
  '/images/gallery/92gt4QlI.jpeg',
  '/images/gallery/9VBzs2sl.jpeg',
  '/images/gallery/ALbIcV5b.jpg',
  '/images/gallery/b7NLLuUM.jpeg',
  '/images/gallery/BZ9JIAXy.jpeg',
  '/images/gallery/C2r5bxO6.jpg',
  '/images/gallery/dJj6g6bB.jpeg',
  '/images/gallery/gCdggpeY.jpg',
  '/images/gallery/gUgcDU0h.jpg',
  '/images/gallery/H5TAuBZ4.jpeg',
  '/images/gallery/i4yVSb7u.jpg',
  '/images/gallery/Jpre2lCn.jpeg',
  '/images/gallery/NYb5SAX4.jpeg',
  '/images/gallery/oA4N1DO1.jpg',
  '/images/gallery/ON7ac8Br.jpg',
  '/images/gallery/pdbIvjes.jpeg',
  '/images/gallery/QWD6QsEr.jpeg',
  '/images/gallery/R1w0s6Gq.jpeg',
  '/images/gallery/rpLkwWi3.jpg',
  '/images/gallery/Sho2syHj.jpeg',
  '/images/gallery/Sshk0Dwx.jpg',
  '/images/gallery/thEfN4b8.jpeg',
  '/images/gallery/tme287mB.jpeg',
  '/images/gallery/TVH2kKUt.jpeg',
  '/images/gallery/UZ8kfXUF.jpg',
  '/images/gallery/v9eIgULr.jpeg',
  '/images/gallery/vJLS1BbZ.jpeg',
  '/images/gallery/wfT4HPPp.jpeg',
  '/images/gallery/Xlr6cv3M.jpeg',
  '/images/gallery/YXs0jbop.jpeg',
].map((src, i) => ({
  src,
  alt: `Золотой Дракон — фото ${i + 1}: блюда и интерьер китайского ресторана в Костроме`,
}));
