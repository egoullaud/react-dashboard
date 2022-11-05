import { Box } from '@mui/system'
import React from 'react'
import Header from '../../components/Header'

function Dashboard() {
  return (
    <Box margin="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
      </Box>
    </Box>

  )
}

export default Dashboard
