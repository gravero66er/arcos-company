/* eslint-disable implicit-arrow-linebreak */
// Libraries
import React from 'react'
import { getImage } from 'gatsby-plugin-image'

// Components
import BrandCard from './BrandCard'

function Brands({ brands }) {
  return (
    <section className="brands__list">
      {brands.map(brand => (
        <BrandCard
          key={brand.id}
          title={brand.title}
          description={brand.description}
          image={getImage(brand.image)}
        />
      ))}
    </section>
  )
}

export default Brands
