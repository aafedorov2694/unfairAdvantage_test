import { Checkbox, Slider, Grid, Autocomplete, TextField} from '@mui/material'

import { useState } from 'react'
import '@fontsource/roboto/400.css';
function App() {


  const days = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed']
  const [hours, setHours] = useState([{ i: "0", val: [17, 19] }, { i: "1", val: [17, 19] }, { i: "2", val: [17, 19] }, { i: "3", val: [17, 19] }, { i: "4", val: [17, 19] }, { i: "5", val: [17, 19] }, { i: "6", val: [17, 19] }])
  const [checked, setChecked] = useState([true, true, true, true, true, true, true])
  
  const activities = ['Football', 'Tennis', 'Floorball', 'Volleyball', 'Badminton', 'Drinking', 'Basketball']

  const handleValueChange = (event, newValue) => {
    console.log(event.target.value)

    const name = event.target.name
    const nameToNumber = Number(name)
    let updatedObject = {};
    hours.forEach(e => { if (name === e.i) { updatedObject = { i: e.i, val: newValue } } })
    const updatedHours = [...hours]
    updatedHours.splice(nameToNumber, 1, updatedObject)
    setHours(updatedHours)

    console.log('Updated hours: ', hours)
  }

 
  const handleChangeCheck = (e) => {

    const updatedCheck = [...checked];
    const nameToNumber = Number(e.target.name)
    updatedCheck.splice(nameToNumber, 1, e.target.checked)
    setChecked(updatedCheck)
    console.log(e)
    
  }
  const marks = [
    {
      value: 6,
      label: '6',
    },
    {
      value: 12,
      label: '12',
    },
    {
      value: 18,
      label: '18',
    },
    {
      value: 24,
      label: '24',
    },
  ];
  const valuetext = (value) => {
    return `${value}`
  }



  return (
    <div style={{ margin: 50 }} >


      {
        hours.map(e =>


          <Grid container spacing={1}>



            <Grid item xs={1}>
              <p>{days[Number(e.i)]}</p>
            </Grid>
            <Grid item xs={1}>
              <Checkbox
                checked={checked[Number(e.i)]}
                onChange={handleChangeCheck}
                name={e.i}
                sx={{
                  "&.Mui-checked": {
                    color: 'rgba(0, 0, 0, 0.54)'
                  }
                }}

              />


            </Grid>
            <Grid item xs={6}>
              <Slider
                onChange={handleValueChange}
                marks={marks}
                getAriaValueText={valuetext}
                value={hours[hours.indexOf(e)].val}
                name={e.i}
                min={6}
                max={24}
                step={1}
                valueLabelDisplay='on'
                disabled={checked[Number(e.i)] === true ? false : true}
                tabIndex={5}
                style={{ marginBottom: 70 }}

                sx={checked[Number(e.i)] === true ? {
                  "& .MuiSlider-thumb": {
                    color: '#1E556B  ',
                    height: 15,
                    width: 15,
                  },
                  "& .MuiSlider-mark": {
                    color: '#D8D8D8',
                    width: '2px',
                    height: '12px',
                    borderRadius: '1px',

                  },
                  "& .MuiSlider-track": {
                    color: '#336666',
                    height: '2px'

                  },
                  "& .MuiSlider-rail": {
                    color: '#D8D8D8',
                    height: '2px',
                    opacity: '0.38',
                    borderRadius: '1px',

                  },
                  "& .MuiSlider-valueLabel": {
                    background: '#1E556B',
                    borderRadius: '50% 50% 50%',
                    height: '25px',
                    width: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: "0.75rem",
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    lineHeight: "1.2",


                  },

                } : {
                  "& .MuiSlider-thumb": {
                    color: '#bdbdbd',
                    height: 15,
                    width: 15,
                  },
                  "& .MuiSlider-mark": {
                    color: '#bdbdbd',
                    width: '2px',
                    height: '12px',
                    borderRadius: '1px',

                  },
                  "& .MuiSlider-track": {
                    color: '#bdbdbd',
                    height: '2px'

                  },
                  "& .MuiSlider-rail": {
                    color: '#bdbdbd',
                    height: '2px',
                    opacity: '0.38',
                    borderRadius: '1px',

                  },
                  "& .MuiSlider-valueLabel": {
                    background: '#bdbdbd',
                    borderRadius: '50% 50% 50%',
                    height: '25px',
                    width: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: "0.75rem",
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    lineHeight: "1.2",


                  },
                }}

              />

            </Grid>
            <Grid item xs={2}>
              
              <Autocomplete
                size='small'
                options={activities}
                renderInput={(params) => <TextField {...params} label="Activities" />}
              />
            </Grid>
          </Grid>



        )

      }

    </div>
  );
}

export default App;
