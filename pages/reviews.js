import React, {useEffect} from 'react';

const reviewsData = [
  {
    name: 'Cyd',
    comment: 'Muy buenos productos y atención 😀',
  },
  {
    name: 'Juan',
    comment: 'Todo conforme, según lo prometido.',
  },
  {
    name: 'Miguel J',
    comment: 'Increíble servicio de reparación. 100% 🚀',
  },
  {
    name: 'EuchiMano',
    comment: 'Éxitos en todo! 🥰',
  },
  {
    name: 'Sofía',
    comment: 'Excelente variedad de productos y precios competitivos. Muy recomendado. 👍',
  },
  {
    name: 'Carlos',
    comment: 'El servicio de reparación fue rápido y eficiente. Volveré a confiar en ustedes. 😊',
  },
  {
    name: 'Luisa',
    comment: 'Me encantó la atención al cliente. Muy amables y profesionales. 🌟',
  },
  {
    name: 'Andrés',
    comment: 'Compré un dispositivo y llegó en perfecto estado. Gracias por el envío rápido. 👏',
  },
];

const Reviews = () => {

  return (
    <div className="flex overflow-hidden w-full">
        {/* Add the marquee container */}
        <div className="flex animate-marquee">
          {reviewsData.map((review, i) => (
            <div key={i} className="mx-auto"> - {review.name}: {review.comment}  -  </div>
          ))}
        </div>
    </div>
  );
};

export default Reviews;
