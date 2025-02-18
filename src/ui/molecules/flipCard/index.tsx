'use client'
import { motion, useMotionValue, animate, PanInfo } from 'framer-motion'
import React, { useRef } from 'react'
import { FlipCardProps } from './types'

const FlipCard: React.FC<FlipCardProps> = ({
  FrontContent,
  BackContent,
  className,
}) => {
  const rotateY = useMotionValue(0)
  const startAngle = useRef(0)

  const onDragStart = () => (startAngle.current = rotateY.get())

  const onDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const factor = 0.3
    rotateY.set(rotateY.get() + info.delta.x * factor)
  }

  const onDragEnd = () => {
    const finalAngle = rotateY.get()
    const initialAngle = startAngle.current
    const startMultiple = Math.round(initialAngle / 180) * 180

    let snapAngle = startMultiple

    if (finalAngle > initialAngle) {
      snapAngle = startMultiple + 180
    } else if (finalAngle < initialAngle) {
      snapAngle = startMultiple - 180
    }

    console.log(rotateY, 'rotateY')
    animate(rotateY, snapAngle, {
      damping: 15,
      stiffness: 100,
      type: 'spring',
    })
  }

  const flip = () => {
    const currentAngle = rotateY.get()
    const nextAngle = currentAngle + (currentAngle % 360 === 0 ? 180 : -180)

    animate(rotateY, nextAngle, {
      damping: 15,
      stiffness: 100,
      type: 'spring',
    })
  }

  return (
    <div
      style={{
        overflow: 'visible',
        perspective: 1200,
        position: 'relative',
        zIndex: 10000,
      }}
      className={className}
    >
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        style={{
          height: '100%',
          overflow: 'visible',
          rotateY,
          transformStyle: 'preserve-3d',
          width: '100%',
          zIndex: 10000,
        }}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        {/* Cara frontal */}
        <div
          style={{
            alignItems: 'center',
            backfaceVisibility: 'hidden',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            zIndex: 10000,
          }}
        >
          <FrontContent flip={flip} />
        </div>
        <div
          style={{
            alignItems: 'center',
            backfaceVisibility: 'hidden',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            position: 'absolute',
            transform: 'rotateY(180deg)',
            width: '100%',
            zIndex: 10000,
          }}
        >
          <BackContent flip={flip} />
        </div>
      </motion.div>
    </div>
  )
}

export default FlipCard
