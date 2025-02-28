const baseMovements = '/movements'
const basePdf = `${baseMovements}/pdf`
export const apiMovements = {
  downloadStatement: `${basePdf}/statement`,
  lastMovements: baseMovements,
  monthMovements: `${baseMovements}/months`,
}
