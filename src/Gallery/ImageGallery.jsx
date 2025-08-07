import React, { useState } from 'react'
import ImageList from './ImageList'
import './ImageGallery.css'

const firstSet = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4b08yG8FLlJEHT3KDu0tvkxzRb_JLxw-w3A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrqqFmVDwT7A1lkKITDwWXOMqnxTMBRjkyg&s",
  "https://thumbs.dreamstime.com/b/ocean-s-floor-comes-alive-dazzling-display-coral-tropical-fish-brilliant-blue-setting-377351545.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sscwXO8TMnMcUOsMJBNGyfy4s_sIGiJnGA&s",
  "https://images.theconversation.com/files/513157/original/file-20230302-28-r91z9l.jpg?ixlib=rb-4.1.0&rect=60%2C553%2C6720%2C3360&q=45&auto=format&w=1356&h=668&fit=crop",
  "https://images.unsplash.com/photo-1515467699666-4adf84b2fd42?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXF1YXJpdW18ZW58MHx8MHx8fDA%3D",
  "https://images.pexels.com/photos/889929/pexels-photo-889929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://i.ytimg.com/vi/HHi8qOtHnhE/maxresdefault.jpg",
  "https://images.pond5.com/4k-home-freshwater-aquarium-floating-footage-193987662_iconl.jpeg",
  "https://images.pond5.com/okinawa-aquarium-4k-beautiful-whale-footage-065885635_iconl.jpeg"
]

const secondSet = [
  "https://hips.hearstapps.com/hmg-prod/images/great-barrier-reef-underwater-landscapes-and-royalty-free-image-1589232340.jpg?crop=0.668xw:1.00xh;0.104xw,0&resize=1200:*",
  "https://www.montereybayaquarium.org/globalassets/mba/images/animals/deep-sea/mbari-owned/flapjack-dumbo-octopus-mbari-grimpo-2_med.jpg?width=608&height=404&mode=crop&format=jpeg&quality=60",
  "https://cdn1.matadornetwork.com/blogs/1/2018/07/hammerhead-shark.jpg",
  "https://th-thumbnailer.cdn-si-edu.com/p0wbDADclZvty4ENNf_rrTzqrHA=/fit-in/1200x0/filters:focal(640x482:641x483)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/f3/9d/f39db89e-ab0a-44a1-abbb-4d60a0eb27da/squid_web.jpg",
  "https://media.npr.org/assets/img/2018/01/26/handfish_custom-3db11a2c405751aeb71144d9b5651284987c97b1.jpg",
  "https://static.wixstatic.com/media/ff03df_86ffb3e3d3b94c3d9db59504342af5eb~mv2.jpg/v1/fill/w_640,h_506,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff03df_86ffb3e3d3b94c3d9db59504342af5eb~mv2.jpg",
  "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/plants-blogs/coral-reefs.jpg",
  "https://live.staticflickr.com/65535/53384642594_533a6ec8d5_c.jpg",
  "https://media.istockphoto.com/id/469726518/photo/leafy-sea-dragon.jpg?s=612x612&w=0&k=20&c=NyRyIG3pwq6y-yZ-rHIpxmtf1cyAmSeEsDbOFDJPgC0=",
  "https://media.australian.museum/media/dd/images/Weedy_Seadragon_Phyllopteryx_taeniolatus_Lacep.width-800.80f5f91.jpg"
]

function ImageGallery() {
  const [setIndex, setSetIndex] = useState(0)
  const imageSets = [firstSet, secondSet]

  const next = () => {
    if (setIndex < imageSets.length - 1) {
      setSetIndex(setIndex + 1)
    }
  }

  const prev = () => {
    if (setIndex > 0) {
      setSetIndex(setIndex - 1)
    }
  }

  return (
    <div className="aqua-vision-container">
      <h2 style={{ textAlign: 'center', color: '#008bb5', marginBottom: '20px' }}>🌊 Neon Depths Gallery</h2>
      <ImageList images={imageSets[setIndex]} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '20px' }}>
        <button className="aqua-button" onClick={prev} disabled={setIndex === 0}>Previous</button>
        <button className="aqua-button" onClick={next} disabled={setIndex === imageSets.length - 1}>Next</button>
      </div>
    </div>
  )
}

export default ImageGallery
