import React, { ReactNode, ElementType } from 'react'

export type TextType =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'font_14_fw_bold_fm_rob'
  | 'font_16_fw_bold_fm_rob_text-200'
  | 'font_18_fw_bold_fm_rob_text-200'
  | 'font_16_fw_bold_fm_rob'
  | 'font_20-30_fw_bold_fm_rob_text-200'
  | 'font_30_48_fw_bold_fm_rob_text-200'
  | 'font_16_18_fw_bold_fm_rob'
  | 'font_30_fw_bold_fm_rob'
  | 'font_18_fw_bold_fm_rob'
  | 'font_20_fw_bold_fm_rob'
  | 'font_30_48_fw_bold_fm_rob'
  | 'font_36_fw_bold_fm_rob'
  | 'font_24_fw_bold_fm_rob'
  | 'font_12_fw_bold_fm_rob'
  | 'font_10_fw_bold_fm_rob'
  | 'font_8_fw_bold_fm_rob'
  | 'font_14_16_fw_bold_fm_rob'
  | 'font_12_10_fw_bold_fm_rob'
  | 'font_30_36_fw_bold_fm_rob_text-200'
  | 'font_24_30_fw_bold_fm_rob'
  | 'font_12_14_fw_bold_fm_rob'
  | 'font_16-20_fw_bold_fm_rob_text-200'
  | 'font_16_fm_rob'
  | 'font_20_fw_bold_fm_rob_text-200'
  | 'font_16_18_fm_rob'
  | 'font_12_fm_rob'
  | 'font_20_24_fw_bold_fm_rob_text-100'

export type TextProps<T extends ElementType = 'p'> = {
  variant?: T
  textType?: TextType
  className?: string
  children?: ReactNode
} & React.ComponentPropsWithoutRef<T>
