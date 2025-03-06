const baseReceipts = '/receipts'

export const apiReceipts = {
  receiptByUUID: `${baseReceipts}/:id`,
  receiptPdf: `${baseReceipts}/pdf/:id`,
  receipts: baseReceipts,
}
