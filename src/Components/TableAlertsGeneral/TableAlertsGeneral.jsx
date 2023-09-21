import React from 'react'
import './TableAlertsGeneral.css'
const TableAlertsGeneral = () => {
  return (
    <div className='div-table'>
      <div className='div-overflow-table'>
        <table className='table-alerts table-header'>
          <tr>
            <th className='div-table-align-text th-width'>
              <div className='margin-left-text'>PAÍS</div>
            </th>
            <th className='div-table-align-text th-width'>
              <div className='margin-left-text'>Alertas Activas</div>
            </th>
            <th className='div-table-align-text th-width'>
              <div className='margin-left-text'>Afectados</div>
            </th>
            <th className='div-table-align-text th-width'>
              <div className='margin-left-text'>Alertas Atendidas</div>
            </th>
          </tr>
          <tr>
            <td className='div-table-align-text table-data-country'>
              <div className='margin-left-text'>Guatemala</div>
            </td>
            <td>
              <div>50</div>
            </td>
            <td>
              <div>25</div>
            </td>
            <td>
              <div>40</div>
            </td>
          </tr>
          <tr>
            <td className='div-table-align-text table-data-country'>
              <div className='margin-left-text'>El Salvador</div>
            </td>
            <td>
              <div>140</div>
            </td>
            <td>
              <div>120</div>
            </td>
            <td>
              <div>125</div>
            </td>
          </tr>
          <tr>
            <td className='div-table-align-text table-data-country'>
              <div className='margin-left-text'>Honduras</div>
            </td>
            <td>
              <div>40</div>
            </td>
            <td>
              <div>24</div>
            </td>
            <td>
              <div>35</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TableAlertsGeneral