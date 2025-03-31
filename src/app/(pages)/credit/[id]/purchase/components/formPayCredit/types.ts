export interface FormPayCreditI {
  totalQuota: number
  methodPay: string
}

export interface FormPayCreditProps {
  minimumPayment?: string
  totalAmount: string
  totalPaymentAtOnce: string
  id: string
}

export enum FORM_PAY_CREDIT_NAME {
  totalQuota = 'totalQuota',
  methodPay = 'methodPay',
}

export enum METHOD_PAY {
  'PAGO_MINIMO' = 'PAGO_MINIMO',
  'PAGO_FECHA_CORTE' = 'PAGO_FECHA_CORTE',
  'PAGO_CONTADO' = 'PAGO_CONTADO',
}
