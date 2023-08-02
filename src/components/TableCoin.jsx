import React from 'react'

const TableCoin = ({coins}) => {
    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    <td>name</td>
                </tr>
                <tbody>
                {coins.map(coin =>(
                    <tr key={coin.name}>
                        <td>{coin.name}</td>
                    </tr>
                ))}
                </tbody>
            </thead>
        </table>
    )
}

export default TableCoin