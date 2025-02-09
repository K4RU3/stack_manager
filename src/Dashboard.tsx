import { Box, Drawer } from '@mui/material'
import { LineChart } from '@mui/x-charts'

export default function Dashboard() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: 240,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box'
                    }
                }}
                variant='permanent'
                open
            >
                <p>test</p>
                <p>test</p>
            </Drawer>

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <LineChart
                    xAxis={[{ data: [1,2,3] }]}
                    series={[
                        {
                            data: [1000, 2000, 0]
                        },
                    ]}
                    height={300}
                    />
            </Box>
        </Box>
    )
}
