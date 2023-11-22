import React from 'react'
import './TrackingStyles.css'


import {Link} from 'react-router-dom'

import EnhancedTable from './EnhancedTable'
import ExpenseForm from './ExpenseForm'



function Tracking() {
  return (
      <div className='table'>
        <h1>Enter your Expenses</h1>
        {/* <EnhancedTable /> */}
        <ExpenseForm />
      </div>
  )
}

export default Tracking