import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({totalPrice, numberInstallments, priceInstallments, benefits, button}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>${numberInstallments} de</span> {priceInstallments}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      {benefits.map((benefit, index) => (
        <S.BenefitsItem key={index} >{benefit.item}</S.BenefitsItem>
      ))}
    </S.BenefitsList>

    <Button
      href={button.url}
      onClick={onClick}
      withPrice
    >
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R${numberInstallments * priceInstallments}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
