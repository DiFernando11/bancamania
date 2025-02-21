import React from 'react'
import { Box } from '@/ui/atoms'
import { StepAutoPlaySlider } from '@/ui/organisms'
import CardActiveDebit from './cardsOffert/cardActiveDebit'
import CardPresentation from './cardsOffert/cardPresentation'
import './index.css'

const steps: (() => JSX.Element)[] = [
  () => <CardPresentation />,
  () => <CardActiveDebit />,
]

const BannerOffers = () => {
  return (
    <Box className='w-full h-[6rem]'>
      <StepAutoPlaySlider.sacaleOutAnimation
        className='bannerSlider'
        classNameStep='w-full'
        isStopHover
        steps={steps}
      />
    </Box>
  )
}

export default BannerOffers
