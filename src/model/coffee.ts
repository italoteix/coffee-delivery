// Disabling this rule to avoid unexpected errors due to a bug in TS
/* eslint-disable no-unused-vars */
export enum Tag {
  Tradicional = 'Tradicional',
  Gelado = 'Gelado',
  ComLeite = 'Com Leite',
  Especial = 'Especial',
  Alcoolico = 'Alcoólico',
}

export interface Coffee {
  id: string
  title: string
  tags: Tag[]
  description: string
  srcImg: string
  price: number
}
