import React from 'react'

function ImageList({ images }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px'
    }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Underwater ${index}`}
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}
        />
      ))}
    </div>
  )
}

export default ImageList
