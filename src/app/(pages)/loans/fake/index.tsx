import React from 'react'
import './index.css'

const Fake = () => {
  return (
    <div>
      <h1 className='title'>BANCAMANIA</h1>
      <p className='cardOwner'>
        Tarjeta # 3766533321321 APOLO GUACHIZACA DIEGO
      </p>
      <div className='headerTable'>RESUMEN DE MOVIMIENTOS</div>
      <div className='dataContent'>
        <div className='content'>
          <p>Saldo anterior</p>
          <p>$ 14.05</p>
        </div>
        <div className='content'>
          <p>Saldo anterior</p>
          <p>$ 14.05</p>
        </div>
        <div className='content'>
          <p>Saldo anterior</p>
          <p>$ 14.05</p>
        </div>
        <div className='content'>
          <p>Saldo anterior</p>
          <p>$ 14.05</p>
        </div>
      </div>
      <div className='headerTable'>Atencion</div>
      <div className='dataContent'>
        <div className='content'>
          <p>Saldo anterior</p>
          <p>$ 14.05</p>
        </div>
        <div className='content'>
          <p>Saldo anterior</p>
          <p>$ 14.05</p>
        </div>
        <div className='content'>
          <p>Saldo anterior</p>
          <p>$ 14.05</p>
        </div>
      </div>
      <div className='headerTable'>Cupo</div>
      <div className='dataContent'>
        <div className='content'>
          <p>Authorizado</p>
          <p>$ 14.05</p>
        </div>
        <div className='content'>
          <p>Utilizado</p>
          <p>$ 14.05</p>
        </div>
        <div className='content'>
          <p>Disponible</p>
          <p>$ 14.05</p>
        </div>
      </div>
      <div className='dataCreditContainer'>
        <div className='tableCredit'>
          <div className='dataCredit'>
            <p className='dataKey'>Fecha de emision: </p>
            <p>12/03/35 </p>
          </div>
          <div className='dataCredit'>
            <p className='dataKey'>Fecha de corte: </p>
            <p>12/03/35 </p>
          </div>
        </div>
        <div className='tableCredit'>
          <div className='dataCredit'>
            <p className='dataKey'>Saldo financiado: </p>
            <p>12/03/35 </p>
          </div>
          <div className='dataCredit'>
            <p className='dataKey'>Tasa de interes: </p>
            <p>12/03/35 </p>
          </div>
        </div>
        <div className='tableCredit'>
          <div className='dataCredit'>
            <p className='dataKey'>Monto vencido: </p>
            <p>12/03/35 </p>
          </div>
          <div className='dataCredit'>
            <p className='dataKey'>Pagos vencidos: </p>
            <p>12/03/35 </p>
          </div>
        </div>
        <div className='totalPurchase'>
          <p className='dataKey'>Total a pagar: </p>
          <p className='dataKey'>5$ </p>
        </div>
      </div>
    </div>
  )
}

export default Fake
