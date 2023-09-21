import React from 'react'
import './TableDetailCountry.css'

const TableDetailCountry = () => {
  return (
    <div className='div-overflow-table-country'>
        <table class="table">
            <thead class="thead-gray">
                <tr>
                    <th className='th-table-country text-left' scope="col">Código Alerta</th>
                    <th className='th-table-country text-left' scope="col">Fecha Emisión</th>
                    <th className='th-table-country text-left' scope="col">Categorización</th>
                    <th className='th-table-country text-left' scope="col">Ubicación</th>
                    <th className='th-table-country text-left' scope="col">Zona Afectadas</th>
                    <th className='th-table-country text-left' scope="col">Afectados</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-left'>
                    <td>525</td>
                    <td>02/06/23</td>
                    <td>Deslizamiento</td>
                    <td>Escuintla</td>
                    <td>Zona Sur</td>
                    <td>54</td>
                </tr>
                <tr className='text-left'>
                    <td>525</td>
                    <td>02/06/23</td>
                    <td>Deslizamiento</td>
                    <td>Escuintla</td>
                    <td>Zona Sur</td>
                    <td>54</td>
                </tr>
                <tr className='text-left'>
                    <td>525</td>
                    <td>02/06/23</td>
                    <td>Deslizamiento</td>
                    <td>Escuintla</td>
                    <td>Zona Sur</td>
                    <td>54</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableDetailCountry